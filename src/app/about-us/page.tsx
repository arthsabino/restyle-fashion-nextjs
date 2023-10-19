import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};
export default function AboutUsPage() {
  const descriptions = [
    [
      "Our story",
      `ReStyle Fashion was born out of a passion for fashion, a commitment to
          sustainability, and the vision of a diligent student. Founded and
          managed by a young and enthusiastic student entrepreneur, our shop
          aims to provide Filipinas with a curated selection of trendy clothing
          options without breaking the bank.`,
    ],
    [
      "Our Mission",
      `Our mission at ReStyle Fashion is simple: to promote sustainable fashion practices by offering high-quality pre-loved clothing. We believe that every piece of clothing has a story to tell, and by giving them a second life, we're reducing fashion waste and supporting eco-conscious choices.`,
    ],
  ];
  const descSetUsApart = [
    [
      "Quality Selection",
      `We handpick each item in our collection, ensuring that you receive clothing in excellent condition. Our team of fashion enthusiasts is dedicated to curating a range of options that cater to various styles and preferences.`,
    ],
    [
      "Affordable Prices",
      `We understand the importance of budget-friendly fashion. At ReStyle Fashion, you'll find stylish pieces at prices that won't make a dent in your wallet, allowing you to stay on-trend without overspending`,
    ],
    [
      "Community-Centric",
      `We're more than just a thrift shop; we're a community of fashion-conscious individuals who share a love for sustainable shopping. Join our movement, and together, we can make a positive impact on the environment.`,
    ],
  ];

  const descChoose = [
    [
      "Sustainability",
      `By choosing second-hand clothing, you're contributing to a more sustainable fashion industry and reducing your carbon footprint.`,
    ],
    [
      "Affordability",
      `We believe that fashion should be accessible to everyone, regardless of their budget. ReStyle Fashion makes it possible to look great without overspending.`,
    ],
    [
      "Philippine Pride",
      `We're proudly Filipino-owned and operated. By shopping with us, you're supporting a local business and the dreams of a student entrepreneur.`,
    ],
  ];
  return (
    <div className="content-container py-8">
      <h1>About Us</h1>
      <div className="pt-8 flex flex-col gap-6">
        <p>
          Welcome to ReStyle Fashion, your go-to thrift shop for stylish and
          affordable dresses, skirts, and shorts for women in the Philippines.
          At ReStyle Fashion, we believe that fashion should not only be
          accessible but also sustainable, and that&apos;s why we&apos;re here
          to redefine your shopping experience.
        </p>
        {descriptions.map((d) => (
          <>
            <h2>{d[0]}</h2>
            <p>{d[1]}</p>
          </>
        ))}
        <h2>What Sets Us Apart</h2>
        <ol className="numbered">
          {descSetUsApart.map((d, i) => (
            <li key={i} className="py-2">
              <span>
                <span className="font-semibold mr-2">{d[0]}:</span>
                {d[1]}
              </span>
            </li>
          ))}
        </ol>
        <h2>Why Choose ReStyle Fashion?</h2>
        <ul className="list-disc">
          {descChoose.map((d, i) => (
            <li key={i} className="py-2">
              <span>
                <span className="font-semibold mr-2">{d[0]}:</span>
                {d[1]}
              </span>
            </li>
          ))}
        </ul>
        <h2>Join the ReStyle Fashion Revolution</h2>
        <p>
          We invite you to explore our ever-evolving collection of dresses,
          skirts, and shorts, each with its unique charm. Whether you&apos;re a
          fashion enthusiast or simply looking for affordable and sustainable
          clothing options, ReStyle Fashion is here to cater to your needs.
        </p>
        <p>
          Thank you for choosing ReStyle Fashion, where style meets
          sustainability. Let&apos;s redefine fashion together, one stylish
          thrift find at a time.
        </p>
      </div>
    </div>
  );
}
