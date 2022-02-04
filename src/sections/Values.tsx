import React from 'react'
import { MotionDiv } from '../components/MotionDiv'
import { Section } from "../components/Section"

export const Values = () => {
    return (
        <Section id="values" color="white" className="pt-6 pb-6">
            <h6 className="blue mt-4 mb-3">Our values</h6>
            <MotionDiv initial={{ width: 0, opacity: 0 }} animate={{ width: '100%', opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="divider bg-blue mb-5" />
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <MotionDiv className="icon-box red">
                        <h3 className="blue mt-0 mb-3">The culture that<br></br> shapes us</h3>
                    </MotionDiv>
                </div>
                <div className="col-sm-12 col-md-6">
                    <MotionDiv>
                        <p>It's not just words. It's our philosophy. And it runs all the way from inside our office walls to the cities of Germany.</p>
                    </MotionDiv>
                </div>
            </div>
            <div className="mt-5">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <MotionDiv className="icon-box blue" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
                            <h5 className="mb-4">Inclusive</h5>
                            <p>We embrace diversity, openness and working tightly together as a team.</p>
                            <div className="d-sm-none mb-5"></div>
                        </MotionDiv>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <MotionDiv className="icon-box blue" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}>
                            <h5 className="mb-3">Efficient</h5>
                            <p>Our processes are streamlined. Out of respect for our tenants' time and because it helps our company grow.</p>
                            <div className="d-sm-none mb-5"></div>
                        </MotionDiv>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <MotionDiv className="icon-box blue" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}>
                            <h5 className="mb-3">Progressive</h5>
                            <p>We are modern, light-footed and quick to embrace new technology.</p>
                            <div className="d-sm-none mb-5"></div>
                        </MotionDiv>
                    </div>
                </div>
            </div>
        </Section>
    )
}