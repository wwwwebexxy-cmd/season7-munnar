"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks, site } from "@/data/site";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
        <div className={styles.inner}>
          <a href="#home" className={styles.logo} aria-label="Season7 Natural Resort Munnar home">
            <Image src="/images/season7-forest-logo.webp" alt="Season7 Natural Resort Munnar" className={styles.logoImg} width={48} height={48} priority />
            <div className={styles.logoText}>
              <span>{site.name}</span>
              <small>AMRUTHA RESORT</small>
            </div>
          </a>

          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.link}
              >
                {link.label}
              </a>
            ))}
          </nav>


          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className={styles.menuBtn}
          >
            <span className={`${styles.bar} ${open ? styles.barOpenTop : ""}`} />
            <span className={`${styles.bar} ${open ? styles.barOpenBottom : ""}`} />
          </button>
        </div>

        {open && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileNav}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={styles.mobileLink}
                >
                  {link.label}
                </a>
              ))}

            </div>
          </div>
        )}
    </header>
  );
}
