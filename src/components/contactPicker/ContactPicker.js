import React from "react";

export const ContactPicker = ({ list, setContact, value, name }) => {
    return (
        <>
            <select
                value={value}
                name={name}
                onChange={(e) => {
                    setContact(e.target.value);
                }}
            >
                <option selected value="">
                    No Contact Selected
                </option>
                {list.map((elem) => {
                    return <option value={elem.name}>{elem.name}</option>;
                })}
            </select>
        </>
    );
};
