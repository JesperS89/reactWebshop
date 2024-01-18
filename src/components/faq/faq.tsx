import { faqList, QA } from "models/qa";
import { useState } from "react";
import "./faq.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export const Faq = () => {
  const [showQuestion, setShowQuestion] = useState(false);

  const handleClick = () => {
    setShowQuestion(!showQuestion);
  };

  let html = faqList.map((q, i) => {
    return (
      <div key={i} className="qawrapper__card">
        {showQuestion ? (
          <p className="question" onClick={handleClick}>
            {q.question}
            <FontAwesomeIcon icon={faChevronUp} />
          </p>
        ) : (
          <p className="question" onClick={handleClick}>
            {q.question} <FontAwesomeIcon icon={faChevronDown} />
          </p>
        )}

        <p className={showQuestion ? "showanswer" : "hideanswer"}>{q.answer}</p>
      </div>
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="qawrapper"
    >
      {html}
    </motion.div>
  );
};
