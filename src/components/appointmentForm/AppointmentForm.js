import React from "react";

import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
    const [month, day, year] = new Date()
        .toLocaleDateString("en-US")
        .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
    contacts,
    title,
    setTitle,
    contact,
    setContact,
    date,
    setDate,
    time,
    setTime,
    handleSubmit,
}) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">
                    Title:
                    <input
                        type="text"
                        name="title"
                        id="title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </label>
                <label htmlFor="date">
                    Date:
                    <input
                        type="date"
                        name="date"
                        id="date"
                        min={getTodayString()}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </label>
                <label htmlFor="time">
                    Time:
                    <input
                        type="time"
                        name="time"
                        id="time"
                        onChange={(e) => setTime(e.target.value)}
                        value={time}
                    />
                </label>
                <ContactPicker
                    list={contacts}
                    setContact={setContact}
                    value={contact}
                    contact={contact}
                />
                <button type="submit">Create Appointment</button>
            </form>
        </>
    );
};
