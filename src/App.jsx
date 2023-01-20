import { Fragment } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <Fragment>
            <Header />
            <main className=" main-section flex-grow-1 ">
                <Outlet />
            </main>
            <Footer />
        </Fragment>
    );
}

export default App;
