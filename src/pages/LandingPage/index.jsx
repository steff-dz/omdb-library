import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { MainBase } from '../../components/MainBase'
import Form from '../../components/Form'
import MovieContainer from '../../components/MovieContainer'
import { ButtonContainer } from '../../components/ButtonContainer'

const LandingPage = ({
  query,
  watchList,
  handleInput,
  clickHandler,
  media,
  getMedia,
  pageCounter,
  setPageCounter,
}) => {
  return (
    <MainBase>
      <Form getMedia={getMedia} setPageCounter={setPageCounter} />

      {media &&
        media.map((el) => (
          <MovieContainer
            key={uuidv4()}
            movie={el}
            starred={Boolean(
              watchList.find((item) => {
                return item.imdbID === el.imdbID
              })
            )}
            clickHandler={clickHandler}
          />
        ))}
      <ButtonContainer>
        <button aria-label="back 10 items" onClick={() => setPageCounter(pageCounter - 1)}>
          Back
        </button>
        <button aria-label="fowards 10 items" onClick={() => setPageCounter(pageCounter + 1)}>
          Next
        </button>
      </ButtonContainer>
    </MainBase>
  )
}

export default LandingPage
