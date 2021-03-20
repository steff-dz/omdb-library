import React from 'react'
import styled from 'styled-components'

const Header = ({ themeHandler }) => {
  // console.log(themeHandler)
  return (
    <HeaderBase>
      <label htmlFor="toggle display">
        <input type="checkbox" onClick={() => themeHandler()} />
      </label>
      <h1>OMDB Library</h1>
    </HeaderBase>
  )
}

const HeaderBase = styled.header`
  text-align: center;
  color: ${(props) => props.theme.fontColor};
  /* position: relative; */

  display: flex;
  flex-direction: column;
  padding-top: 10px;

  label {
    /* position: absolute; */
    /* left: 5%;
    top: 30%; */
    /* left: 1%;
    top: 23%; */
    /* transform: translate(40px, 40px); */
    align-self: flex-start;
    padding-left: 50px;

    input[type='checkbox'] {
      position: relative;
      /* width: 60px;
      height: 30px; */
      width: 60px;
      height: 20px;
      -webkit-appearance: none;
      background-color: #333;

      border-radius: 20px;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      transition: 0.5s;
      outline: none;
    }

    input:checked[type='checkbox'] {
      background-color: white;
    }

    input[type='checkbox']::before {
      content: '';
      position: absolute;
      /* width: 20px;
      height: 20px; */
      width: 15px;
      height: 15px;
      border-radius: 20px;
      top: 3px;
      left: 5px;
      /* background-color: ${(props) => props.theme.fontColor}; */
      background-color: white;
      /* transform: scale(1.1); */
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transition: 0.5s;
    }

    input:checked[type='checkbox']::before {
      left: 40px;
      background-color: #333;
    }
  }

  h1 {
    font-size: ${(props) => props.theme.fontSize[3]};
    padding: ${(props) => props.theme.spacing[2]};
  }
`

export default Header
