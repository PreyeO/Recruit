import { ProfileContainer } from "../../Components/Styles/General/ProfileContainer.styled";
import Footer from "../../Layouts/Footer/Footer";
import NavBar from "../../Layouts/NavBar/NavBar";
import FullProfile from "../../Layouts/UserProfile/FullProfile";
import ProfileInfo from "../../Layouts/UserProfile/ProfileInfo";

const Profile = () => {
  return (
    <>
      <NavBar />
      <ProfileContainer>
        <ProfileInfo />
        <FullProfile />
      </ProfileContainer>
      <Footer />
    </>
  );
};

export default Profile;
