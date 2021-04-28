import quizData from "./components/quizData"
import './App.css';
import { useState } from "react";

function App() {

  const [currentQuestion , setCurrentQuestion] = useState(0);

  const [showScore , setShowScore] = useState(false);

  const [toGreen , setToGreen] = useState(false);

  const [score , setScore] = useState(0);

  const handleNextBtnClick = () =>{
    const nextQuestion = currentQuestion + 1;
    if(nextQuestion<quizData.length){
      setCurrentQuestion(nextQuestion);
    }else{
      setShowScore(true);
    }
  }

  const handleCheckAnswer = (isCorrect ,AnswerOption) =>{
      if(isCorrect === true){
        alert("this correct");
        setToGreen(true);
        setScore(score+1);
        console.log(AnswerOption);
      }
  }

  return (
    <>
     <div className="wrapper">
     <div className="quiz">
     <div className="quizHeader">
                <div className="welcomeDiv">
                    <h4>Quiz App</h4>
                </div>
                <div className="timerDiv"><span>00:00</span></div>
            </div>
           {showScore ? (<div className="quizBody">your score is {score}</div>) : 
            <div className="quizBody">
            <div id="questions">
                <h2>{quizData[currentQuestion].question}</h2>
                <ul className="optionGroup">
                    {/* <li className="option">option 1</li>
                    <li className="option">option 2</li>
                    <li className="option">option 3</li>
                    <li className="option">option 4</li> */}
                    {
                      quizData[currentQuestion].options.map((AnswerOption)=> <li className="option" onClick={()=>handleCheckAnswer(AnswerOption.isCorrect , AnswerOption)}>{AnswerOption.option}</li> )
                    }
                </ul>
            </div>
            <div className="seesoltuion">
              <p>{quizData[currentQuestion].solution}</p>
            </div>
            <div> <button className="btnNext" onClick={handleNextBtnClick}>Next</button></div>
        </div>}
    </div>
    </div>
    </>
  );
}

export default App;
