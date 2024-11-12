import React from "react";

function GameCard({ category, question, answer}) {
  console.log("in function GameCard");
  return (
    <>
      <div className="main-nav">Trivia Category</div>
      <div className="top">
        <h4>Category {category}</h4>
      </div>
      <div className="category-nav">Question # of # of questions</div>
      <div className="content">
        <div className="cardsContainer">
          <div className="bottom">
            <h2>{question}</h2>
          </div>
          <div className="card-back">
            <h4>{answer}</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameCard;
