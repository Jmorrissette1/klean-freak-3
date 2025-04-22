import Styles from "./componentStyles.module.css";

const Nav = () => {
  return (
    <div>
      <ul className={Styles.navigation}>
        <li>
          <a href="index.html">Logo Here</a>
        </li>
        <li className="nav-element">
          <a href="packages.html">Packages</a>
        </li>
        <li className="nav-element">
          <a href="kleanclub.html">Klean Club</a>
          <ul className="dropdown">
            <a href="kleanclub.html" className="drop-down-element">
              Klean Club
            </a>
            <a href="why-unlimited-page.html" className="drop-down-element">
              Why Unlimited?
            </a>
          </ul>
        </li>

        <li className="nav-element">
          About
          <ul className="dropdown">
            <a href="about-us.html" className="drop-down-element">
              About Us
            </a>
            <a
              href="https://recruiting2.ultipro.com/HAS1005HLW/JobBoard/8491fa92-c48c-4541-8cb7-241a824bf93f/?q=&o=postedDateDesc"
              className="drop-down-element"
            >
              Careers
            </a>
          </ul>
        </li>
        <li className="nav-element">
          Locations
          <ul className="dropdown">
            <a href="Poulsbo-location.html" className="drop-down-element">
              Poulsbo
            </a>
            <a href="Silverdale-location.html" className="drop-down-element">
              Silverdale
            </a>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
