import React from 'react'
import { MotionDiv } from '../components/MotionDiv'
import { MotionImg } from '../components/MotionImg'
import { Section } from "../components/Section"

export const Join = () => {
    return (
        <Section id="join" color="cyan" className="pt-6 pb-6">
            <div className="row">
                <div className="col-sm-12 col-md-5 d-none d-sm-block">
                    <MotionDiv>
                        <h5 className="red mt-6">
                            Do you want to work in real estate but not really a real estate person? Then you'll probably be happy here. We see ourselves as a family. And just as warm and inclusive we are to our tenants, we are to each other. Because we truly believe that brings out the best in people.
                        </h5>
                    </MotionDiv>
                </div>
                <div className="col-sm-12 col-md-7">
                    <div className="mb-4 text-end d-none d-sm-block">
                        <MotionImg src="/images/img-7.png" className="img-90"/>
                    </div>
                    <div className="d-sm-none mt-5">
                        <MotionImg src="/images/img-7.png" className="img-90"/>
                        <MotionDiv initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
                            <h2 className="red mt-4 ">Join the family</h2>
                        </MotionDiv>
                        <MotionDiv>
                            <h5 className="red mt-6">
                                Do you want to work in real estate but not really a real estate person? Then you'll probably be happy here. We see ourselves as a family. And just as warm and inclusive we are to our tenants, we are to each other. Because we truly believe that brings out the best in people.
                            </h5>
                        </MotionDiv>
                    </div>
                </div>
            </div>
            <div className="d-none d-sm-block">
                <div className="row">
                    <div className="col-sm-12 col-md-9">
                        <MotionDiv initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
                            <h2 className="red mt-4 mb-0">Join the family</h2>
                        </MotionDiv>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <MotionDiv className="text-end red mt-5 medium"><b>Careers</b></MotionDiv>
                    </div>
                </div>
            </div>
        </Section>
    )
}