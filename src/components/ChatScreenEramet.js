import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";

import "./ChatScreen.css";

function ChatScreenEramet() {
    const [input, setInput] = useState([])

    const [messages, setMessages] = useState([
        {
            name: "Eramet",
            message: "How u doin?",
        },
        {
            name: "Eramet",
            message: "I miss you...",
        },
        {
            message: "I am sorry... I've already moved on...",
        },
    ]);

    const handleSend = (e) => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput("");
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH ERAMET ON 06/10/21</p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt={message.name}
                            src="..." />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))}

            <div>
                <form className="chatScreen__input">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="chatScreen__inputField" 
                        placeholder="Type a message..."
                        type="text"
                    />
                    <button onClick={handleSend} type="submi" className="chatScreen__inputButton">SEND</button>
                </form>
            </div>
        </div>
    );
}

export default ChatScreenEramet;