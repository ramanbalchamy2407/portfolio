import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
const Hero = () => {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/ramanbalchamy26", "_blank");
  };

  const handleResumeDownload = () => {
    // Create a temporary URL for the imported file
    const url = window.URL.createObjectURL(new Blob([resume]));

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Raman_Balchamy_Resume.pdf"); // Set the desired filename

    // Append to the document body and trigger the download
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        {" "}
        <span>I'm Raman Balchamy,</span> frontend developer based in INDIA.
      </h1>
      <p>
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </p>
      <div className="hero-action">
        <div className="hero-connect" onClick={handleLinkedInClick}>
          LinkedIn
        </div>
        <div className="hero-resume" onClick={handleResumeDownload}>
          Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
