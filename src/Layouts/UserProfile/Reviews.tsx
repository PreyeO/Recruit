import { StyledProfileCrd } from "../../Components/Styles/Cards/ProfileCard.styled";
import { reviews } from "./UserData";
import Avatar from "../../assets/ReviewerAvatar.svg";
import { BsStarFill, BsStar } from "react-icons/bs";

const Reviews = () => {
  return (
    <section className="mt-6">
      <ul>
        {reviews.map((review) => (
          <li key={review.id} className="mb-4">
            <StyledProfileCrd>
              <div className="flex flex-col gap-5">
                <div className="flex gap-5 md:gap-10">
                  <figure className="w-10 md:w-20">
                    <img src={Avatar} alt="reviewer photo" />
                  </figure>
                  <div>
                    <p className="font-semibold md:text-2xl">{review.author}</p>
                    <div className="pt-2 md:pt-4 flex gap-[3px] text-primary-btn">
                      <BsStarFill /> <BsStarFill />
                      <BsStarFill /> <BsStar /> <BsStar />
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 md:ml-28">{review.content}</p>
              </div>
            </StyledProfileCrd>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reviews;
