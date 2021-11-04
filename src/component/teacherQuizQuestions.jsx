import React from 'react'
import '../assets/style.css'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function TeacherQuizQuestions({handleQuestion,saveData}) {
    return (
        <div>

            <div className='container-fluid mainPage pl-4 pr-4'>
                
                <div className="row w-100">

                    <div className="col-12">

                        <div className="loginPage quizPage">

                        <h1 className='loginH1 marksH1 quizQuestionH1'>Questions Entry</h1>

                            <div className="containerLogin teacherContainer containerQuestion" style={{marginTop: '2rem'}}>

                                <p className='inputText'>Question:</p>

                                <input type="text" onChange={handleQuestion} className='form-control' style={{width: '100%'}} placeholder='Enter Question' name="question" id="" />

                                <div className="flexDiv">

                                    <div className="leftSide w-50">

                                        <p className='inputText mt-2'>Option 1:</p> 

                                        <input type="text" onChange={handleQuestion} className='form-control' style={{width: '90%'}} placeholder='Enter Option 1' name="option1" id="" />

                                    </div>

                                    <div className="rightSide w-50">

                                        <p className='inputText mt-2'>Option 2:</p>

                                        <input type="text" onChange={handleQuestion} className='form-control' style={{width: '100%'}} placeholder="Enter Option 2" name="option2" id="" />

                                    </div>

                                </div>

                                <div className="flexDiv">

                                    <div className="leftSide w-50">

                                        <p className='inputText mt-2'>Option 3:</p>

                                        <input type="text" onChange={handleQuestion} className='form-control' style={{width: '90%'}} placeholder="Enter Option 3" name="option3" id="" />

                                    </div>

                                    <div className="rightSide w-50">

                                        <p className='inputText mt-2'>Option 4:</p>

                                        <input type="text" onChange={handleQuestion} className='form-control' style={{width: '100%'}} placeholder="Enter Option 4" name="option4" id="" />

                                    </div>

                                </div>
                                
                                <p className='inputText mt-2'>Corrent Option:</p>

                                <input type="text" onChange={handleQuestion} className='form-control' style={{width: '100%'}} placeholder="Enter Correct Option" name="correctOption" id="" />

                                <button type='button' onClick={saveData} className='startBtn loginBtn submitBtn'>Submit</button>

                                <Link to='teacherDashboard'>

                                    <button type='button' className='startBtn loginBtn backBtn submitBtn'>Back to Dashboard</button>

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            
        </div>
    )
}
