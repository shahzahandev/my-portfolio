import { useRef } from "react";
import { Code2, LayoutDashboard, Server, Smartphone } from "lucide-react";
import { useGsap } from "../hooks/useGsap.js";

const stats = [
  { label: "MERN Stack Developer", icon: Code2 },
  { label: "Full Stack Development", icon: LayoutDashboard },
  { label: "REST API Development", icon: Server },
  { label: "Responsive Web Design", icon: Smartphone }
];

const About = () => {
  const sectionRef = useRef(null);

  useGsap(sectionRef, ({ gsap }) => {
    gsap.from(".about-reveal", {
      y: 30,
      opacity: 0,
      duration: 0.75,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 72%"
      }
    });
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding about-section bg-white dark:bg-zinc-900/50">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="about-reveal">
            <span className="eyebrow">About Me</span>
            <h2 className="section-title mt-5">Building useful, clean full-stack experiences.</h2>
          </div>

          <div className="about-reveal">
            <p className="section-copy mt-0">
              I am a junior MERN Stack Developer who enjoys building modern full-stack web
              applications with clean user interfaces, practical backend systems, and responsive
              layouts that feel smooth across devices.
            </p>
            <p className="mt-5 text-base leading-8 text-zinc-600 dark:text-zinc-300 md:text-lg">
              My current experience includes React.js, JavaScript, Node.js, Express.js, MongoDB,
              REST APIs, JWT Authentication, Cloudinary, and responsive UI development. I care
              about readable code, strong fundamentals, and building projects that are easy to use.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-zinc-200 bg-stone-50 p-5 dark:border-white/10 dark:bg-white/[0.045]"
                >
                  <Icon className="text-emerald-600 dark:text-emerald-300" size={24} />
                  <p className="mt-4 font-semibold text-zinc-900 dark:text-white">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
