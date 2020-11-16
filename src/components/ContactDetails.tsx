import React from "react";
import { Contact } from "../models";

export interface ContactDetailsProps {
  contact: Contact;
  onCloseDialog: () => void;
}
export const ContactDetails: React.FC<ContactDetailsProps> = ({
  contact,
  onCloseDialog,
}) => {
  return (
    <div>
      <div className="modal-backdrop fade in"></div>
      <div
        className={contact ? "modal fade in visible" : "modal fade"}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                onClick={onCloseDialog}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">Contact Details</h4>
            </div>
            <div className="modal-body">
              <p>
                <b>Name:</b> {contact.name}
              </p>
              <p>
                <b>Email:</b> {contact.email}
              </p>
              <p>
                <b>Address:</b> {contact.address}, {contact.city}, {contact.zip}
                , {contact.country}
              </p>
              <p>
                <b>Company:</b>
                {contact.company}
              </p>
              <p>
                <b>Phone:</b>
                {contact.phone}
              </p>
              <p>
                <b>Mobile:</b>
                {contact.mobile}
              </p>
              <br />
              <p>
                <b>Notes:</b>
              </p>
              <br />
              <p>{contact.notes}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                onClick={onCloseDialog}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
