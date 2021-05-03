import quizData from "./components/quizData"
import './App.css';
import { useEffect, useState } from "react";

function App() {

  const [selected , setSelected] = useState();
  const [options , setOptions] = useState([]);
  const [currQues, setcurrQues] = useState(0);



  const [showScore , setShowScore] = useState(false);


  const [score , setScore] = useState(0);


  useEffect(()=>{
    setOptions(handleShuffle([quizData[currQues]?.correct_answer , ...quizData[currQues]?.incorrect_answers ]))
},[])

  const handleShuffle = (optionss) =>{
      return optionss.sort(()=> Math.random() - 0.5);
  }

  // setOptions(handleShuffle([quizData[currQues]?.correct_answer , ...quizData[currQues]?.incorrect_answers ]))

  
 




  const handleSelect = (AnswerOption) =>{
   if(selected ===  AnswerOption && selected=== quizData[currQues]?.correct_answer){
      return 'select';
   }else if(selected === AnswerOption && selected !== quizData[currQues]?.correct_answer){
     return 'wrong';
   }
   else if(AnswerOption === quizData[currQues]?.correct_answer){
     return 'select';
   }
  }

  const handleCheck = (AnswerOption) =>{
    setSelected(AnswerOption);
    if(AnswerOption === quizData[currQues]?.correct_answer){
      setScore(score+1);
    }
  }

  const handleNext = () =>{
    if(currQues > quizData.length){
      setShowScore(true);
    }
    else if(selected){
      setcurrQues(currQues+1);
      setSelected();
    }else{
      alert('please select an opt first')
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
                <h2>{quizData[currQues].question}</h2>
                <ul className="optionGroup">
                    {/* <li className="option">option 1</li>
                    <li className="option">option 2</li>
                    <li className="option">option 3</li>
                    <li className="option">option 4</li> */}
                    {
                      options.map((AnswerOption)=> <button className={`option ${ selected && handleSelect(AnswerOption)} `} disabled={selected} onClick={()=>{handleCheck(AnswerOption)}} key={AnswerOption} >{AnswerOption}</button> )
                    }
                </ul>
            </div>
            <div className="seesoltuion">
              {/* <p>{quizData[currentQuestion].solution}</p> */}
            </div>
            <div> <button className="btnNext" onClick={handleNext}>Next</button></div>
        </div>}
    </div>
    </div>
    </>
  );
}

export default App;
