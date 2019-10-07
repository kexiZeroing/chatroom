import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        {/* form to fill in */}
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={ ev => setName(ev.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={ ev => setRoom(ev.target.value)} />
        </div>

        {/* pass the parameter to chat */}
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className="button mt-20">Sign In</button>
        </Link>
      </div>
    </div>
  );
}

export default Join;