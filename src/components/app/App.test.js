import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App, { AppRoutes } from "./App";
import { ContactsPage } from "../../containers/contactsPage/ContactsPage";
import "@testing-library/jest-dom";

describe("The AppRoutes component", () => {
    it("renders the ContactsPage component when the root path is accessed", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <AppRoutes />
            </MemoryRouter>
        );
        const heading = screen.getByText(/contacts/i);

        // Assert that the ContactsPage component is rendered
        expect(heading).toBeTruthy();
    });

    it(`renders the contacts page when /contacts is visited`, () => {
        render(
            <MemoryRouter initialEntries={["/contacts"]}>
                <AppRoutes />
            </MemoryRouter>
        );
        const heading = screen.getByText(/contacts/i);

        expect(heading).toBeInTheDocument();
    });

    it(`renders the appointments page when /appointments is visited`, () => {
        render(
            <MemoryRouter initialEntries={["/appointments"]}>
                <AppRoutes />
            </MemoryRouter>
        );
        const heading = screen.getByText(/appointments/i);

        expect(heading).toBeInTheDocument();
    });

    it(`renders the contacts component if any other route is visited`, () => {
        render(
            <MemoryRouter initialEntries={["/something"]}>
                <AppRoutes />
            </MemoryRouter>
        );

        const heading = screen.getByText(/contacts/i);

        expect(heading).toBeInTheDocument();
    });

    it(`renders a new contact when a new contact is added`, () => {
        const { getByLabelText, getByText, container } = render(<App />);

        const expectedName = `John Doe`;
        const expectedPhone = `(123)456-7890`;
        const expectedEmail = `john.doe@example.com`;

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

        const contactNames = container.querySelectorAll(`.tile`);
        const matchingNames = Array.from(contactNames).filter(
            (node) => node.textContent === expectedName
        );

        expect(matchingNames.length).toBe(1);
        expect(getByText(expectedPhone)).toBeInTheDocument();
        expect(getByText(expectedEmail)).toBeInTheDocument();
    });

    it(`does not allow for duplicate contacts to be created`, () => {
        const { getByLabelText, getByText, getAllByText, container } = render(
            <App />
        );

        const expectedName = `John Doe`;
        const expectedPhone = `(123)456-7890`;
        const expectedEmail = `john.doe@example.com`;

        const fillOutForm = () => {
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
        };
        fillOutForm();
        // Submit the form
        fireEvent.click(getByText(`Create Contact`));
        fillOutForm();
        // Submit the form
        fireEvent.click(getByText(`Create Contact`));

        const contactNames = container.querySelectorAll(`.tile`);
        const matchingNames = Array.from(contactNames).filter(
            (node) => node.textContent === expectedName
        );

        expect(matchingNames.length).toBe(1);
        expect(getAllByText(expectedPhone).length).toBe(1);
        expect(getAllByText(expectedEmail).length).toBe(1);
    });
});
