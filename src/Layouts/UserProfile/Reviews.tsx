import { StyledProfileCrd } from "../../Components/Styles/Cards/ProfileCard.styled";
import { reviews } from "./UserData";

const Reviews = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id} className="mb-4 w-1/3 ">
            <StyledProfileCrd>
              <p className="font-semibold">{review.author}</p>
              <p className="text-gray-600">{review.content}</p>
            </StyledProfileCrd>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reviews;
