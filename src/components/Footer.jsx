import React from "react";
import image from "../assets/images/Footer logo.png"
import facebookLogo from "../assets/images/ic_baseline-facebook.png";
import twitterLogo from "../assets/images/mdi_twitter.png";
import youtubeLogo from "../assets/images/ri_youtube-fill.png";
import linkedinLogo from "../assets/images/prime_linkedin.png";
import instagramLogo from "../assets/images/ri_instagram-fill.png";

const Footer = () => {
  return (
    <div className="body p-3 mt-3 w-100 d-flex flex-column gap-4 align-items-center">
      <img src={image} alt="" />
      <div className=" d-flex gap-3 justify-content-center">
        <img
          className="bg-dark rounded-3 p-1 logo "
          src={facebookLogo}
          alt=""
        />
        <img className="bg-dark rounded-3 p-1 logo " src={twitterLogo} alt="" />
        <img className="bg-dark rounded-3 p-1 logo " src={youtubeLogo} alt="" />
        <img
          className="bg-dark rounded-3 p-1 logo "
          src={linkedinLogo}
          alt=""
        />
        <img
          className="bg-dark rounded-3 p-1 logo "
          src={instagramLogo}
          alt=""
        />
      </div>
      <div className="text-white d-flex gap-4 foot ">
        <p>Home</p>
        <p>About</p>
        <p>Our Method</p>
        <p>Contact</p>
        <p>Team</p>
        <p>Stories</p>
      </div>
    </div>
  );
};

export default Footer;
