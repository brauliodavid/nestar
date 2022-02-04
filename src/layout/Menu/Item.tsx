import React from 'react'
import { motion } from "framer-motion"
import './Menu.css'

const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
};

export const Item = ({title, url}: any) => {
    return (
        <motion.div 
            className="main-nav-item h2 large mb-3" 
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}>
            <a href={url}>{title}</a>
        </motion.div>
    )
}