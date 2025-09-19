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

import LatestEventImg from "./assets/brother-pics/tom-ingenito.jpg";

type Page = "home" | "rush" | "philanthropy" | "udance" | "highlights" | "brothers";

function useHashRoute(defaultPage: Page = "home") {
  const parseHash = (): Page => {
    const raw = window.location.hash.replace(/^#\/?/, "").toLowerCase();
    const valid: Page[] = ["home", "rush", "philanthropy", "udance", "highlights", "brothers"];
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
    { key: "highlights", label: "Highlights" },
    { key: "brothers", label: "Brothers" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <div
          className="brand brand--ring border"
          onClick={() => onNavigate("home")}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onNavigate("home"); }}
          role="button"
          tabIndex={0}
          aria-label="Go to Home"
        >
          ΣΦΔ - Social Engineering Fraternity
        </div>
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
        <div className="nav-logos">
          <img src={spdLogo} alt="SPD logo" />
          <span className="logo-x">×</span>
          <img src={udLogo} alt="UD logo" />
        </div>
      </div>
    </header>
  );
}

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

function HomePage() {
  return (
    <>
      <div className="hero">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <div className="hero-panel">          {/* ← add this */}
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
      </div>

      <Section title="About Us" id="about">
        <p className="lead">
          We’re a community of engineers and friends dedicated to professional growth, campus impact,
          and brotherhood.
        </p>

        <div className="about-grid">
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
      <Section title="Latest Event">
        <div className="contact-card">
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
        </div>
      </Section>
      <Section title="Instagram">
        <div className="about-card">
          <InstagramFeed />
        </div>
      </Section>
      <Section title="Contact">
        <div className="contact">
          <div className="contact-card">
            <h3>Get in Touch</h3>
            <p>
              Interested in rush, collaborating on an event, or have other questions? Reach out and we’ll get back to you.
            </p>
            <ul className="bulletcaret">
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

function RushPage() {
  return (
    <Section title="Rush Events">
      <p>
        Interested in joining? Come meet the brothers and learn what ΣΦΔ is all about. Events are
        open to all majors with a passion for brotherhood and community.
      </p>
      <p className="muted">Rush for the fall 2025 semester has ended. Check back next semester for updates!</p>

      <div className="event-stack">
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
        <article className="cardx event-card">
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

function PhilanthropyPage() {
  return (
    <Section title="Philanthropy & Outreach">
      <p>
        We give back through campus philanthropy and community outreach. Join us at these events
        and help us support UDance and local causes.
      </p>

      <div className="event-stack">
        <article className="cardx event-card">
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

import U1 from "./assets/brother-pics/tom-ingenito.jpg";
import U2 from "./assets/brother-pics/tom-ingenito.jpg";
import U3 from "./assets/brother-pics/tom-ingenito.jpg";

const UDANCE_PICS = [U1, U2, U3, U2, U3, U1, U3, U1, U2];

const LAST_YEAR_SPD_TOTAL = "$1,000,000";

function UDancePage() {
  return (
    <Section title="ΣΦΔ × UDance">
      <div className="udance-intro">
        <p className="lead">
          UDance is the University of Delaware’s year-long, student-run philanthropy benefiting
          <strong>The Andrew McDonough B+ Foundation</strong>, which supports families of children
          with cancer and funds pediatric cancer research.

        </p>
        <div className="udance-points">
          <div className="about-card">
            <h4>Who we raise for</h4>
            <p>
              The B+ Foundation honors Andrew McDonough and helps families nationwide with
              financial aid and emotional support, while advancing research.
            </p>
          </div>
          <div className="about-card">
            <h4>Why it matters</h4>
            <p>
              UD students rally all year at events, campaigns, and a spring dance marathon to
              make a direct impact on kids and families facing childhood cancer.
            </p>
          </div>
        </div>
      </div>

      <div className="udance-spd card">
        <h3>ΣΦΔ’s Role</h3>
        <ul className="bulletcaret">
          <li>Fundraising drives (food trucks, dunk tank & pie smashing, canning, etc.)</li>
          <li>Volunteering and event support throughout the year</li>
          <li>Partnering with other orgs to boost outreach and donations</li>
        </ul>
        <div className="udance-total">
          <span className="total-label">Last year ΣΦΔ raised:</span>
          <span className="total-amount">{LAST_YEAR_SPD_TOTAL}</span>
        </div>
      </div>
      <br />
      <div className="about-card">
      <div className="udance-collage">
        {UDANCE_PICS.map((src, i) => (
          <div key={i} className="udance-tile">
            <img src={src} alt={`UDance collage ${i + 1}`} />
          </div>
        ))}
      </div>
      </div>
    </Section>
  );
}

function HighlightsPage() {
  return (
    <Section title="Highlights">
      <p>
        A running showcase of what ΣΦΔ brothers are building, researching, and achieving, on & off campus.
        These highlights celebrate our drive, creativity, and commitment to making an impact.
      </p>

      <div className="event-stack">
        <article className="card event-card">
          <div className="event-grid">
            <div className="event-content">
              <h3>HackUDel Winner — “SmartPark”</h3>
              <p className="muted">Timespan: Feb–Mar 2025</p>
              <p>
                Team of four brothers built a computer-vision parking lot counter and a mobile app that predicts spot
                availability in real time. Deployed a tiny YOLO model to a Raspberry Pi with on-device inference and a
                lightweight Flask API. Took 1<sup>st</sup> place overall.
              </p>
            </div>
            <div className="event-media">
              <img src={classroomRush} alt="SmartPark project highlight" />
            </div>
          </div>
        </article>
        <article className="card event-card">
          <div className="event-grid">
            <div className="event-content">
              <h3>Co-op at DuPont — Process Engineering</h3>
              <p className="muted">Timespan: Summer 2024</p>
              <p>
                Scoped and implemented a new heat-exchange monitoring workflow that reduced downtime by 12%. Built
                an automated dashboard in Python for weekly KPI reviews and collaborated with safety to update SOPs.
              </p>
            </div>
            <div className="event-media">
              <img src={pumpkinPic} alt="Process engineering co-op highlight" />
            </div>
          </div>
        </article>
      </div>
    </Section>
  );
}

type ClassYear = "Freshman" | "Sophomore" | "Junior" | "Senior" | "Alumni";

type Brother = {
  id: string;
  name: string;
  role: string;
  classYear?: ClassYear;
  photoUrl?: string;
};

const BROTHERS: Brother[] = [
  { id: "president", name: "Khai McCaskill", role: "President", classYear: "Senior", photoUrl: "" },
  { id: "internal-vp", name: "Shawn Saxon", role: "Internal Vice President", classYear: "Senior", photoUrl: "" },
  { id: "external-vp", name: "Stef Rabeno", role: "External Vice President", classYear: "Senior", photoUrl: "" },
  { id: "business-manager", name: "AJ Nash", role: "Business Manager", classYear: "Senior", photoUrl: "" },
  { id: "risk-chair", name: "Will Hastings", role: "Risk Chair", classYear: "Junior", photoUrl: "" },
  { id: "philanthropy-chair", name: "Baxter Gallagher", role: "Philanthropy Chair", classYear: "Junior", photoUrl: "" },
  { id: "secretary", name: "Teddy Romanowski", role: "Secretary", classYear: "Junior", photoUrl: "" },
  { id: "social-chair-1", name: "Gregg Marella", role: "Social Chair #1", classYear: "Senior", photoUrl: "" },
  { id: "social-chair-2", name: "Eddie Badolato", role: "Social Chair #2", classYear: "Senior", photoUrl: "" },
  { id: "new-member-educator", name: "Paul Edelman", role: "New Member Educator", classYear: "Junior", photoUrl: "" },
  { id: "assistant-new-member-educator", name: "Tyler Urie", role: "Assistant New Member Educator", classYear: "Senior", photoUrl: "" },
  { id: "chaplain", name: "Tom Ingenito", role: "Chaplain", classYear: "Junior", photoUrl: TomIngenitoPic },
  { id: "dei-chair", name: "Connor Lockwood", role: "DEI Chair", classYear: "Senior", photoUrl: "" },
  { id: "accreditation-chair", name: "Jack Carr", role: "Accreditation Chair", classYear: "Junior", photoUrl: ""},
  { id: "rush-chair-1", name: "Kyle Burke", role: "Rush Chair #1", classYear: "Sophomore", photoUrl: "" },
  { id: "rush-chair-2", name: "Tim Scott", role: "Rush Chair #2", classYear: "Sophomore", photoUrl: "" },
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
              <div className="brother-meta brother-meta--stacked">
                <span className="role-badge">{b.role}</span>
                {b.classYear && <span className="year-muted">{b.classYear}</span>}
              </div>
            </div>

          </div>
        ))}
      </div>
    </Section>
  );
}

export default function App() {
  const { page, navigate } = useHashRoute("home");

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      document.documentElement.style.setProperty("--scroll", scrolled + "%");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = page === "home";   // <-- which gap to use?

  return (
    <div className={`app bg-sides-stripes bg-page-diagonal ${isHome ? "is-home" : "is-regular"}`}>
      <div className="scroll-progress" />
      <NavBar page={page} onNavigate={navigate} />
      <main className="main">
        {page === "home" && <HomePage />}
        {page === "rush" && <RushPage />}
        {page === "philanthropy" && <PhilanthropyPage />}
        {page === "udance" && <UDancePage />}
        {page === "highlights" && <HighlightsPage />}
        {page === "brothers" && <BrothersPage />}
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} ΣΦΔ - Engineering Fraternity
      </footer>
    </div>
  );
}
