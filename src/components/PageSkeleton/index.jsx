import React from 'react'
import styled from 'styled-components'

const PageSkeleton = () => {
  function renderSkeleton() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => <SkeletonArticle />)
  }
  return <>{renderSkeleton()}</>
}

const SkeletonArticle = styled.article`
  border: 1px solid ${(props) => props.theme.fontColor};
  height: 210px;
  width: 150px;
  overflow: hidden;
  position: relative;
  background-color: lightgrey;

  @media only screen and (min-width: 768px) {
    height: 410px;
    width: 270px;
  }
`

export default PageSkeleton

// ;[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => {
//   return <SkeletonArticle />
// })
