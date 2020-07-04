const links = [
    {
        href: "/",
        content: "Home"
    },
    {
        href: "/resume.pdf",
        content: "Resume"
    },
    {
        href: "/bio.html",
        content: "About Me"
    },
    {
        href: "/projects.html",
        content: "Coding projects"
    }
];
const projects = [
    {
        title: "Mastermind",
        link: "http://github.com",
        imgsrc: "https://picsum.photos/300",
        description:"MastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermindMastermind."
    },
    {
        title: "Abe's List Job Board",
        link: "http://github.com",
        imgsrc: "https://picsum.photos/300",
        description:"JobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobsJobs"
    },
    {
        title: "Contacts organizer",
        link: "http://github.com",
        imgsrc: "https://picsum.photos/300",
        description:"Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name Name ."
    },
    {
        title: "Organizer",
        link: "http://github.com",
        imgsrc: "https://picsum.photos/300",
        description:"Do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this do this ."
    }
];
const buildLinks = (links_) => links_.map((link)=>{
    return `
        <li><a href="${link.href}">${link.content}</a></li>
      `
}).join('');
const buildCards = (cards) => cards.map((card)=>{
    return `
        <li class="card">
            <a href="${card.link}">
            <div class="img-container">
                <img src="${card.imgsrc}" alt="">
            </div>
            <h1 class="title">${card.title}</h1>
            <p>${card.description}</p>
            </a>
        </li>
      `
}).join('');
const linkContainer = document.getElementById('navigation__links');
linkContainer.innerHTML = buildLinks(links);
const footer = document.querySelector(".footer");
footer.innerHTML = buildLinks(links);
const projectsContainer = document.getElementById('projects');
projectsContainer.innerHTML = buildCards(projects);