import React from "react";
import Directory from "../../components/directory/directory.component";
import * as Styled from "./homepage.styles";

import "./homepage.styles.scss";

const HomePage = () => (
  <Styled.HomePageContainer>
    <Directory />
  </Styled.HomePageContainer>
);

export default HomePage;
