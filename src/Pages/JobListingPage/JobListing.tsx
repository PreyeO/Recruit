import { ProfileContainer } from "../../Components/Styles/General/ProfileContainer.styled";
import Jobs from "../../Layouts/Listing/Jobs";
import SalaryRange from "../../Layouts/Listing/SalaryRange";
import Search from "../../Components/UI/Inputs/Search";
import Select from "../../Components/UI/Inputs/Select";

const JobListing = () => {
  return (
    <ProfileContainer>
      <div className="flex justify-between mb-5 md:mb-10 md:pt-10 gap-3">
        <Search placeholder="Search job title" type="search" />
        <Select placeholder="Work Location" type="select" />
        <SalaryRange />
      </div>
      <div className="absolute h-[1px] left-0 bg-[#b5c2cb] w-full"></div>
      <Jobs />
    </ProfileContainer>
  );
};

export default JobListing;
