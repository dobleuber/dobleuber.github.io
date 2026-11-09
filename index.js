/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc.
 * Content reflects Wbert Castro's current resume.
 */
const resume = {
  firstName: 'Wbert',
  lastName: 'Castro',
  jobTitle: 'Software Engineering and Agentic Development',
  country: 'Colombia',
  phone: '',
  email: 'dobleuber@gmail.com',
  education: [
    {
      school: 'Let’s Get Rusty',
      degree: 'Rust Live Bootcamp Accelerator',
      graduationDate: 'Jul–Sep 2024',
      description: 'Built a Rust authentication service with PostgreSQL, Redis and CI/CD. Practiced embedded constraints with no_std Rust and heapless data structures.'
    },
    {
      school: 'Udacity',
      graduationDate: '2020–2021',
      description: 'Robotics Software Engineer; Deep Reinforcement Learning; Introduction to Machine Learning with TensorFlow.'
    },
    {
      school: 'Universidad de Antioquia',
      graduationDate: '1997–2003',
      description: 'Systems Engineering'
    }
  ],
  links: [
    { label: 'GitHub', link: 'https://github.com/dobleuber' },
    { label: 'LinkedIn', link: 'https://linkedin.com/in/dobleuber' },
    { label: 'Personal Website', link: 'https://www.dobleuber.one/' }
  ],
  skillGroups: [
    {
      label: 'Agentic development',
      description: 'Claude Code, Codex, AI-assisted development, parallel work coordination, MCP integrations, independent review and test validation.'
    },
    {
      label: 'Engineering practice',
      description: 'Git, isolated worktrees, shell and CLI workflows, CI/CD, test automation, code review, debugging and technical documentation.'
    },
    {
      label: 'Technical foundation',
      description: 'TypeScript, JavaScript, Node.js, React, Express, Python and Rust; PostgreSQL, Redis and Firebase; authentication and authorization.'
    },
    {
      label: 'Additional skills',
      description: 'C#, HTML, CSS, Django, TensorFlow and Keras; MySQL, MSSQL and SQLite; AWS, GCP, Heroku and Cloudflare.'
    }
  ],
  languages: ['English', 'Spanish'],
  professionalSummary: 'Software engineer with 20+ years of experience building web applications and working with international remote teams. Current work combines Node.js and TypeScript engineering with Claude Code and Codex workflows, code review, automated testing and integration diagnosis. Background includes authentication, real-time applications, CI/CD and developer mentoring, supported by formal training in machine learning, reinforcement learning and Rust.',
  employmentHistory: [
    {
      jobTitle: 'Software Engineer',
      startDate: 'Apr 2025',
      endDate: 'Present',
      employer: 'NodeSource',
      city: 'Contractor, remote',
      achievements: [
        'Contribute to the N|Solid platform, with work spanning account onboarding, authentication and authorization, test tooling and CLI behavior.',
        'Coordinate AI-assisted implementation, review and validation with Claude Code and Codex, using scoped tasks and isolated Git worktrees for concurrent work.',
        'Evaluate generated changes through code review and tests, checking dependencies and distinguishing local or CI results from real-environment validation.',
        'Investigate integration failures using runtime probes, test output and observability tools, including MCP-based access to diagnostic sources.'
      ]
    },
    {
      jobTitle: 'Full Stack Engineer',
      // The end date is not confirmed. Leave the date range off the public site.
      employer: 'Trashie.io',
      city: 'US team, remote',
      achievements: [
        'Built an online store with Node.js and React for a clothing reuse and recycling business, and integrated external services into customer-facing workflows.'
      ]
    },
    {
      jobTitle: 'Full Stack Engineer',
      startDate: 'May 2022',
      endDate: 'Aug 2024',
      employer: 'MediaLab',
      city: 'US team, remote',
      achievements: [
        'Developed features for Genius song pages and advertising, and provided technical support for the platform.'
      ]
    },
    {
      jobTitle: 'Software Developer',
      startDate: 'Nov 2020',
      endDate: 'Feb 2022',
      employer: 'Perficient Latin America',
      city: 'US clients, remote',
      achievements: [
        'Built websites and features for construction and automotive clients with React, Material-UI and Node.js.',
        'Mentored developers and led technical workshops.'
      ]
    },
    {
      jobTitle: 'Full Stack Developer',
      startDate: 'Feb 2020',
      endDate: 'Nov 2020',
      employer: 'Monadical',
      city: 'Remote',
      achievements: [
        'Built real-time applications with React, Firebase Realtime Database and Firestore, and REST APIs with Django.',
        'Led development of a real-time chat for the Mutek music festival using Node.js, Redis and Socket.io, collaborating with international volunteers.'
      ]
    },
    {
      jobTitle: 'Frontend Developer',
      startDate: 'Jul 2018',
      endDate: 'Feb 2020',
      employer: 'Mahisoft',
      city: 'Remote',
      achievements: [
        'Developed responsive websites and mobile web applications with React and Razzle, with a focus on performance and user interactions.'
      ]
    },
    {
      jobTitle: 'Frontend Developer',
      startDate: 'Dec 2014',
      endDate: 'Jun 2018',
      employer: 'PSL Corp',
      city: 'Medellín, Colombia',
      achievements: [
        'Built hybrid mobile applications combining web and native Android/iOS views, and migrated an advertising platform from AngularJS to Angular.'
      ]
    },
    {
      jobTitle: 'Developer',
      startDate: 'May 2014',
      endDate: 'Jun 2015',
      employer: 'Freelance',
      city: 'US and European clients, remote',
      achievements: [
        'Developed applications with Angular, PhoneGap and React for international clients.'
      ]
    },
    {
      jobTitle: 'Web Developer',
      startDate: 'Oct 2004',
      endDate: 'Mar 2014',
      employer: 'Earlier engineering roles',
      city: 'Colombia',
      achievements: [
        'PSL Corp (2009–2014), Axede (2007–2009), Seriva (2005–2007) and Symmetry Limited (2004–2005).',
        'Delivered .NET applications, advertising operations systems, e-commerce and payment integrations, banking software and an airline booking engine.'
      ]
    }
  ],
  photo: 'static/me-8cbf36c91ba9a3a69604ded2dbd04302-73218.jpg'
}

const formatResume = (r) => ({
  ...r,
  address: [r.country, r.city, r.postalCode].filter(Boolean).join(', ')
})

// The readable fallback remains available if the optional Vue CDN is unavailable.
if (typeof Vue !== 'undefined') {
  Vue.config.ignoredElements = ['animatable-component']
  new Vue({
    el: '#app',
    data: formatResume(resume),
    mounted() {
      document.getElementById('resume-fallback').hidden = true
    }
  })
}
// Animations enhance the page; they never gate its visibility.
