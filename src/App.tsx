import './App.css';
import {About} from "./layout/about/About";
import {Footer} from "./layout/footer/Footer";
import {Contacts} from "./layout/contacts/Contacts";

export const App = () => {
    return (
        <>
            <About/>
            <Contacts/>
            <Footer/>
        </>
    );
}
