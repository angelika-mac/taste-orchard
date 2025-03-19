"use client";

import Head from "next/head";
import { HeroComponent } from "./Components/HeroComponent";
import { BodyComponent } from "./Components/BodyComponent";
import React, { useEffect } from "react";

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
      <div className="text-white">
        <Section>
          <HeroComponent />
        </Section>
        <Section>
          <BodyComponent />
        </Section>
      </div>
    </>
  );
}


function Section({ children }: { children: React.ReactNode}) {
  return (
    <div className="px-8 py-6 lg:px-[147px] lg:py-[120px]">
      {children}
    </div>
  )
}