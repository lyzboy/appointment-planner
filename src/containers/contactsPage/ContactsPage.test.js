import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

import { ContactsPage } from "./ContactsPage";

describe("The Contacts Page component", () => {
    it(`renders without crashing`, () => {
        const mockList = [
            { name: "Jim Doe", phone: "1234567890", email: "jim@email.com" },
            { name: "John Doe", phone: "1234567890", email: "john@email.com" },
        ];
        render(<ContactsPage contacts={mockList} />);
        const header = screen.getByText(/add contact/i);
        expect(header).toBeInTheDocument();
    });

    it(`submits the function to create a contact`, () => {
        const mockAddContact = jest.fn();

        const { getByLabelText, getByText } = render(
            <ContactsPage addContact={mockAddContact} contacts={[]} />
        );

        const expectedValue = [
            "John Doe",
            "(123)456-7890",
            "john.doe@example.com",
        ];

        // Fill out the form
        fireEvent.change(getByLabelText(`Name:`), {
            target: { value: "John Doe" },
        });
        fireEvent.change(getByLabelText(`Phone:`), {
            target: { value: "1234567890" },
        });
        fireEvent.change(getByLabelText(`Email:`), {
            target: { value: "john.doe@example.com" },
        });

        // Submit the form
        fireEvent.click(getByText(`Create Contact`));

        // Check that the mock function was called
        expect(mockAddContact).toHaveBeenCalledWith(...expectedValue);
    });
});
