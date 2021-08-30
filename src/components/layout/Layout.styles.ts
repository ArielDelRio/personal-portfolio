import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body::-webkit-scrollbar {
  width: 1em;
  background-color: #000;
}

.zoom-in-out {
    animation-name: zoomEffect;
    animation-iteration-count: infinite;
    animation-duration: 2000ms;
    animation-play-state: running;


    @keyframes zoomEffect {
    0% {
        transform: scale(.9, .9);
    }
    50% {
        transform: scale(1, 1);
    }
    100% {
        transform: scale(.9, .9);
    }
  }

}

body::-webkit-scrollbar-track {
	border-radius: 5px;
	background: radial-gradient(50% 50% at 50% 50%, rgba(26, 21, 21, 0) 0%, rgba(1, 1, 1, 0.16) 100%),#FFFFFF;
}

body::-webkit-scrollbar-thumb {
    border: 2px double #E5E5E5;
    border-radius: 5px;
	background-color: #555;

    &:hover{
        background-color: #1D1D1D;
    }
}

`;

export default GlobalStyle;
