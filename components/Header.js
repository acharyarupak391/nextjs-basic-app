import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = (props) => {
  const router = useRouter();
  const navLinks = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/about",
      name: "About",
    },
    {
      link: "/contact",
      name: "Contact Us",
    },
  ];
  return (
    <div className={styles.headerDiv}>
      <ul>
        {navLinks.map((nav) => (
          <Link key={nav.link} href={nav.link}>
            <li
              style={
                nav.link === router.asPath
                  ? {
                      backgroundColor: "darkslateblue",
                      color: "rgb(241, 241, 241)",
                    }
                  : {}
              }
            >
              {nav.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Header;
