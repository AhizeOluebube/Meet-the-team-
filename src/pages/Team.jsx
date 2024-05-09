import React from "react";
import colored10 from "../assets/images/Rectangle 65.png";
import colored11 from "../assets/images/Rectangle 66.png";
import colored12 from "../assets/images/Rectangle 67.png";
import colored13 from "../assets/images/Rectangle 73.png";
import colored from "../assets/images/Property 1=Default.png";
import colored1 from "../assets/images/Property 1=Default-1.png";
import colored2 from "../assets/images/Property 1=Default-2.png";
import colored3 from "../assets/images/Property 1=Default-3.png";

const Team = () => {
  return (
    <div>
      <h3 className="mt-5">MEET OUR TEAM</h3>
      <div className=" d-flex flex-wrap gap-3 container justify-content-center mt-4">
        <div className=" d-flex flex-column gap-3">
          <div className="image-container">
            <img src={colored} alt="" />
            <img className="colored-img" src={colored10} alt="" />
          </div>
          <button className=" border-0 rounded-3 p-3">
            Gritty Grammer <span className=" d-block">Investor</span>{" "}
          </button>
        </div>
        <div className=" d-flex flex-column gap-3">
          <div className="image-container">
            <img src={colored1} alt="" />
            <img className="colored-img" src={colored11} alt="" />
          </div>
          <button className=" border-0 rounded-3 p-3">
            Peter Griffin <span className=" d-block">Photographer</span>{" "}
          </button>
        </div>
        <div className=" d-flex flex-column gap-3">
          <div className="image-container">
            <img src={colored2} alt="" />
            <img className="colored-img" src={colored12} alt="" />
          </div>
          <button className=" border-0 rounded-3 p-3">
            Sarah Shobowale<span className=" d-block">Product Manager</span>{" "}
          </button>
        </div>
        <div className=" d-flex flex-column gap-3">
          <div className="image-container">
            <img src={colored3} alt="" />
            <img className="colored-img" src={colored13} alt="" />
          </div>
          <button className=" border-0 rounded-3 p-3">
            Stephen Essien<span className=" d-block">Developer</span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
