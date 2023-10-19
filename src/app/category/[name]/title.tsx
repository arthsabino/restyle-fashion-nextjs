"use client";
interface PageTitleProps {
  title: string;
}
export default function PageTitle({ title }: PageTitleProps) {
  return (
    <h1 className="dancing-script">
      {`${title[0].toUpperCase()}${title.substring(1, title.length)}`}
    </h1>
  );
}
