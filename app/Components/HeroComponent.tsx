import Image from "next/image";
import { ComponentProps } from "react";
import FancyboxComponent from "./FancyboxComponent"
import { motion } from "framer-motion";


export const HeroComponent = () => {
  const content = {
    title: "WHAT DOES COOKING MEAN?",
    body: "Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...",
    subtitle_1: "THE PERFECT EGG",
    subbody_1: "Keep water between 67 and 68°C for a flavourful, tender yolk",
    images: ["/images/image1.jpg", "/images/image2.jpg", "/images/image3.jpg"],
  };

  const heroImageClass = "cursor-pointer transition-transform duration-300 hover:scale-110 object-cover"

  return (
    <motion.div 
      key={content.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col md:flex-row lg:justify-evenly mx-auto my-0 justify-start gap-8"
    >
    
    <div className="flex gap-3 w-full md:w-full lg:w-[70%] min-h-[350px] md:min-h-[450px] lg:min-h-[600px]">
        <ImageContainer
          src={content.images[0]}
          aria-labelledby="hero_image1"
          alt="image1"
          className={heroImageClass}
          data-fancybox="gallery1"
        />
      <div className="flex-1 flex flex-col gap-3">
        <ImageContainer
          src={content.images[1]}
          aria-labelledby="hero_image2"
          alt="image2"
          className={heroImageClass}
          data-fancybox="gallery2"
        />
        <ImageContainer
          src={content.images[2]}
          aria-labelledby="hero_image3"
          alt="image3"
          className={heroImageClass}
          data-fancybox="gallery3"
        />
      </div>
    </div>
  
    <div className="flex flex-col gap-8 w-full md:w-full lg:w-[30%]">
      <a href="#">
        <h2 className="pb-8 border-b-amber-50 border-b-[1px] uppercase text-2xl" aria-labelledby="hero_title">
          {content.title}
        </h2>
      </a>
      <a href="#">
        <p className="text-xl font-light" aria-labelledby="hero_body">
          {content.body}
        </p>
      </a>
      <div>
        <a href="#">
          <h3 className="text-accentRed uppercase font-bold text-lg pb-4" aria-labelledby="hero_subtitle1">
            {content.subtitle_1}
          </h3>
        </a>
        <a href="#">
          <p className="font-bold text-xl" aria-labelledby="hero_subbody1">
            {content.subbody_1}
          </p>
        </a>
      </div>
    </div>
  </motion.div>
  
  );
};

function ImageContainer(props: ComponentProps<typeof Image>) {
  return (
    <figure className="flex-1 relative overflow-hidden">
      <FancyboxComponent>
        <a href="#">
          <Image fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" {...props} />
        </a>
      </FancyboxComponent>
    </figure>
  );
}
