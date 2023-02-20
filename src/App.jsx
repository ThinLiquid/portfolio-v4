import styled from "styled-components"
import Ripple from "reactjs-ripple";

import {
  RiFolderLine as FolderIcon
} from "react-icons/ri";

import {
  SiGithub as GithubIcon,
  SiDiscord as DiscordIcon,
  SiTwitter as TwitterIcon
} from "react-icons/si";

import './App.scss'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);

    & > * {
      height:auto!important;
    }
  }
`

const Container = styled.div`
  max-width:800px;
  margin:auto;
  padding:20px;
`

const LargeHeading = styled.h1`
  font-size:4em;
  margin-bottom:0;
`

const LargeParagraph = styled.p`
  font-size:2em;
`

const Emphasis = styled.span`
  background:linear-gradient(20deg, #4169E1, #00A6FF, #00D5EE, #6CFBCE);
  padding:0 0.3em;
`

export default function App() {
  return (
    <div>
      <Container>
        <LargeHeading>Hi, I'm <Emphasis>LiquidDev</Emphasis></LargeHeading>
        <LargeParagraph>insert text here :3 <i style={{ fontSize: '0.5em' }}>he/him</i></LargeParagraph>
      <Grid>
        <a className="grid-item" href="#">
          <div className="icon-container"><FolderIcon className="icon"/></div>
          <h2>idk bro</h2>
          <p>owoow ow owowo wow ow oo</p>
          <Ripple/>
        </a>
        <a className="grid-item" href="#">
          <div className="icon-container"><FolderIcon className="icon"/></div>
          <h2>idk bro</h2>
          <p>owoow ow owowo wow ow oo</p>
          <Ripple/>
        </a>
        <a className="grid-item" href="#">
          <div className="icon-container"><FolderIcon className="icon"/></div>
          <h2>idk bro</h2>
          <p>owoow ow owowo wow ow oo</p>
          <Ripple/>
        </a>
      </Grid>
        
        <center style={{ marginTop: '30px' }}>
          -
          <a class="icon-button" href="https://github.com/ThinLiquid">
            <GithubIcon/>
          </a>
          <a class="icon-button" href="https://discord.com/users/620492146406981642">
            <DiscordIcon/>
          </a>
          <a class="icon-button" href="https://twitter.com/liquid_pc">
            <TwitterIcon/>
          </a>
          -
          <br/><br/>
          &copy; {new Date().getFullYear()} LiquidDev
        </center>
    </Container>
    </div>
  )
}
