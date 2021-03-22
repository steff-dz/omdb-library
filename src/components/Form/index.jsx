import React, { useState } from 'react'
import styled from 'styled-components'

const Form = ({ getMedia, setPageCounter }) => {
  const [query, setQuery] = useState('star wars')
  //const [inputTxt, setInputTxt] = useState(query)
  //console.log(inputTxt)
  function handleSubmit(e) {
    e.preventDefault()
    setPageCounter(1)
    getMedia(query)
  }

  const handleInput = (e) => {
    setQuery(e.target.value)
  }

  return (
    <FormBase name="omdb-search" onSubmit={(e) => handleSubmit(e)}>
      <input id="omdb-search" type="text" value={query} onChange={(e) => handleInput(e)}></input>
      <button aria-label="submit form" type="submit">
        <i className="fas fa-search"></i>
      </button>
    </FormBase>
  )
}

const FormBase = styled.form`
  display: flex;
  justify-content: center;
  margin: ${(props) => props.theme.spacing[2]} 0rem;
  width: 100%;
  padding-left: ${(props) => props.theme.spacing[2]};
  input {
    /* background-color: rgba(242, 242, 242, 0.178); */
    background-color: ${(props) => props.theme.pageBackground};
    width: 50%;
    height: fit-content;
    font-size: 0.8rem;
    padding: 2px 0.5rem;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.fontColor};
    color: ${(props) => props.theme.fontColor};

    @media only screen and (min-width: 768px) {
      font-size: 1.2rem;
    }
  }

  button {
    width: 50px;
    height: fit-content;
    background-color: ${(props) => props.theme.pageBackground};
    font-size: ${(props) => props.theme.fontSize[1]};
    color: ${(props) => props.theme.fontColor};
    border: none;

    @media only screen and (min-width: 768px) {
      font-size: 1.3rem;
    }
  }
`

export default Form
