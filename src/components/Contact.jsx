import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useGsap } from "../hooks/useGsap.js";

const contactLinks = [
  {
    label: "Email",
    value: "shahzahansiraj516@gmail.com",
    href: "mailto:shahzahansiraj516@gmail.com",
    icon: Mail
  },

  {
    label: "Phone (whatsapp)",
    value: "01785-405909",
    href: "tel:+8801785405909",
    icon: Phone
  },
    {
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "https://maps.google.com/?q=Dhaka,+Bangladesh",
    icon: MapPin
  }
];

const initialForm = {
  name: "",
  email: "",
  message: ""
};

const sectionFireworkPositions = [
  { x: "14%", y: "16%", dots: 20, delay: 1, duration: 0.58, spread: "clamp(150px, 19vw, 290px)" },
  { x: "86%", y: "16%", dots: 28, delay: 1.53, duration: 0.7, spread: "clamp(135px, 17vw, 265px)" },
  { x: "25%", y: "45%", dots: 17, delay: 2.06, duration: 0.62, spread: "clamp(180px, 22vw, 320px)" },
  { x: "50%", y: "48%", dots: 32, delay: 2.59, duration: 0.75, spread: "clamp(160px, 20vw, 300px)" },
  { x: "75%", y: "45%", dots: 23, delay: 3.12, duration: 0.56, spread: "clamp(140px, 18vw, 280px)" },
  { x: "16%", y: "82%", dots: 30, delay: 3.65, duration: 0.68, spread: "clamp(155px, 21vw, 310px)" },
  { x: "84%", y: "82%", dots: 25, delay: 4.18, duration: 0.65, spread: "clamp(145px, 19vw, 290px)" }
];

const formFireworkPositions = [
  { x: "12%", y: "12%", dots: 20, delay: 1, duration: 0.58, spread: "clamp(75px, 22vw, 150px)" },
  { x: "88%", y: "12%", dots: 28, delay: 1.53, duration: 0.7, spread: "clamp(80px, 24vw, 165px)" },
  { x: "50%", y: "50%", dots: 17, delay: 2.06, duration: 0.62, spread: "clamp(90px, 25vw, 175px)" },
  { x: "12%", y: "88%", dots: 32, delay: 2.59, duration: 0.75, spread: "clamp(78px, 22vw, 155px)" },
  { x: "88%", y: "88%", dots: 23, delay: 3.12, duration: 0.56, spread: "clamp(82px, 24vw, 165px)" },
  { x: "50%", y: "28%", dots: 30, delay: 3.65, duration: 0.68, spread: "clamp(88px, 25vw, 175px)" },
  { x: "50%", y: "72%", dots: 25, delay: 4.18, duration: 0.65, spread: "clamp(76px, 22vw, 155px)" }
];

const fireworkColors = ["#B8F34A", "#FF4D79", "#37DFFF", "#FFD166", "#B388FF", "#FF854A", "#F7F7FF"];
const particleSizes = [4, 6, 8, 11, 14, 5, 9, 13];
const particleLengths = [12, 18, 26, 34, 16, 28];

