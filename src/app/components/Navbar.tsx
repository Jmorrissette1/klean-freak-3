import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navigation}>
        <li className={styles.logo}>
          <Link href="/">Logo Here</Link>
        </li>
        <li className={styles.navElement}>
          <Link href="/packages">Packages</Link>
        </li>
        <li className={styles.navElement}>
          <Link href="/memberships">Memberships</Link>
          <ul className={styles.dropDown}>
            <Link href="/memberships" className={styles.dropDownElement}>
              Klean Club
            </Link>
            <Link
              href="why-unlimited-page.html"
              className={styles.dropDownElement}
            >
              Why Unlimited?
            </Link>
          </ul>
        </li>

        <li className={styles.navElement}>
          About
          <ul className={styles.dropDown}>
            <Link href="about-us.html" className={styles.dropDownElement}>
              About Us
            </Link>
            <Link
              href="https://recruiting2.ultipro.com/HAS1005HLW/JobBoard/8491fa92-c48c-4541-8cb7-241a824bf93f/?q=&o=postedDateDesc"
              className={styles.dropDownElement}
              target="_blank"
              rel="noopener noreferrer"
            >
              Careers
            </Link>
          </ul>
        </li>
        <li className={styles.navElement}>
          Locations
          <ul className={styles.dropDown}>
            <a href="Poulsbo-location.html" className={styles.dropDownElement}>
              Poulsbo
            </a>
            <a
              href="Silverdale-location.html"
              className={styles.dropDownElement}
            >
              Silverdale
            </a>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
