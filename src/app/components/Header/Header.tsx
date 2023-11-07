import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";
import { Button } from "@/components/Button/Button";

export function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <button className={styles.burger}>
              <Image
                className={styles.burgerIcon}
                src="/images/icons/burger.svg"
                width={33}
                height={17}
                alt="Menu"
              />
            </button>
            <span className={styles.name}>Alice Mil</span>
          </div>
          <div className={styles.actions}>
            <nav className={styles.nav}>
              <Link className={styles.navLink} href="/portfolio">
                Portfolio
              </Link>
            </nav>
            <Button className={styles.hireMe}>Hire me!</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
