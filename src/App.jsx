import { Fragment } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function App() {
    const [showFooter, setShowFooter] = useState(true);

    // find the current location ( this function will change on user integration)
    const location = useLocation();
    const nav = useNavigate();
    useEffect(() => {
        if (location.pathname == "/") {
            nav("/log-in");
        } else {
            if (
                location.pathname == "/log-in" ||
                location.pathname == "/sign-up"
            ) {
                setShowFooter(false);
            } else {
                setShowFooter(true);
            }
        }
    }, []);

    return (
        <Fragment>
            <Header />
            <main className=" main-section flex-grow-1 ">
                <Outlet />
            </main>
            {showFooter && <Footer />}
        </Fragment>
    );
}

export default App;
