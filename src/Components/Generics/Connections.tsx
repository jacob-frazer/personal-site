import styled from "styled-components";

const ConnectionLinks = styled.div<{ padding?:string }>`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
align-items: flex-start;
justify-content: center;
padding:${props => props.padding || "1rem"};

img {
  flex: 1;
  max-width: 2rem;
  height: auto;
  max-height: 2rem;
  padding: 2rem;
}
`;

const Connections = (props:{colour:string, padding?:string}) => {
    let githubSrc = (props.colour === "dark" ? "GitHubDark.png" : "GitHubLight.png")
    let linkedInSrc = (props.colour === "dark" ? "LinkedInDark.png" : "LinkedInLight.png")
    let emailSrc = (props.colour === "dark" ? "emailDark.png" : "emailLight.png")
    
    let imageDir = "/images/connections_icons/"
    return (
      <ConnectionLinks padding={props.padding}>
        <a href="https://github.com/jacob-frazer"><img src={imageDir + githubSrc} alt="githubLogo"/></a>
        <a href="https://www.linkedin.com/in/jacob-frazer-99493b168/"><img src={imageDir + linkedInSrc} alt="linkedInLogo"/></a>
        <a href="mailto:jacob.frazer@hotmail.com"><img src={imageDir + emailSrc} alt="emailLogo"/></a>
      </ConnectionLinks>
    )
  }

export default Connections