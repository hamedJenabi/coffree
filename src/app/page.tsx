import Image from "next/image";
import LeadForm from "@/components/lead-form";
import styles from "./page.module.scss";

const proofPoints = [
  { value: "EUR 4.99", label: "Founding month" },
  { value: "20%", label: "Off drinks" },
  { value: "5 cafes", label: "Pilot target" },
];

const drinks = ["Coffee", "Matcha", "Tea", "Iced drinks"];

const savings = [
  { value: "EUR 16.50", month: "August" },
  { value: "EUR 17.80", month: "July" },
  { value: "EUR 15.50", month: "June" },
];

const cafeBenefits = [
  "More repeat local visits.",
  "You choose the drinks.",
  "No hardware for the pilot.",
];

const qrCells = Array.from({ length: 81 }, (_, index) => {
  const row = Math.floor(index / 9);
  const col = index % 9;
  const corner =
    (row < 3 && col < 3) ||
    (row < 3 && col > 5) ||
    (row > 5 && col < 3);

  return corner || (index * 7 + row * 3 + col) % 5 < 2;
});

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="Coffree home">
          <span className={styles.brandMark}>Cf</span>
          <span>Coffree</span>
        </a>
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#save">Save</a>
          <a href="#cafes">Cafes</a>
          <a href="#join">Join</a>
        </nav>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Vienna pilot</span>
          <h1>Coffree</h1>
          <p>
            A simple drink club for coffee, matcha, tea, and independent cafes.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#join">
              Join the list
            </a>
            <a className={styles.secondaryButton} href="#cafes">
              Partner cafe
            </a>
          </div>
        </div>

        <div className={styles.heroPhoto}>
          <Image
            src="/hero-cafe.png"
            alt="Coffee, iced tea, matcha, and a phone pass on a cafe counter"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 900px) 92vw, 44vw"
            className={styles.heroImage}
          />
          <div className={styles.passCard}>
            <span>Founding pass</span>
            <strong>20% off</strong>
          </div>
        </div>
      </section>

      <section className={styles.proofRail} aria-label="Pilot offer">
        {proofPoints.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className={styles.drinkRail} aria-label="Included drinks">
        {drinks.map((drink) => (
          <span key={drink}>{drink}</span>
        ))}
      </section>

      <section className={styles.saveSection} id="save">
        <div className={styles.saveInner}>
          <div className={styles.saveCopy}>
            <span className={styles.sectionKicker}>01. Save</span>
            <h2>Show code. Save every visit.</h2>
            <p>One pass for coffee, matcha, tea, and iced drinks.</p>
          </div>

          <div className={styles.saveVisual} aria-label="Coffree app preview">
            <div className={`${styles.phone} ${styles.qrPhone}`}>
              <div className={styles.qrHeader}>
                <strong>Order code</strong>
                <span>Show at the counter</span>
              </div>
              <div className={styles.qrCode} aria-hidden="true">
                {qrCells.map((active, index) => (
                  <span
                    className={active ? styles.qrCellActive : ""}
                    key={`qr-${index}`}
                  />
                ))}
              </div>
              <div className={styles.qrSummary}>
                <span>Today</span>
                <strong>EUR 0.78 saved</strong>
              </div>
            </div>

            <div className={styles.savingStack}>
              {savings.map((saving) => (
                <div className={styles.savingPill} key={saving.month}>
                  <strong>You saved {saving.value}</strong>
                  <span>{saving.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cafeBand} id="cafes">
        <div className={styles.cafeInner}>
          <div className={styles.cafeDivider}>
            <span>For cafes</span>
          </div>
          <div className={styles.cafeContent}>
            <h2>Bring regulars back.</h2>
            <div className={styles.benefitList}>
              {cafeBenefits.map((benefit) => (
                <div className={styles.benefit} key={benefit}>
                  <span>OK</span>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.formsSection} id="join">
        <div className={styles.formsIntro}>
          <span className={styles.eyebrow}>Founding list</span>
          <h2>Test demand first.</h2>
          <p>Two lists: future members and partner cafes.</p>
        </div>
        <div className={styles.formsGrid}>
          <LeadForm kind="member" />
          <LeadForm kind="cafe" />
        </div>
      </section>

      <footer className={styles.footer}>
        <a className={styles.brand} href="#top" aria-label="Coffree home">
          <span className={styles.brandMark}>Cf</span>
          <span>Coffree</span>
        </a>
        <p>Vienna founding pilot.</p>
      </footer>
    </main>
  );
}
