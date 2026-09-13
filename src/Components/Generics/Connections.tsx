import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import colours from "@utils/colours";

const ConnectionLinks = styled.div<{ padding?: string, iconColour: string }>`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
align-items: center;
justify-content: center;
gap: 2rem;
padding: ${props => props.padding || "1rem"};

a {
  display: flex;
  padding: 1rem;
  color: ${props => props.iconColour};
  transition: opacity 0.2s;
}

a:hover,
a:focus {
  opacity: 0.7;
}

svg {
  width: 2rem;
  height: 2rem;
}
`;

// link text for screen readers, hidden visually as the icons speak for themselves
const VisuallyHidden = styled.span`
position: absolute;
width: 1px;
height: 1px;
margin: -1px;
padding: 0;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
border: 0;
`;

interface ConnectionsProps {
  darkMode?: boolean;
  padding?: string;
}

// the same icon set everywhere, darkMode draws them dark for use on light backgrounds
const Connections = ({darkMode=false, padding=''}: ConnectionsProps) => {
    return (
      <ConnectionLinks padding={padding} iconColour={darkMode ? colours.black : colours.white}>
        <a href="https://github.com/jacob-frazer"><FaGithub aria-hidden="true"/><VisuallyHidden>GitHub</VisuallyHidden></a>
        <a href="https://www.linkedin.com/in/jacob-frazer-99493b168/"><FaLinkedin aria-hidden="true"/><VisuallyHidden>LinkedIn</VisuallyHidden></a>
        <a href="mailto:jacob.frazer@hotmail.com"><MdEmail aria-hidden="true"/><VisuallyHidden>Email</VisuallyHidden></a>
      </ConnectionLinks>
    )
  }

export default Connections
