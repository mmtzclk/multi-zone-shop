export default function BrandsSection() {
  return (
    <section className="py-6 lg:py-11 bg-black">
      <div className="container-block flex items-center justify-center flex-wrap gap-y-4 md:gap-y-8 lg:gap-y-12 gap-x-8 md:gap-x-16 lg:gap-x-24">
        <img
          src="/brand_1.svg"
          className="max-w-24 lg:max-w-40 max-h-6 lg:max-h-9 object-contain"
          alt="brand_1"
        />
        <img
          src="/brand_2.svg"
          className="max-w-24 lg:max-w-40 max-h-6 lg:max-h-9 object-contain"
          alt="brand_2"
        />
        <img
          src="/brand_3.svg"
          className="max-w-24 lg:max-w-40 max-h-6 lg:max-h-9 object-contain"
          alt="brand_3"
        />
        <img
          src="/brand_4.svg"
          className="max-w-24 lg:max-w-40 max-h-6 lg:max-h-9 object-contain"
          alt="brand_4"
        />
        <img
          src="/brand_5.svg"
          className="max-w-24 lg:max-w-40 max-h-6 lg:max-h-9 object-contain"
          alt="brand_5"
        />
      </div>
    </section>
  );
}
