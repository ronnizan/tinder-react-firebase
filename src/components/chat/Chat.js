import React from "react";
import "./Chat.css";
import Avatar from "@material-ui/core/Avatar";
import { NavLink } from "react-router-dom";

const Chat = ({ name, message, profilePic, timestamp }) => {
  return (
    <NavLink to={`/chat/${name}`}>
      <div className='chat'>
        <Avatar className='chat__image' alt={name} src={profilePic}></Avatar>
        <div className='chat__deatils'>
          <h2>{name}</h2>
          <p>{message}</p>
        </div>

        <div>
          <p className='chat__timestamp'>{timestamp}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Chat;