const Fireworks = ({ positions, variant, active }) => (
  <div className={`contact-fireworks contact-fireworks--${variant} ${active ? "is-active" : ""}`} aria-hidden="true">
    {positions.map(({ x, y, dots, delay, duration, spread }, burstIndex) => (
      <span
        key={`${x}-${y}-${burstIndex}`}
        className="contact-firework-burst"
        style={{ "--burst-x": x, "--burst-y": y, "--burst-delay": `${delay}s`, "--burst-duration": `${duration}s`, "--burst-spread": spread }}
      >
        {Array.from({ length: dots }, (_, index) => {
          const angle = (index * 360) / dots + (burstIndex * 19 + (index * index * 7) % 17);
          const size = particleSizes[(index + burstIndex * 3) % particleSizes.length];
          const length = particleLengths[(index * 2 + burstIndex) % particleLengths.length];
          const color = fireworkColors[(index * 5 + burstIndex * 3) % fireworkColors.length];
          const particleDelay = ((index * 37 + burstIndex * 23) % 65) / 1000;
          return (
            <i
              key={index}
              style={{
                "--particle-angle": `${angle}deg`,
                "--particle-size": `${size}px`,
                "--particle-length": `${length}px`,
                "--particle-color": color,
                "--particle-delay": `${particleDelay}s`
              }}
            />
          );
        })}
      </span>
    ))}
  </div>
);

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const submitButtonRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [hasSent, setHasSent] = useState(false);
  const sendTimerRef = useRef(null);
  const successTimerRef = useRef(null);

  useEffect(() => () => {
    window.clearTimeout(sendTimerRef.current);
    window.clearTimeout(successTimerRef.current);
  }, []);

  useGsap(sectionRef, ({ gsap }) => {
    gsap.from(".contact-reveal", {
      y: 30,
      opacity: 0,
      duration: 0.75,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%"
      }
    });
  }, []);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setStatus("");
    setHasSent(false);
    window.clearTimeout(successTimerRef.current);
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Use a valid email address.";
    if (form.message.trim().length < 10) nextErrors.message = "Message should be at least 10 characters.";
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSending) return;
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      const formBounds = formRef.current.getBoundingClientRect();
      const iconBounds = submitButtonRef.current
        .querySelector(".contact-send-icon")
        .getBoundingClientRect();
      const iconCenterX = iconBounds.left + iconBounds.width / 2 - formBounds.left;
      const iconCenterY = iconBounds.top + iconBounds.height / 2 - formBounds.top;
      formRef.current.style.setProperty("--send-dx", `${formBounds.width / 2 - iconCenterX}px`);
      formRef.current.style.setProperty("--send-dy", `${formBounds.height * 0.46 - iconCenterY}px`);
      setStatus("Thank you! I've received your message and will get back to you shortly.");
      window.clearTimeout(successTimerRef.current);
      successTimerRef.current = window.setTimeout(() => setStatus(""), 10000);
      setHasSent(false);
      setIsSending(true);
      sendTimerRef.current = window.setTimeout(() => {
        setIsSending(false);
        setHasSent(true);
        setForm(initialForm);
      }, 5000);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="section-padding contact-section bg-white dark:bg-zinc-900/50">
      <Fireworks positions={sectionFireworkPositions} variant="section" active={isSending} />
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="contact-reveal">
            <span className="eyebrow">Contact</span>
            <h2 className="section-title mt-5">Let's Build Something Together</h2>
            <p className="section-copy">
              I'm open to junior web development opportunities, collaborations and interesting
              projects.
            </p>

            <div className="mt-8 grid gap-4">
              {contactLinks.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Location" ? "_blank" : undefined}
                  rel={label === "Location" ? "noreferrer" : undefined}
                  className="focus-ring flex items-center gap-4 rounded-2xl border border-zinc-200 bg-stone-50 p-4 dark:border-white/10 dark:bg-white/[0.045]"
                >
                  <span className="contact-info-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border bg-emerald-600 text-white">
                    <Icon size={22} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                      {label}
                    </span>
                    <span className="block truncate font-semibold text-zinc-900 dark:text-white">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-reveal rounded-3xl border border-zinc-200 bg-stone-50 p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.055] sm:p-8"
            noValidate
          >
            <Fireworks positions={formFireworkPositions} variant="form" active={isSending} />
            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={updateField}
                  className="focus-ring rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 dark:border-white/10 dark:bg-zinc-950/70 dark:text-white"
                  placeholder="Your name"
                />
                {errors.name && <span className="text-sm font-medium text-red-500">{errors.name}</span>}
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">Email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateField}
                  className="focus-ring rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 dark:border-white/10 dark:bg-zinc-950/70 dark:text-white"
                  placeholder="you@example.com"
                />
                {errors.email && <span className="text-sm font-medium text-red-500">{errors.email}</span>}
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  rows="5"
                  className="focus-ring resize-none rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 dark:border-white/10 dark:bg-zinc-950/70 dark:text-white"
                  placeholder="Tell me about your project or opportunity."
                />
                {errors.message && (
                  <span className="text-sm font-medium text-red-500">{errors.message}</span>
                )}
              </label>

              <button
                type="submit"
                disabled={isSending}
                ref={submitButtonRef}
                className={`contact-submit-button focus-ring inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm font-bold ${isSending ? "is-sending" : hasSent ? "is-sent" : ""}`}
              >
                {hasSent ? "Message Sent" : "Send Message"} <Send className="contact-send-icon" size={18} />
              </button>

              {status && (
                <p className="rounded-2xl bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
