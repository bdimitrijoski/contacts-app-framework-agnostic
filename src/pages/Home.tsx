import React from "react";
import { PageHeader } from "../components/PageHeader";

export const Home: React.FC = ({}) => {
  return (
    <div>
      <PageHeader
        pageTitle={"Contacts App"}
        pageDescription={"App for managing your contacts"}
      />
      <div className="container">
        <h1 className="page-header">
          The Best Online Tools for Managing Your Business Contacts
        </h1>
        <p>
          Whether you work in sales, advertising, or even journalism, your
          business will always need a way to manage projects, tasks,
          professional contacts, and calendar appointments.
        </p>

        <p>
          It's common to spread each of these tasks among your Outlook, Google
          Apps, or address book. But with a customer relationship management
          tool, you can keep all your information in one place and have it
          accessible to your colleagues.
        </p>
        <br />
        <br />
      </div>
    </div>
  );
};
