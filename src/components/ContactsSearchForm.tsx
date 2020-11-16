import React, { FormEvent, useState } from "react";

export interface ContactsSearchFormProps {
  searchContacts: (searchTxt: string) => void;
}

export const ContactsSearchForm: React.FC<ContactsSearchFormProps> = ({
  searchContacts,
}) => {
  const [searchTxt, setSearchTxt] = useState("");

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchContacts(searchTxt);
  };

  return (
    <div className="navbar-form search-contacts-form">
      <div className="container">
        <form className="pull-left" role="search" onSubmit={onFormSubmit}>
          <div className="form-group">
            <input
              type="text"
              onChange={(e) => setSearchTxt(e.target.value)}
              value={searchTxt}
              className="form-control"
              placeholder="Search by name"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
