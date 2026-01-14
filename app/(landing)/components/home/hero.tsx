import Button from "../ui/button";
import Image from "next/image";
import { FiFastForward } from "react-icons/fi";

const HeroSect = () => {
    return (
        <section id="hero-sect" className="container mx-auto h-screen flex">
            <div className="relative self-center">
                <Image src="/image/img-basketball.svg"
                    alt= "image basketball"
                    className="absolute left-0 -top-20 grayscale"
                    width={432} height={423}/>
                <div className="relative ml-40 w-full">
                    <div className="text-primary italic">Friday Sale, 50%</div>
                    <h1 className=" font-extrabold text-[95px] italic  bg-gradient-to-b leading-tight from-black to-[#CBCBCB} bg-clip-text text-transparent">
                        WEAR YOUR <br /> TOP-QUALITY <br />SPORTSWEAR
                    </h1>
                    <p className="w-2/5 mt-5 leading-loose">
                        Engineered for endurance and designed for speed. Experience gear that moves as fast as you do. Premium fabrics. Unmatched comfort. Limitless motion.
                    </p>
                    <div className="flex gap-5 pt-10">
                        <Button>Explore More <FiFastForward /></Button>
                        <Button variant="ghost">Watch Video
                            <Image src="/image/icon-play-video.svg" 
                            alt="icon playvideo" 
                            width={29} height={29} />
                        </Button>
                    </div>
                </div>
                <Image src="/image/img-hero.svg" 
                    alt= "image sporton hero"
                    className="absolute -right-5 top-2/5 -translate-y-1/2"
                    width={625} height={700}/>
            </div>
            <Image src="/image/img-ornament-hero.svg"
                alt= "image sporton ornament"
                className="absolute -right-[250px] top-1/2 -translate-y-1/2"
                width={420} height={420}/>
        </section>
    )
}

export default HeroSect;