import instaPost1 from "../assets/instagram/insta1.jpg";
import instaPost2 from "../assets/instagram/insta2.jpg";
import instaPost3 from "../assets/instagram/insta3.jpg";

type Post = {
  id: string;
  img: string;
  link: string;
  alt?: string;
};

const POSTS: Post[] = [
  {
    id: "1",
    img: instaPost1,
    link: "https://www.instagram.com/p/DNYTePKt07q/?img_index=1",
    alt: "Rush event",
  },
  {
    id: "2",
    img: instaPost2,
    link: "https://www.instagram.com/p/DKLJm8MtPj9/?img_index=1",
    alt: "Project showcase",
  },
  {
    id: "3",
    img: instaPost3,
    link: "https://www.instagram.com/p/DJidOyrMDQJ/",
    alt: "Service event",
  },
];

export default function InstagramFeed() {
  return (
    <div className="insta-grid">
      {POSTS.map((p) => (
        <a
          key={p.id}
          className="insta-tile"
          href={p.link}
          target="_blank"
          rel="noreferrer"
          title={p.alt || "Instagram post"}
        >
          <img
            src={p.img}
            alt={p.alt || "Instagram post"}
            loading="lazy"
            referrerPolicy="no-referrer"   // <-- sometimes helps with IG CDN
            crossOrigin="anonymous"        // <-- optional
          />
        </a>
      ))}
    </div>
  );
}
