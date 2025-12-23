import React, { useContext } from 'react'
import "../App.css";
import { RiImageAiLine } from "react-icons/ri";
import { RiImageAddLine } from "react-icons/ri";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { FaArrowUpLong } from "react-icons/fa6";
import { dataContext, prevUser, user } from '../context/UserContext';
import Chat from './Chat.jsx';
import { generateResponse } from '../gemini.js';
import { query } from '../huggingFace.js'
function Home() {
    let { startRes, setStartRes, popUp, setPopUp, input, setInput, feature, setFeature, showResult,
        setShowResult, genImgUrl, setGenImgUrl,previewImg, setPreviewImg
    } = useContext(dataContext);
    async function handleSubmit(e) {
        setStartRes(true)
        setShowResult("")
        prevUser.data = user.data;
        prevUser.mime_type = user.mime_type;
        prevUser.imgUrl = user.imgUrl;
        prevUser.prompt = input;
         user.data = null
        user.mime_type = null
        user.imgUrl = null;
        setInput("")
        let result = await generateResponse()
        setShowResult(result)
        

    }

function handleImage(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        const base64 = event.target.result.split(",")[1];

        // Store the image in user & prevUser
        user.data = base64;
        user.mime_type = file.type;
        user.imgUrl = `data:${file.type};base64,${base64}`;

        prevUser.data = base64;
        prevUser.mime_type = file.type;
        prevUser.imgUrl = user.imgUrl;

        // Show small preview
        setPreviewImg(user.imgUrl);

        // Close popup
        setPopUp(false);
    };
    reader.readAsDataURL(file);
}

    async function handleGenerateImg() {
        setStartRes(true)
        setGenImgUrl("")
        prevUser.prompt = input
        const blob = await query()
        const url = URL.createObjectURL(blob)
        setGenImgUrl(url)
        setInput("")
        setFeature("chat")
    }
    function resetToHome() {
        setStartRes(false);      
        setFeature("chat");     
        setShowResult("");
        setGenImgUrl("");
        setInput("");
        setPopUp(false);
        prevUser.prompt = "";
        prevUser.imgUrl = null;
    }
    return (
        <div className='home'>
            <nav>
                <div className="logo" onClick={resetToHome}>
                    Smart AI Bot
                </div>
            </nav>
            {!startRes ? <div className="hero">
                <span id="tag">What can i help with?</span>
                <div className="cate">
                    <div className="upImg" onClick={() => {
                        document.getElementById("inputImg").click()
                    }}>
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
            <input type="file" accept='image/*' hidden id='inputImg' onChange={handleImage} />
        <form className="input-box" onSubmit={(e) => {
    e.preventDefault();

    if (input) {
        // If an image is uploaded, set feature to upImg for first chat message
        if (previewImg) setFeature("upImg");

        // Handle generate image feature
        if (feature === "genImg") {
            handleGenerateImg();
        } else {
            handleSubmit(e);
        }

        // Clear preview after sending
        setPreviewImg(null);
    }
}}>

    {/* Small preview of uploaded image */}
    {previewImg && (
        <div className="small-preview">
            <img src={previewImg} alt="preview" />
        </div>
    )}

    {/* Popup for selecting upload or generate image */}
    {popUp ? (
        <div className="pop-up">
            <div className="select-upload-image" onClick={() => {
                setPopUp(false);
                setFeature("chat");
                document.getElementById("inputImg").click();
            }}>
                <RiImageAddLine />
                <span>Upload Image</span>
            </div>
            <div className="select-generate-image" onClick={() => {
                setFeature("genImg");
                setPopUp(false);
            }}>
                <RiImageAiLine />
                <span>Generate Image</span>
            </div>
        </div>
    ) : null}

    {/* Button to toggle popup */}
    <div id="add" onClick={() => setPopUp(prev => !prev)}>
        {feature === "genImg" ? <RiImageAiLine id="genImg" /> : <FiPlus />}
    </div>

    {/* Input box */}
    <input 
        type="text" 
        placeholder="Ask Something..." 
        onChange={(e) => setInput(e.target.value)} 
        value={input} 
    />

    {/* Submit button */}
    {input ? (
        <button id="submit">
            <FaArrowUpLong />
        </button>
    ) : null}

</form>

        </div>
    )
}


export default Home
