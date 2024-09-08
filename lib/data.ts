import resumeBuilder from "@/public/ResumeBuilder.png";
import frontPage from "@/public/frontPage.png"
import commercialStore from "@/public/commercialStore.png"
import askImage from "@/public/AskImage.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
] as const;

export const projectsData = [
  {
    title: "Know Your Image",
    description:
      "Know Your Image is a React App build with Gemini-Flash-1.5 Model. Takes Image and Query as Input and Response accordingly.",
    tags: ["Gemini-Flash-1.5","React", "NodeJs","Expressjs","MongoDB"],
    imageUrl: askImage,
    githubUrl: 'https://github.com/viveksharma004/geminiModelFrontend',
    liveUrl: 'https://know-your-image.onrender.com/'
  },
  {
    title: "Commercial Store",
    description:
      "Commercial Store to list all Products with Cart Features like adding and removing from the cart along with quantity controller.",
    tags: ["HTML", "CSS", "JavaScript","ReactJs","ReduxJs"],
    imageUrl: commercialStore,
    githubUrl: 'https://github.com/viveksharma004/commercialStore',
    liveUrl: 'https://commercialstore.onrender.com/'
  },
  {
    title: "Resume Builder",
    description:
      "Easily craft clean ATS-friendly resumes with ease. Options for font, colors, links, etc.",
    tags: ["ReactJs", "ReactToPrint", "ReactSelect"],
    imageUrl: resumeBuilder,
    githubUrl: 'https://github.com/viveksharma004/resumeBuilder',
    liveUrl: 'https://resumebuilder-9c8t.onrender.com/'
  },
  {
    title: "PortFolio",
    description:
      "A Portfolio of self describing About Me and My Project along with the Skills needed to build them and My Contact Details",
    tags: ["VS Code"],
    imageUrl: frontPage,
    githubUrl: 'https://github.com/viveksharma004/portfolio',
    liveUrl: 'https://oortfolio.onrender.com/'
  }
] as const;
