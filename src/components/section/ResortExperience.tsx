import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";
import styles from "./ResortExperience.module.css";

const amenities = [
  {
    number: "01",
    title: "Luxury Rooms",
    body: "Warm, comfortable rooms with private balconies, thoughtful details and quiet views across the green hills.",
    image: "/images/season7-luxury-room.png",
  },
  {
    number: "02",
    title: "Multi-cuisine Restaurant",
    body: "Fresh Kerala flavours and familiar favourites served with generous hospitality and a view worth lingering over.",
    image: "/images/season7-dining.png",
  },
  {
    number: "03",
    title: "Spa & Wellness",
    body: "Slow down with restorative treatments, quiet corners and the kind of calm that stays with you after checkout.",
    image: "/images/season7-wellness.png",
  },
  {
    number: "04",
    title: "Swimming Pool",
    body: "A peaceful pool overlooking the landscape, made for unhurried mornings and long, easy afternoons.",
    image: "/images/season7-wellness.png",
  },
  {
    number: "05",
    title: "Guided Nature Walks",
    body: "Discover forest paths, tea-country views and the quieter side of Munnar with a local guide beside you.",
    image: "/images/season7-nature-walk.png",
  },
];

const highlights = [
  {
    number: "01",
    title: "Wake up to the hills",
    body: "Open the curtains to mist, mountain air and a slower rhythm. Season7 is a comfortable base for days that feel spacious.",
    image: "/images/season7-luxury-room.png",
  },
  {
    number: "02",
    title: "Taste the place",
    body: "From a generous breakfast to an evening meal with a view, our table brings together local character and easy comfort.",
    image: "/images/season7-dining.png",
  },
  {
    number: "03",
    title: "Go gently wild",
    body: "Take a guided walk, find a waterfall, or simply sit with the landscape. Adventure is close, never compulsory.",
    image: "/images/season7-nature-walk.png",
  },
];

