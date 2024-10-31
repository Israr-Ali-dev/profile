import self from '../img/self.png';
import mock1 from '../img/yesterday.png';
import mock2 from '../img/hd.png';
import mock3 from '../img/inglewood.png';
import mock4 from '../img/paramount.png';
import mock5 from '../img/rubicon.png';
import email from '../img/email.png';
import tea from '../img/tea.png';
import laptop from '../img/laptop.png';
import hand from '../img/hand.png';

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ['rgb(236, 190, 24)', 'rgb(243, 150, 88)'];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: ' Israr',
  lastName: 'Ali',
  initials: 'JS', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Senior Software Engineer',
  skill: 'Full-Stack Developer | JS Frameworks | AI Frameworks | React JS | Next JS | Vue JS | Node JS | Database Management | AI Technologies | Design Systems | API Integration | Version Control | E-Commerce Solutions ',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: tea,
      text: 'fueled by Tea',
    },
    {
      emoji: laptop,
      text: 'Senior Software Engineer at Visualr',
    },
    {
      emoji: email,
      text: 'israrmughal214@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://www.facebook.com/israr.mughal.528/',
      icon: 'fa fa-facebook',
      label: 'facebook',
    },
    {
      link: 'https://github.com/Israr-Ali-dev',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/israr-ali-5a7540134/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://twitter.com',
      icon: 'fa fa-twitter',
      label: 'twitter',
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: `Hello! I'm Israr Ali, a Senior Full-Stack Developer with over 6 years of experience, specializing in the MERN stack, JavaScript frameworks, databases, AI databases, and design systems.
I have a strong passion for emerging technologies, particularly in Artificial Intelligence (AI), including Generative AI and AI Agents. I believe these innovations have the potential to transform our lives and positively impact various sectors.`,
    skills: {
    proficientWith: [
      'Javascript',
      'React JS',
      'Next JS',
      'Redux',
      'GraphQL',
      'Firebase',
      'TypeScript',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'Git',
      'Jira',
    ],
    "webDevelopment": [
      "Node.js",
      "Express.js",
      "Vue.js",
      'React JS',
      'Next JS',
      'Redux',
      'Javascript',
      'TypeScript',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
    ],
    "designSystems": [
      "Shadcn UI",
      "Material UI",
      "Bootstrap",
      "Storybook"
    ],
    "databaseManagement": [
      "MongoDB",
      "PostgreSQL",
      "AI Database",
      "Neo4j"
    ],
    "llmAppsFrameworks": [
      "LangChain.js",
      "LangGraph",
      "FlowiseUI",
      "Prompt Engineering"
    ],
    "vectorDatabases": [
      "Faiss DB",
      "Pinecone DB"
    ],
    "apiAndIntegration": [
      "OpenAI",
      "ChatGPT",
      "GEMINI",
      "ClaudeA",
      "Facebook",
      "Payment Gateways",
      "REST",
      "GraphQL",
      "Docker"
    ],
    "cmsAndECommerce": [
      "React Dashboard",
      "WordPress App Development"
    ],
    "versionControl": [
      "Git",
      "GitHub",
      "Bitbucket"
    ],
    "aiTools": [
      "ChatGPT",
      "Bard",
      "Claude"
    ],
    exposedTo: ['Node JS', 'Vue JS', 'Figma'],
  },
  hobbies: [
    {
      label: 'Reading',
      emoji: '📖',
    },
    {
      label: 'Gaming',
      emoji: '🎭',
    },
    {
      label: 'Movies',
      emoji: '🎥',
    },
    {
      label: 'Cricket',
      emoji: '🌶',
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: 'Yesterday',
      live: 'https://www.orderyesterday.com/buckley', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      //   source: 'https://github.com/paytonjewell', // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: 'Hairydog',
      live: 'https://www.hairydog.com.au/',
      //   source: 'https://github.com/paytonjewell',
      image: mock2,
    },
    {
      title: 'Inglewood',
      live: 'https://inglewoodcoffeeroasters.com.au/',
      //   source: 'https://github.com/paytonjewell',
      image: mock3,
    },
    {
      title: 'Paramount Liqiour',
      live: 'https://www.paramountliquor.com.au/',
      //   source: 'https://github.com/paytonjewell',
      image: mock4,
    },
    {
      title: 'Rubicon8',
      live: 'https://rubicon8.com.au/',
      //   source: 'https://github.com/paytonjewell',
      image: mock5,
    },
  ],
};
