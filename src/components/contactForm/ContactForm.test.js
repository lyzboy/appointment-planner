import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { ContactForm } from "./ContactForm";

describe("The Contact Form component", () => {
    it(`contains a form to enter contact data`, () => {
        //Arrange
        render(<ContactForm />);
        //ensure form has name input, phone input, email input, and create button
        const nameInput = screen.getByRole("textbox", {
            name: /name/i,
        });
        const phoneInput = screen.getByRole(`textbox`, {
            name: /phone/i,
        });
        const emailInput = screen.getByRole(`textbox`, {
            name: /email/i,
        });
        //Act
        //Assert
        // ensure elements are rendered.
        expect(nameInput).toBeInTheDocument();
        expect(phoneInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
    });
    it("contains a submit button", () => {
        render(<ContactForm />);
        const buttonInput = screen.getByRole("button", {
            name: /create contact/i,
        });

        expect(buttonInput).toBeInTheDocument();
    });
});
