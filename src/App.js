import "./styles.css";
import { Link } from "react-scroll";

export default function App() {
  return (
    <div className="App">
      <header className="nav">
        <nav className="nav__container__actions">
          <ul>
            <li>
              <Link activeClass="active" smooth spy to="home">
                HOME
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="app">
                APP
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="contact">
                CONTACT
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="about">
                ABOUT US
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section id="home">HOME</section>
      <section id="app">APP</section>
      <section id="contact">CONTACT</section>
      <section id="about">ABOUT US</section>
    </div>
  );
}
