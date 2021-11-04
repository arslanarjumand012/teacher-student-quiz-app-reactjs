import React from 'react'
import '../assets/style.css'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function StudentMarks({getStdMarks,sumUpData}) {
    return (
        <div>

            <div className='container-fluid mainPage pl-4 pr-4'>
            
                <div className="row w-100">

                    <div className="col-12">

                        <div className="loginPage">

                        <h1 className='loginH1 marksH1'>Student Marks Entry</h1>

                            <div className="containerLogin teacherContainer">

                                <p className='inputText'>Mathematics:</p>

                                <input type="text" onChange={getStdMarks} className='form-control' style={{width: '100%'}} placeholder='Enter Mathematics Marks' name="math" id="" />

                                <p className='inputText mt-2'>Computer:</p>

                                <input type="text" onChange={getStdMarks} className='form-control' style={{width: '100%'}} placeholder='Enter Computer Marks' name="comp" id="" />

                                <p className='inputText mt-2'>Physics:</p>

                                <input type="text" onChange={getStdMarks} className='form-control' style={{width: '100%'}} placeholder="Enter Physics Marks" name="phy" id="" />

                                <p className='inputText mt-2'>Chemistry:</p>

                                <input type="text" onChange={getStdMarks} className='form-control' style={{width: '100%'}} placeholder="Enter Chemistry Marks" name="che" id="" />

                                <Link to='teacherDashboard'>

                                    <button type='button' onClick={sumUpData} className='startBtn loginBtn'>Submit</button>

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            
        </div>
    )
}
