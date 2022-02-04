import React, { useContext, useEffect } from "react";
import { motion, useAnimation } from "framer-motion"
import { IntersectionContext, IntersectionObserver } from "./IntersectionObserver";

export const MotionDiv = (props: any) => {
    return (
		<IntersectionObserver>
			<MotionIntersectionObserver {...props}>
				{props.children}
			</MotionIntersectionObserver>
		</IntersectionObserver>
    )
}

export const MotionIntersectionObserver = (props: any) => {
	const {
		children, 
		className,
		initial = {y: 20, opacity: 0},
		animate = {y: 0, opacity: 1},
		transition = {duration: 0.6, delay: 0.2}
	} = props

	const animationControl = useAnimation()

	const { inView } = useContext(IntersectionContext);

	useEffect(() => {
		if(inView){
			animationControl.start({
				...animate,
				transition
			})
		}
	}, [inView])

	return (
		<motion.div {...props} initial={initial} animate={animationControl} className={className}>
            {children}
        </motion.div>
	)
}