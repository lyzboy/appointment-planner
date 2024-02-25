import "./contactsUtilities";
import { contactsContainName } from "./contactsUtilities";

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
});
