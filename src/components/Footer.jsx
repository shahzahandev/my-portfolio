import { Facebook, Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";

const socialLinks = [
  { label: "Email", href: "mailto:shahzahansiraj516@gmail.com", icon: Mail },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shahzahan-siraj-7b5ba7304/", icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com/share/1KJkqwPErt/", icon: Facebook },
  { label: "WhatsApp", href: "https://wa.me/8801785405909", icon: MessageCircle, phone: true },
  { label: "GitHub", href: "https://github.com/shahzahandev", icon: Github }
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-50 py-[60px] dark:border-white/10 dark:bg-zinc-950">
      <div className="container-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl font-bold text-zinc-950 dark:text-white">
            Shahzahan Siraj
          </p>
          <p className="mt-1 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
            MERN Stack Developer
          </p>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
            &copy; {year} Md. Shahzahan Siraj. All rights reserved.
          </p>
        </div>

        <nav className="footer-social-links flex flex-wrap gap-3" aria-label="Social links">
          {socialLinks.map(({ label, href, icon: Icon, phone }) => (
            <a
              key={label}
              href={href}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noreferrer"}
              aria-label={label}
              title={label}
              className="footer-social-link focus-ring flex h-11 w-11 items-center justify-center rounded-[15px] border"
            >
              {phone ? (
                <span className="relative inline-flex">
                  <Icon size={20} />
                  <Phone className="absolute left-[5px] top-[5px]" size={10} />
                </span>
              ) : (
                <Icon size={20} />
              )}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
