import React from 'react'
import LottieIcons from '../components/LottieIcons'
import { MotionDiv } from '../components/MotionDiv'
import { Section } from "../components/Section"

export const Benefits = () => {
    
    return (
        <Section id="benefits" color="cyan" className="pt-6 pb-6">
            <h2 className="red mt-4 mb-5">Employee benefits</h2>
            <div className="row">
                <div className="col-sm-12 col-md-3">
                    <MotionDiv className="icon-box red">
                        <LottieIcons.vacation />
                        <h5 className="mb-3">30-day vacation</h5>
                        <p>Paid 30-day vacation excluding 25/12 and 1/1</p>
                        <div className="d-sm-none mb-5"></div>
                    </MotionDiv>
                </div>
                <div className="col-sm-12 col-md-3">
                    <MotionDiv className="icon-box red" transition={{ duration: 0.6, delay: 0.4 }}>
                        <h5 className="mb-3">Flexible working hours</h5>
                        <p>You decide what working hours work best for you</p>
                        <div className="d-sm-none mb-5"></div>
                    </MotionDiv>
                </div>
                <div className="col-sm-12 col-md-3">
                    <MotionDiv className="icon-box red" transition={{ duration: 0.6, delay: 0.6 }}>
                        <h5 className="mb-3">Employee discounts</h5>
                        <p>Discounts from more than 600 brands through Corporate</p>
                        <div className="d-sm-none mb-5"></div>
                    </MotionDiv>
                </div>
                <div className="col-sm-12 col-md-3">
                    <MotionDiv className="icon-box red" transition={{ duration: 0.6, delay: 0.8 }}>
                        <h5 className="mb-3">English courses</h5>
                        <p>Improve your skills in English during working hours</p>
                        <div className="d-sm-none mb-5"></div>
                    </MotionDiv>
                </div>
            </div>
        </Section>
    )
}