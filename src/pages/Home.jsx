import React, { useContext } from 'react'
import "../App.css"
import { RiImageAiLine } from "react-icons/ri";
import { RiImageAddLine } from "react-icons/ri";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { FaArrowUpLong } from "react-icons/fa6";
import { dataContext } from '../context/UserContext';
import Chat from './Chat.jsx';
const Home = () => {
    let { startRes, setStartRes, popUp, setPopUp, input, setInput, feature, setFeature, prevInput, setPrevInput } = useContext(dataContext);
    async function handleSubmit(e) {
        setStartRes(true)
        setPrevInput(input)
        setInput("")
    }
    return (
        <div className='home'>
            <nav>
                <div className="logo">
                    Smart AI Bot
                </div>
            </nav>
            {!startRes ? <div className="hero">
                <span id="tag">What can i help with?</span>
                <div className="cate">
                    <div className="upImg">
                        <RiImageAddLine />
                        <span>Upload Image</span>
                    </div>
                    <div className="genImg" onClick={() => {
                        setFeature("genImg")
                    }}>
                        <RiImageAiLine />
                        <span>Generate Image</span>
                    </div>
                    <div className="chat" onClick={() => {
                        setFeature("chat")
                    }}>
                        <IoChatbubbleOutline />
                        <span>Let's Chat</span>
                    </div>
                </div>
            </div>
                :
                <Chat />
            }

            <form className="input-box" onSubmit={(e) => {
                e.preventDefault()
                if (input) {
                    handleSubmit(e)
                }
            }
            }>
                {popUp ? <div className="pop-up">
                    <div className="select-upload-image">
                        <RiImageAddLine />
                        <span>Upload Image</span>
                    </div>
                    <div className="select-generate-image" onClick={() => {
                        setFeature("genImg")
                    }}>
                        <RiImageAiLine />
                        <span>Generate Image</span>
                    </div>
                </div> : null
                }
                <div id="add" onClick={() => {
                    setPopUp(prev => !prev)
                }}>
                    {feature == "genImg" ? <RiImageAiLine id="genImg" /> : <FiPlus />}

                </div>
                <input type="text" placeholder="Ask Something..." onChange={(e) => setInput(
                    e.target.value
                )} value={input} />
                {input ? <button id="submit">
                    <FaArrowUpLong />
                </button> : null}

            </form>
        </div>
    )
}

export default Home
