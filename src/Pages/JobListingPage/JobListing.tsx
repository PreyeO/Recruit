import { ProfileContainer } from "../../Components/Styles/General/ProfileContainer.styled";
import Footer from "../../Layouts/Footer/Footer";
import NavBar from "../../Layouts/NavBar/NavBar";
import Jobs from "../../Layouts/Listing/Jobs";

const Profile = () => {
  return (
    <>
      <NavBar />
      <ProfileContainer>
        <Jobs />
      </ProfileContainer>
      <Footer />
    </>
  );
};

export default Profile;
