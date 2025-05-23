import { TiArrowRight } from "react-icons/ti";

export default function BrowseFashion() {
  return (
    <section className=" w-full  bg-background-b2 flex items-center justify-center py-16 lg:py-0">
      {/* Hero Content */}
      <div className=" mx-auto flex flex-col lg:flex-row items-center px-6 gap-16 lg:gap-80">
        {/* Left Side - Text Content */}
        <div className="text-center lg:text-left">
          <h1 className="heading-h2 text-foreground-f2">
            Browse Our Fashion Paradise!
          </h1>
          <p className="body-p1 text-foreground-f4 mt-2">
            Step into a world of style and explore our diverse collection of
            clothing categories.
          </p>
          <div className="w-full flex justify-center">
            <button className="mt-2 px-6 py-3 primary-p1 text-custom-0 rounded-lg body-p2 flex  items-center gap-2 ">
              Start Browsing <TiArrowRight className="text-3xl" />
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className=" w-[200px] bg-custom-50 h-[250px] lg:w-[225px] lg:h-[300px]">
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
