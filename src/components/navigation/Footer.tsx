import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const socialLinks = ["facebook", "instagram", "tiktok", "twitter"];
  const footerLinks = [
    { text: "about", href: "/" },
    { text: "faq", href: "/" },
    { text: "terms", href: "/" },
    { text: "privacy policy", href: "/" },
    { text: "cookie policy", href: "/" },
    { text: "contact us", href: "/" },
  ];
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-8">
      <nav className="flex flex-wrap items-center justify-center gap-4">
        {footerLinks.map((l) => (
          <Link key={l.text} href={l.href} className="link link-hover">
            {l.text.toUpperCase()}
          </Link>
        ))}
      </nav>
      <nav>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {socialLinks.map((l) => (
            <div className="cursor-pointer rounded" key={l}>
              <div className="flex h-10 w-12 mx-4 items-center justify-center rounded bg-neutral hover:brightness-75">
                <Image
                  src={`/social-links/${l}.svg`}
                  alt={l}
                  height={20}
                  width={20}
                  className="h-5 w-5 pointer-events-none cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </nav>
      <aside>
        <p>Copyright © 2023 - All right reserved by ReStyle Fashion Ltd.</p>
      </aside>
    </footer>
  );
}
