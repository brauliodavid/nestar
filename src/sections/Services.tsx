import React from 'react'
import { MotionDiv } from '../components/MotionDiv'
import { MotionImg } from '../components/MotionImg'
import { Section } from "../components/Section"

export const Services = () => {
    return (
        <Section id="services" color="blue" className="pt-6 pb-6">
            <div className="row">
                <div className="col-sm-12 col-md-7">
                    <MotionDiv>
                        <h2 className="light-red mt-0">Differences to fall for</h2>
                    </MotionDiv>
                </div>
                <div className="col-sm-12 col-md-5">
                    <MotionDiv transition={{ duration: 0.6, delay: 0.5 }}>
                        <p className="light-red">We offer rentals all across greater Berlin and Germany. From the inner city to the suburbs. From vibrant areas to the calm and restrained. With great service and reachability, we help you find a home where you belong. </p>
                    </MotionDiv>
                </div>
            </div>
            <div className="mt-6">
                <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <MotionImg src="/images/img-3.png" className="mb-4" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}/>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <MotionImg src="/images/img-4.png" className="mb-4" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}/>
                    </div>
                    <div className="col-sm-12 col-md-3 d-none d-sm-block">
                        <MotionImg src="/images/img-5.png" className="mb-4" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}/>
                    </div>
                </div>
            </div>
        </Section>
    )
}