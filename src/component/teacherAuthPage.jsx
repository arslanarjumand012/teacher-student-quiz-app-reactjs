import React from 'react'
import '../assets/style.css'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function TeacherAuthPage({getTeacherId,getTeacherPassword,teacherId,teacherPassword}) {
    return (
        <div>
            
            <div className='container-fluid mainPage pl-4 pr-4'>
            
            <div className="row w-100">

                <div className="col-12">

                    <div className="loginPage">

                    <h1 className='loginH1 authH1'>Teacher Login</h1>

                        <div className="containerLogin teacherContainer">

                            <p className='inputText'>Teacher Id:</p>

                            <input type="text" onChange={getTeacherId} className='form-control' style={{width: '100%'}} placeholder='Teacher Id: abc123' name="" id="" />

                            <p className='inputText mt-2'>Password:</p>

                            <input type="password" onChange={getTeacherPassword} className='form-control' style={{width: '100%'}} placeholder='Password: abc123' name="" id="" />

                            {teacherId === 'abc123' && teacherPassword === 'abc123' && <Link to='teacherDashboard'><button type='button' className='startBtn loginBtn'>Login</button></Link>}

                            {(teacherId !== 'abc123' || teacherPassword !== 'abc123') && <button type='button' onClick={()=>{alert('Invalid Credentials')}} className='startBtn loginBtn'>Login</button>}

                            <Link to='studentLogin'>

                                <button type='button' className='startBtn loginBtn studentBtn'>Are You Student?</button>

                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>

        </div>
    )
}
