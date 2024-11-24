import './App.css';
import {About} from "./layout/about/About";
import {Footer} from "./layout/footer/Footer";
import {Contacts} from "./layout/contacts/Contacts";
import {Slogan} from "./layout/slogan/Slogan";
import {Projects} from "./layout/projects/Projects";
import {Resume} from "./layout/resume/Resume";

export const App = () => {
    return (
        <>
            <About/>
            <Projects/>
            <Resume/>
            <Slogan/>
            <Contacts/>
            <Footer/>
        </>
    );
}
