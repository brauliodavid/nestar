import React from 'react'
import { MotionDiv } from '../components/MotionDiv'
import { MotionImg } from '../components/MotionImg'
import { Section } from "../components/Section"

export const Work = () => {
    return (
        <Section id="work" color="white" className="pt-6 pb-6">
            <div className="row">
                <div className="col-sm-12 col-md-7">
                    <MotionImg src="/images/img-6.png" className="img-70" />
                </div>
                <div className="col-sm-12 col-md-5">
                    <MotionDiv>
                        <h2 className="blue mt-6">
                            A career within<br/>
                            good homes
                        </h2>
                    </MotionDiv>
                    <MotionDiv transition={{ duration: 0.6, delay: 0.5 }}>
                        <p className="blue mt-5 mb-4">If you are interested in creating better homes for the people we're very much interested in you. Read more and make yourself at home on our careers page. </p>
                        <a href="#" className="blue btn-link">Work with us</a>
                    </MotionDiv>
                </div>
            </div>
        </Section>
    )
}