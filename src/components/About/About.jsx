// import Button from "../common/Button/Button";
import classes from "./About.module.css";
// import about from "./about.svg";
import about from "./poster.jpg";

const About = () => {
  return (
    <>
      <section id="about" className={classes.aboutSec}>
        <div className={classes.about}>
          <div className={classes.details}>
            <h3 className={classes.heading}>About</h3>
            <h2 className={classes.heading1}>EvolvX '24</h2>
            <p className={classes.para}>EvolvX '24 is a highly anticipated technical fest organized by the Computer Science and Engineering Association of Amal Jyothi College of Engineering. This event is specially curated for technology enthusiasts, students, and professionals to come together and showcase their innovative ideas, technical skills, and creativity. This year, EvolvX '23 is scheduled to take place on the 24th of April 2023, and promises to be an exciting and engaging event. The fest will feature a plethora of competitions covering a wide range of topics related to computer science and engineering.
            </p>
          </div>

          <div className={classes.composition}>
            <img className={classes.images} src={about} alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