function LeafMark() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={styles.leafMark}>
      <path d="M37.8 9.6C24.2 11.4 13.1 18 10.5 29.4c-1.1 4.8.8 8.4 4.8 9.2 7.7 1.5 15.8-4.9 17.9-12.7 1.2-4.4 2-10 4.6-16.3Z" />
      <path d="M11.3 38.5c6.4-7.8 12.1-13.1 21.7-18.3" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.pinIcon}>
      <path d="M20 10.2c0 5.8-8 11.8-8 11.8S4 16 4 10.2a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function ResortExperience() {
  return (
    <main>
      <section id="home" className={styles.hero}>
        <div className={styles.gridBackdrop} />
        <div className={styles.gradientBackdrop} />

        <div className={styles.heroContent}>
          <Container>
            <div className={styles.heroGrid}>
              <div className={styles.textContent}>
                <Reveal>
                  <div className={styles.heroEyebrow}>
                    <span className={styles.eyebrowLine} />
                    SEASON7 NATURAL RESORT · MUNNAR
                  </div>
                </Reveal>

                <Reveal delay={100}>
                  <h1 className={styles.heroTitle}>
                    A stay that feels like <em>coming home.</em>
                  </h1>
                </Reveal>

                <Reveal delay={160}>
                  <h2 className={styles.heroSubheading}>
                    NATURE · HOSPITALITY · QUIET LUXURY
                  </h2>
                </Reveal>

                <Reveal delay={220}>
                  <div className={styles.heroDescription}>
                    <p>Come closer to the green hills of Munnar.</p>
                    <p>
                      Season7 is a warm, unhurried retreat for comfortable rooms, memorable meals and days shaped by the landscape.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={280}>
                  <div className={styles.heroActions}>
                    <a href="#services" className={styles.primaryButton}>Explore the resort</a>
                    <a href="#contact" className={styles.outlineButton}>Plan your stay</a>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={180} className={styles.heroGallery}>
                <div className={styles.galleryPanels} aria-label="Explore the resort">
                  {[
                    { image: "season7-munnar-hero.png", label: "The retreat", href: "#about" },
                    { image: "season7-luxury-room.png", label: "Stay", href: "#services" },
                    { image: "season7-dining.png", label: "Dine", href: "#services" },
                    { image: "season7-nature-walk.png", label: "Discover", href: "#experiences" },
                  ].map((panel, index) => (
                    <a key={panel.label} href={panel.href} className={styles.galleryPanel}>
                      <Image src={`/images/${panel.image}`} alt="" fill priority={index < 2}
                        sizes="(max-width: 640px) 50vw, (max-width: 1023px) 40vw, 30vw" />
                      <span className={styles.panelNumber}>0{index + 1}</span>
                      <span className={styles.panelLabel}>{panel.label}</span>
                    </a>
                  ))}
                </div>
                <p className={styles.galleryCaption}>Stay gently. Explore freely.</p>
              </Reveal>
            </div>
          </Container>
        </div>

        <a href="#about" className={styles.scrollCue}>Scroll to discover</a>
      </section>

      <section id="about" className={styles.aboutSection}>
        <Container>
          <div className={styles.aboutGrid}>
            <Reveal>
              <div className={styles.aboutVisual}>
                <Image
                  src="/images/season7-luxury-room.png"
                  alt="Comfortable Season7 guest room with a view of Munnar hills"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.sectionImage}
                />
                <span className={styles.imageStamp}>01 / Stay close</span>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className={styles.aboutCopy}>
                <div className={styles.sectionLabel}>WHO WE ARE</div>
                <h2 className={styles.sectionTitle}>Closer to nature. Closer to yourself.</h2>
                <p className={styles.leadCopy}>
                  Season7 Natural Resort Munnar is made for travellers who want comfort without losing the feeling of being somewhere beautiful.
                </p>
                <p>
                  Tucked into the green landscape of Chithirapuram, our resort brings together thoughtful rooms, warm service, local flavours and easy access to the best of Munnar.
                </p>
                <div className={styles.aboutSignature}>
                  <LeafMark />
                  <span>Nature heals. Nature inspires.</span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="services" className={styles.servicesSection}>
        <span id="accommodation" className={styles.anchorTarget} aria-hidden="true" />
        <Container>
          <div className={styles.sectionHeader}>
            <Reveal>
              <div className={styles.sectionLabel}>WHAT WE OFFER</div>
              <h2 className={styles.sectionTitle}>Everything you need to stay awhile.</h2>
            </Reveal>
            <Reveal delay={160}>
              <div className={styles.sectionIntro}>
                <p>Small comforts, considered details and experiences that help every guest settle into the pace of the hills.</p>
                <p>From your first coffee to your last walk, Season7 is here to make the stay feel effortless.</p>
              </div>
            </Reveal>
          </div>

          <div className={styles.serviceGrid}>
            {amenities.map((amenity, index) => (
              <Reveal key={amenity.number} delay={(index % 3) * 100}>
                <article className={styles.serviceCard} tabIndex={0}>
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src={amenity.image}
                      alt={amenity.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                      className={styles.cardImage}
                    />
                    <div className={styles.imageOverlay} />
                  </div>
                  <div className={styles.cardHeader}>
                    <span>{amenity.number}</span>
                    <h3>{amenity.title}</h3>
                  </div>
                  <div className={styles.cardReveal}>
                    <span className={styles.cardNumber}>{amenity.number}</span>
                    <h3>{amenity.title}</h3>
                    <p>{amenity.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="experiences" className={styles.projectsSection}>
        <Container>
          <div className={styles.sectionHeader}>
            <Reveal>
              <div className={styles.sectionLabelLight}>A GLIMPSE OF THE STAY</div>
              <h2 className={styles.sectionTitleLight}>Make the day your own.</h2>
            </Reveal>
            <Reveal delay={160}>
              <p className={styles.sectionIntroLight}>
                A few of the moments that make a Season7 stay feel different: soft mornings, long lunches and the call of the forest beyond.
              </p>
            </Reveal>
          </div>

          <div className={styles.highlightGrid}>
            {highlights.map((highlight, index) => (
              <Reveal key={highlight.number} delay={index * 120}>
                <article className={styles.highlightCard}>
                  <div className={styles.highlightImageWrapper}>
                    <Image
                      src={highlight.image}
                      alt={highlight.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 33vw"
                      className={styles.highlightImage}
                    />
                  </div>
                  <div className={styles.highlightContent}>
                    <span>{highlight.number}</span>
                    <h3>{highlight.title}</h3>
                    <p>{highlight.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.ctaSection}>
        <Container>
          <div className={styles.ctaInner}>
            <Reveal>
              <div className={styles.sectionLabel}>YOUR NEXT QUIET DAY</div>
              <h2 className={styles.ctaTitle}>Have a few days in mind? Let&apos;s make them beautiful.</h2>
            </Reveal>
            <Reveal delay={160}>
              <a href="#contact" className={styles.primaryButton}>Get in touch</a>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="contact" className={styles.contactSection}>
        <Container>
          <div className={styles.sectionHeader}>
            <Reveal>
              <div className={styles.sectionLabel}>GET IN TOUCH</div>
              <h2 className={styles.sectionTitle}>Let&apos;s plan your Munnar stay.</h2>
            </Reveal>
            <Reveal delay={160}>
              <div className={styles.sectionIntro}>
                <p>Come for the quiet, stay for the view, and leave with a little more room to breathe.</p>
                <a href={site.mapsLink} target="_blank" rel="noreferrer" className={styles.outlineButtonDark}>Open directions</a>
              </div>
            </Reveal>
          </div>

          <div className={styles.contactLayout}>
          <div className={styles.contactGrid}>
            <Reveal>
              <div className={styles.contactCard}>
                <span className={styles.cardLabel}>OUR ADDRESS</span>
                <address>{site.address}</address>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className={styles.contactCard}>
                <span className={styles.cardLabel}>THE SETTING</span>
                <strong>Munnar · Kerala</strong>
                <p>Forested hills, tea-country mornings and a little distance from the everyday.</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className={styles.contactCard}>
                <span className={styles.cardLabel}>THE PROMISE</span>
                <strong>Stay gently.</strong>
                <p>Thoughtful hospitality, comfortable spaces and time to take it all in.</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={180} className={styles.mapColumn}>
            <div className={styles.mapPanel}>
              <PinIcon />
              <div>
                <span className={styles.cardLabel}>VISIT THE RESORT</span>
                <strong>Find your quiet corner.</strong>
              </div>
              <a href={site.mapsLink} target="_blank" rel="noreferrer" className={styles.mapLink}>Open in Maps</a>
            </div>
            <div className={styles.mapFrame}>
              <iframe src={site.mapsEmbed} title="Season7 The Nature Resort location in Munnar"
                loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
            <p className={styles.mapNote}>Season7 The Nature Resort · Chithirapuram, Munnar</p>
          </Reveal>
          </div>
        </Container>
      </section>
    </main>
  );
}
