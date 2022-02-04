import React from 'react'
import { MotionDiv } from '../../components/MotionDiv'
import './Footer.css'

const Footer = () => {
    return (
        <footer id="footer" className="bg-blue light-red pt-6">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <MotionDiv>
                            <div className="mb-2"><b>Contact</b></div>
                            <p className="mb-5">
                                Alexanderplatz<br></br>
                                10787 Berlin
                            </p>
                            <div>info@nestar.de</div>
                            <div className="d-sm-none mb-5"></div>
                        </MotionDiv>
                    </div>
                    <div className="col col-sm-2">
                        <MotionDiv transition={{ duration: 0.6, delay: 0.5 }}>
                            <ul className="footer-nav">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                            </ul>
                        </MotionDiv>
                    </div>
                    <div className="col col-sm-2">
                        <MotionDiv transition={{ duration: 0.6, delay: 0.8 }}>
                            <ul className="footer-nav">
                                <li><a href="/career">Careers</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </MotionDiv>
                    </div>
                </div>
                <MotionDiv transition={{ duration: 0.6, delay: 1 }}>
                    <div className="bottom-bar pt-6 pb-4">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 d-none d-sm-block">
                                <div className="mt-3">© Nestar 2020</div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <ul className="bottom-nav">
                                    <li><a href="#">Imprint</a></li>
                                    <li><a href="#">Xing</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Cookies Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </MotionDiv>
            </div>
        </footer>
    )
}

export default Footer