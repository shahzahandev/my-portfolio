import { useRef, useState } from "react";
import { Linkedin, Github, Facebook, Mail } from "lucide-react";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shahzahan-siraj-7b5ba7304/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/shahzahandev", icon: Github },
  { label: "Facebook", href: "https://www.facebook.com/share/1KJkqwPErt/", icon: Facebook },
  { label: "Email", href: "mailto:shahzahansiraj516@gmail.com", icon: Mail }
];

const Hero = () => {
  const sceneRef = useRef(null);
  const grabOriginRef = useRef(null);
  const [aim, setAim] = useState({ x: 0, y: 0 });
  const [grabbing, setGrabbing] = useState(false);

  const moveLamp = (event) => {
    if (!sceneRef.current) return;
    if (!grabbing || !grabOriginRef.current) return;
    const origin = grabOriginRef.current;
    const x = origin.aim.x + (event.clientX - origin.x) / 90;
    const y = origin.aim.y + (event.clientY - origin.y) / 100;
    setAim({ x: Math.max(-1.35, Math.min(1.35, x)), y: Math.max(-1, Math.min(1.3, y)) });
  };

  const toggleGrab = (event) => {
    event.preventDefault();
    if (grabbing) {
      setGrabbing(false);
      grabOriginRef.current = null;
      return;
    }
    grabOriginRef.current = { x: event.clientX, y: event.clientY, aim: { ...aim } };
    setGrabbing(true);
  };

  return (
    <section
      id="home"
      ref={sceneRef}
      onPointerMove={moveLamp}
      className={`lamp-scene relative isolate\
         overflow-hidden ${grabbing ? "lamp-scene--grabbing" : ""}`}
    >
      <div
        className="hanging-lamp hanging-lamp--on"
        style={{ "--lamp-x": `${aim.x * 90}px`, "--lamp-tilt": `${aim.x * 8}deg`, "--lamp-drop": `${aim.y * 100}px` }}
        onDoubleClick={toggleGrab}
      >
        <span className="lamp-cord" />
        <span className="lamp-cap" />
        <span className="lamp-shade"><i /></span>
        <span className="lamp-bulb" />
      </div>

      <div className="lamp-scene__content container-shell relative z-10 flex flex-col items-center justify-center px-5 text-center">
        <h1 className="lamp-title mt-5 font-display font-bold tracking-tight">
          <span className="lamp-title__name">
            <span className="lamp-title__lead"><span>SHAHZAHAN</span><i aria-hidden="true">✳</i></span>
            <span className="lamp-title__surname">SIRAJ</span>
          </span>
          <span className="lamp-title__role">
            <span className="lamp-title__role-word">MERN</span>
            <span className="lamp-title__role-tail">
              <span className="lamp-title__role-word">DEVELOPER</span>
              <i aria-hidden="true">✳</i>
            </span>
          </span>
        </h1>
        <nav className="hero-social-bar" aria-label="Social links">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={label}
              className="hero-social-link"
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noreferrer"}
            >
              <Icon size={19} strokeWidth={1.8} />
            </a>
          ))}
        </nav>
        <p className="lamp-copy mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
          I build modern, responsive and scalable web applications using React, Node.js, Express.js and MongoDB.
        </p>
      </div>
    </section>
  );
};

export default Hero;
