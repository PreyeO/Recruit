import { ProfileContainer } from "../../Components/Styles/General/ProfileContainer.styled";
import FullProfile from "../../Layouts/UserProfile/FullProfile";
import ProfileInfo from "../../Layouts/UserProfile/ProfileInfo";

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileInfo />
      <FullProfile />
    </ProfileContainer>
  );
};

export default Profile;
