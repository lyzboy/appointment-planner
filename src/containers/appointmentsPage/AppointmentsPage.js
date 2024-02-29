import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
    appointments,
    contacts,
    addAppointment,
}) => {
    const [name, setName] = useState(``);
    const [contact, setContact] = useState("");
    const [date, setDate] = useState(Date.now());
    const [timeEntered, setTimeEntered] = useState(Date.now());

    const handleSubmit = (e) => {
        e.preventDefault();
        addAppointment(name, contact, date, timeEntered);
        clearForm();
        setContact("");
    };

    const clearForm = () => {
        setName(``);
        setContact({});
        setDate(Date.now);
        setTimeEntered(Date.now);
    };

    return (
        <div>
            <section>
                <h2>Add Appointment</h2>
                <AppointmentForm
                    title={name}
                    setTitle={setName}
                    contact={contact}
                    setContact={setContact}
                    date={date}
                    setDate={setDate}
                    time={timeEntered}
                    setTime={setTimeEntered}
                    handleSubmit={handleSubmit}
                    contacts={contacts}
                />
            </section>
            <hr />
            <section>
                <h2>Appointments</h2>
                <TileList list={appointments} />
            </section>
        </div>
    );
};
