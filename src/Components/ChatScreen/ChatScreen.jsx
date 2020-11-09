import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './ChatScreen.css';
function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'Chung Gia Hân',
      image:
        'https://avatar-nct.nixcdn.com/singer/avatar/2016/01/25/4/1/1/7/1453718110178_600.jpg',
      message: 'Oops there is he is... !',
    },

    {
      name: 'Chung Gia Hân',
      image:
        'https://avatar-nct.nixcdn.com/singer/avatar/2016/01/25/4/1/1/7/1453718110178_600.jpg',
      message: 'How are you!',
    },
    {
      message: 'So Im fine!',
    },
  ]);

  //SEND
  const handleSend = (e) => {
    e.preventDefault();
    if (input !== '') {
      setMessages([...messages, { message: input }]);

      setInput('');
    } else {
      alert('NOT MESSAGE');
    }
  };
  return (
    <div className="chatScreen">
      <h2 className="chatScreen__timestamp">Chat Screen</h2>
      {messages.map((message, index) =>
        message.name ? (
          <div key={index} className="chatScreen__message">
            <Avatar
              className="chatScreen__img"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div key={index} className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputFiled"
          type="text"
          placeholder="Type a message..."
        />
        <button onClick={handleSend} className="chatScreen__button">
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
