import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";
import styles from "./ResortExperience.module.css";

const accommodation = [
  {
    number: "01",
    title: "A/C & non A/C cottages",
    body: "Private balconies, en suite bathrooms, tea and coffee-making facilities, and cozy furnishings for a peaceful retreat.",
  },
  {
    number: "02",
    title: "Private balconies & en suite bathrooms",
    body: "Wake up to green views and enjoy the comfort of a private, unhurried space designed for restful stays.",
  },
];

const dining = [
  {
    number: "01",
    title: "Multi-cuisine restaurant",
    body: "Freshly prepared meals inspired by local ingredients, traditional Kerala recipes, and familiar international flavours.",
  },
  {
    number: "02",
    title: "Cool bar",
    body: "Refresh with mocktails, light bites, and an easy evening pause after a day exploring the hills.",
  },
];

const facilities = [
  {
    number: "01",
    title: "Swimming pool",
    body: "A serene place to slow down, spend time together, and take in the landscape around you.",
  },
  {
    number: "02",
    title: "Spa & wellness",
    body: "Thoughtful therapies and treatments to help you reset, recharge, and settle into the pace of nature.",
  },
  {
    number: "03",
    title: "Family-friendly spaces",
    body: "A kids play area, board games, and indoor fun for relaxed time together between adventures.",
  },
];

