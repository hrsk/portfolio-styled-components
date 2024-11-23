import './App.css';
import {About} from "./layout/about/About";
import {Footer} from "./layout/footer/Footer";
import {Contacts} from "./layout/contacts/Contacts";
import {Slogan} from "./layout/slogan/Slogan";

export const App = () => {
    return (
        <>
            <About/>
            <Slogan/>
            <Contacts/>
            <Footer/>
        </>
    );
}
