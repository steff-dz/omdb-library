import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { MainBase } from '../../components/MainBase'
import Form from '../../components/Form'
import MovieContainer from '../../components/MovieContainer'

//const apiKey = process.env.OMDB_KEY

const SeriesPage = ({
  query,
  watchList,
  handleInput,
  clickHandler,
  media,
  getMedia,
  pageCounter,
  setPageCounter,
}) => {
  //const [pageCounter, setPageCounter] = useState(1)

  // useEffect(() => {
  //   console.log('on the series page')
  //   getMedia()
  // }, [])

  return (
    <MainBase>
      <Form query={query} handleInput={handleInput} getMedia={getMedia} />
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

const ButtonContainer = styled.div`
  width: 100%;

  height: fit-content;
  display: flex;
  justify-content: center;
  gap: ${(props) => props.theme.spacing[2]};

  button {
    width: 100px;
    font-size: ${(props) => props.theme.fontSize[1]};
    background-color: white;
    letter-spacing: 3px;
    border-radius: 10px;
    border: 2px solid ${(props) => props.theme.fontColor};
    text-align: center;
    cursor: pointer;
    &:hover {
      background-color: lightgrey;
    }

    @media only screen and (min-width: 768px) {
      font-size: ${(props) => props.theme.fontSize[2]};
      letter-spacing: 0;
    }
  }
`
export default SeriesPage
