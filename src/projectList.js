const myProjects = [
  {
    index: "0",
    title: "Hacker News",
    desc: "I decided to rebuild Hacker News as my first React project since the is UI straightforward. This allowed me to focus more on composition principles within React, rather than become distracted by fancy styling. Don't get me wrong though, I love fancy styles too. Within this project, I utilized HN's API to pull details surrounding posts, comment threads, users, etc. Since this is all client JavaScript, a refresh button is supplied in each corner of the core pages to update all of the posts and their corresponding threads. I avoided using Redux for this project in an effort to better grok React's concepts and capabilities. I'm currently working on another project involving Redux, though.",
    techStack: ['react', 'css'],
    demoUrl: "https://matthewoctober-hackernews.netlify.com/",
    github: "https://github.com/matthewoctober/hacker-news-clone"
  },
  // {
  //   index: "1",
  //   title: "Matthew October",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero diam, mollis eu sollicitudin venenatis, scelerisque hendrerit lorem. Cras cursus eros consectetur, sagittis nulla sit amet, scelerisque diam. Sed sed porta est. Maecenas malesuada ipsum in porta luctus. Sed aliquet quam in risus tincidunt, vel maximus ex dapibus. Phasellus imperdiet sagittis nulla, nec hendrerit odio venenatis eu. Mauris eget massa vitae urna rhoncus sollicitudin quis ut magna.",
  //   techStack: ['gatsbyIcon', 'react', 'graphQL', 'styled'],
  //   demoUrl: "#",
  //   github: "https://github.com/matthewoctober/personal-site"
  // },
  {
    index: "2",
    title: "Rain or Shine",
    desc: "Has there ever been a JS developer who didn't create a proverbial weather app? This weather app utilizes Dark Sky's API for all of its weather data and was contrived with plain HTML, CSS and JS. This application was mobile-first inspired, so I recommend using it in a mobile view. The desktop view works fine too, though. All of the transitions occur within the same page, so make sure to explore the menu to explore all of the weather details. This application includes the current temperature, an eight day and twenty-four hour forecast, as well as additional details like wind speed, humidity, etc.",
    techStack: ['webpack', 'js', 'css', 'html'],
    demoUrl: "https://matthewoctober-weather.netlify.com/",
    github: "https://github.com/matthewoctober/weather-app",
  },
  {
    index: "3",
    title: "Trello",
    desc: "This is a project I'd almost like to rebuild inside React to better handle state. I originally thought to create a Trello app to cement DOM manipulation principles--which served to be effective--but an app like this, ultimately, requires more sophisticated technology than plan HTML, CSS and JS. You may find a bug or two depending on how much effort you place forth--launch early and iterate, right?",
    techStack: ['js', 'css', 'html'],
    demoUrl: "https://matthewoctober.github.io/trello-clone/",
    github: "https://github.com/matthewoctober/trello-clone",
  },
  {
    index: "4",
    title: "iOS Calculator",
    desc: "This still serves as one of my favorite projects I've participated in crafting. All of the logic behind this iOS calculator was composed in vanilla JS. I did, however, leverage the MathJS library for floating point errors because screw that. This project was also my introduction to webpack, so the webpack configuration within this project is beyond primitive. The weather app webpack configuration file is more robust, if you're curious.",
    techStack: ['webpack', 'js', 'css', 'html'],
    demoUrl: "https://matthewoctober.github.io/ios-calculator/",
    github: "https://github.com/matthewoctober/ios-calculator",
  },
]

export default myProjects;