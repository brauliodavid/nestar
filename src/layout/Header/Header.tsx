import React, { useState } from 'react'
import { Link } from 'gatsby'
import { motion } from "framer-motion"
import './Header.css'
import { useColor } from '../../components/HeaderContext'
import Menu from '../Menu/Menu'

const variants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 90% 50px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 90% 50px)",
        opacity: 0,
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
}

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {state} = useColor() as any

    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ duration: 0.6, delay: 0.4 }} className="logo">
                            <Link to={`/`}><img src={`/images/logo-${state.color}.svg`} alt="Nestar" className="logo" /></Link>
                        </motion.div>
                    </div>
                    <div className="col">
                        <div className="text-end">
                            <div className="header-actions">
                                <div className={`nav-lang d-none d-sm-block ${state.color}`}>
                                    <span className="nav-item">EN</span>
                                    <span className="nav-item">DE</span>
                                    <span className={`path bg-${state.color}`}></span>
                                </div>
                                <div className={`nav-menu ${state.color}`} onClick={() => setIsOpen(true)}>
                                    Menu
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <motion.nav animate={isOpen ? "open" : "closed"} variants={variants} className="main-menu">
                <Menu isOpen={isOpen} setIsOpen={setIsOpen}/>
            </motion.nav>
        </header>
    )
}

export default Header