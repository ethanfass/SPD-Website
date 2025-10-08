import { useEffect, useState } from "react";
import "./App.css";
import spdLogo from "./assets/logos/spd-logo.png";
import udLogo from "./assets/logos/ud-logo.svg";
import InstagramFeed from "./components/InstagramFeed";
import classroomRush from "./assets/rush-pics/classroom.jpg";
import westmainRush from "./assets/rush-pics/westmain.jpg";
import grottosRush from "./assets/rush-pics/grottos.jpg";
import pumpkinPic from "./assets/phila-pics/pumpkin.jpg";
import ContactPhoto from "./assets/general-pics/spd-flag.jpg";

import LatestEventImg from "./assets/phila-pics/perkins.jpg";
import icecreamPic from "./assets/phila-pics/icecream.jpg";

import Udance1 from "./assets/udance-pics/udance-1.jpg";
import UdanceBaxter from "./assets/udance-pics/udance-baxter-john.jpg";
import UdanceCharlie from "./assets/udance-pics/udance-charlie.jpg";
import UdanceDogs from "./assets/udance-pics/udance-dogs.jpg";
import UdanceEvent from "./assets/udance-pics/udance-event.jpg"
import UdanceJared from "./assets/udance-pics/udance-jared.jpg"
import UdanceStef from "./assets/udance-pics/udance-stef.jpg";
import UdanceTim from "./assets/udance-pics/udance-tim.jpg";
import UdanceTiny from "./assets/udance-pics/udance-tiny.jpg";

import TomIngenitoPic from "./assets/brother-pics/tom-ingenito.jpg";
import AjNashPic from "./assets/brother-pics/aj-nash.png";
import BaxterGallagherPic from "./assets/brother-pics/baxter-gallagher.png";
import EddieBadolatoPic from "./assets/brother-pics/eddie-badolato.png";
import GreggMarellaPic from "./assets/brother-pics/gregg-marella.png";
import KhaiMccaskillPic from "./assets/brother-pics/khai-mccaskill.png";
import ShawnSaxonPic from "./assets/brother-pics/shawn-saxon.png";
import StefRabenoPic from "./assets/brother-pics/stef-rabeno.png";
import TeddyRomanowskiPic from "./assets/brother-pics/teddy-romanowski.png";
import WillHastingsPic from "./assets/brother-pics/will-hastings.png";
import JackCarrPic from "./assets/brother-pics/jack-carr.jpeg";
import PaulEdelmanPic from "./assets/brother-pics/paul-edelman.png";
import ConnorLockwoodPic from "./assets/brother-pics/connor-lockwood.jpg";
import BrandonTaubPic from "./assets/brother-pics/brandon-taub.jpg";


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
          style={{fontSize: "17px"}}
        >
          ΣΦΔ Fraternity
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
          <img src={spdLogo} alt="SPD logo" className="outlined-img"/>
          <span className="logo-x">×</span>
          <img src={udLogo} alt="UD logo" className="outlined-img2"/>
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
              A fraternity with an engineering focus at UD.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#/rush">See Rush Events</a>
              <a className="btn btn-ghost" href="#/udance">Our UDance Efforts</a>
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
              <li>Founded April 11, 1999, over 25 years serving UD students</li>
              <li>Symbols &amp; heritage: red/black, the Castle, and <em>Pro Bono Professionis</em> (for the good of the profession)</li>
              <li>Chapter traditions: professional ceremonies, study halls, and project spotlights</li>
              <li>Strong alumni network supporting internships and early careers</li>
            </ul>
          </div>
          <div className="about-card">
            <h3>Impact &amp; Community</h3>
            <ul className="checks">
              <li>UDance fundraising year round through drives, events, and partnerships</li>
              <li>Regular philanthropy events that support campus and local causes</li>
              <li>Welcoming community of engineers &amp; friends, hang out, collaborate, and study with one another</li>
              <li>Positive Greek life presence at UD: respect, inclusivity, and leadership by example</li>
            </ul>
          </div>


        </div>
      </Section>
      <Section title="Latest Event">
        <div className="contact-card">
          <div className="split split-right-image">
            <div className="split-text">
              <h3>SPD × GPhi × Phi Tau Dunkin’ Donuts & Coffee Sale ☕🍩</h3>
              <p>
                Brothers of SPD, sisters of GPhi, and brothers of Phi Tau joined forces
                for a Dunkin’ Donuts and coffee sale at Perkins Student Center. Students
                grabbed their morning pick-me-up while helping raise funds in support of
                UDance and local causes.
              </p>
              <a className="btn btn-special" href="#/rush" aria-label="See upcoming events">
                See Upcoming Events
              </a>
            </div>
            <div className="split-image">
              <img src={LatestEventImg} alt="SPD × GPhi × Phi Tau Dunkin’ Donuts and Coffee Sale at Perkins" />
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
          <article className="contact-card contact-card--split">
            <div className="split split-right-image">
              {/* Left: text */}
              <div className="contact-body">
                <h3>Get in Touch</h3>
                <p>
                  Interested in rush, collaborating on an event, or have other questions?
                  <br />Reach out and we’ll get back to you.
                </p>

                <ul className="bulletcaret">
                  <li>
                    Email:{" "}
                    <a href="mailto:brothers@sigphipsi.com">brothers@sigphipsi.com</a>
                  </li>
                  <li>
                    Instagram:{" "}
                    <a
                      href="https://www.instagram.com/ud.spd/?hl=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @ud.spd
                    </a>
                  </li>
                </ul>
              </div>

              {/* Right: image */}
              <div className="split-image contact-image">
                <img src={ContactPhoto} alt="ΣΦΔ tabling / brothers on campus" />
              </div>
            </div>
          </article>
        </div>
      </Section>

    </>
  );
}

