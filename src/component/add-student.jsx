import React from 'react'
import '../assets/style.css'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function AddStudent({getStdBasicInfo}) {
    return (
        <div>

            <div className='container-fluid mainPage pl-4 pr-4'>
            
                <div className="row w-100">

                    <div className="col-12">

                        <div className="loginPage">

                        <h1 className='loginH1 authH1'>Student Data Entry</h1>

                            <div className="containerLogin teacherContainer">

                                <p className='inputText'>Student Id:</p>

                                <input type="text" onChange={getStdBasicInfo} className='form-control' style={{width: '100%'}} placeholder='Enter Student Id' name="stdId" id="" />

                                <p className='inputText mt-2'>Student Password:</p>

                                <input type="password" onChange={getStdBasicInfo} className='form-control' style={{width: '100%'}} placeholder='Enter Student Password' name="stdPass" id="" />

                                <p className='inputText mt-2'>Student Name:</p>

                                <input type="text" onChange={getStdBasicInfo} className='form-control' style={{width: '100%'}} placeholder="Enter Student Name" name="stdName" id="" />

                                <Link to='addMarks'>

                                    <button type='button' className='startBtn loginBtn'>Next</button>

                                </Link>

                                <Link to='teacherDashboard'>

                                    <button type='button' className='startBtn loginBtn backBtn'>Back</button>

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            
        </div>
    )
}
