import React, { createContext, useState } from 'react'
export const dataContext = createContext()
export let user = {
    data: null,
    mime_type: null,
    imgUrl: null
}
export let prevUser = {
    data: null,
    mime_type: null,
    prompt: null,
    imgUrl: null
}

const UserContext = ({ children }) => {
    let [startRes, setStartRes] = useState(false)
    let [popUp, setPopUp] = useState(false)
    let [input, setInput] = useState("")
    let [feature, setFeature] = useState("chat")
    let [showResult, setShowResult] = useState("")
    let [genImgUrl, setGenImgUrl] = useState("")
    const [previewImg, setPreviewImg] = useState(null);

    let value = {
        startRes,
        setStartRes,
        popUp,
        setPopUp,
        input,
        setInput,
        feature,
        setFeature,
        showResult,
        setShowResult,
        genImgUrl, 
        setGenImgUrl,
        previewImg,
         setPreviewImg
    }
    return (

        <dataContext.Provider value={value}>
            {children}
        </dataContext.Provider>

    )
}

export default UserContext