function RushPage() {
  return (
    <Section title="Rush Events">
      <div className="lead">
        <p>
          Interested in joining? Come meet the brothers and learn what ΣΦΔ is all about. Events are
          open to all majors with a passion for brotherhood and community.
        </p>
        <p className="urgent">Rush for the fall 2025 semester has ended. Check back next semester for updates!</p>
      </div>
      <div className="event-stack">
        <article className="card event-card">
          <div className="event-grid">
            <div className="event-content">
              <h3>Classroom Event</h3>
              <p className="muted">Wednesday, September 3<sup>rd</sup> · 7 to 9 PM</p>
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
              <p className="muted">Thursday, September 11<sup>th</sup> · 6:30 to 8:30 PM</p>
              <p>Casual hang, meet brothers, grab food, and learn about rush.</p>
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
              <p className="muted">Tuesday, September 16<sup>th</sup> · 6 to 8 PM</p>
              <p>Meet &amp; greet over pizza, talk campus life and meet others rushing.</p>
            </div>
            <div className="event-media">
              <img src={grottosRush} alt="Grotto Pizza rush event" className="obj-up" />
            </div>
          </div>
        </article>

        <p className="muted" style={{ marginTop: 8 }}>
          Dates/times subject to change, follow us on Instagram @ud.spd for updates.
        </p>
      </div>
    </Section>
  );
}

function PhilanthropyPage() {
  return (
    <>
      <Section title="Philanthropy & Outreach">
        <p className="lead">
          We give back through campus philanthropy and community outreach. Join us at these events
          and help us support UDance and local causes.
        </p>

        <div className="event-stack">
          <article className="cardx event-card">
            <div className="event-grid">
              <div className="event-content">
                <h3>Pumpkin Painting with Women In Healthcare 🎃</h3>
                <p className="muted">Tuesday, October 23 · Time TBD</p>
                <p><strong>Location:</strong> 182 West Main Street</p>
                <p>Fall themed collab benefiting UDance and campus charities.</p>
              </div>
              <div className="event-media">
                <img src={pumpkinPic} alt="Pumpkin Painting with Women In Healthcare" />
              </div>
            </div>
          </article>

          <p className="muted" style={{ marginTop: 8 }}>
            Details subject to change, follow us on Instagram @ud.spd for updates.
          </p>
        </div>
      </Section>

      <Section title="Previous Philanthropy Events">
        <p className="lead">
          A look back at some of our recent philanthropy and outreach efforts that brought
          the community together and supported great causes.
        </p>

        <div className="event-stack">
          <article className="card event-card">
            <div className="event-grid">
              <div className="event-content">
                <h3>UDairy Ice Cream Truck with GPhi 🍦</h3>
                <p className="muted">Fall 2025 · Outside Trabant Food Court</p>
                <p>
                  SPD brothers and GPhi sisters teamed up with UDairy to sell ice cream
                  outside Trabant. The event gave students a chance to grab a treat while
                  supporting our UDance charity efforts.
                </p>
              </div>
              <div className="event-media">
                <img src={icecreamPic} alt="UDairy Ice Cream Truck with GPhi" />
              </div>
            </div>
          </article>
        </div>
      </Section>
    </>
  );
}


const UDANCE_PICS = [UdanceTiny, UdanceDogs, UdanceEvent, UdanceBaxter, UdanceStef, UdanceJared, UdanceTim, Udance1, UdanceCharlie];

const LAST_YEAR_SPD_TOTAL = "$15,075";

