import { StyledFooter } from "../../Components/Styles/Layouts/Footer.styled";
import HomeBtn from "../../Components/UI/Buttons/HomeBtn";
import Logo2 from "../../assets/logo2.png";
import { BsTwitter, BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#181d21] relative">
      <StyledFooter>
        <div className="flex justify-between items-start gap-6 py-20 flex-col lg:flex-row">
          <h2 className="text-5xl font-bold uppercase">
            We’d Like & Love to Help
          </h2>
          <div className="flex flex-col max-w-[515px] gap-10">
            <p>
              Get to know our hiring process before you apply or find answers to
              any lingering questions, right here, right now.
            </p>
            <div>
              <HomeBtn label="Learn More" icon="UpArrow" />
            </div>
          </div>
        </div>
        <div className="absolute h-[2px] left-0 bg-[#8e9faa] w-full"></div>
        <div className="flex justify-between items-start py-20 flex-col gap-10 lg:flex-row">
          <div className="flex flex-col gap-4 max-w-[440px]">
            <div className="flex gap-4 items-center">
              <img src={Logo2} alt="logo" />
            </div>
            <p>
              The ultimate destination for connecting creatives and business, a
              revolutionary platform that bridges the gap between innovative
              creators and forward-thinking businesses.
            </p>
          </div>
          <div className="flex gap-14">
            <ul>
              <li>OverView</li>
              <li>Features</li>
              <li>Projects</li>
            </ul>
            <ul>
              <li>About Us</li>
              <li>Contact</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="flex gap-10">
            <ul>
              <li className="flex gap-2 text-center">
                <BsTwitter style={{ marginTop: 4 }} />
                Twitter
              </li>
              <li className="flex gap-2 text-center">
                <BsLinkedin style={{ marginTop: 4 }} />
                Linkedin
              </li>
            </ul>
            <ul>
              <li className="flex gap-2 text-center">
                <BsInstagram style={{ marginTop: 4 }} />
                Instagram
              </li>

              <li className="flex gap-2 text-center">
                <BsFacebook style={{ marginTop: 4 }} />
                Facebook
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute h-[2px] left-0 bg-[#8e9faa] w-full"></div>
        <h6 className="text-center pt-6 pb-10 text-sm">
          Copyright &copy; 2023 The Xhibit. All rights reserved.
        </h6>
      </StyledFooter>
    </footer>
  );
};

export default Footer;
