import chat_app_main from "../../images/projects/chat-app/main.png";

import gatsby_image_path from "../../images/skill_logos/gatsby.svg";
import react_image_path from "../../images/skill_logos/react.svg";
import express_image_path from "../../images/skill_logos/expressjs.svg";
import mysql_image_path from "../../images/skill_logos/mysql.svg";
import laravel_image_path from "../../images/skill_logos/laravel.svg";
import git_image_path from "../../images/skill_logos/git.svg";

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
    stories: [
      { url: react_image_path, description: "Description of project 1" },
      { url: git_image_path, description: "Description of project 1.2" },
    ],
  },
  {
    id: 1,
    name: "Project 2",
    main_img: express_image_path,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae eos odio provident corporis expedita quisquam. Voluptates qui praesentium corporis alias, voluptatum, consectetur deserunt maxime laborum, sapiente ipsam expedita! Tempora, aperiam.",
    project_link: "https://project.link",
    repo_link: "https://repo.link",
    stories: [
      { url: react_image_path, description: "Description of project 2" },
      { url: gatsby_image_path, description: "Description of project 2.2" },
    ],
  },
  {
    id: 2,
    name: "Project 3",
    main_img: laravel_image_path,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae eos odio provident corporis expedita quisquam. Voluptates qui praesentium corporis alias, voluptatum, consectetur deserunt maxime laborum, sapiente ipsam expedita! Tempora, aperiam.",
    project_link: "https://project.link",
    repo_link: "https://repo.link",
  },
  {
    id: 3,
    name: "Project 4",
    main_img: git_image_path,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae eos odio provident corporis expedita quisquam. Voluptates qui praesentium corporis alias, voluptatum, consectetur deserunt maxime laborum, sapiente ipsam expedita! Tempora, aperiam.",
    project_link: "https://project.link",
    repo_link: "https://repo.link",
  },
  {
    id: 4,
    name: "Project 5",
    main_img: mysql_image_path,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae eos odio provident corporis expedita quisquam. Voluptates qui praesentium corporis alias, voluptatum, consectetur deserunt maxime laborum, sapiente ipsam expedita! Tempora, aperiam.",
    project_link: "https://project.link",
    repo_link: "https://repo.link",
  },
  {
    id: 5,
    name: "Project 6",
    main_img: gatsby_image_path,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae eos odio provident corporis expedita quisquam. Voluptates qui praesentium corporis alias, voluptatum, consectetur deserunt maxime laborum, sapiente ipsam expedita! Tempora, aperiam.",
    project_link: "https://project.link",
    repo_link: "https://repo.link",
  },
];

export default Projects;
