import React from "react";
import Chat from "./Chat"

function Conversations() {
    return (
        <div className="chats">
            <Chat
                name="Eramet"
                message="I miss you..."
                timeStamp="3months ago"
                profilePic="..."
            />
            <Chat
                name="Louis Vuitton"
                message="What's up? ❤️"
                timeStamp="1y3m ago"
                profilePic="..."
            />
            <Chat
                name="Cartier"
                message="U asleep?"
                timeStamp="1y8m ago"
                profilePic="..."
            />
        </div>
    );
}

export default Conversations;