import React, { useEffect, useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";
import { useParams } from 'react-router-dom';


const ChatScreen = () => {
  const { person } = useParams();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: person,
      image: "...",
      msg: "whats up?",
    },
    {
      name: person,
      image: "...",
      msg: "hello?",
    },
    {
      msg: "hi!",
    },
  ]);
  useEffect(() => {
    
    return () => {
      
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, { msg: input }]);
    setInput("");
  };

  return (
    <div className='chatScreen'>
      <p className='chatScreen__timestamp'>YOU MATCHED WITH {person} ON 5/6/20</p>
      {messages.map((message) =>
        message.name ? (
          <div key={message.name} className='chatScreen__msg'>
            <Avatar
              className='chat__image'
              alt={message.name}
              src={message.image}
            ></Avatar>
            <p className='chatScreen__text'>{message.msg}</p>
          </div>
        ) : (
          <div key={message.msg} className='chatScreen__msg'>
            <p className='chatScreen__textUser'>{message.msg}</p>
          </div>
        )
      )}

      <form className='chatScreen__input'>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='chatScreen__inputField'
          placeholder='Type A Message'
          type='text'
        />
        <button onClick={handleSubmit} className='chatScreen__btn'>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
