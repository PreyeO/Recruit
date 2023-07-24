import { StyledFooter } from "../../Components/Styles/Layouts/Footer.styled";
import HomeBtn from "../../Components/UI/Buttons/HomeBtn";
import Logo2 from "../../assets/logo2.png";
import { BsTwitter, BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="first_container">
        <h2 className="text-3xl font-bold">We’D Like & Love to Help</h2>
        <div className="footer_btn">
          <div>
            <p className="font-light">
              Get to know our hiring process before you apply or find answers to
              any lingering questions, right here, right now.
            </p>
          </div>
          <div>
            <HomeBtn label="Learn More" icon="UpArrow" />
          </div>
        </div>
      </div>
      <div className="horizontal_line"></div>
      <div className="footer_links font-light">
        <div className="footer_logo">
          <div className="flex gap-4 items-center">
            <img src={Logo2} alt="logo" />
          </div>
          <p className="font-light pt-4">
            the ultimate destination for connecting creatives and business, a
            revolutionary platform that bridges the gap between innovative
            creators and forward-thinking businesses.
          </p>
        </div>
        <div>
          <ul>
            <li>OverView</li>
            <li>Features</li>
            <li>Projects</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Career</li>
          </ul>
        </div>
        <div>
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
        </div>
        <div>
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
      <div className="horizontal_line"></div>
      <span>
        <h6 className="font-light text-center pt-6 pb-6 text-sm">
          copyright &copy; 2023 The Xhibit, All rights reserved.
        </h6>
      </span>
    </StyledFooter>
  );
};

export default Footer;
