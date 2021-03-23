import React from 'react'
import { motion } from 'framer-motion'

import styled from 'styled-components'

const MovieContainer = ({ movie, starred, clickHandler }) => {
  //function to select a show w/ enter key--------------------------
  function handleEnterKey(evt, movie) {
    if (evt.key === 'Enter') {
      clickHandler(movie)
    }
  }

  return (
    <ArticleBase tabIndex="0" variants={containerVariants} whileHover="popOut" whileFocus="popOut">
      <i
        aria-label="click to add to your watchlist"
        role="checkbox"
        aria-checked={`${starred}`}
        id="movie select check-box"
        tabIndex="0"
        onKeyPress={(evt) => handleEnterKey(evt, movie)}
        onClick={() => clickHandler(movie)}
        className={starred ? 'fas fa-star' : 'far fa-star'}
      ></i>

      <img src={movie.Poster} alt={`poster for ${movie.Title}`}></img>
    </ArticleBase>
  )
}

//animation object for scaling the movie article--------------------------------
const containerVariants = {
  popOut: {
    scale: 1.2,
    zIndex: 1,
    transition: {
      duration: 0.3,
    },
  },
}

const ArticleBase = styled(motion.div)`
  border: 1px solid ${(props) => props.theme.fontColor};
  height: 210px;
  width: 150px;
  overflow: hidden;
  position: relative;
  background-color: lightgrey;

  .fa-star {
    position: absolute;
    right: 5px;
    top: 5px;
    color: yellow;
  }

  img {
    height: 100%;
    width: 100%;
    color: black;
  }

  @media only screen and (min-width: 768px) {
    height: 410px;
    width: 270px;

    .fa-star {
      font-size: ${(props) => props.theme.fontSize[3]};
      top: 10px;
    }
  }
`

export default MovieContainer
