"use client";

import Head from "next/head";
import { HeroComponent } from "./Components/HeroComponent";
import { BodyComponent } from "./Components/BodyComponent";
import { useEffect, useState } from "react";

export default function Home() {

  /** onclick event */
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const ariaLabelledBy = target.getAttribute("aria-labelledby");

      if (ariaLabelledBy) {
        console.log(`element clicked: ${ariaLabelledBy}`);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);


  /** cursor glow */
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0E1414" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      </Head>
      <div className="text-white max-w-[1150px] mx-auto my-0">
      <div
      className="cursor-glow"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
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
    // 
    <section className="px-16 py-[120px] lg:px-[147px]">
      {children}
    </section>
  )
}