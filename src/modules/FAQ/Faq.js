import React, { Component } from "react";
import styled from "styled-components";
import FaqItem from "./FaqItem";

export default function Faqs(props) {
  const faqsList = [
    {
      id: 0,
      questionText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ?",
      answerText:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    },
    {
      id: 1,
      questionText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ?",
      answerText:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    },
    {
      id: 2,
      questionText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ?",
      answerText:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    },
    {
      id: 3,
      questionText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ?",
      answerText:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo",
    },
  ];

  return (
    <div className="app-container">
      <div className="faqs-container">
        <div id="Heading-section">
          <h1 className="heading">FAQs</h1>
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
