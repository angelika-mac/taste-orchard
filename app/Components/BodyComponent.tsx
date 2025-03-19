import Image from "next/image";

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
    <div className="mx-auto my-0 p-8">
      <p className="uppercase text-center pb-8 mx-auto my-0 border-b-amber-50 border-b-[1px] text-2xl w-full md:w-max" aria-label={`body_heading`}>{copies.title}</p>
      <div className="flex flex-col md:flex-row gap-8 pt-8 flex-wrap justify-center items-start">
        {copies.contents.map((content) => (
          <div key={content.title} className="flex flex-col gap-4 w-full md:w-[40%] lg:w-[30%]" aria-label={`body_content${content.title}_container`}>
            <div className="w-auto h-[200px] relative overflow-hidden">
              <Image
                layout="fill"
                objectFit="fill"
                src={content.image}
                alt={content.title}
                className="cursor-pointer transition-transform duration-300 hover:scale-110"
                aria-label={`body_content${content.title}_image`}
              />
            </div>

            <div className="flex flex-col text-center gap-4 text-xl justify-center items-center">
              <p className="uppercase font-bold pb-2.5" aria-label={`body_content${content.title}_title`}>{content.title}</p>
              <p className="px-4 font-light" aria-label={`body_content${content.title}_text`}>{content.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
