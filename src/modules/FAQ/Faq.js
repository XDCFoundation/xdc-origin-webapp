import React from "react";
import FaqItem from "./FaqItem";

export default function Faqs(props) {
  const faqsList = [
    {
      id: 0,
      questionText:
        "Which chain does Origin support?",
      answerText:
        "XDC Origin supports the creation of XRC tokens and stablecoins on the XDC blockchain network.",
    },
    {
      id: 1,
      questionText:
        "Is XDC Origin free to use?",
      answerText:
        "XDC Origin does not charge any additional service or administrational fees to create new tokens. You only pay the transaction gas fees for the actual generation of the tokens, and these fees will not go to XDC Network but to the respective validators.",
    },
    {
      id: 2,
      questionText:
        "Do I need technical or programming language expertise to create my token?",
      answerText:
        "No. Simply follow the steps in the token generator and create!",
    },
    {
      id: 3,
      questionText:
        "Where can I find my tokens after I mint them?",
      answerText:
        "After you mint and add the tokens, they will reflect in your XDCPay wallet.",
    },
    {
      id: 4,
      questionText:
        "Where can I find the Contract Address of my minted token?",
      answerText:
        "After successfully creating and deploying the token, the confirmation screen will present the hash and contract address.",
    },
    {
      id: 5,
      questionText:
        "Do I need to have XDC to mint tokens?",
      answerText:
        "Yes, you will need XDC in your XDCPay wallet to mint XRC20 tokens on the XDC chain.",
    },
    {
      id: 6,
      questionText:
        "It's my first time. Can I do a test first?",
      answerText:
        "Yes, you can connect your wallet to the Apothem test network if you want to test XRC20 token generation.",
    },
  ];
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
