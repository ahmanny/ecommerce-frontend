import { TiArrowRight } from "react-icons/ti";

export default function Hero() {
  return (
    <section className=" w-full bg-background-b2 flex items-center justify-center py-16 lg:py-0">
      {/* Hero Content */}
      <div className=" mx-auto flex flex-col lg:flex-row items-center px-6 gap-16 lg:gap-80">
        {/* Left Side - Text Content */}
        <div className="text-center lg:text-left">
          <h1 className="heading-h2 text-foreground-f2">
            Fresh Arrivals Online
          </h1>
          <p className="body-p1 text-foreground-f4 mt-3">
            Discover Our Newest Collection Today.
          </p>
          <div className="w-full flex justify-center">
            <button
              className="mt-5 px-6 py-3 primary-p1 text-custom-0 rounded-lg body-p2 flex items-center gap-2 
            "
            >
              View Collection <TiArrowRight className="text-3xl" />
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className=" w-[350px] bg-custom-50 h-[300px] lg:w-[400px] lg:h-[400px]">
          {/* <Image
            src="/images/hero-image.png"
            alt="Hero Image"
            layout="fill"
            objectFit="contain"
            priority
          /> */}
        </div>
      </div>
    </section>
  );
}
