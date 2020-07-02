const links = [
    {
        href: "/",
        content: "Home"
    },
    {
        href: "https://google.com",
        content: "Google Me"
    },
    {
        href: "https://facebook.com",
        content: "Facebook Me"
    }
];
const projects = [
    {
        title: "Number 1",
        link: "http://github.com",
        imgsrc: "https://picsum.photos/300",
        description:"I'm baby hammock knausgaard waistcoat kale chips typewriter VHS leggings distillery four dollar toast you probably haven't heard of them. Helvetica ennui sustainable pork belly distillery echo park offal next level crucifix pinterest. Meditation aesthetic YOLO pug migas. Meditation prism air plant XOXO literally narwhal artisan sustainable ethical readymade pickled kitsch meh. Church-key irony drinking vinegar, pug wayfarers gluten-free swag gentrify coloring book cardigan glossier mixtape ethical adaptogen helvetica. Yr keytar street art bushwick dreamcatcher woke banh mi cray celiac humblebrag 3 wolf moon."
    },
    {
        title: "Number 2",
        link: "http://github.com",
        imgsrc: "https://picsum.photos/300",
        description:"I'm baby hammock knausgaard waistcoat kale chips typewriter VHS leggings distillery four dollar toast you probably haven't heard of them. Helvetica ennui sustainable pork belly distillery echo park offal next level crucifix pinterest. Meditation aesthetic YOLO pug migas. Meditation prism air plant XOXO literally narwhal artisan sustainable ethical readymade pickled kitsch meh. Church-key irony drinking vinegar, pug wayfarers gluten-free swag gentrify coloring book cardigan glossier mixtape ethical adaptogen helvetica. Yr keytar street art bushwick dreamcatcher woke banh mi cray celiac humblebrag 3 wolf moon."
    },
    {
        title: "Number 3",
        link: "http://github.com",
        imgsrc: "https://picsum.photos/300",
        description:"I'm baby hammock knausgaard waistcoat kale chips typewriter VHS leggings distillery four dollar toast you probably haven't heard of them. Helvetica ennui sustainable pork belly distillery echo park offal next level crucifix pinterest. Meditation aesthetic YOLO pug migas. Meditation prism air plant XOXO literally narwhal artisan sustainable ethical readymade pickled kitsch meh. Church-key irony drinking vinegar, pug wayfarers gluten-free swag gentrify coloring book cardigan glossier mixtape ethical adaptogen helvetica. Yr keytar street art bushwick dreamcatcher woke banh mi cray celiac humblebrag 3 wolf moon."
    },
    {
        title: "Number 4",
        link: "http://github.com",
        imgsrc: "https://picsum.photos/300",
        description:"I'm baby hammock knausgaard waistcoat kale chips typewriter VHS leggings distillery four dollar toast you probably haven't heard of them. Helvetica ennui sustainable pork belly distillery echo park offal next level crucifix pinterest. Meditation aesthetic YOLO pug migas. Meditation prism air plant XOXO literally narwhal artisan sustainable ethical readymade pickled kitsch meh. Church-key irony drinking vinegar, pug wayfarers gluten-free swag gentrify coloring book cardigan glossier mixtape ethical adaptogen helvetica. Yr keytar street art bushwick dreamcatcher woke banh mi cray celiac humblebrag 3 wolf moon."
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
footer.innerHTML = buildLinks([...links,{
    href: "https://twitter.com",
    content: "Tweet at Me"
} ]);
const projectsContainer = document.getElementById('projects');
projectsContainer.innerHTML = buildCards(projects);