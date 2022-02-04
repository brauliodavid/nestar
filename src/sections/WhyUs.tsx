import React from 'react'
import { MotionDiv } from '../components/MotionDiv'
import { MotionImg } from '../components/MotionImg'
import { Section } from "../components/Section"

export const WhyUs = () => {
    return (
        <Section id="why-us" color="white" className="pt-6 pb-6">
            <div className="row">
                <div className="col-sm-12 col-md-5">
                    <MotionDiv>
                        <h2 className="blue large mt-6 rotated text-center text-md-start">
                            Why us?
                        </h2>
                    </MotionDiv>
                </div>
                <div className="col-sm-12 col-md-7">
                    <div className="d-sm-none mb-5"></div>
                    <div className="mb-5 text-end">
                        <MotionImg src="/images/img-8.png" alt="" className="img-100"/>
                    </div>
                    <div className="row">
                        <div className="col-md-9">
                            <MotionDiv>
                                <p>We work hard but are also amply rewarded. Discounts in stores, studying English during working hours and getting 30-days a year of paid vacation, just to mention a few of our benefits. Equally beneficial is your mandate to influence and shape the company. We grow together. As professionals, as people and as a company.</p>
                            </MotionDiv>
                        </div>
                        <div className="col-md-3">
                            <div className="text-md-end blue medium"><b>Current Openings</b></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className="row">
                    <div className="col-sm-12 col-md-5">
                        <MotionDiv className="text-left text-md-center" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
                            <h4 className="blue mt-4 ">“Lorem ipsum dolor siting amet, consectetur adip iscing, sed do eiusmod tempor incididunt”</h4>
                            <div>— Firstname Lastname, Working title</div>
                            <div className="d-sm-none mb-5"></div>
                        </MotionDiv>
                    </div>
                    <div className="col-sm-12 col-md-2"></div>
                    <div className="col-sm-12 col-md-5">
                        <MotionDiv className="text-left text-md-center" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}>
                            <h4 className="blue mt-4 ">“Lorem ipsum dolor siting amet, consectetur adip iscing, sed do eiusmod tempor incididunt”</h4>
                            <div>— Firstname Lastname, Working title</div>
                            <div className="d-sm-none mb-5"></div>
                        </MotionDiv>
                    </div>
                </div>
            </div>
        </Section>
    )
}