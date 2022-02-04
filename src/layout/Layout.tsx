import React from 'react'
import PropTypes from "prop-types"
import { AnimateSharedLayout } from "framer-motion"

/* Theme variables */
import '../styles/typography.css';
import '../styles/grid.min.css';
import '../styles/utilities.min.css';
import '../styles/variables.css';
import '../styles/colors.css';
import '../styles/globals.css';
import '../styles/custom.css';

import { useEffect } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { ColorProvider } from '../components/HeaderContext';

const Layout = ({ children, location }: any) => {
    useEffect(() => {

    }, [])

    // const router = useLocation()

    return (
		<ColorProvider>
			<div id="main" className="main">
				<AnimateSharedLayout>

					<Header />

					{children}

					<Footer />
					
				</AnimateSharedLayout>
			</div>
		</ColorProvider>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
