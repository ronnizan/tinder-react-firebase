import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import ArrowBackIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";
import { NavLink, useHistory } from "react-router-dom";

function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className='header'>
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIcon
            fontSize='large'
            className='header__icon'
          ></ArrowBackIcon>
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className='header__icon' fontSize='large'></PersonIcon>
        </IconButton>
      )}

      <NavLink to='/'>
        <img
          className='header__logo'
          src='https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png'
          alt='tinder-logo'
        ></img>
      </NavLink>
      <NavLink to='/chat'>
        <IconButton>
          <ForumIcon className='header__icon' fontSize='large'></ForumIcon>
        </IconButton>
      </NavLink>
    </div>
  );
}

export default Header;
