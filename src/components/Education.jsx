import { useRef } from "react";
import { GraduationCap } from "lucide-react";
import { useGsap } from "../hooks/useGsap.js";

const education = [
  {
    degree: "Master's of Arts (M.A.)",
    subject: "Bangla Literature",
    year: "2025",
    institution: "Government Titumir College"
  },
  {
    degree: "Bachelor of Arts (B.A.)",
    subject: "Bangla Literature",
    year: "2024",
    institution: "Government Titumir College"
  }
];

const Education = () => {
  const sectionRef = useRef(null);

  useGsap(sectionRef, ({ gsap }) => {
    gsap.from(".education-card", {
      y: 28,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 72%"
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="section-padding education-section">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <span className="eyebrow">Education</span>
            <h2 className="section-title mt-5">Building Knowledge. Growing Every Day.</h2>
            <p className="section-copy">
              My academic journey in Bangla Literature has helped me develop communication, analytical thinking, and problem-solving skills. Alongside my academic background, I continue to strengthen my technical expertise in MERN stack development and build practical web applications.
            </p>
          </div>

          <div className="relative grid gap-5">
            <div className="absolute left-6 top-4 hidden h-[calc(100%-32px)] w-px bg-zinc-200 dark:bg-white/10 sm:block" />
            {education.map((item) => (
              <article
                key={item.degree}
                className="education-card relative rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.055]"
              >
                <div className="flex flex-col gap-5 sm:flex-row">
                  <div className="education-icon relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border bg-emerald-600 text-white">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-2xl font-bold text-zinc-950 dark:text-white">
                        {item.degree}
                      </h3>
                      <span className="education-year-badge rounded-full border px-3 py-1 text-sm font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                        {item.year}
                      </span>
                    </div>
                    <p className="mt-3 text-lg font-semibold text-zinc-700 dark:text-zinc-200">
                      {item.subject}
                    </p>
                    <p className="mt-2 text-zinc-600 dark:text-zinc-300">{item.institution}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
