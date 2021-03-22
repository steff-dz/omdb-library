import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { MainBase } from '../../components/MainBase'
import Form from '../../components/Form'
import MovieContainer from '../../components/MovieContainer'

const SeriesPage = () => {
  return (
    <MainBase>
      <Form />
    </MainBase>
  )
}

export default SeriesPage
