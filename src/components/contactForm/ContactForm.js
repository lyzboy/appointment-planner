import React from "react";

export const ContactForm = ({
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit,
}) => {
    return (
        <>
            <form>
                <label htmlFor="contactName">
                    Name:
                    <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </label>
                <label htmlFor="phone">
                    Phone:
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}
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
                    />
                </label>
                <button type="submit">Create Contact</button>
            </form>
        </>
    );
};
