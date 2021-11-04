import React from 'react'
import '../assets/style.css'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function QuizMainPage() {
    return (
        <div className='container-fluid mainPage pl-4 pr-4'>
            
            <div className="row w-100">

                <div className="col-12">

                    <div className="loginPage">

                    <h1 className='loginH1'>Quiz App</h1>

                        <div className="containerLogin">

                            <h2>Take a Quiz <br /> <span>&</span> <br /> Test Yoursrlf</h2>

                            <button className='startBtn' type='button'>Start Your Test</button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
