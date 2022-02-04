import React from 'react'
import { MotionDiv } from '../components/MotionDiv'
import { MotionImg } from '../components/MotionImg'
import { Section } from "../components/Section"

export const Intro = () => {
    return (
        <Section id="intro" color="light-red" className="pt-5 pb-2">
            <MotionImg src="/images/img-1.png" className="mt-5 mb-4 d-none d-sm-block" />
            <MotionImg src="/images/img-10.png" className="mt-5 mb-4 d-sm-none" />
            <MotionDiv><h2 className="blue">Make yourself at home</h2></MotionDiv>
        </Section>
    )
}