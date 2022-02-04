import React, { useContext, useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { IntersectionContext, IntersectionObserver } from "./IntersectionObserver"

export const MotionImg = (props: any) => {
    return (
		<IntersectionObserver>
			<MotionIntersectionObserverImg {...props}>
				{props.children}
			</MotionIntersectionObserverImg>
		</IntersectionObserver>
    )
}

export const MotionIntersectionObserverImg = (props: any) => {
	const {
		children, 
		className,
		initial = {opacity: 0},
		animate = {y: 0, opacity: 1},
		transition = {delay: 0.4, duration: 1},
        src, 
	} = props

    const [imageLoading, setImageLoading] = useState(true);

    const imageLoaded = () => {
		setImageLoading(false);
	};

	const animationControl = useAnimation()

	const { inView } = useContext(IntersectionContext);

	useEffect(() => {
		if(inView){
			animationControl.start({
				...animate,
				opacity: 1,
				transition
			})
		}
	}, [inView])

	return (
		<motion.img {...props} initial={initial} animate={animationControl} className={className} onLoad={imageLoaded} src={src} />
	)
}