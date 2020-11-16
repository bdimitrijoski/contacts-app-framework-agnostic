import React, { useEffect, useState } from "react";

import { ContactCard } from "../components/ContactCard";
import { ContactDetails } from "../components/ContactDetails";
import { ContactsPagination } from "../components/ContactsPagination";
import { ContactsSearchForm } from "../components/ContactsSearchForm";
import { PageHeader } from "../components/PageHeader";
import { Contact } from "../models";

export const Contacts = () => {
  const [contactsVM, setContactsVM] = useState({
    contacts: [],
    selectedContact: null,
    total: 0,
    params: {
      page: 1,
      searchQuery: "",
    },
    isLoading: false,
    hasError: false,
    errorMsg: "",
    contactsLoaded: false,
  });

  const getContacts = () => {
    setContactsVM({ ...contactsVM, isLoading: true });
    const apiUrl = `http://localhost:3001/contacts?_page=${
      contactsVM.params.page
    }&limit=10&_sort=name&_order=asc${
      contactsVM.params.searchQuery ? "&q=" + contactsVM.params.searchQuery : ""
    }`;
    fetch(apiUrl)
      .then((rsp) => {
        return rsp.json().then((data) => {
          return { total: +rsp.headers.get("X-Total-Count"), data: data };
        });
      })
      .then((response: any) => {
        console.log(response);
        setContactsVM({
          ...contactsVM,
          contacts: response.data,
          total: response.total,
          contactsLoaded: true,
          isLoading: false,
        });
      });
  };

  const onContactsSearch = (searchTxt: string) => {
    setContactsVM({
      ...contactsVM,
      params: { ...contactsVM.params, searchQuery: searchTxt, page: 1 },
    });
  };

  const onPageChange = (pageNum: number) => {
    setContactsVM({
      ...contactsVM,
      params: { ...contactsVM.params, page: pageNum },
    });
  };

  const onDialogClose = () => {
    setContactsVM({ ...contactsVM, selectedContact: null });
  };

  const onContactSelected = (contact: Contact) => {
    setContactsVM({ ...contactsVM, selectedContact: contact });
  };

  useEffect(() => {
    getContacts();
  }, [contactsVM.params]);

  return (
    <div>
      <PageHeader
        pageTitle={"Contacts"}
        pageDescription={"Manage all your contacts"}
      />
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
          <ContactsPagination
            currentPage={contactsVM.params.page}
            totalRows={contactsVM.total}
            onPageChanged={onPageChange}
          />
        ) : (
          ""
        )}

        {contactsVM.selectedContact ? (
          <ContactDetails
            contact={contactsVM.selectedContact}
            onCloseDialog={onDialogClose}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
