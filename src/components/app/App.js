import React, { useEffect, useState } from "react";
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

    const addContact = (name, phone, email) => {
        const newContact = { name, phone, email };
        setContacts((prev) => [...prev, newContact]);
    };

    /**
     * adds an appointment to the app
     * @param {String} name
     * @param {Object} contact
     * @param {Date} date
     * @param {Date} time
     */
    const addAppointment = (name, contact, date, time) => {
        const newAppointment = { name, contact, date, time };
        console.log(contact);
        setAppointments((prev) => [...prev, newAppointment]);
    };

    useEffect(() => {
        setContacts([
            {
                name: "John Doe",
                phone: "(123)123-1234",
                email: "john@example.com",
            },
            {
                name: "Tom Doe",
                phone: "(123)123-1235",
                email: "tom@example.com",
            },
        ]);
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Root />}>
                <Route index element={<Navigate to={ROUTES.CONTACTS} />} />
                <Route
                    path={ROUTES.CONTACTS}
                    element={
                        <ContactsPage
                            contacts={contacts}
                            addContact={addContact}
                        />
                    }
                />
                <Route
                    path={ROUTES.APPOINTMENTS}
                    element={
                        <AppointmentsPage
                            appointments={appointments}
                            contacts={contacts}
                            addAppointment={addAppointment}
                        />
                    }
                />
                <Route
                    path="*"
                    element={
                        <ContactsPage
                            contacts={contacts}
                            addContact={addContact}
                        />
                    }
                />
            </Route>
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
