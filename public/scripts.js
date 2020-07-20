const links = [
    {
        href: "/",
        content: "Home"
    },
    {
        href: "bio.html",
        content: "About Me"
    },
    {
        href: "resume.pdf",
        content: "Resume"
    },
    {
        href: "projects.html",
        content: "Coding projects"
    }
];
const projects = [
    {
        title: "Mastermind",
        link: "https://abepolk.github.io/mastermind/",
        description:"An online version of the classic code-breaking game. The game was built using HTML, CSS, JavaScript, and jQuery. It is an online version of the game known as Mastermind. In the game, the player guesses at a randomly chosen secret color code until he/she either is correct, and wins, or makes 12 guesses, and loses. During each turn, the player receives feedback on how similar the guess was to the secret code."
    },
    {
        title: "Abe's List Job Board",
        link: "https://abeslist-job-board.herokuapp.com/",
        description:"A job board with functionality for creating jobs, applying for jobs, uploading job seeker information, and viewing job applications. It a back-end web app built with Node.js, JSX, Express, and CSS. The job board can be viewed without logging in, but logging in as an job seeker or employer adds extra functionality. For job seekers, information such as resume and skills can be saved for individual users. Job seekers can also apply for jobs on the board, with information prefilled from their profile. Employers can add jobs, and then edit and delete the ones that they created. There is a \"My jobs\" page, that shows only the jobs that an individual employer created. They can view applications from job seekers, with a score for how many matching skills are present. Employers cannot modify jobs they did not create, nor can seekers. Applications can only be viewed by the employer who created the job, and employers cannot apply for jobs."
    },
    {
        title: "Contacts organizer",
        link: "https://naughty-kepler-a57fc4.netlify.app/",
        description:"This is a CRUD full-stack app that allows users to log on and create an account for accessing a database for their networking contacts in a GUI. The user can then create records for contacts with each record containing important information, such as name, contacts, and the details of their meeting and follow-up dates. Entries can be edited and deleted. The home page shows all contacts with key information that can be expanded for individuals. For this project, we used the MEAN stack. We also used React Router for the front end to toggle pages. We used Sass to create CSS and Parcel to create the build. For the backend, we used bcrypt to encrypt passwords, cors to control cross origin resource sharing, dotenv to manage environmental variables, Express as our backend framework, JSON Web Token to create tokens to manage sessions, and Mongoose to interact with the database. We also used an mLab MongoDB database. The front end was hosted on Netlify and the backend was hosted on Heroku."
    },
    {
        title: "Never Forget Again",
        link: "https://master--gallant-hermann-47a94a.netlify.app",
        description: "The app is a to-do list that allows users to keep track of items to do. The app supports the creation of users and user authentication. Users can view, create, and delete only their own tasks. The backend is hosted on AWS and uses DynamoDb. AWS is accessed through Flask and the Serverless framework. JWT and the Python hashlib library were used for authentication. flask_cors was also used. React state hooks and effect hooks were used to maintain state, and deletion of entries used optimistic updating. The frontend was hosted on Netlify"
    }
];
const buildLinks = (links_) => links_.map((link)=>{
    return `
        <a href="${link.href}"><li>${link.content}</li></a>
      `
}).join('');
const buildCards = (cards) => cards.map((card)=>{
    return `
        <li class="card">
            <a href="${card.link}">
            <h1 class="title">${card.title}</h1>
            <p>${card.description}</p>
            </a>
        </li>
      `
}).join('');

const buildHeader = () => {
    return `
    <h1>Abraham Polk Portfolio</h1>
    <nav class="navigation">
        <ul id="navigation__links">
        </ul>
    </nav>
    `
}

const header = document.querySelector('.header');
header.innerHTML = buildHeader();
const linkContainer = document.getElementById('navigation__links');
linkContainer.innerHTML = buildLinks(links);
const footerLinks = document.querySelector(".footer-links");
footerLinks.innerHTML = buildLinks(links);
const projectsContainer = document.getElementById('projects');
if (projectsContainer) {
    projectsContainer.innerHTML = buildCards(projects);
}