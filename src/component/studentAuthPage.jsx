import React from 'react'
import '../assets/style.css'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function StudentAuthPage({filteredData,loginStudent,getStudentId,getStudentPassword}) {
    return (
        <div>
            
            <div className='container-fluid mainPage pl-4 pr-4'>
            
            <div className="row w-100">

                <div className="col-12">

                    <div className="loginPage">

                    <h1 className='loginH1 authH1'>Student Login</h1>

                        <div className="containerLogin teacherContainer">

                            <p className='inputText'>Student Id:</p>

                            <input type="text" onChange={getStudentId} className='form-control' style={{width: '100%'}} placeholder='Enter Student Id' name="" id="" />

                            <p className='inputText mt-2'>Password:</p>

                            <input type="password" onChange={getStudentPassword} className='form-control' style={{width: '100%'}} placeholder='Enter Password' name="" id="" />

                            {filteredData.length != 0 && <Link to='studentDashboard'><button type='button' onClick={loginStudent} className='startBtn loginBtn'>Login</button></Link>}
                            
                            {filteredData.length == 0 && <button type='button' onMouseOver={loginStudent} onClick={()=>{alert('Invalid Credentials')}} className='startBtn loginBtn'>Login</button>}

                            <Link to='/'>

                                <button type='button' className='startBtn loginBtn studentBtn'>Are You Teacher?</button>

                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>

        </div>
    )
}
