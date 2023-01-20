import { Fragment, useEffect } from "react";
import Scheduling from "./pages/Scheduling";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from 'react-router-dom'

function App() {
    return (
        <Fragment>
            <Header />
            <Outlet />
            <Footer />
        </Fragment>
    );
}

export default App;
