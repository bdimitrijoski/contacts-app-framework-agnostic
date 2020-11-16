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


export interface ManageContactVM {
    contact: Contact;
    isLoading: boolean;
    hasError: boolean;
    errorMessage: string;
    errors: {
        [name: string]: string;
    }
}