function UDancePage() {
  return (
    <Section title="ΣΦΔ × UDance">
      <div className="udance-intro">
        <p className="lead">
          UDance is the University of Delaware’s year long, student run philanthropy benefiting
          <strong> The Andrew McDonough B+ Foundation</strong>, which supports families of children
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
          <li>Fundraising drives (food trucks, dunk tank &amp; pie smashing, canning, etc.)</li>
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
      <h3>UDance & Other Philanthropy Photos</h3>
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
    <Section title="Brother Highlights">
      <p className="lead">
        A running showcase of what ΣΦΔ brothers are building, researching, and achieving, on &amp; off campus.
        These highlights celebrate our drive, creativity, and commitment to making an impact.
      </p>

      <div className="event-stack">
        <article className="card event-card">
          <div className="event-grid">
            <div className="event-content">
              <h3>HackUDel Winner, “SmartPark”</h3>
              <p className="muted">Timespan: Feb to Mar 2025</p>
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
        <article className="cardx event-card">
          <div className="event-grid">
            <div className="event-content">
              <h3>Co-op at DuPont, Process Engineering</h3>
              <p className="muted">Timespan: Summer 2024</p>
              <p>
                Scoped and implemented a new heat exchange monitoring workflow that reduced downtime by 12%. Built
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

type RushClass = "Beta-Tau" | "Beta-Upsilon" | "Beta-Phi" | "Beta-Chi" | "Beta-Psi" | "Beta-Omega" | "Gamma-Alpha";

type Brother = {
  id: string;
  name: string;
  role: string;
  classYear?: ClassYear;
  photoUrl?: string;
  rushClass?: RushClass;
};

const BROTHERS: Brother[] = [
  { id: "president", name: "Khai McCaskill", role: "President", classYear: "Senior", photoUrl: KhaiMccaskillPic, rushClass: "Beta-Tau"},
  { id: "internal-vp", name: "Shawn Saxon", role: "Internal Vice President", classYear: "Senior", photoUrl: ShawnSaxonPic, rushClass: "Beta-Upsilon"},
  { id: "external-vp", name: "Stef Rabeno", role: "External Vice President", classYear: "Senior", photoUrl: StefRabenoPic, rushClass: "Beta-Tau"},
  { id: "business-manager", name: "AJ Nash", role: "Business Manager", classYear: "Senior", photoUrl: AjNashPic, rushClass: "Beta-Upsilon"},
  { id: "risk-chair", name: "Will Hastings", role: "Risk Chair", classYear: "Junior", photoUrl: WillHastingsPic, rushClass: "Beta-Chi"},
  { id: "philanthropy-chair", name: "Baxter Gallagher", role: "Philanthropy Chair", classYear: "Junior", photoUrl: BaxterGallagherPic, rushClass: "Beta-Phi"},
  { id: "secretary", name: "Teddy Romanowski", role: "Secretary", classYear: "Junior", photoUrl: TeddyRomanowskiPic, rushClass: "Beta-Chi"},
  { id: "social-chair-1", name: "Gregg Marella", role: "Social Chair", classYear: "Senior", photoUrl: GreggMarellaPic, rushClass: "Beta-Upsilon"},
  { id: "social-chair-2", name: "Eddie Badolato", role: "Social Chair", classYear: "Senior", photoUrl: EddieBadolatoPic, rushClass: "Beta-Phi"},
  { id: "new-member-educator", name: "Paul Edelman", role: "New Member Educator", classYear: "Junior", photoUrl: PaulEdelmanPic, rushClass: "Beta-Phi"},
  { id: "assistant-new-member-educator", name: "Tyler Urie", role: "Assistant New Member Educator", classYear: "Senior", photoUrl: "", rushClass: "Beta-Upsilon"},
  { id: "accreditation-chair", name: "Jack Carr", role: "Accreditation Chair", classYear: "Junior", photoUrl: JackCarrPic, rushClass: "Beta-Phi"},
  { id: "dei-chair", name: "Connor Lockwood", role: "DEI Chair", classYear: "Senior", photoUrl: ConnorLockwoodPic, rushClass: "Beta-Phi"},
  { id: "chaplain", name: "Tom Ingenito", role: "Chaplain/Unique Chair", classYear: "Junior", photoUrl: TomIngenitoPic, rushClass: "Beta-Phi"},
  { id: "im-chair", name: "Ethan Fassnacht", role: "Intramural Chair", classYear: "Senior", photoUrl: "", rushClass: "Beta-Phi"},
  { id: "inquisitor", name: "Brandon Taub", role: "Inquisitor", classYear: "Junior", photoUrl: BrandonTaubPic, rushClass: "Beta-Phi"},
  //{ id: "rush-chair-1", name: "Kyle Burke", role: "Rush Chair #1", classYear: "Sophomore", photoUrl: "", rushClass: "Beta-Psi"},
  //{ id: "rush-chair-2", name: "Tim Scott", role: "Rush Chair #2", classYear: "Sophomore", photoUrl: "", rushClass: "Beta-Omega"},
];

function BrothersPage() {
  return (
    <Section title="Brother List">
      <p className="lead">Meet the brothers proudly serving on the 2024–2025 SPD Executive Board.</p>
      <div className="brother-grid">
        {BROTHERS.map((b) => (
          <div key={b.id} className="brother-card" data-id={b.id}>
              <div className="brother-photo">
                {b.photoUrl ? <img src={b.photoUrl} alt={b.name} /> : <div className="photo-placeholder">Photo</div>}
              </div>
            <div className="brother-info">
              <div className="brother-name">{b.name}</div>
              <div className="brother-meta brother-meta--stacked">
                <span className="role-badge">{b.role}</span>
                {b.classYear && <span className="year-muted">{b.classYear} - {b.rushClass}</span>}
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
        © {new Date().getFullYear()} ΣΦΔ Fraternity
      </footer>
    </div>
  );
}
