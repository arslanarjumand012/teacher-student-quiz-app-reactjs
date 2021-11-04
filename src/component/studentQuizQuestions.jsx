import React from 'react'
import '../assets/style.css'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function StudentQuizQuestions({saveQuestion,count,handleQuestions,isOpened,NextBtn,submitBtn}) {
    
    return (
        <div>

            <div className='container-fluid mainPage pl-4 pr-4'>
                
                <div className="row w-100">

                    <div className="col-12">

                        <div className="loginPage quizPage">

                        <h1 className='loginH1 marksH1 quizQuestionH1 studentQuizH1'>Quiz</h1>
 
                            <div className="containerLogin teacherContainer containerQuestion">

                                {saveQuestion.length == 0 && <h1 className='emptyQuizH1'>There is no Quiz for now</h1> }
                        
                                {saveQuestion.length == 0 && <Link to='studentDashboard'> <button style={{width:'50%', marginTop: '2rem'}} className='startBtn loginBtn backBtn' type='button'>Back to Dashboard</button> </Link>}

                                {saveQuestion.length > 0 && <div className="stundentQuizDiv">

                                    <p className='inputText' style={{marginTop:'-2rem'}} >Question {count+1} :</p>

                                    <input type="text" value={saveQuestion[count].question} className='form-control' style={{width: '100%'}} disabled placeholder='Question' name="question" id="" />

                                    <div className="flexDiv">

                                        <div className="leftSide w-50">

                                            <p className='inputText mt-2'>Option 1:</p>

                                            <input type="button" value={saveQuestion[count].option1} onClick={NextBtn} disabled={isOpened} className='form-control optionBtn' style={{width: '90%'}} name="option1" id="" />

                                        </div>

                                        <div className="rightSide w-50">

                                            <p className='inputText mt-2'>Option 2:</p>

                                            <input type="button" value={saveQuestion[count].option2} onClick={NextBtn} disabled={isOpened} className='form-control optionBtn' style={{width: '100%'}} name="option2" id="" />

                                        </div>

                                    </div>

                                    <div className="flexDiv">

                                        <div className="leftSide w-50">

                                            <p className='inputText mt-2'>Option 3:</p>

                                            <input type="button" value={saveQuestion[count].option3} onClick={NextBtn} disabled={isOpened} className='form-control optionBtn' style={{width: '90%'}} name="option3" id="" />

                                        </div>

                                        <div className="rightSide w-50">

                                            <p className='inputText mt-2'>Option 4:</p>

                                            <input type="button" value={saveQuestion[count].option4} onClick={NextBtn} disabled={isOpened} className='form-control optionBtn' style={{width: '100%'}} name="option4" id="" />

                                        </div>

                                    </div>

                                    {count === saveQuestion.length - 1 && <Link to='studentDashboard'><button type='button' onClick={submitBtn} className='startBtn loginBtn submitBtn'>Submit</button></Link>}

                                    {count !== saveQuestion.length - 1 && <button type='button' onClick={handleQuestions} className='startBtn loginBtn submitBtn'>Next</button>}

                                </div>}
                                
                            </div>

                        </div>

                    </div>

                </div>

            </div>
            
        </div>
    )
}

