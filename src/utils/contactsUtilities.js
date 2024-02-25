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
