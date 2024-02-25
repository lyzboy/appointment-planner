import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "../root/Root";
import { AppointmentsPage } from "../../containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "../../containers/contactsPage/ContactsPage";

export function AppRoutes() {
    const [contacts, setContacts] = useState([]);
    const [appointments, setAppointments] = useState([]);

    const addContact = ({ name, phoneNumber, email }) => {
        const newContact = { name, phoneNumber, email };
        setContacts((prev) => [...prev, newContact]);
    };

    const addAppointment = ({ name, contact, date, time }) => {
        const newAppointment = { name, contact, date, time };
        setAppointments((prev) => [...prev, newAppointment]);
    };

    return (
        <Routes>
            <Route path="/" element={<Navigate to={ROUTES.CONTACTS} />} />
            <Route
                path={ROUTES.CONTACTS}
                element={
                    <ContactsPage contacts={contacts} addContact={addContact} />
                }
            />
            <Route
                path={ROUTES.APPOINTMENTS}
                element={
                    <AppointmentsPage
                        appointments={appointments}
                        addAppointment={addAppointment}
                    />
                }
            />
            <Route
                path="*"
                element={
                    <ContactsPage contacts={contacts} addContact={addContact} />
                }
            />
        </Routes>
    );
}

function App() {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
}

export default App;
