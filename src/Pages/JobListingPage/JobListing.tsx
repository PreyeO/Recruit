import { ProfileContainer } from "../../Components/Styles/General/ProfileContainer.styled";
import Footer from "../../Layouts/Footer/Footer";
import NavBar from "../../Layouts/NavBar/NavBar";
import Jobs from "../../Layouts/Listing/Jobs";
import SalaryRange from "../../Layouts/Listing/SalaryRange";
import Search from "../../Components/UI/Inputs/Search";
import Select from "../../Components/UI/Inputs/Select";

const JobListing = () => {
  return (
    <>
      <NavBar />
      <ProfileContainer>
        <div className="flex justify-between mb-10 px-6 pt-10">
          <Search placeholder="Search job title" type="search" />
          <Select placeholder="Work Location" type="select" />
          <SalaryRange />
        </div>
        <div className="absolute h-[1px] left-0 bg-[#b5c2cb] w-full"></div>
        <Jobs />
      </ProfileContainer>
      <Footer />
    </>
  );
};

export default JobListing;
