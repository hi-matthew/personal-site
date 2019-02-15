const myProjects = [
    {
    index: "0",
    title: "Chatterbox",
    desc: "Chatterbox is a MERN stack chat application, which utilizes SocketIO to provide users a duplex communication channel. The primary goal of building this application was to solidify my understanding of client/server network architecture. Through building Chatterbox I was able to gain further comprehension and comfortability surroundings REST API's, MongoDB/Mongoose, user session management, user authentication, form validation, password hashing, cors, etc. I also played around with Jest and Enzyme somewhat within this application, but this an area in which I'm still building knowledge. Create React App was used to provide the front-end for this application. I have worked with Pug's templating engine to render view files in a traditional MVC design pattern, but who wants to write Pug when you can write React?",
    techStack: ['mongo', 'express', 'react', 'node', 'jest'],
    demoUrl: "https://chatterbox-prod.herokuapp.com/",
    github: "https://github.com/matthewoctober/chatterbox"
  },
  {
    index: "1",
    title: "Hacker News",
    desc: "I decided to rebuild Hacker News as my first React project since the is UI straightforward. This allowed me to focus more on composition principles within React, rather than become distracted by fancy styling. Don't get me wrong though, I love fancy styles too. Within this project, I utilized HN's API to pull details surrounding posts, comment threads, users, etc. Since this is all client JavaScript, a refresh button is supplied in each corner of the core pages to update all of the posts and their corresponding threads. I avoided using Redux for this project in an effort to better grok React's concepts and capabilities.",
    techStack: ['react', 'js'],
    demoUrl: "https://matthewoctober-hackernews.netlify.com/",
    github: "https://github.com/matthewoctober/hacker-news-clone"
  },
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
    desc: "This is a project I'd almost like to rebuild inside React to better handle state. I originally thought to create a Trello app to cement DOM manipulation principles--which served to be effective--but an app like this, ultimately, requires more sophisticated technology than just plain HTML, CSS and JS. You may find a bug or two depending on how much effort you place forth--launch early and iterate, right?",
    techStack: ['js', 'css', 'html'],
    demoUrl: "https://matthewoctober.github.io/trello-clone/",
    github: "https://github.com/matthewoctober/trello-clone",
  },
  {
    index: "4",
    title: "iOS Calculator",
    desc: "This still serves as one of my favorite projects I've participated in crafting. All of the logic behind this iOS calculator was composed in vanilla JS. I did, however, leverage the MathJS library for floating point errors because screw that. This project was also my introduction to webpack, so the webpack configuration file within this project is quite primitive. The weather app webpack configuration file is more robust, if you're curious.",
    techStack: ['webpack', 'js', 'css', 'html'],
    demoUrl: "https://matthewoctober.github.io/ios-calculator/",
    github: "https://github.com/matthewoctober/ios-calculator",
  },
]

export default myProjects;