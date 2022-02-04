import React from 'react'
import Lottie from 'react-lottie';
import vacation from '../assets/lotties/icon_vacation.json';
import courses from '../assets/lotties/icon_courses.json';
import discounts from '../assets/lotties/icon_discounts.json';
import efficient from '../assets/lotties/icon_efficient.json';
import hours from '../assets/lotties/icon_hours.json';
import inclusive from '../assets/lotties/icon_inclusive.json';
import progressive from '../assets/lotties/icon_progressive.json';

const defaultOptions = {
    loop: false,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMinYMid slice",
      fill: '#ffffff'
    }
};

const LottieIcons = {
    vacation: () => <Lottie options={{...defaultOptions, animationData: vacation}} height={200} width={200} />,
    courses: () => <Lottie options={{...defaultOptions, animationData: courses}} height={200} width={200} />,
    discounts: () => <Lottie options={{...defaultOptions, animationData: discounts}} height={200} width={200} />,
    efficient: () => <Lottie options={{...defaultOptions, animationData: efficient}} height={200} width={200} />,
    hours: () => <Lottie options={{...defaultOptions, animationData: hours}} height={200} width={200} />,
    inclusive: () => <Lottie options={{...defaultOptions, animationData: inclusive}} height={200} width={200} />,
    progressive: () => <Lottie options={{...defaultOptions, animationData: progressive}} height={200} width={200} />,
}

export default LottieIcons