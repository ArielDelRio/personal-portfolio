import styled from "styled-components";

export const ProjectContainer = styled.a`
  border-radius: 10px;
  border: 2px solid whitesmoke;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  outline-style: none;
  background-color: #323232;
  text-decoration: none;
  color: #000;
  overflow: hidden;
  transition: transform 0.4s, border-color 0.4s, color 0.4s;
  &:hover {
    transform: scale(1.04);
    border-color: #000;
    color: blue;
  }
  @media (max-width: 1300px) {
    width: 350px;
    height: 300px;
  }
  @media (max-width: 900px) {
    width: 280px;
  }
  @media (max-width: 640px) {
    width: 250px;
  }
`;

export const PreviewProject = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const ProjectTitle = styled.div`
  text-align: center;
  font-size: 26px;
  font-family: "Courier New", Courier, monospace;
  padding-top: 0.5em;
  &::before {
    content: "<";
    opacity: 0;
    color: orange;
    transition: 0.4s;
    font-size: 24px;
  }
  &::after {
    content: "/>";
    opacity: 0;
    color: orange;
    transition: 0.4s;
    font-size: 24px;
  }

  .project-container:hover &:after {
    opacity: 1;
  }
  .project-container:hover &:before {
    opacity: 1;
  }
  @media (max-width: 900px) {
    font-size: 20px;
  }
  @media (max-width: 640px) {
    font-size: 18px;
  }
`;
