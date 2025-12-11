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
    let { startRes, setStartRes, popUp, setPopUp } = useContext(dataContext);
    async function handleSubmit(e) {
        e.preventDefault()
        setStartRes(true)
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
                    <div className="genImg">
                        <RiImageAiLine />
                        <span>Generate Image</span>
                    </div>
                    <div className="chat">
                        <IoChatbubbleOutline />
                        <span>Let's Chat</span>
                    </div>
                </div>
            </div>
                :
                <Chat />
            }

            <form className="input-box" onSubmit={(e) => handleSubmit(e)}>
                <div className="pop-up">
                    <div className="select-upload-image">
                        <RiImageAddLine />
                        <span>Upload Image</span>
                    </div>
                    <div className="select-generate-image">
                        <RiImageAiLine />
                        <span>Generate Image</span>
                    </div>
                </div>
                <div id="add" onClick={() => {
                    setPopUp(prev => !prev)
                }}>
                    <FiPlus />
                </div>
                <input type="text" placeholder="Ask Something..." />
                <button id="submit">
                    <FaArrowUpLong />
                </button>
            </form>
        </div>
    )
}

export default Home
