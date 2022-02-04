import React, { createContext, useContext, useReducer } from 'react'

const ColorContext = createContext({color: 'blue'})

function colorReducer(state: any, action: any): any {
    switch (action.type) {
        case 'set':
            return {...state, color: action.payload}
        default:
            return state
    }
}

function ColorProvider({children}: any) {
    const [state, dispatch] = useReducer(colorReducer, {color: 'blue'})
    // NOTE: you *might* need to memoize this value
    // Learn more in http://kcd.im/optimize-context
    const value: any = {state, dispatch}
    return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
}

function useColor() {
    const context = useContext(ColorContext)
    return context
}

export {ColorProvider, useColor}