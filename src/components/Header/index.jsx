import React from 'react'
import styled from 'styled-components'

const Header = ({ themeHandler }) => {
  return (
    <HeaderBase>
      <label htmlFor="toggle display">
        <input id="toggle display" type="checkbox" onChange={() => themeHandler()} />
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
    @media only screen and (min-width: 768px) {
      padding-left: 20vw;
    }

    input[type='checkbox'] {
      position: relative;
      /* width: 60px;
      height: 30px; */
      width: 60px;
      height: 20px;
      -webkit-appearance: none;
      background-color: #272343;

      border-radius: 20px;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      transition: 0.5s;
      /* outline: none; */

      @media only screen and (min-width: 768px) {
        height: 30px;
        width: 80px;
      }
    }

    //this is the switch bar, it turns white when checked
    input:checked[type='checkbox'] {
      background-color: white;
    }

    //this is the little circle that toggles
    input[type='checkbox']::before {
      content: '';
      position: absolute;
      width: 15px;
      height: 15px;
      border-radius: 20px;
      top: 3px;
      left: 5px;
      background-color: white;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transition: 0.5s;

      @media only screen and (min-width: 768px) {
        width: 25px;
        height: 25px;
        top: 2px;
      }
    }

    input:checked[type='checkbox']::before {
      left: 40px;
      background-color: #272343;

      @media only screen and (min-width: 768px) {
        left: 50px;
      }
    }
  }

  h1 {
    font-size: ${(props) => props.theme.fontSize[3]};
    padding: ${(props) => props.theme.spacing[2]};

    @media only screen and (min-width: 768px) {
      font-size: 3rem;
    }
  }
`

export default Header
