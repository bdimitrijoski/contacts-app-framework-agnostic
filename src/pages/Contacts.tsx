import { Contact, ContactsListFacade, ContactsListVM } from "../core";
import React, { useEffect, useState } from "react";

import { ContactsSearchForm } from "../components/ContactsSearchForm";
import {
  ContactCard,
  ContactDetails,
  Pagination,
  PageHeader,
} from "../components";

export interface ContactsProps {
  actions: ContactsListFacade;
}
const Contacts: React.FC<ContactsProps> = ({ actions }) => {
  const [contactsVM, setContactsVM] = useState(actions.getInitialState());

  const loadContacts = (action: Promise<ContactsListVM>) => {
    setContactsVM(actions.setLoading(contactsVM));
    action.then((newState) => setContactsVM(newState));
  };

  const onContactsSearch = (searchTxt: string) => {
    loadContacts(actions.searchContacts(contactsVM, searchTxt));
  };

  const onContactSelected = (e: CustomEvent) => {
    setContactsVM(actions.setSelectedContact(contactsVM, e.detail));
  };

  const onPageChanged = (e: CustomEvent) => {
    loadContacts(actions.loadPage(contactsVM, e.detail));
  };

  const onDialogClose = () => {
    setContactsVM(actions.setSelectedContact(contactsVM, null));
  };

  useEffect(() => {
    loadContacts(actions.loadContacts(contactsVM));
  }, []);

  return (
    <div>
      <PageHeader title={"Contacts"} description={"Manage all your contacts"} />
      <ContactsSearchForm searchContacts={onContactsSearch} />

      <div className="clearfix"></div>
      <br />
      <div
        className={
          contactsVM.isLoading ? "container contacts-loading" : "container"
        }
      >
        {contactsVM.contactsLoaded
          ? contactsVM.contacts.map((contact: Contact) => (
              <ContactCard
                contact={contact}
                onSelect={onContactSelected}
                key={contact.id}
              />
            ))
          : "No contacts were found, please create one!"}

        {contactsVM.contactsLoaded ? (
          <Pagination
            page={contactsVM.params.page}
            total={contactsVM.total}
            onChange={onPageChanged}
          />
        ) : (
          ""
        )}

        {contactsVM.selectedContact ? (
          <ContactDetails
            contact={contactsVM.selectedContact}
            onClose={onDialogClose}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const ContactsHOC = (contactsListFacade: ContactsListFacade) => (
  WrappedComponent: any
) => (moreProps: any) => {
  return <WrappedComponent actions={contactsListFacade} {...moreProps} />;
};

export default ContactsHOC(new ContactsListFacade())(Contacts);
