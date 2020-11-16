export interface Contact {
    id: string;
    name: string;
    email: string;
    phone: string;
    mobile: string;
    notes: string;
    birthdate: string;
    company: string;
    address: string;
    city: string;
    zip: string;
    country: string;
    lat_long: string;
}


export interface ContactsListSearchParams {
    page: number;
    searchQuery: string;
}

export interface ContactsListVM {
    contacts: Contact[];
    selectedContact: Contact;
    total: number;
    params: ContactsListSearchParams,
    isLoading: boolean,
    hasError: boolean,
    errorMsg: string,
    contactsLoaded: boolean,
}