import React from "react";
import { Contact } from "../models";

export interface ContactsPaginationProps {
  contact: Contact;
  onSelect: (contact: Contact) => void;
}

export const ContactCard: React.FC<ContactsPaginationProps> = ({
  contact,
  onSelect,
}) => {
  return (
    <div className="media contact-card">
      <div className="media-left">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onSelect(contact);
          }}
        >
          <img
            className="media-object"
            data-src="holder.js/64x64"
            alt="64x64"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNzViMjQxZGM1OCB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE3NWIyNDFkYzU4Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy4xNzE4NzUiIHk9IjM2LjUiPjY0eDY0PC90ZXh0PjwvZz48L2c+PC9zdmc+"
            data-holder-rendered="true"
            width="64"
            height="64"
          />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading" onClick={() => onSelect(contact)}>
          {contact.name}
        </h4>
        <p>{contact.email}</p>
      </div>
    </div>
  );
};
