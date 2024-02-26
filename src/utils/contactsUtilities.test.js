import "./contactsUtilities";
import { contactsContainName, formatPhoneNumber } from "./contactsUtilities";

describe("The contacts utilities helper", () => {
    describe(`contactsContainName function`, () => {
        it("returns true if name is already in array", () => {
            const inputValue = "John";
            const inputArray = [{ name: "John" }];
            const expectValue = true;

            const actualValue = contactsContainName(inputArray, inputValue);

            expect(actualValue).toEqual(expectValue);
        });
        it(`returns false if name is not already in array`, () => {
            const inputValue = "Tom";
            const inputArray = [{ name: "John" }];
            const expectValue = false;

            const actualValue = contactsContainName(inputArray, inputValue);

            expect(actualValue).toEqual(expectValue);
        });
    });
    describe("formatPhoneNumber function", () => {
        it("formats a give phone number in the form of (***)***-****", () => {
            const inputPhone1 = "1234567890";
            const expectedPhone1 = "(123)456-7890";
            const inputPhone2 = "123456";
            const expectedPhone2 = "(123)456";
            const inputPhone3 = "123";
            const expectedPhone3 = "(123";
            const inputPhone4 = "1";
            const expectedPhone4 = "(1";

            const actualValue1 = formatPhoneNumber(inputPhone1);
            const actualValue2 = formatPhoneNumber(inputPhone2);
            const actualValue3 = formatPhoneNumber(inputPhone3);
            const actualValue4 = formatPhoneNumber(inputPhone4);

            expect(actualValue1).toEqual(expectedPhone1);
            expect(actualValue2).toEqual(expectedPhone2);
            expect(actualValue3).toEqual(expectedPhone3);
            expect(actualValue4).toEqual(expectedPhone4);
        });
    });
});
