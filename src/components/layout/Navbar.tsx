"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { navLinks, site } from "@/data/site";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 980px)");
    const onResize = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener("keydown", close);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", close);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""} ${open ? styles.headerOpen : ""}`}>
        <div className={styles.inner}>
          <a href="#home" onClick={() => setOpen(false)} className={styles.logo} aria-label="Season7 Natural Resort Munnar home">
            <Image src="/images/season7-forest-logo.webp" alt="" className={styles.logoImg} width={80} height={63} priority />
            <div className={styles.logoText}>
              <span>{site.name}</span>
              <small>AMRUTHA RESORT</small>
            </div>
          </a>

          <nav className={styles.nav} aria-label="Main navigation">
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
            ref={menuButton}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls="mobile-navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className={styles.menuBtn}
          >
            <span className={`${styles.bar} ${open ? styles.barOpenTop : ""}`} />
            <span className={`${styles.bar} ${open ? styles.barOpenBottom : ""}`} />
          </button>
        </div>

          <div id="mobile-navigation" className={styles.mobileMenu} inert={!open} aria-hidden={!open}>
            <nav className={styles.mobileNav} aria-label="Mobile navigation">
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

            </nav>
          </div>
    </header>
  );
}
