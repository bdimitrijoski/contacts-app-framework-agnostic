import { CONSTANTS } from './constants';
import { Contact, ContactsListVM } from './models';

export class ContactsListFacade {

    getInitialState(): ContactsListVM {
        return {
            contacts: [],
            selectedContact: null,
            total: 0,
            params: {
                page: 1,
                searchQuery: ''
            },
            isLoading: false,
            hasError: false,
            errorMsg: '',
            contactsLoaded: false,
        }
    }

    /**
     * Sets loading flag to true
     * @param contactsListVM
     */
    setLoading(contactsListVM: ContactsListVM): ContactsListVM {
        return { ...contactsListVM, isLoading: true };
    }

    setSelectedContact(contactsListVM: ContactsListVM, contact: Contact): ContactsListVM {
        return { ...contactsListVM, selectedContact: contact };
    }

    searchContacts(contactsListVM: ContactsListVM, searchText: string): Promise<ContactsListVM> {
        const contactsVM = {
            ...contactsListVM,
            params: { ...contactsListVM.params, searchQuery: searchText, page: 1 },
        };
        return this.loadContacts(contactsVM);
    }

    loadPage(contactsListVM: ContactsListVM, pageNumber: number): Promise<ContactsListVM> {
        const contactsVM = {
            ...contactsListVM,
            params: { ...contactsListVM.params, page: pageNumber },
        };
        return this.loadContacts(contactsVM);
    }

    /**
     * Load Contacts from API with specified params
     * @param contactsListVM
     */
    loadContacts(contactsListVM: ContactsListVM): Promise<ContactsListVM> {

        const searchParams: any = {
            "_page": contactsListVM.params.page,
            "limit": 10,
            "_sort": "name",
            "_order": "asc"
        };
        if (contactsListVM.params.searchQuery) {
            searchParams['q'] = contactsListVM.params.searchQuery
        }

        const apiUrl = `${CONSTANTS.API_BASE_URL}/contacts?${Object.keys(searchParams).map(key => `${key}=${searchParams[key]}`).join("&")}`;
        return fetch(apiUrl)
            .then((rsp) => {
                return rsp.json().then((data) => {
                    return { total: +rsp.headers.get('X-Total-Count'), data: data };
                });
            })
            .then((response: any) => {
                console.log(response);
                return { ...contactsListVM, contacts: response.data, total: response.total, contactsLoaded: true, isLoading: false };
            });
    }
}
