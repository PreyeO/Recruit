import { StyledProfileCrd } from "../../Components/Styles/Cards/ProfileCard.styled";
import { reviews } from "./UserData";
import Avatar from "../../assets/ReviewerAvatar.svg";
import Rating from "../../assets/Ratings.svg";

const Reviews = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>

      <ul>
        {reviews.map((review) => (
          <li key={review.id} className="mb-4 w-1/3 ">
            <StyledProfileCrd>
              <div className="flex gap-10">
                <div>
                  <figure style={{ width: "5rem" }}>
                    <img src={Avatar} alt="reviewer photo" />
                  </figure>
                </div>
                <div>
                  <p className="font-semibold">{review.author}</p>
                  <figure className="pt-4">
                    <img src={Rating} alt="ratings" />
                  </figure>
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
