import React from 'react';

const GameCard = () => {
    return (
        <>
        <div className='main-nav' >
            Trivia Category
        </div>
        <div className='category-nav'>
            Question # of # of questions
        </div>
             <div className="content">
              <div className="top">
              <h4>Category Geography</h4>
                <img src='../public/geographyPie.png'/>
                </div>
              <div className="cardsContainer">
                <div className="bottom">
                  <h2>
                    Which of the 5 Great Lakes does not have a border with
                    Canada?
                  </h2>
                  </div>
                  <div className="card-back">
                  <h4>Lake Michigan</h4>
                  </div>
                </div>
              </div> 
        </>
    );
};

export default GameCard;