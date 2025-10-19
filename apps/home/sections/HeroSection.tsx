import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#F2F0F1] relative">
      <div className="container-block relative">
        <div className="relative z-1 pt-10 pb-0 md:py-16 lg:py-28">
          <div className="max-w-xl md:mb-8 lg:mb-12">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-5 lg:mb-8">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-black/60 mb-6 lg:mb-8 text-sm lg:text-base">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <Link
              href="/products/16"
              className="h-13 text-center flex items-center justify-center px-20 rounded-full bg-black hover:bg-black/90 text-white  font-medium duration-300 w-full sm:w-fit"
            >
              Shop Now
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-6 lg:gap-8">
            <div className="flex flex-col">
              <div className="text-[40px] font-bold">200+</div>
              <p className="text-black/60">International Brands</p>
            </div>
            <div className="w-px h-20 bg-black/10" />
            <div className="flex flex-col">
              <div className="text-[40px] font-bold">2,000+</div>
              <p className="text-black/60">High-Quality Products</p>
            </div>
            <div className="w-px h-20 bg-black/10" />
            <div className="flex flex-col">
              <div className="text-[40px] font-bold">30,000+</div>
              <p className="text-black/60">Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="md:absolute md:bottom-0 md:-right-20 md:h-full">
          <div className="h-full w-full relative">
            <img
              src="/hero.jpg"
              className="h-full w-full object-contain object-bottom"
              alt=""
            />

            <svg
              className="size-11 lg:size-14 absolute left-0 top-1/2 -translate-y-1/2"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M28 0C28.9506 15.0527 40.9472 27.0495 56 28C40.9472 28.9506 28.9506 40.9472 28 56C27.0495 40.9472 15.0527 28.9506 0 28C15.0527 27.0495 27.0495 15.0527 28 0Z"
                fill="black"
              />
            </svg>

            <svg
              className="size-16 lg:size-24 absolute right-0 top-[10%]"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M28 0C28.9506 15.0527 40.9472 27.0495 56 28C40.9472 28.9506 28.9506 40.9472 28 56C27.0495 40.9472 15.0527 28.9506 0 28C15.0527 27.0495 27.0495 15.0527 28 0Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
