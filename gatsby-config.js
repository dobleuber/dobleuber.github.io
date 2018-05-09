module.exports = {
  siteMetadata: {
    title: 'Wbert Adrián Castro Vera',
    skills: [
      {
        label: 'Angular',
        score: 4
      },
      {
        label: 'AngularJs',
        score: 5
      },
      {
        label: 'C# .Net',
        score: 5
      },
      {
        label: 'css, sass, less',
        score: 4
      },
      {
        label: 'GraphQL',
        score: 4
      },
      {
        label: 'Javascript',
        score: 5
      },
      {
        label: 'NodeJs',
        score: 4
      },
      {
        label: 'React',
        score: 5
      },
      {
        label: 'Webpack, grunt, gulp',
        score: 4
      },
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
  pathPrefix: '/dobleuber'
}
