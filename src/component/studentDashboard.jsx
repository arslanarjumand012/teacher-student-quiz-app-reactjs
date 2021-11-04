import React,{useState} from 'react'
import '../assets/style.css'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import TeacherData from './teacherData'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom';

export default function StudentDashboard({userAnswer,CopySaveQuestion,saveQuestion,ModalBox}) {
    
    const [Data, setData] = useState(...TeacherData)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div>
            
            <div className="container-fluid teacherDashboard">

                <div className="row">

                    <div className="col-12">

                        <h1 className='welcomH1'>Welcome to Learning Management System</h1>

                    </div>

                </div>

                <div className="row d-flex justify-content-between">

                    <div className="col-lg-4 col-12 pl-0 pr-0 d-flex justify-content-center align-items-center">

                        <div className="teacherDetailsSide">

                            <h1 className='profileH1'>Instructor Profile</h1>

                            <div className="teacherImage"></div>

                            <h1>{Data.name}</h1>

                            <h2>({Data.qualificaton})</h2>

                            <p>From</p>

                            <h3>{Data.universityName}</h3>

                            <div className='hrLine'></div>

                            <p>Subject Specialization</p>

                            <h4>{Data.subjectTeach}</h4>

                        </div>

                    </div>

                    <div className="col-lg-7 col-12 pl-0 pr-0">

                        <div className="teacherOperationsSide">

                            <button className='addBtn' onClick={()=>{alert('Under Maintanance')}} type='button'> <i className='fas fa-id-badge' style={{fontSize:"50px"}}></i> <br /> <span style={{position:'relative', top:'1.5rem'}}>Your Profile</span></button>
                            
                            <button className='addBtn' onMouseOver={ModalBox} onClick={handleShow} type='button'><i className='fas fa-user-graduate' style={{fontSize:"50px"}}></i> <br /> <span style={{position:'relative', top:'1.5rem'}}>Quiz Result</span></button>

                            {saveQuestion.length > 0 && <Link to='studentQuizPage'> <button className='addBtn' type='button'><i className='fas fa-tasks' style={{fontSize:"50px"}}></i> <br /> <span style={{position:'relative', top:'1.5rem'}}>Attempt a Quiz</span></button> </Link>}

                            {saveQuestion.length == 0 && <button className='addBtn' onClick={()=>alert('There is no quiz for now')} type='button'><i className='fas fa-tasks' style={{fontSize:"50px"}}></i> <br /> <span style={{position:'relative', top:'1.5rem'}}>No Quiz</span></button>}                            

                            <Link to='studentLogin'>
                            
                                <button className='addBtn' type='button'><i className='fas fa-sign-out-alt' style={{fontSize:"50px"}}></i> <br /> <span style={{position:'relative', top:'1.5rem'}}>Log Out</span></button>

                            </Link>
                                                    
                        </div>

                    </div>

                </div>

            </div>

            <Modal show={show} onHide={handleClose}>
                
                <Modal.Header closeButton>
                    
                    <Modal.Title>Quiz Result</Modal.Title>
                
                </Modal.Header>
                
                <Modal.Body>Correct Answer(s) is/are {userAnswer} from {CopySaveQuestion.length} questions.</Modal.Body>

                <Modal.Footer>
                
                    <Button variant="primary" onClick={handleClose}>Close</Button>
        
                </Modal.Footer>
            
            </Modal>

        </div>
    )
}
