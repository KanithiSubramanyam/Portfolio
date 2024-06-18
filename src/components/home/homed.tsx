import Image from "next/image";
import "./home.css";
import subramanyamImage from "@/assets/images/subramanyamkanithi.png";
import { Button, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { MdCode } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Homed = () => {
  return (
    <main className="aboutdiv" id="home">
      <div className="nameDiv">
        <h2 data-aos="fade-up">{`Hey, I'm Subramanyam`}</h2>
        <div>
          <TypeAnimation
            data-aos="fade-up"
            sequence={["Web Developer", 2000, "Freelancer", 2000, ""]}
            speed={30}
            wrapper="h4"
            repeat={Infinity}
            className="role-animation"
          />
          <div data-aos="fade-up" className="home-buttons">
            <Button variant="contained" style={{ backgroundColor: "#27374D" }}>
              Contact
            </Button>
            <Button variant="contained" style={{ backgroundColor: "#fff" }}>
              <a
                href="https://drive.google.com/file/d/1iZMrYonlOocYZZG4v4sVOLGHoTI0oZNQ/view?usp=sharing"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "#27374D",
                  fontWeight: "400",
                }}
              >
                <Typography>Resume</Typography>
              </a>
            </Button>
          </div>
          <div className="icons-container">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="icons-div"
            >
              <p>
                <a href="https://github.com/kanithisubramanyam" target="_blank">
                  {" "}
                  <FaGithub className="home-icons" />{" "}
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/subramanyamkanithi/"
                  target="_blank"
                >
                  {" "}
                  <FaLinkedinIn className="home-icons" />{" "}
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com/rowdy_.lover/"
                  target="_blank"
                >
                  <FaInstagram className="home-icons" />
                </a>
              </p>
              <p>
                <a href="https://g.dev/subramanyamkanithi" target="_blank">
                  <MdCode className="home-icons" />
                </a>
              </p>
              <p>
                <a href="https://twitter.com/subramanyam__k" target="_blank">
                  {" "}
                  <FaSquareXTwitter className="home-icons" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="image-box">
        {" "}
        <Image
          src={subramanyamImage}
          alt="Picture of the Subramanyam"
          className="imagebox"
        />
      </div>
    </main>
  );
};

export default Homed;
