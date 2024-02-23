import React from 'react';

const RatingMessage = ({ score }) => {
  let message, image;

  if (score >= 1 && score <= 4) {
    message = "I do not recommend it";
    image = 'C:\Users\brigi\anime-app1\public\No.jpg';
  } else if (score >= 5 && score <= 7) {
    message = "You may have fun";
    image = 'C:\Users\brigi\anime-app1\public\to-may.jpg';
  } else if (score > 7) {
    message = "Great, this is one of the best anime";
    image = 'C:\Users\brigi\anime-app1\public\Recomended.jpg';
  }

  return (
    <div>
      <img src={image} alt={message} />
      <p>{message}</p>
    </div>
  );
};

export default RatingMessage;