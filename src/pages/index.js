import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import Skill from '../components/skill'

const IndexPage = ({ data }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      style={{
        display: 'flex',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Img
          title="me"
          alt="dobleuber"
          resolutions={data.file.childImageSharp.resolutions}
        />
        <h4
          style={{
            marginTop: 15,
          }}
        >
          Skills
        </h4>
        {data.site.siteMetadata.skills.map(skill => (
          <Skill key={skill.label} {...skill} />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: 20,
        }}
      >
        <h4>Frontend Developer</h4>
        <p>
          Web developer with 15+ years of experience. Passionate for my work and
          self-improvement. Committed with developing product with high quality
          standards. I enjoy learning and working with new technologies. I love
          working hard when I am doing challenging projects.
        </p>
        <p>
          I fell in love with React and its ecosystem a couple of years ago. I
          have been studying this framework a lot and have built several
          applications to put my skills into practice. I’ve given talks about
          React, Angular and Web development in multiple tech meetups in my
          city.
        </p>
        <h4>Experience</h4>
        <h5>PSL Corp</h5>
        <p>
          Senior Web Developer <br />
          Responsabilities:          
        </p>
        <ul>
          <li>
            Develop high quality web applications for Big companies at US and
            Colombia
          </li>
          <li>
            Support the software architect at defining the technology stack
            for Web projects and develop the most challenging features
          </li>
          <li>
            Help with personal selection process doing internal and external
            technical interviews
          </li>
          <li>
            Support to another teams in the resolution of difficult issues
          </li>
          <li>
            Mentoring junior developers to improve their technical skills
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default IndexPage

export const query = graphql`
  query getAvatar {
    file(name: { eq: "me" }) {
      name
      childImageSharp {
        resolutions(width: 256, height: 279) {
          ...GatsbyImageSharpResolutions_tracedSVG
        }
      }
    }

    site {
      siteMetadata {
        skills {
          label
          score
        }
      }
    }
  }
`
