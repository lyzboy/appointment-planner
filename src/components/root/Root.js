import { Outlet, NavLink } from "react-router-dom";

export const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
};

function Root() {
    return (
        <>
            <h1>Appointment Planner</h1>
            <nav>
                <NavLink to={ROUTES.CONTACTS}>Contacts</NavLink>
                <NavLink to={ROUTES.APPOINTMENTS}>Appointments</NavLink>
            </nav>
            <Outlet />
        </>
    );
}

export default Root;
