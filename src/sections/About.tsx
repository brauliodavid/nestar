import React from 'react'
import { Section } from "../components/Section"
import { MotionDiv } from '../components/MotionDiv'
import { MotionImg } from '../components/MotionImg'

export const About = () => {
    return (
        <Section id="about" color="white" className="pt-6 pb-6">
            <div className="row">
                <div className="col-sm-12 col-md-5">
                    <MotionDiv initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
                        <h2 className="large blue mt-0 d-none d-sm-block">
                            Sweet,<br/> 
                            <span>sweet<br/></span>
                            homes
                        </h2>
                    </MotionDiv>
                    <MotionDiv initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
                        <h2 className="large blue mt-0 d-sm-none">
                            Sweet, sweet<br/>
                            homes
                        </h2>
                    </MotionDiv>
                </div>
                <div className="col-sm-12 col-md-7">
                    <MotionImg src="/images/img-2.png" className="mb-4"/>
                    <div className="row">
                        <div className="col-md-9">
                            <MotionDiv>
                                <p className="mb-4">We provide rentals that make everyone feel welcome. Because ultimately that's the kind of city we want to live in. With great service and smart solutions we attend to our tenants' equally diverse needs. In the end, it's about providing a springboard from where to take on the world. A place you can truly call sweet, sweet home. </p>
                            </MotionDiv>
                        </div>
                        <div className="col-md-3">
                            <div className="text-sm-end"><b>About us</b></div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}