import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
};
export default function FAQPage() {
  const faqArray = [
    [
      1,
      "What is ReStyle Fashion?",
      "ReStyle Fashion is an online thrift shop specializing in women's dresses, skirts, and shorts. We curate a unique collection of fashionable, affordable, and sustainable clothing items for style-conscious individuals.",
    ],
    [
      2,
      "Who is behind ReStyle Fashion?",
      "ReStyle Fashion is proudly managed by a dedicated student entrepreneur with a passion for fashion and sustainability. We're committed to offering you quality thrifted clothing.",
    ],
    [
      3,
      "Where is ReStyle Fashion located?",
      "We are an online store based in the Philippines, serving customers nationwide. We don't have a physical store, so you can conveniently shop from the comfort of your home.",
    ],
    [
      4,
      "How can I contact ReStyle Fashion?",
      "You can reach us through our Contact Us page on the website. Feel free to send us any questions, concerns, or feedback, and we'll get back to you as soon as possible.",
    ],
    [
      5,
      "Do you offer international shipping?",
      "Currently, we primarily serve customers within the Philippines. However, we are working on expanding our shipping options to international customers in the near future.",
    ],
    [
      6,
      "What types of clothing do you sell?",
      "ReStyle Fashion specializes in women's clothing, including dresses, skirts, and shorts. We focus on curating a unique selection of second-hand and vintage pieces.",
    ],
    [
      7,
      "Are your items in good condition?",
      "We carefully inspect and select items for our collection, ensuring they are in excellent condition. We provide accurate descriptions and photos of each item, so you know exactly what you're purchasing.",
    ],
    [
      8,
      "How do I place an order?",
      "To place an order, simply select the items you like, add them to your cart, and proceed to the checkout page. Follow the prompts to complete your order, and you'll receive a confirmation email once the order is placed.",
    ],
    [
      9,
      "What payment methods do you accept?",
      "We accept various payment methods, including credit/debit cards and popular online payment gateways in the Philippines.",
    ],
    [
      10,
      "What is your return and exchange policy?",
      "If you are unsatisfied with your purchase, please refer to our Return and Exchange Policy for detailed information on how to initiate a return or exchange.",
    ],
    [
      11,
      "Can I sell my clothing to ReStyle Fashion?",
      "At the moment, we don't accept clothing from individuals for resale. We source our inventory through various channels to ensure quality and variety.",
    ],
    [
      12,
      "How often do you update your inventory?",
      "We strive to update our inventory regularly to provide you with fresh fashion finds. Follow us on our social media channels and subscribe to our newsletter to stay updated on new arrivals and promotions.",
    ],
    [
      13,
      "What makes ReStyle Fashion different from other thrift shops?",
      "ReStyle Fashion is committed to promoting sustainable fashion while offering affordable, stylish clothing. We aim to make the process of finding unique thrifted items easier and more accessible for our customers.",
    ],
    [
      14,
      "How can I stay updated with ReStyle Fashion's latest collections and promotions?",
      "To stay in the loop, follow us on Instagram, Facebook, and subscribe to our newsletter. You'll receive updates on new arrivals, exclusive discounts, and fashion tips.",
    ],
  ];

  return (
    <div className="content-container py-8">
      <h1>Frequently Asked Questions (FAQ)</h1>
      <ol className="mt-8 flex flex-col gap-6 numbered">
        {faqArray.map((f) => (
          <li key={f[0]} className="flex flex-col gap-2">
            <span className="font-semibold">{f[1]}</span>
            <p>{f[2]}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
