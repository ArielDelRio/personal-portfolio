import chat_app_main from "../../images/projects/chat-app/main.png";
import quiz_app_main from "../../images/projects/quiz-app/main.png";
import recipe_app_main from "../../images/projects/recipe-app/main.png";
import evernote_app_main from "../../images/projects/evernote-app/main.png";
import propensito_bot_main from "../../images/projects/propensito-bot/main.png";
import kapry_chozas_landing_page_main from "../../images/projects/kapry-chozas-landing-page/main.png";

// const testDriveImage = "https://drive.google.com/uc?export=view&id=1oifNymj9sn9bqg6ciFh-YDQYTClvgIqT"
const Projects = [
  {
    id: 0,
    name: "Chat App",
    main_img: chat_app_main,
    description:
      "Chat-app is a simple and fast chat application for entertainment and communication.",
    project_link: "http://chat-app-now-web.herokuapp.com/",
    repo_link: "https://github.com/ArielDelRio/Chat-App",
    // stories: [
    //   { url: react_image_path, description: "Description of project 1" },
    //   { url: git_image_path, description: "Description of project 1.2" },
    // ],
    topics: ["react", "nodejs", "chat", "pusher", "express", "material-ui"],
  },
  {
    id: 1,
    name: "Notes App",
    main_img: evernote_app_main,
    description:
      "Notes App is an application to record notes and store them in the cloud in different formats and styles. It also allows you to save audio notes and supports the Markdown format for editing.",
    project_link: "https://evernote-app.herokuapp.com/",
    repo_link: "https://github.com/ArielDelRio/evernote-clone",
    topics: [
      "react",
      "firebase",
      "express",
      "notes",
      "material-ui",
      "socket-io",
      "speech-recognition",
      "firebase-admin",
    ],
  },
  {
    id: 2,
    name: "Quiz App",
    main_img: quiz_app_main,
    description: "Quiz app is a 10-question quiz game about general topics.",
    project_link: "https://arieldelrio.github.io/quiz-app/",
    repo_link: "https://github.com/ArielDelRio/quiz-app",
    topics: [
      "react",
      "api",
      "typescript",
      "styled-components",
      "quiz",
      "animated",
    ],
  },
  {
    id: 3,
    name: "Recipe App",
    main_img: recipe_app_main,
    description:
      "Recipe_app is a recipe search engine where you can find all kinds of recipes to prepare that contain a preferred food.",
    project_link: "https://arieldelrio.github.io/recipe_app",
    repo_link: "https://github.com/ArielDelRio/recipe_app",
    topics: [
      "react",
      "api",
      "recipes",
      "react-router",
      "bootstrap",
      "skeleton",
      "lazy-load",
    ],
  },
  {
    id: 4,
    name: "Propensito bot",
    main_img: propensito_bot_main,
    description:
      'Propensito_bot is a telegram bot which can be integrated into a group and allow its members to play the classic game of "Who is more likely than ...?" or "Who is more likely than ...?"',
    project_link: "https://t.me/propensito_bot_group",
    repo_link: "https://github.com/ArielDelRio/propensito_bot",
    topics: ["game", "python", "telegram", "python-telegram-bot"],
  },
  {
    id: 5,
    name: "Kapry-Chozas",
    main_img: kapry_chozas_landing_page_main,
    description:
      "Kapri-Chozas is a platform for the sale and rental of properties. It is in development and this version shows the landing page of the site.",
    project_link: "https://kapry-chozas.herokuapp.com/",
    repo_link:
      "https://github.com/LimitlessGroup/kapry-chozas/tree/add-landing-page/client",
    topics: ["react", "styled-components", "typescript", "eslint", "prettier"],
  },
];

export default Projects;
