import React from "react";

const ChatBubble = ({ username, text, chatStart, avatar, seen }) => {
  return (
    <div className={`chat ${chatStart ? "chat-start" : "chat-end"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="avatar"
            src={`${avatar}`}
          />
        </div>
      </div>
      <div className="chat-header">
        {username}
        <time className="text-xs opacity-50">{seen}</time>
      </div>
      <div className="chat-bubble">{text}</div>
      <div className="chat-footer opacity-50">
        Delivered
      </div>
    </div>
  );
};

export default ChatBubble;
