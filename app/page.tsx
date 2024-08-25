import Image from "next/image";
import heroDesktop from "@/public/image-hero-desktop.png";
import Button from "@/ui/components/Button";
import { clients } from "@/utils/data";

export default function Home() {
  const ctaStyles =
    "text-white font-medium capitalize py-3 px-8 bg-black rounded-lg border border-black cursor-pointer w-fit hover:border-black hover:border hover:bg-white hover:text-black transition-all duration-500";
  return (
    <section className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 md:px-4 ">
        <div className="col-span-1 md:col-span-6">
          <div className="flex flex-col items-center px-4 pt-8 h-full md:items-start md:pt-16">
            <h1 className="text-[2rem] md:text-5xl lg:text-6xl font-bold text-black ">
              <span className=" inline-block md:block">Make</span> remote work
            </h1>
            <p className="my-6 md:mt-16 md:mb-8 max-w-96 text-gray text-md text-center md:text-lg md:text-left">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <Button text="learn more" styles={ctaStyles} />
            <div className="grid items-center grid-cols-4 mt-8 gap-4 md:mt-auto">
              {clients.map((client: string, index) => {
                return (
                  <Image key={index} src={client} alt={`clinet-${index}`} />
                );
              })}
            </div>
          </div>
        </div>
        <div className="hidden col-span-6 md:block">
          <Image
            width={960}
            height={1280}
            // fill
            className="object-cover  "
            src={heroDesktop.src}
            alt="hero-section-image-desktop"
          ></Image>
        </div>
        <div className="-order-1 block col-span-1 md:hidden ">
          <Image
            width={750}
            height={564}
            className="w-full h-full object-cover "
            src={heroDesktop.src}
            priority
            alt="hero-section-image-mobile"
          />
        </div>
      </div>
    </section>
  );
}
