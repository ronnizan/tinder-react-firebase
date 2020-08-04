import React from "react";
import Chat from "../chat/Chat";

const Chats = () => {
  return <div className='chats'>
  <Chat
  name='Anna Farris'
  message="Hey what up?"
  timestamp="30 minutes ago"
  profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDUbfnNQafut9C19FNRktZs9VAmrpxGBGgeA&usqp=CAU"
  >
  </Chat>
  <Chat
  name='Angelina Jolie'
  message="how are you?"
  timestamp="21 minutes ago"
  profilePic="data:image/jpeg;base64,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"
  >
  </Chat>
  <Chat
  name='Jessica Alba'
  message="are you good?"
  timestamp="15 minutes ago"
  profilePic="data:image/jpeg;base64,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"
  >
  </Chat>
  </div>;
};

export default Chats;