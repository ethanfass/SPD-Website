import { useEffect, useState } from "react";
import "./App.css";
import spdLogo from "./assets/logos/spd-logo.png";
import udLogo from "./assets/logos/ud-logo.svg";
import InstagramFeed from "./components/InstagramFeed";
import TomIngenitoPic from "./assets/brother-pics/tom-ingenito.jpg";
import classroomRush from "./assets/rush-pics/classroom.jpg";
import westmainRush from "./assets/rush-pics/westmain.jpg";
import grottosRush from "./assets/rush-pics/grottos.jpg";
import icecreamPic from "./assets/phila-pics/icecream.jpg";
import pumpkinPic from "./assets/phila-pics/pumpkin.jpg";

// Latest Event image (swap for any banner you prefer)
import LatestEventImg from "./assets/instagram/insta1.jpg";

type Page = "home" | "rush" | "philanthropy" | "udance" | "brothers";

/** -------------------------------
 *  NAV / ROUTER (hash-based)
 *  ------------------------------- */
function useHashRoute(defaultPage: Page = "home") {
  const parseHash = (): Page => {
    const raw = window.location.hash.replace(/^#\/?/, "").toLowerCase();
    const valid: Page[] = ["home", "rush", "philanthropy", "udance", "brothers"];
    return (valid.includes(raw as Page) ? (raw as Page) : defaultPage) as Page;
  };

  const [page, setPage] = useState<Page>(parseHash);

  useEffect(() => {
    const onHashChange = () => setPage(parseHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = (p: Page) => {
    if (p !== page) window.location.hash = `/${p}`;
  };

  return { page, navigate };
}

function NavBar({ page, onNavigate }: { page: Page; onNavigate: (p: Page) => void }) {
  const links: { key: Page; label: string }[] = [
    { key: "home", label: "Home" },
    { key: "rush", label: "Rush" },
    { key: "philanthropy", label: "Philanthropy" },
    { key: "udance", label: "UDance" },
    { key: "brothers", label: "Brothers" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        {/* LEFT: Brand */}
        <div
          className="brand brand--pill"
          onClick={() => onNavigate("home")}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onNavigate("home"); }}
          role="button"
          tabIndex={0}
          aria-label="Go to Home"
        >
          ΣΦΔ - Social Engineering Fraternity
        </div>


        {/* MIDDLE: Nav links */}
        <nav className="nav-links">
          {links.map((l) => (
            <a
              key={l.key}
              href={`#/${l.key}`}
              className={`nav-link ${page === l.key ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(l.key);
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* RIGHT: Logos */}
        <div className="nav-logos">
          <img src={spdLogo} alt="SPD logo" />
          <span className="logo-x">×</span>
          <img src={udLogo} alt="UD logo" />
        </div>
      </div>
    </header>
  );
}

/** -------------------------------
 *  LAYOUT HELPERS
 *  ------------------------------- */
function Section({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section className="section container" id={id}>
      <h2 className="section-title">{title}</h2>
      <div className="section-body">{children}</div>
    </section>
  );
}

/** -------------------------------
 *  HOME
 *  ------------------------------- */
function HomePage() {
  return (
    <>
      {/* HERO with background image */}
      <div className="hero">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <h1 className="hero-title">Sigma Phi Delta</h1>
          <p className="hero-subtitle">
            A social fraternity with an engineering focus from the University of Delaware.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#/rush">See Rush Events</a>
            <a className="btn btn-ghost" href="#/philanthropy">Our Philanthropy</a>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <Section title="About Us" id="about">
        <p className="lead">
          We’re a community of engineers and friends dedicated to professional growth, campus impact,
          and brotherhood.
        </p>

        <div className="about-grid">
     
          {/* History & Heritage */}
          <div className="about-card">
            <h3>History &amp; Heritage</h3>
            <p>
              The <strong>Psi Chapter</strong> of Sigma Phi Delta at the University of Delaware was founded on
              <strong> April 11, 1999</strong> to unite engineers through professional growth, service, and brotherhood.
            </p>
            <ul className="checks">
              <li>Founded April 11, 1999 — over 25 years serving UD students</li>
              <li>Symbols & heritage: red/black, the Castle, and <em>Pro Bono Professionis</em></li>
              <li>Chapter traditions: professional ceremonies, study halls, and project spotlights</li>
              <li>Strong alumni network supporting internships and early careers</li>
            </ul>
          </div>

          {/* Impact At-a-Glance (light, non-numeric) */}
          <div className="about-card">
            <h3>Impact &amp; Community</h3>
            <ul className="checks">
              <li>UDance fundraising year-round through drives, events, and partnerships</li>
              <li>Regular philanthropy events that support campus and local causes</li>
              <li>Welcoming community of engineers & friends—hang out, collaborate, and study with one another</li>
              <li>Positive Greek-life presence at UD: respect, inclusivity, and leadership by example</li>
            </ul>
          </div>


        </div>
      </Section>

      {/* LATEST EVENT (image on the right on desktop) */}
      <Section title="Latest Event">
        <div className="split split-right-image">
          <div className="split-text">
            <h3>Something with Gphi idk</h3>
            <p>
              Brothers were chilling and casually doing some fundraising for
              the girls in gphi. It was a great time and we all had fun.
              Connor Lockwood was there too. he's cool.
            </p>
            <a className="btn btn-ghost" href="#/rush" aria-label="See upcoming events">
              See Upcoming Events
            </a>
          </div>
          <div className="split-image">
            <img src={LatestEventImg} alt="Recent ΣΦΔ engineering showcase" />
          </div>
        </div>
      </Section>

      {/* INSTAGRAM */}
      <Section title="Instagram">
        <InstagramFeed />
      </Section>

      {/* CONTACT */}
      <Section title="Contact">
        <div className="contact">
          <div className="contact-card">
            <h3>Get in Touch</h3>
            <p>
              Interested in rush, collaborating on an event, or have other questions? Reach out and we’ll get back to you.
            </p>
            <ul className="contact-list">
              <li>
                Email:{" "}
                <a href="mailto:brothers@sigphipsi.com">
                  brothers@sigphipsi.com
                </a>
              </li>
              <li>
                Instagram:{" "}
                <a href="https://www.instagram.com/ud.spd/?hl=en" target="_blank" rel="noreferrer">
                  @ud.spd
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}

/** -------------------------------
 *  RUSH
 *  ------------------------------- */
function RushPage() {
  return (
    <Section title="Rush Events">
      <p>
        Interested in joining? Come meet the brothers and learn what ΣΦΔ is all about. Events are
        open to all majors with a passion for brotherhood and community.
      </p>
      <p className="muted">Rush for the fall 2025 semester has ended. Check back next semester for updates!</p>

      <div className="event-stack">
        {/* Classroom Event */}
        <article className="card event-card">
          <div className="event-grid">
            <div className="event-content">
              <h3>Classroom Event</h3>
              <p className="muted">Wednesday, September 3<sup>rd</sup> · 7–9 PM</p>
              <p>Overview of our chapter, values, and Q&amp;A with the exec board.</p>
            </div>
            <div className="event-media">
              <img src={classroomRush} alt="Classroom rush event" />
            </div>
          </div>
        </article>

        {/* 182 West Main St */}
        <article className="card event-card">
          <div className="event-grid">
            <div className="event-content">
              <h3>182 West Main St</h3>
              <p className="muted">Thursday, September 11<sup>th</sup> · 6:30–8:30 PM</p>
              <p>Casual hang — meet brothers, grab food, and learn about rush.</p>
            </div>
            <div className="event-media">
              <img src={westmainRush} alt="182 West Main St rush event" />
            </div>
          </div>
        </article>

        {/* Grotto Pizza */}
        <article className="card event-card">
          <div className="event-grid">
            <div className="event-content">
              <h3>Grotto Pizza</h3>
              <p className="muted">Tuesday, September 16<sup>th</sup> · 6–8 PM</p>
              <p>Meet &amp; greet over slices — talk campus life and meet others rushing.</p>
            </div>
            <div className="event-media">
              <img src={grottosRush} alt="Grotto Pizza rush event" className="obj-up" />
            </div>
          </div>
        </article>

        <p className="muted" style={{ marginTop: 8 }}>
          Dates/times subject to change — follow us on Instagram for updates.
        </p>
      </div>
    </Section>
  );
}


/** -------------------------------
 *  PHILANTHROPY
 *  ------------------------------- */
function PhilanthropyPage() {
  return (
    <Section title="Philanthropy & Outreach">
      <p>
        We give back through campus philanthropy and community outreach. Join us at these events
        and help us support UDance and local causes.
      </p>

      <div className="event-stack">
        {/* Closest upcoming FIRST */}
        <article className="card event-card">
          <div className="event-grid">
            <div className="event-content">
              <h3>UDairy Ice Cream Truck with GPhi 🍦🚙</h3>
              <p className="muted">Monday, September 22 · 2–4 PM</p>
              <p><strong>Location:</strong> Trabant Patio</p>
              <p>Sweet-treat fundraiser supporting UDance — grab a cone, support a cause.</p>
            </div>
            <div className="event-media">
              <img src={icecreamPic} alt="UDairy Ice Cream Truck with GPhi fundraiser" />
            </div>
          </div>
        </article>

        <article className="card event-card">
          <div className="event-grid">
            <div className="event-content">
              <h3>Pumpkin Painting with Women In Healthcare 🎃👩‍⚕️</h3>
              <p className="muted">Tuesday, October 23 · Time/Location TBD</p>
              <p><strong>Location:</strong> Likely West Main — details coming soon.</p>
              <p>Fall-themed collab benefiting UDance and campus charities.</p>
            </div>
            <div className="event-media">
              <img src={pumpkinPic} alt="Pumpkin Painting with Women In Healthcare" />
            </div>
          </div>
        </article>

        <p className="muted" style={{ marginTop: 8 }}>
          Details subject to change — follow us on Instagram for updates.
        </p>
      </div>
    </Section>
  );
}


/** -------------------------------
 *  UDANCE
 *  ------------------------------- */
function UDancePage() {
  return (
    <Section title="ΣΦΔ x UDance">
      <p>
        UDance is a student-run philanthropy supporting children and families affected by childhood
        cancer. ΣΦΔ contributes through fundraising, event participation, and volunteering all year.
      </p>
      <div className="highlight">
        <strong>How we help:</strong>
        <ul>
          <li>Team fundraising drives and corporate matching</li>
          <li>Volunteering at UDance events</li>
          <li>Partnering with other orgs to maximize impact</li>
        </ul>
      </div>
    </Section>
  );
}

/** -------------------------------
 *  BROTHERS (easy to edit in code)
 *  ------------------------------- */
type Brother = { id: string; name: string; role: string; photoUrl?: string };

/** Add brothers here — just push objects to this array. */
const BROTHERS: Brother[] = [
  { id: "president", name: "Khai McCaskill", role: "President", photoUrl: "" },
  { id: "internal-vp", name: "Shawn Saxon", role: "Internal Vice President", photoUrl: "" },
  { id: "external-vp", name: "Stef Rabeno", role: "External Vice President", photoUrl: "" },
  { id: "business-manager", name: "AJ Nash", role: "Business Manager", photoUrl: "" },
  { id: "risk-chair", name: "Will Hastings", role: "Risk Chair", photoUrl: "" },
  { id: "philanthropy-chair", name: "Baxter Gallagher", role: "Philanthropy Chair", photoUrl: "" },
  { id: "secretary", name: "Teddy Romanowski", role: "Secretary", photoUrl: "" },
  { id: "social-chair-1", name: "Gregg Marella", role: "Social Chair #1", photoUrl: "" },
  { id: "social-chair-2", name: "Eddie Badolato", role: "Social Chair #2", photoUrl: "" },
  { id: "new-member-educator", name: "Paul Edelman", role: "New Member Educator", photoUrl: "" },
  { id: "chaplain", name: "Tom Ingenito", role: "Chaplain", photoUrl: TomIngenitoPic },
  { id: "dei-chair", name: "Connor Lockwood", role: "DEI Chair", photoUrl: "" },
  { id: "rush-chair-1", name: "Kyle Burke", role: "Rush Chair #1", photoUrl: "" },
  { id: "rush-chair-2", name: "Tim Scott", role: "Rush Chair #2", photoUrl: "" },
];

function BrothersPage() {
  return (
    <Section title="Brothers">
      <p>Meet the brothers proudly serving on the 2024–2025 SPD Executive Board.</p>
      <div className="brother-grid">
        {BROTHERS.map((b) => (
          <div key={b.id} className="brother-card">
            <div className="brother-photo">
              {b.photoUrl ? (
                <img src={b.photoUrl} alt={b.name} />
              ) : (
                <div className="photo-placeholder">Photo</div>
              )}
            </div>
            <div className="brother-info">
              <div className="brother-name">{b.name}</div>
              <div className="brother-role">{b.role}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/** -------------------------------
 *  HISTORY
 *  ------------------------------- */

/** -------------------------------
 *  APP
 *  ------------------------------- */
export default function App() {
  const { page, navigate } = useHashRoute("home");

  return (
    <div className="app">
      <NavBar page={page} onNavigate={navigate} />
      <main className="main">
        {page === "home" && <HomePage />}
        {page === "rush" && <RushPage />}
        {page === "philanthropy" && <PhilanthropyPage />}
        {page === "udance" && <UDancePage />}
        {page === "brothers" && <BrothersPage />}
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} ΣΦΔ - Engineering Fraternity
      </footer>
    </div>
  );
}
