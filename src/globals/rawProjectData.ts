// Thumbnails: Screely.com -> add shadow/dark mode
// Banners/Screenshots: Smartmockups -> Screenshots are 2560x1600 for free macbook mockup

// Thumbnail images for each project
import portThumbnail from "../assets/thumbnails/portThumbnail.png";
import redditThumbnail from "../assets/thumbnails/redditThumbnail.png";

// Banner images for specific project page
import portBanner from "../assets/banners/myPortfolio/portBanner.png";
import redditBanner from "../assets/banners/redditClone/redditBanner.png";

// Slider images for slider in specific project page
/* Personal portfolio */
import portSlide1 from "../assets/images/myPortfolio/deskPortWork.png";
import portSlide2 from "../assets/images/myPortfolio/portHomeDesk.png";
import portSlide3 from "../assets/images/myPortfolio/portProjDesk.png";
import portSlide4 from "../assets/images/myPortfolio/portProjDesk2.png";
// Dev Images
import postRouteISR2 from "../assets/images/redditClone/postRoutePagination2.png";
import darkMode from "../assets/images/redditClone/darkMode.png";
import authRoute from "../assets/images/redditClone/authRoute.png";
import dynamicRoute from "../assets/images/redditClone/postTypeorm.png";
/* Reddit Clone */
import redditSlide1 from "../assets/images/redditClone/redditv2dark.png";
import redditSlide2 from "../assets/images/redditClone/redditv2light.png";
import redditSlide3 from "../assets/images/redditClone/redditv2post.png";
import redditSlide4 from "../assets/images/redditClone/redditv2profile.png";
import redditSlide5 from "../assets/images/redditClone/redditv2sub.png";
import redditSlide6 from "../assets/images/redditClone/redditv2createSub.png";
/* E-commerce project */
/* Evernote clone */

export type Project = {
	id: string;
	title: string;
	subtitle: string;
	brief: string;
	tech: string[];
	thumbnail?: string;
	live: string;
	link: string;
	github: string;
	category: string[];
	moreInfo: boolean;
	banner?: string;
	mobileBanner?: string;
	overview: string;
	planning: {
		title: string;
		description: string;
	};
	development: {
		title: string;
		description: string;
		devImg?: string;
	}[];
	imgSlider: {
		sliderTitle?: string;
		images?: string[];
		sliderDescription?: string;
	};
	reflection: string[];
};

const planningTitle = "Project Goal & Planning";

