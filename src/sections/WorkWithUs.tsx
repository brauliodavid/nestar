import React from 'react'
import { MotionDiv } from '../components/MotionDiv'
import { Section } from "../components/Section"

export const WorkWithUs = () => {
    return (
        <Section id="work-with-us" color="white" className="pt-6 pb-6">
            <MotionDiv>
                <h2 className="blue mt-4 mb-6">Want to work with us?</h2>
            </MotionDiv>
            <MotionDiv className="list mb-5" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
                <div className="list-row mt-4">
                    <div className="row">
                        <div className="col"><b>Job role</b></div>
                        <div className="col"><b>Category</b></div>
                    </div>
                    <div className="divider bg-blue mt-3"></div>
                </div>
                <div className="list-row mt-4">
                    <div className="row">
                        <div className="col-md-6"><h5 className="mt-0 mb-0">Project Manager</h5></div>
                        <div className="col-md-3">Construction</div>
                        <div className="col-md-3"><div className="text-end"><a href="#">Apply</a></div></div>
                    </div>
                    <div className="divider bg-blue mt-4"></div>
                </div>
                <div className="list-row mt-4">
                    <div className="row">
                        <div className="col-md-6"><h5 className="mt-0 mb-0">Project Manager</h5></div>
                        <div className="col-md-3">Construction</div>
                        <div className="col-md-3"><div className="text-end"><a href="#">Apply</a></div></div>
                    </div>
                    <div className="divider bg-blue mt-4"></div>
                </div>
                <div className="list-row mt-4">
                    <div className="row">
                        <div className="col-md-6"><h5 className="mt-0 mb-0">Project Manager</h5></div>
                        <div className="col-md-3">Construction</div>
                        <div className="col-md-3"><div className="text-end"><a href="#">Apply</a></div></div>
                    </div>
                    <div className="divider bg-blue mt-4"></div>
                </div>
                <div className="list-row mt-4">
                    <div className="row">
                        <div className="col-md-6"><h5 className="mt-0 mb-0">Project Manager</h5></div>
                        <div className="col-md-3">Construction</div>
                        <div className="col-md-3"><div className="text-end"><a href="#">Apply</a></div></div>
                    </div>
                    <div className="divider bg-blue mt-4"></div>
                </div>
                <div className="list-row mt-4">
                    <div className="row">
                        <div className="col-md-6"><h5 className="mt-0 mb-0">Project Manager</h5></div>
                        <div className="col-md-3">Construction</div>
                        <div className="col-md-3"><div className="text-end"><a href="#">Apply</a></div></div>
                    </div>
                    <div className="divider bg-blue mt-4"></div>
                </div>
                <div className="list-row mt-4">
                    <div className="row">
                        <div className="col-md-6"><h5 className="mt-0 mb-0">Project Manager</h5></div>
                        <div className="col-md-3">Construction</div>
                        <div className="col-md-3"><div className="text-end"><a href="#">Apply</a></div></div>
                    </div>
                    <div className="divider bg-blue mt-4"></div>
                </div>
            </MotionDiv>
        </Section>
    )
}