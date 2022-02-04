import React from 'react'
import { Link } from 'gatsby'
import { motion } from "framer-motion"
import './Menu.css'
import { MotionDiv } from '../../components/MotionDiv'
import { MotionImg } from '../../components/MotionImg'
import { Item } from './Item'

const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.6 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const items = [
    {title: 'Home', url: '#'},
    {title: 'About', url: '#'},
    {title: 'Careers', url: '/career'},
    {title: 'Contact', url: '#'},
]

const Menu = ({isOpen = false, setIsOpen = null as any}) => {

    const Img = () => {
        if(!isOpen) return <></>
        return <MotionImg src={`/images/img-9.png`} className="mt-6"/>
    }

    return (
        <div className="menu bg-green pt-5 pb-5">
            <div className="container">
                <div className="nav-wraper pe-4 ps-4">
                    <div className="row">
                        <div className="col-md-6">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ duration: 0.6, delay: 0.4 }} className="logo">
                                <Link to={`/`}><img src={`/images/logo-light-purple.svg`} alt="Nestar" className="logo" /></Link>
                            </motion.div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="d-sm-none pb-6"></div>
                            <motion.div variants={variants} className="main-nav light-purple mt-6">
                                {items.map((item, i) => <Item key={i} title={item.title} url={item.url}/>)}
                            </motion.div>
                            <MotionDiv transition={{ duration: 0.6, delay: 1.1 }}>
                                <div className="main-nav-lang light-purple mt-6">
                                    <div className="main-nav-lang-item mt-2 mb-2">
                                        <a href="#">English</a>
                                    </div>
                                    <div className="main-nav-lang-item mt-2 mb-2">
                                        <a href="#">Deutsche</a>
                                    </div>
                                    <span className={`path bg-light-purple`}></span>
                                </div>
                            </MotionDiv>
                        </div>
                        <div className="col-md-6 d-none d-sm-block">
                            <div className="text-end">
                                {Img()}
                            </div>
                        </div>
                    </div>
                    <div className="close-icon" onClick={() => setIsOpen(false)}>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <line x1="1" y1="25" x2="25" y2="1" stroke="#B59FDD" strokeWidth="2"/>
                            <line x1="1" y1="1" x2="25" y2="25" stroke="#B59FDD" strokeWidth="2"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu