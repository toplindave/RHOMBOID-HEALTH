import { ReactComponent as FaceBookIcon } from "../../../component/globals/icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../../component/globals/icons/xIcon.svg";
import { ReactComponent as LinkedInIcon } from "../../../component/globals/icons/linkedin.svg";
import { ReactComponent as YouTubeIcon } from "../../../component/globals/icons/youtube.svg";

const Footer = ({ bg }) => {
  return (
    <footer
      className={` ${bg} __footer container pt-4 display-f justify-space-between  text-normalwhite `}
    >
      {/* <div className={`${bg}`}></div> */}
      <div className="__footer-logo">
        <h1 className=" text-normalwhite title-text font-weight-bold">
          Rhomboid
        </h1>
        <div className="__footer-social-container bg-black-4 ">
          <div className="__follow-us-con">
            <h4 className=" text-grey p-text">Follow Us</h4>
            <ul className=" display-f justify-space-between text-grey">
              <li>
                <FaceBookIcon />
              </li>
              <li>
                <TwitterIcon />
              </li>
              <li>
                <LinkedInIcon />
              </li>
              <li>
                <YouTubeIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="__footer-nav-container display-f justify-space-between">
        <div className="__footer-nav">
          <h2 className="h3-text">Company</h2>
          <ul>
            <li className="normal-font-text">How Rhomboid works</li>
            <li className="normal-font-text">Membership</li>
            <li className="normal-font-text">About us</li>
            <li className="normal-font-text">FAQs</li>
          </ul>
        </div>
        <div className="__footer-nav">
          <h2 className="h3-text">Services</h2>
          <ul>
            <li className="normal-font-text">
              Medical Emergency Transportation
            </li>
            <li className="normal-font-text">Urgent care</li>
            <li className="normal-font-text">Primary care</li>
          </ul>
        </div>
        <div className="__footer-nav">
          <h2 className="h3-text">Contact</h2>
          <ul>
            <li className="normal-font-text">Contact us</li>
          </ul>
        </div>
        <div className="__footer-nav">
          <h2 className="h3-text">Preferences</h2>
          <ul>
            <li className="normal-font-text">Language</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
