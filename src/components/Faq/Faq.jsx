import { useState } from "react";
import classes from "./Faq.module.css";

const questions = [
  {
    question: "What is Byte Me 2k24?",
    answer:
      "EvolvX '24 is a highly anticipated technical fest organized by the Computer Science and Engineering Association of Amal Jyothi College of Engineering.",
  },
  {
    question: "What are the Dates and Timings of event?",
    answer:
      "The event will start at 9AM on 20th March and will be till 21st of March 10 PM",
  },
  {
    question: "How can I participate in the event?",
    answer:
      "Explore various events on the EvolvX website and register for the same",
  },
  {
    question: "Is there any entry fee for EvolvX 2k24?",
    answer:
      "No, there is not any entry fee to explore EvolvX 2k24 but to participate in some events you have pay registration fee.",
  },
];

const Faq = () => {
  const [clicked, setClicked] = useState(null);

  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }

    setClicked(i);
  };

  return (
    <section className={classes.faqSection}>
      <div className={classes.heading}>FAQ</div>
      <div className={classes.faq}>
        {questions.map((ques, i) => {
          return (
            <div className={classes.single} onClick={() => toggle(i)}>
              <div className={classes.question}>{ques.question}</div>
              <div
                className={`${
                  clicked === i ? classes.answer : classes.noAnswer
                }`}
              >
                {ques.answer}
              </div>
              <span className={classes.btn}>+</span>
            </div>
          );
        })}

        {/* <div className={classes.single}>
                <div className={classes.question}>How are you?</div>
                <div className={classes.answer}>I am fine</div>
                <span className={classes.btn}>+</span>
            </div> */}
      </div>
    </section>
  );
};

export default Faq;
