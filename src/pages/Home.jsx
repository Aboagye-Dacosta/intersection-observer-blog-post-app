import styled from "styled-components";

import DesktopSection from "../ui/DesktopSection";
import Hero from "../ui/Hero";
import KidsSection from "../ui/KidsSection";
import MobileSection from "../ui/MobileSection";
import PDASection from "../ui/PDASection";
import Footer from "./../ui/Footer";

const StyledHome = styled.div`
  background-color: var(--color-black);
`;

function Home() {
  return (
    <StyledHome>
      <Hero />
      <DesktopSection />
      <MobileSection />
      <PDASection />
      <KidsSection />
      <Footer />
    </StyledHome>
  );
}

export default Home;
