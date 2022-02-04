import React, { useEffect } from 'react'
import SEO from '../components/SEO'
import { About } from '../sections/About'
import { Intro } from '../sections/Intro'
import { Services } from '../sections/Services'
import { Work } from '../sections/Work'
import { Contact } from '../sections/Contact'
import { useColor } from '../components/HeaderContext'

const Index = () => {

	const {state, dispatch} = useColor() as any

	useEffect(() => {
		dispatch({type: 'set', payload: 'blue'})
	}, [])

	return (
		<>
			<SEO title="Home" description="This is the homepage" />

			<Intro />

			<About />

			<Services />

			<Work />

			<Contact />
		</>
	)
}

export default Index