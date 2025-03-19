"use client";

import Head from "next/head";
import { HeroComponent } from "./Components/HeroComponent";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const ariaLabel = target.getAttribute("aria-label");

      if (ariaLabel) {
        console.log(`element clicked: ${ariaLabel}`);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="max-w-[1400px] mx-8 lg:mx-auto my-0">
        <div className="py-24 text-white">
          <HeroComponent />
        </div>
      </div>
    </>
  );
}
