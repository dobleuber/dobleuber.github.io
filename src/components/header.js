import React from 'react'
import Link from 'gatsby-link'

const github = require('../icons/github.png')
const linkedIn = require('../icons/in.png')
const twitter = require('../icons/twitter.png')

const liStyle = {
  margin: 0,
  padding: 5,
}

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, color: 'white' }}>{siteTitle}</h1>
      <div>
        <ul
          style={{
            alignItems: 'center',
            display: 'flex',
            listStyle: 'none',
            margin: 0,
          }}
        >
          <li style={liStyle}>
            <a href="https://github.com/dobleuber/" target="_blank">
              <img src={github} />
            </a>
          </li>
          <li style={liStyle}>
            <a href="https://www.linkedin.com/in/dobleuber" target="_blank">
              <img src={linkedIn} />
            </a>
          </li>
          <li style={liStyle}>
            <a href="https://twitter.com/dobleuber" target="_blank">
              <img src={twitter} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Header