export const rawProjectData: Project[] = [
	{
		id: "portfolio",
		title: "Personal Portfolio",
		subtitle: "A place to showcase what I've learned so far.",
		brief:
			"A personal portfolio website to showcase my work in a clean and simple way.",
		tech: ["React", "Sass", "HTML", "TypeScript", "SEO"],
		thumbnail: portThumbnail,
		live: "https://www.akj.dev",
		link: "https://www.akj.dev/project-portfolio",
		github: "https://www.github.com/Alec-Johnson/portfolio-site",
		category: ["featured"],
		moreInfo: true,
		banner: portBanner,
		// mobileBanner: portMobileBanner,
		overview:
			"This is a personal portfolio website to showcase my work in a clean and effective way. It is built with React, Sass, HTML, and Typescript. It is hosted on a DigitalOcean Ubuntu droplet with Nginx, and CertBot to automatically keep SSL up to date.",
		planning: {
			title: planningTitle,
			description:
				"The goal of my portfolio website was to end up with a fast, SEO-friendly website that is easy to navigate, update, and displays my work in a clear fashion.",
		},
		development: [
			{
				title: "Filterable Projects",
				description:
					"This organization allows users to filter projects by category, which will help users find projects they are interested in easier. Utitlizes the react useState hook, event listeners, and array.filter methods",
				// devImg: portFilter,
			},
			{
				title: "SEO",
				description:
					"To help increase search engine visibility, I used React-Helmet to automatically update meta tags per page. It also uses the Helmet component to automatically add meta tags to the page.",
			},
		],
		imgSlider: {
			sliderTitle: "Website Screenshots",
			images: [portSlide1, portSlide2, portSlide3, portSlide4],
		},
		reflection: [
			"This portfolio project gave me an opportunity to try out new skills and get familiar with React during the process. It also let me realize how React components are useful when building templates to serve project data. I spent a lot of time planning before the design and development phase. Breaking down the project into small pieces, following the plan allows me to make the workflow smoother and more efficient. ",
			"One thing that I learned during this project is to put myself in the user’s shoes. Only when we have learnt more about the target users, we can create a website that has the features/design that is more suitable to their needs. I initially think of putting my contact information as an individual page, but I decided to put it as a section to locate at the end of every page based on user experience consideration. ",
			"In the middle of the development phase, I realized React, as a single-page application, has limited capabilities of improving SEO. Although I have used React Helmet to get around the issue, I think using a static site generator such as Gatsby to build a portfolio site will be a more SEO-friendly solution.",
		],
	},
	{
		id: "redditv2",
		title: "Reddit v2",
		subtitle: "A fullstack clone of the Reddit website.",
		brief:
			"New users can expect to register an account, view/create posts, interact with existing posts by voting or leaving a comment, and create communities.",
		tech: ["Next.js", "TailwindCSS", "TypeScript", "Express.js", "PostgreSQL"],
		thumbnail: redditThumbnail,
		live: "https://redditv2.akj.dev",
		link: "https://www.akj.dev/project-redditv2",
		github: "https://www.github.com/Alec-Johnson/reddit-v2",
		category: ["featured"],
		moreInfo: true,
		banner: redditBanner,
		// mobileBanner: portMobileBanner,
		overview:
			"This is a clone of the website Reddit.com. Users can create communities, as well as interact with posts by casting votes and making comments. ",
		planning: {
			title: planningTitle,
			description:
				"The goal of this project was to learn how to store data in/build a relational database, create an API with Express.js, and to implement a user authentication system.",
		},
		development: [
			{
				title: "Authentication System",
				devImg: authRoute,
				description:
					'This project requires an  authentication system to allow users to create an account, login, logout, create communities, upload images, and interact with posts. It utilizes JWT tokens to authenticate users inside a custom middleware, which I can then use to set up guards on protected routes. This is an example from the "sub" route which I will explain. When uploading an image to a sub banner/graphic, we want to check if there is a user inside our response object, check if a user is authenticated, and then check whether they own the subreddit before making a POST request to the server. Compared to the route above, we do not implement any middleware as we want to allow everyone to make a search.',
			},
			{
				title: "Dark/Light Mode",
				devImg: darkMode,
				description:
					"TailwindCSS makes toggling between dark/light mode very straightforward. To make things even easier, I added a library called to handle theme switching and keeping the state consistent between pages and refreshes. This works by adding a theme property to the page and storing the users preference inside local storage. On a deeper level, next-themes works by injecting a script into the site Head which will grab the stored property in local storage or set the preferred color scheme by the client. I was made aware of this when my compilier was throwing an error that Next.js prefers to use their <Script /> component inside of <head>.",
			},
			{
				title: "Dynamic Post Loading (Infinite Scroll)",
				devImg: postRouteISR2,
				description:
					"I wanted to implement dynamic loading of posts just like the official Reddit website. This helps decrease inital load time and reduce the number of requests made to the server, which in turn saves money. The first step was to add the pagination functionality to the API inside the post route, and then implement an obersever to detect when the bottom of the page was reached in the front end using the IntersectionObserver API. I then made use of useSWRInfinite to make requests to the server when that page was reached.",
			},
			{
				title: "Dynamic Routing",
				devImg: dynamicRoute,
				description:
					'Following the concept of a "reddit clone", I needed dynamic routes to be created for subs, posts, and user profiles. Their routing pattern for a post is  "reddit.com/r/:subName/:postIdentifier/:slug". The identifier and slug need to be generated as soon as a post is made so it can be stored in the database with those corresponding values. TypeORM\'s @BeforeInsert decorator is one solution as I can pass in these helper functions to generate what is needed before the data is stored. I found some helper functions on StackOverflow that I changed to fit mold of a 7 character identifier and a slug containing the post title, seperating each word with an _.',
			},
		],
		imgSlider: {
			sliderTitle: "Website Screenshots",
			images: [
				redditSlide2,
				redditSlide4,
				redditSlide3,
				redditSlide5,
				redditSlide6,
				redditSlide1,
			],
		},
		reflection: [
			"This project allowed to me to learn how to build a basic relational database with TypeORM, creating an API with Express.js, and further drove home the concept of implementing a user authentication system. I also learned a lot of what I know about backend development by building this project, which has me excited to keep building more fullstack applications in the future.",
		],
	},
];
