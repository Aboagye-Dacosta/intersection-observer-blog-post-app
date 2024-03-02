import styled from "styled-components"
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiHashnode } from "react-icons/si";

import Heading from "./Heading";
import Section from "./Section";
import Row from "./Row";


const Link = styled.a`
  text-decoration: none;
  color: white;
  position: relative;
  padding: 0.5rem 0.5rem;
  overflow: hidden;
  z-index: 100;

  & > svg {
    margin-right: 0.5rem;
  }

  &:before {
    content: "";
    transition: all 0.5s ease;
    height: 0px;
    width: 0px;
    position: absolute;
    left: 0;
    top: 0;
    background-color: green;
    z-index: -1;
    display: flex;
    flex-direction: column;
    border-radius: 50px;
    transform: translate(0, 0), scaleX(0%);
  }

  &:hover&:before {
    width: 100px;
    height: 100px;
    transform: scale(410%);
  }
`;

const Footer = () =>
{
    return (
      <Section>
        <Row direction="vertical">
          <Heading as="h2">By Dacosta Solomon</Heading>
          <Link href="https://twitter.com/Code_Costa">
            <FaXTwitter /> <span>Twitter</span>
          </Link>
          <Link href="https://github.ocm/Aboagye-Dacosta">
            <FaGithub /> <span>GitHub</span>
          </Link>
          <Link href="https://dacostasolomon-codeman.hashnode.dev">
            <SiHashnode /> <span>Hashnode</span>
          </Link>
        </Row>
      </Section>
    );
}

export default Footer;