import React, { useEffect } from 'react'
import { useColor } from '../components/HeaderContext'
import SEO from '../components/SEO'
import { Join } from '../sections/Join'
import { WhyUs } from '../sections/WhyUs'
import { Benefits } from '../sections/Benefits'
import { Values } from '../sections/Values'
import { WorkWithUs } from '../sections/WorkWithUs'

const Career = () => {
    const {state, dispatch} = useColor() as any

	useEffect(() => {
		dispatch({type: 'set', payload: 'red'})
	}, [])

	return (
		<>
			<SEO title="Career" description="This is the career page" />

			<Join />

            <WhyUs />

            <Benefits />

            <Values />

            <WorkWithUs />
		</>
	)
}

export default Career