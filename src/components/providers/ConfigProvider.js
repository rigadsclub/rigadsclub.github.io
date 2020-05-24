import React from 'react'
import config from '../../config'

const Context = React.createContext(config)

export function useConfig() {
    const context = React.useContext(Context)
    if (!context) {
        throw new Error('useConfig must be used within a ConfigProvider')
    }
    return context
}

export default function ConfigProvider({ value, children }) {
    return <Context.Provider value={value || config}>{children}</Context.Provider>
}