import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

import { contactsContainName } from "../../utils/contactsUtilities";

export const ContactsPage = ({ contacts, addContacts }) => {
    useEffect(() => {
        document.title = "Contacts";
    });
    /*
  Define state variables for 
  contact info and duplicate check
  */
    const [name, setName] = useState(``);
    const [phone, setPhone] = useState(``);
    const [email, setEmail] = useState(``);

    const handleSubmit = (e) => {
        e.preventDefault();
        /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
        if (!contactsContainName(contacts, name)) {
            addContacts(name, phone, email);
            setName(``);
            setPhone(``);
            setEmail(``);
        }
    };

    /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
    useEffect(() => {
        if (contactsContainName(contacts, name)) {
            console.error("name is already in the contacts list");
        }
    }, [name]);

    return (
        <div>
            <section>
                <h2>Add Contact</h2>
                <ContactForm
                    name={name}
                    setName={setName}
                    phone={phone}
                    setPhone={setPhone}
                    email={email}
                    setEmail={setEmail}
                    handleSubmit={handleSubmit}
                />
            </section>
            <hr />
            <section>
                <h2>Contacts</h2>
                <TileList list={contacts} />
            </section>
        </div>
    );
};
