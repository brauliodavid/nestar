import React from 'react'
import { MotionDiv } from '../components/MotionDiv'
import { Section } from "../components/Section"

export const Contact = () => {
    return (
        <Section id="contact" color="light-red" className="pt-6 pb-6">
            <div className="row">
                <div className="col-sm-12 col-md-7">
                    <MotionDiv initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
                        <h2 className="blue mt-sm-5">Get in touch</h2>
                    </MotionDiv>
                </div>
                <div className="col-sm-12 col-md-5">
                    <MotionDiv>
                        <p className="blue mt-sm-5 mb-4">Specific questions or just want to get in touch? We're always happy to help!</p>
                        <a href="#" className="blue btn-link">Contact us</a>
                    </MotionDiv>
                </div>
            </div>
        </Section>
    )
}