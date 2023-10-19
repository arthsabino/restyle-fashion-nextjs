import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};
export default function ContactUsPage() {
  return (
    <div className="content-container py-8 gap-6 flex-col flex">
      <h1>Contact Us</h1>
      <span>You may contact us on:</span>
      <span>
        <span className="font-semibold mr-2">Instagram:</span>
        @_restylefashion
      </span>
    </div>
  );
}
