import React from 'react';
import Sidebar from '../Chatpage/Sidebar';
import Chat from '../Chatpage/Chat';
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
        <div className="container">
            <Sidebar/>
            <Chat/>
        </div>
    </div>
  );
}

export default Home;
