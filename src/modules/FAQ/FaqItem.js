import React, { Component } from "react";

const PLUS_IMAGE = "/images/Plus.svg";
const MINUS_IMAGE = "/images/Minus.svg";

class FaqItem extends Component {
  state = {
    isActive: false,
  };

  renderAnswer = () => {
    const { faqDetails } = this.props;
    const { answerText } = faqDetails;
    const { isActive } = this.state;

    if (isActive) {
      return (
        <div>
          <div className="answer">{answerText}</div>
        </div>
      );
    }
    return null;
  };

  onToggleIsActive = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  };

  renderActiveImage = () => {
    const { isActive } = this.state;
    const image = isActive ? MINUS_IMAGE : PLUS_IMAGE;

    return (
      <button className="button" type="button" onClick={this.onToggleIsActive}>
        <img className="image" src={image} />
      </button>
    );
  };

  render() {
    const { faqDetails } = this.props;
    const { questionText } = faqDetails;

    return (
      <li className="faq-item">
        <div className="question-container">
          <div className="question">{questionText}</div>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    );
  }
}

export default FaqItem;
