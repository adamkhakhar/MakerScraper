import React from 'react'
import s from 'styled-components'

const Header = s.header`
    width: 100%;
    padding: 1rem 2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

const Title = s.h1`
    font-size: 1.2rem;
    margin-bottom: 0;
    line-height: 1;
    margin-right: 1.5rem;
    display: inline-block;
`

const Search = s.input`
    display: inline-block;
    margin-bottom: 0;
    border-radius: 0.2rem;
    border: 2px solid rgba(0, 0, 0, 0.1);
    outline: 0 !important;
    padding: 0.25rem 0.5rem;
    max-width: 100%;
    width: 24rem;

    &:focus {
        border: 2px solid navy;
    }
`

export default () => (
  <Header>
    <Title>MakerScraper</Title>
    <Search placeholder="Search your address..." />
  </Header>
)
