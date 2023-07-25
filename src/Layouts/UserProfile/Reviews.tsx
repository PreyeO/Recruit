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
              <div className="flex gap-10">
                <div>
                  <figure style={{ width: "5rem" }}>
                    <img src={Avatar} alt="reviewer photo" />
                  </figure>
                </div>
                <div>
                  <p className="font-semibold">{review.author}</p>
                  <div className="pt-4 flex gap-[3px] text-primary-btn">
                    <BsStarFill /> <BsStarFill />
                    <BsStarFill /> <BsStar /> <BsStar />
                  </div>
                  <p className="text-gray-600 pt-4">{review.content}</p>
                </div>
              </div>
            </StyledProfileCrd>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reviews;
