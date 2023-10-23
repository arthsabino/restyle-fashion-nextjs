"use client";
import Image from "next/image";
import { ReactNode, useRef } from "react";
import Slider from "react-slick";
import { svgs } from "./util/SVGImages";
export default function BannerSlider() {
  const ref = useRef<Slider>(null);
  return (
    <div className="bg-neutral relative py-4 md:py-8">
      <div className="content-container">
        <Slider slidesToShow={1} arrows={false} ref={ref}>
          <video src="/banners/2.mp4" autoPlay muted loop />
          <Image
            src={"/banners/1.png"}
            alt={"banner1"}
            height={405}
            width={1440}
          />
          <Image
            src={"/banners/3.png"}
            alt={"banner3"}
            height={405}
            width={1440}
          />
          <Image
            src={"/banners/4.png"}
            alt={"banner4"}
            height={405}
            width={1440}
          />
        </Slider>
      </div>
      <SliderArrow direction="left" onClick={() => ref.current?.slickPrev()}>
        <span className="h-4 w-4">{svgs.slider_arrow_left}</span>
      </SliderArrow>
      <SliderArrow direction="right" onClick={() => ref.current?.slickNext()}>
        <span className="h-4 w-4">{svgs.slider_arrow_right}</span>
      </SliderArrow>
    </div>
  );
}

interface SliderArrowProps {
  direction: string;
  onClick: () => void;
  children: ReactNode;
}

function SliderArrow({ direction, onClick, children }: SliderArrowProps) {
  return (
    <div
      className={`cursor-pointer w-16 bg-white opacity-0 hover:opacity-10 h-full absolute top-0 bottom-0 flex items-center justify-center ${
        direction === "right" ? "right-0" : "left-0"
      }`}
      onClick={() => onClick?.()}
    >
      {children}
    </div>
  );
}
