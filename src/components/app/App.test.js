import React from "react";
import { render, screen } from "@testing-library/react";
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
});
