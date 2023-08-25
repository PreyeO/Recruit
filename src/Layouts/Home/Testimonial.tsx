import StarIcon from "../../assets/StarLogo.png";
import Frame from "../../assets/Frame.png";
import TestimonialIcon from "../../assets/TestimoniaIcon.png";

const Testimonial = () => {
  return (
    <section className="flex flex-col mb-20">
      <div className="flex flex-col md:flex-row justify-between mb-10 gap-4">
        <h2 className=" text-4xl lg:w-[15rem]">Making things official</h2>
        <p className="md:w-[30rem]">
          Company really hire people who are good at what they do. But just as
          important, are a good match for them.
        </p>
      </div>
      <div className=" bg-[#1d3f56] rounded-[20px] text-white flex">
          <div className="px-5 py-8 md:py-14 md:px-20">
            <div className="flex gap-5">
              <figure>
                <img src={StarIcon} alt="star" />
              </figure>
              <h3 className="pt-2 text-xl md:text-3xl">Life at Binford Ltd.</h3>
            </div>
            <p className="py-4 md:py-10 md:w-[32rem] md:text-2xl">
              It doesn’t matter who you are, where you come from, or what food
              you love, at Binford, you’ll be part of a brand.
            </p>
            <h5 className="text-sm md:text-base pb-4 md:pb-10">Leslie Alexander, UI/UX Designer</h5>
            <figure>
              <img src={Frame} alt="" className="w-16 md:w-auto" />
            </figure>
          </div>
            <figure className="hidden lg:block mr-6 self-end">
              <img src={TestimonialIcon} alt="" className="w-[80%]" />
            </figure>
        </div>
    </section>
  );
};

export default Testimonial;
