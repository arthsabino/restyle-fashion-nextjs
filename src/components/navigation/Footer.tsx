import Image from "next/image";

export default function Footer() {
  const socialLinks = ["facebook", "instagram", "tiktok", "twitter"];
  return (
    <div className="bg-accent py-4">
      <div className="content-container py-4">
        <div className="flex justify-center items-center">
          {socialLinks.map((l) => (
            <Image
              key={l}
              src={`/social-links/${l}.svg`}
              alt={l}
              height={40}
              width={40}
              className="h-8 mx-4 hover:opacity-40 cursor-pointer"
            />
          ))}
        </div>
        <div className="flex flex-wrap justify-evenly mt-8">
          <span>ABOUT</span>
          <span>FAQ</span>
          <span>TERMS</span>
          <span>PRIVACY POLICY</span>
          <span>COOKIE POLICY</span>
          <span>CONTACT US</span>
          <span>PRESS</span>
          <span>ACCESSIBILITY STATEMENT</span>
        </div>
      </div>
    </div>
  );
}
