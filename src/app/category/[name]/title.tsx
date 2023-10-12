"use client";
interface PageTitleProps {
  title: string;
}
export default function PageTitle({ title }: PageTitleProps) {
  return (
    <h2 className="text-center font-semibold text-6xl dancing-script">
      {`${title[0].toUpperCase()}${title.substring(1, title.length)}`}
    </h2>
  );
}
