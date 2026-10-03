import Container from "@/components/ui/Container";
import Image from "next/image";
import { navLinks, site } from "@/data/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.topRow}>
          <a href="#home" className={styles.brand}>
            <Image src="/images/season7-forest-logo.webp" alt="Season7 The Nature Resort" width={48} height={48} />
            <span>
              <strong>SEASON7</strong>
              <small>THE NATURE RESORT</small>
            </span>
          </a>

          <nav className={styles.footerNav} aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>
        </div>

        <div className={styles.bottomRow}>
          <p>{site.tagline}</p>
          <p>{site.address}</p>
          <p>© {new Date().getFullYear()} Season7 The Nature Resort</p>
        </div>
      </Container>
    </footer>
  );
}
