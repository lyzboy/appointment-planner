/**
 * Used to search an array of contact objects to verify if the array already contains an object with the given name.
 * @param {Object[]} contactArray
 * @param {String} contactName
 * @returns if the name is found in the within the array of contact Objects
 */
export const contactsContainName = (contactArray, contactName) => {
    const searchElements = contactArray.filter(
        (elem) => elem.name === contactName
    );
    return searchElements.length !== 0;
};

export const formatPhoneNumber = (phoneNumber) => {
    const sanitizedPhoneNumber = phoneNumber.replace(/\D/g, "");
    let formattedPhoneNumber = ``;
    if (sanitizedPhoneNumber.length > 0) {
        formattedPhoneNumber = `(`;
        formattedPhoneNumber += sanitizedPhoneNumber.slice(0, 3);
        if (sanitizedPhoneNumber.length > 3) {
            formattedPhoneNumber += `)`;
            formattedPhoneNumber += sanitizedPhoneNumber.slice(3, 6);
            if (sanitizedPhoneNumber.length > 6) {
                formattedPhoneNumber += `-`;
                formattedPhoneNumber += sanitizedPhoneNumber.slice(6);
            }
        }
    }
    return formattedPhoneNumber;
};
