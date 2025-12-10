import React, { createContext, useState } from 'react'
export const dataContext = createContext()
const UserContext = ({ children }) => {
    let [startRes, setStartRes] = useState(false)
    let value = {
        startRes, setStartRes
    }
    return (

        <dataContext.Provider value={value}>
            {children}
        </dataContext.Provider>

    )
}

export default UserContext
