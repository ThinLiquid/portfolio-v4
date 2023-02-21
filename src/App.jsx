import styled from "styled-components"
import Ripple from "reactjs-ripple";
import {useLanyard} from 'use-lanyard';

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
  const { data } = useLanyard('620492146406981642');
  
  return (
    <div>
      <Container>
        
        <LargeHeading>Hi, I'm <Emphasis>LiquidDev</Emphasis> 👋</LargeHeading>
        <LargeParagraph>
          insert text here :3<br/>
          <i style={{ fontSize: '.5em' }}>he/him | front-end developer | {data ? data.discord_status : '(* ^ ω ^)'}</i>
        </LargeParagraph>
        <h1>💬 What I'm workin' on...</h1>
      <Grid>
        <a data-type="link" className="grid-item interactable" href="https://github.com/Discord-AntiScam/scam-links">
          <div className="icon-container"><FolderIcon className="icon"/></div>
          <h2>Discord Scam Prevention Project</h2>
          <p>A database of over 366KBs scam links used for Discord, Steam and more.</p>
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
