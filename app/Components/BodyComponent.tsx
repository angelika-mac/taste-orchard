import Image from "next/image";
import FancyboxComponent from "./FancyboxComponent"

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const BodyComponent = () => {
  const copies = {
    title: "Taste the Colours",
    contents: [
      {
        image: "/images/image4.jpg",
        title: "RED",
        text: "Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.",
      },
      {
        image: "/images/image5.jpg",
        title: "Green",
        text: "Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours",
      },
      {
        image: "/images/image6.jpg",
        title: "White",
        text: "White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.",
      },
    ],
  };

  return (
    <section className="mx-auto my-0 p-8">
      <motion.h2 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        className="uppercase text-center pb-8 mx-auto my-0 border-b-amber-50 border-b-[1px] text-2xl w-full md:w-max" 
        aria-labelledby={`body_heading`}
        >
        {copies.title}
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-8 pt-8 flex-wrap justify-center items-start">
        {copies.contents.map((content, index) => (
          <article key={`content_${index}`} className="flex flex-col gap-4 w-full md:w-[40%] lg:w-[30%]" aria-labelledby={`body_content${content.title}_container`}>
            <motion.figure 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={variants}
              className="w-full aspect-[3/2] relative overflow-hidden"
              >
              <FancyboxComponent>
                <Image
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="cursor-pointer transition-transform duration-300 hover:scale-110"
                  src={content.image}
                  alt={content.title}
                  aria-label={`image for ${content.title}`}
                  aria-labelledby={`body_content${content.title}_image`}
                  data-fancybox={`gallery${content.title}`}
                />
              </FancyboxComponent>
            </motion.figure>

            <motion.figcaption 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={variants}
              className="flex flex-col text-center gap-4 text-xl justify-center items-center"
            >
              <p 
                
                className="uppercase font-bold pb-2.5"
                aria-labelledby={`body_content${content.title}_title`}
              >
                {content.title}
              </p>
              <p
                className="px-4 font-light" 
                aria-labelledby={`body_content${content.title}_text`}
              >
                {content.text}
              </p>
            </motion.figcaption>
          </article>
        ))}
      </div>
    </section>
  );
};
