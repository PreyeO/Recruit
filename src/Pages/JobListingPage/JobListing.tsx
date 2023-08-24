import { ProfileContainer } from "../../Components/Styles/General/ProfileContainer.styled";
import Footer from "../../Layouts/Footer/Footer";
import NavBar from "../../Layouts/NavBar/NavBar";
import Jobs from "../../Layouts/Listing/Jobs";
import SalaryRange from "../../Layouts/Listing/SalaryRange";
import Search from "../../Components/UI/Inputs/Search";

const Profile = () => {
  const minSalary = 0;
  const maxSalary = 100000;
  return (
    <>
      <NavBar />
      <ProfileContainer>
        <div className="flex justify-between mb-10 px-6 pt-10">
          <Search placeholder="Search" type="search" />
          <SalaryRange min={minSalary} max={maxSalary} />
        </div>
        <div className="absolute h-[1px] left-0 bg-[#b5c2cb] w-full"></div>
        <Jobs />
      </ProfileContainer>
      <Footer />
    </>
  );
};

export default Profile;
