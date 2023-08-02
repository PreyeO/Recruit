import StarIcon from "../../assets/StarLogo.png";
import Frame from "../../assets/Frame.png";
import TestimonialIcon from "../../assets/TestimoniaIcon.png";

const Testimonial = () => {
  return (
    <section className="flex flex-col mb-20">
      <div className="flex justify-between mb-10">
        <h2 className=" text-4xl w-[15rem]">Making things official</h2>
        <p className=" w-[30rem]">
          Company really hire people who are good at what they do. But just as
          important, are a good match for them.
        </p>
      </div>
      <div className=" bg-[#1d3f56] rounded-[20px] h-[500px] text-white ">
        <div className="flex justify-around">
          <div className="py-20 px-20">
            <div className="flex gap-5">
              <figure>
                <img src={StarIcon} alt="" />
              </figure>
              <h3 className="pt-2 text-3xl">Life at Binford Ltd.</h3>
            </div>
            <p className="pb-8 pt-6 w-[32rem] text-2xl">
              It doesn’t matter who you are, where you come from, or what food
              you love, at Binford, you’ll be part of a brand.
            </p>
            <h5 className="pb-12">Leslie Alexander, UI/UX Designer</h5>
            <figure className="pt-8">
              <img src={Frame} alt="" />
            </figure>
          </div>
          <div>
            <figure>
              <img src={TestimonialIcon} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
