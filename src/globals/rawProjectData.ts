// Thumbnails: Screely.com -> add shadow/dark mode
// Banners/Screenshots: Smartmockups -> Screenshots are 2560x1600 for free macbook mockup

// Thumbnail images for each project
import portThumbnail from "../assets/thumbnails/portThumbnail.png";

// Banner images for specific project page
import portBanner from "../assets/banners/myPortfolio/portBanner.png";

// Slider images for slider in specific project page
/* Personal portfolio */
import portSlide1 from "../assets/images/myPortfolio/deskPortWork.png";
import portSlide2 from "../assets/images/myPortfolio/portHomeDesk.png";
import portSlide3 from "../assets/images/myPortfolio/portProjDesk.png";
import portSlide4 from "../assets/images/myPortfolio/portProjDesk2.png";
/* Reddit Clone */
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
		subtitle: "React Portfolio Site",
		brief:
			"A personal portfolio website to showcase my work in a clean and simple way.",
		tech: ["React", "Sass", "HTML", "TypeScript", "SEO"],
		thumbnail: portThumbnail,
		live: "https://www.akj.dev",
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
		id: "portfolio",
		title: "Personal Portfolio",
		subtitle: "React Portfolio Site",
		brief:
			"A personal portfolio website to showcase my work in a clean and simple way.",
		tech: ["React", "Sass", "HTML", "TypeScript", "SEO"],
		thumbnail: portThumbnail,
		live: "https://www.akj.dev",
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
		id: "portfolio",
		title: "Personal Portfolio",
		subtitle: "React Portfolio Site",
		brief:
			"A personal portfolio website to showcase my work in a clean and simple way.",
		tech: ["React", "Sass", "HTML", "TypeScript", "SEO"],
		thumbnail: portThumbnail,
		live: "https://www.akj.dev",
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
];
