import styled from "styled-components";

import DesktopSection from "../ui/DesktopSection";
import Hero from "../ui/Hero";
import MobileSection from "../ui/MobileSection";
import PDASection from "../ui/PDASection";
import KidsSection from "../ui/KidsSection";

const StyledHome = styled.div``;

function Home() {
  return (
    <StyledHome>
      <Hero />
      <DesktopSection />
      <MobileSection />
      <PDASection />
      <KidsSection/>
    </StyledHome>
  );
}

export default Home;
