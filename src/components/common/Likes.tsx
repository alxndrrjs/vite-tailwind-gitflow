import React, { useState } from 'react';
import like from '../../assets/images/like.png';

export const Likes = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <button
        className="text-gray-500 text-2xl flex items-center gap-2 my-2 mx-auto cursor-pointer p-2 rounded-full"
        onClick={() => setLikes(likes + 1)}
      >
        <img className="w-6 h-6" src={like} alt="like" />
        {likes}
      </button>
    </div>
  );
};
