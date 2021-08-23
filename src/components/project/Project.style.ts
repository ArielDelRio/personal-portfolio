import styled from "styled-components";

export const ProjectContainer = styled.div`
  height: 60vh;
  background-color: rgba(255, 255, 255, 0.24);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  outline-style: none;
  text-decoration: none;

  border: 2px solid whitesmoke;
  color: #000;
  overflow: hidden;
  transition: transform 0.4s;
  &:hover {
    transform: translateY(-10px);
  }
  @media (max-width: 991px) {
    height: 45vh;    
  }
  @media (max-width: 768px) {
    height: 80vh;    
    margin: 0 5%;
  }
`;

export const PreviewProject = styled.img`
  height: 80%;
  object-fit: cover;
`;

export const ProjectTitle = styled.div`
  height: 20%;
  text-align: center;
  font-size: 26px;
  padding: 0.5em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #323232;
  color: white;
  border-radius: 0 0 10px 10px;

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
  /* @media (max-width: 900px) {
    font-size: 20px;
  }
  @media (max-width: 640px) {
    font-size: 18px;
  } */
`;
