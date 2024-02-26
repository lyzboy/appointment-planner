import React from "react";
import { formatPhoneNumber } from "../../utils/contactsUtilities";

export const ContactForm = ({
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit,
    duplicateContact,
    setDuplicateContact,
}) => {
    return (
        <>
            <p
                style={
                    duplicateContact
                        ? { display: "block" }
                        : { display: "none" }
                }
            >
                There is already a contact with that name
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="contactName">
                    Name:
                    <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            setDuplicateContact(false);
                        }}
                        required
                    />
                </label>
                <label htmlFor="phone">
                    Phone:
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={phone}
                        pattern="^\(\d{3}\)\d{3}-\d{4}$"
                        onChange={(e) => {
                            setPhone(formatPhoneNumber(e.target.value));
                        }}
                        required
                    />
                </label>
                <label htmlFor="email">
                    Email:
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required
                    />
                </label>
                <button type="submit">Create Contact</button>
            </form>
        </>
    );
};
