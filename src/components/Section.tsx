import React from 'react'

interface SectionProps {
    id?: string
    className?: string
    color?: string
    children?: any
}

export const Section: React.FC<SectionProps> = (props: SectionProps) => {
    const {id, className, color = 'white', children} = props
    return (
        <section id={id} className={`${className ? className : ''} bg-${color}`}>
            <div className="container">
                {props.children}
            </div>
        </section>
    )
}