const experiences = [
  "Campfire nights",
  "Bicycle rides",
  "Jeep safari",
  "Munnar viewpoints",
  "Power House Waterfalls",
  "Chokramudi Peak",
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
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <Container>
            <div className={styles.heroInner}>
              <Reveal delay={150}>
                <div className={styles.heroKicker}>
                  <span className={styles.kickerLine} />
                  MUNNAR · KERALA
                </div>
              </Reveal>

              <Reveal delay={300}>
                <h1 className={styles.heroTitle}>
                  Come closer to <em>nature.</em>
                </h1>
              </Reveal>

              <Reveal delay={450}>
                <p className={styles.heroDescription}>
                  A warm, unhurried stay among forested hills, mist-covered mountains, and the easy charm of the outdoors.
                </p>
              </Reveal>

              <Reveal delay={600}>
                <div className={styles.heroActions}>
                  <a href="#accommodation" className={styles.primaryButton}>Explore the resort</a>
                  <a href="#contact" className={styles.textButton}>Find us in Munnar</a>
                </div>
              </Reveal>

              <Reveal delay={750}>
                <div className={styles.heroFootnote}>
                  <LeafMark />
                  <span>Stay gently. Explore freely.</span>
                </div>
              </Reveal>
            </div>
          </Container>
        </div>

        <div className={styles.heroBadge}>
          <span className={styles.badgeNumber}>07</span>
          <span className={styles.badgeLabel}>the nature resort</span>
        </div>
        <a href="#about" className={styles.scrollCue}>Scroll to discover</a>
      </section>

      <section id="about" className={styles.aboutSection}>
        <Container>
          <div className={styles.aboutGrid}>
            <Reveal>
              <div className={styles.sectionLabel}>01 / About Season7</div>
              <h2 className={styles.sectionTitle}>A resort where nature meets comfort.</h2>
            </Reveal>

            <Reveal delay={160}>
              <div className={styles.aboutCopy}>
                <p className={styles.leadCopy}>
                  Season7 is designed for travellers who want both serenity and a little adventure. Our property sits against Munnar&apos;s beautiful valleys and mountains, with the kind of views that make you want to linger a little longer.
                </p>
                <p>
                  With comfortable cottages, private balconies, thoughtful amenities, and personal service, every stay is simple in the best way: relaxed, refreshing, and connected to the landscape around you.
                </p>
                <div className={styles.aboutSignature}>
                  <LeafMark />
                  <span>Nature heals. Nature inspires.</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={260}>
            <div className={styles.destinationStrip}>
              <div>
                <span className={styles.stripLabel}>A little beyond the ordinary</span>
                <strong>Close to Munnar&apos;s best days out</strong>
              </div>
              <div className={styles.destinationList}>
                <span>Wonder Valley Adventure Park</span>
                <span>Power House Waterfalls</span>
                <span>Chokramudi Peak</span>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="accommodation" className={styles.staySection}>
        <Container>
          <div className={styles.sectionHeadingRow}>
            <Reveal>
              <div className={styles.sectionLabel}>02 / Accommodation</div>
              <h2 className={styles.sectionTitle}>Stay close to the hills.</h2>
            </Reveal>
            <Reveal delay={160}>
              <p className={styles.sectionIntro}>
                Settle into comfortable cottages with the space, privacy, and gentle views that make a Munnar stay feel restorative.
              </p>
            </Reveal>
          </div>

          <div className={styles.facilityGrid}>
            {accommodation.map((facility, index) => (
              <Reveal key={facility.number} delay={(index % 3) * 90}>
                <article className={styles.facilityCard}>
                  <span className={styles.facilityNumber}>{facility.number}</span>
                  <h3>{facility.title}</h3>
                  <p>{facility.body}</p>
                </article>
              </Reveal>
            ))}
          </div>

        </Container>
      </section>

      <section id="dining" className={styles.diningSection}>
        <Container>
          <div className={styles.sectionHeadingRow}>
            <Reveal>
              <div className={styles.sectionLabel}>03 / Dining & refreshments</div>
              <h2 className={styles.sectionTitle}>Good food, easy evenings.</h2>
            </Reveal>
            <Reveal delay={160}>
              <p className={styles.sectionIntro}>
                Share a generous meal, try the flavours of Kerala, or take a relaxed pause at the cool bar after a day outdoors.
              </p>
            </Reveal>
          </div>

          <div className={styles.facilityGrid}>
            {dining.map((facility, index) => (
              <Reveal key={facility.number} delay={(index % 3) * 90}>
                <article className={styles.facilityCard}>
                  <span className={styles.facilityNumber}>{facility.number}</span>
                  <h3>{facility.title}</h3>
                  <p>{facility.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="facilities" className={styles.staySection}>
        <Container>
          <div className={styles.sectionHeadingRow}>
            <Reveal>
              <div className={styles.sectionLabel}>04 / Facilities</div>
              <h2 className={styles.sectionTitle}>Everything you need to settle in.</h2>
            </Reveal>
            <Reveal delay={160}>
              <p className={styles.sectionIntro}>
                From a quiet morning by the pool to a long evening by the fire, thoughtful facilities make space for a complete holiday experience.
              </p>
            </Reveal>
          </div>

          <div className={styles.facilityGrid}>
            {facilities.map((facility, index) => (
              <Reveal key={facility.number} delay={(index % 3) * 90}>
                <article className={styles.facilityCard}>
                  <span className={styles.facilityNumber}>{facility.number}</span>
                  <h3>{facility.title}</h3>
                  <p>{facility.body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220}>
            <div className={styles.benefitRow}>
              <span className={styles.benefitIntro}>Included in the experience</span>
              <span>Complimentary breakfast</span>
              <span>Ample parking</span>
              <span>Board games & indoor fun</span>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="activities" className={styles.experienceSection}>
        <div className={styles.experienceImage} />
        <div className={styles.experienceShade} />
        <Container>
          <div className={styles.experienceGrid}>
            <Reveal>
              <div className={styles.sectionLabelLight}>05 / Go gently wild</div>
              <h2 className={styles.experienceTitle}>Make the day your own.</h2>
              <p className={styles.experienceCopy}>
                Take the scenic route, swap stories around a campfire, or simply let the hills set the pace. At Season7, adventure is always close and never compulsory.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className={styles.experienceList}>
                {experiences.map((experience, index) => (
                  <div key={experience} className={styles.experienceItem}>
                    <span>0{index + 1}</span>
                    <strong>{experience}</strong>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="contact" className={styles.contactSection}>
        <Container>
          <div className={styles.contactGrid}>
            <Reveal>
              <div className={styles.sectionLabel}>06 / Find your way here</div>
              <h2 className={styles.sectionTitle}>Plan your escape to Season7.</h2>
              <p className={styles.contactCopy}>
                Come for the quiet, stay for the view, and leave with a little more room to breathe.
              </p>
              <a href={site.mapsLink} target="_blank" rel="noreferrer" className={styles.primaryButton}>Open directions</a>
            </Reveal>

            <Reveal delay={160}>
              <div className={styles.addressCard}>
                <div className={styles.addressIcon}><PinIcon /></div>
                <span className={styles.stripLabel}>Our address</span>
                <address>{site.address}</address>
                <span className={styles.addressNote}>Chithirapuram · Anachal · Munnar</span>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </main>
  );
}
