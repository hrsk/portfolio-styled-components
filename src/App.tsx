import './App.css';
import {About} from "./layout/about/About";
import {Footer} from "./layout/footer/Footer";
import {Contacts} from "./layout/contacts/Contacts";
import {Slogan} from "./layout/slogan/Slogan";
import {Projects} from "./layout/projects/Projects";

export const App = () => {
    return (
        <>
            <About/>
            <Projects/>
            <Slogan/>
            <Contacts/>
            <Footer/>
        </>
    );
}
