import Image from 'next/image'

export const HeroComponent = () => {
    const content = {
        "title": "WHAT DOES COOKING MEAN?",
        "body": "Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...",
        "subtitle_1": "THE PERFECT EGG",
        "subbody_1": "Keep water between 67 and 68°C for a flavourful, tender yolk",
        "images": [
            "/images/image1.jpg",
            "/images/image2.jpg",
            "/images/image3.jpg"
        ]
    }
    return (
        <div className="flex flex-col lg:flex-row gap-8 mx-auto my-0 justify-center">
            <div className='flex gap-4 w-auto justify-center lg:w-[60%]'>
                <div>
                    <Image src={content.images[0]} width={500} height={749} aria-label="hero_image1" alt="image1" className=''></Image>
                </div>
                <div>
                    <Image src={content.images[1]} width={366} height={366} aria-label="hero_image2" alt="image2" className="pb-4"></Image>
                    <Image src={content.images[2]} width={366} height={366} aria-label="hero_image3" alt="image3" className=""></Image>
                </div>
            </div>
            <div className='flex flex-col gap-8 w-full lg:w-[20%]'>
                <p className="pb-8 border-b-amber-50 border-b-[1px] uppercase text-2xl" aria-label="hero_title">{content.title}</p>
                <p className='text-xl' aria-label="hero_body">{content.body}</p>
                <div>
                    <p className='text-red-700 uppercase font-bold text-lg pb-4' aria-label="hero_subtitle1">{content.subtitle_1}</p>
                    <p className='font-bold text-xl' aria-label="hero_subbody1">{content.subbody_1}</p>
                </div>
            </div>
        </div>
    )
}