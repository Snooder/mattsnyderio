import React from 'react';

const ParallaxImages = () => (
  <>
    <img
      className="parallax__stars object-cover object-center z-0"
      src="./parallax/1Stars.svg"
      alt="Stars"
    />
    <img
      className="parallax__planets object-cover object-center z-0"
      src="./parallax/2Planets.svg"
      alt="Planets"
    />
    <img
      className="parallax__mountain1 object-cover object-center z-0"
      src="./parallax/3Mountain.svg"
      alt="Mountain 1"
    />
    <img
      className="parallax__mountain2 object-cover object-center z-0"
      src="./parallax/4Mountain.svg"
      alt="Mountain 2"
    />
    <img
      className="parallax__crater object-cover object-center z-0"
      src="./parallax/5Crater.svg"
      alt="Crater"
    />
    <img
      className="parallax__sun object-cover object-center z-0"
      src="./parallax/6Sun.svg"
      alt="Sun"
    />
  </>
);

export default ParallaxImages;
