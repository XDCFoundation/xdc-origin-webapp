import React from "react";
import FaqItem from "./FaqItem";
import { faqsList } from "../../constants"

export default function Faqs(props) {
  
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="app-container">
      <div className="faqs-container">
        <div id="Heading-section">
          <div className="heading">FAQs</div>
        </div>
        <ul className="ui-margin">
          <div className="faqs-list">
            {faqsList.map((eachFaq) => (
              <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}
