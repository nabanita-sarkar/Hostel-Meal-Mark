import React, { Component } from "react";
import SimpleSidebar from "./Sidebar";
import styled from "styled-components";

const SideBarContainer = styled.div.attrs((props) => {
  //   return props.theme.rainbow.palette;
})`
  width: 120px;
  border-bottom-left-radius: 0.875rem;
`;

export default class Dashboard extends Component {
  render() {
    return (
      <SideBarContainer className="rainbow-p-top_small rainbow-p-bottom_medium">
        <SimpleSidebar />
      </SideBarContainer>
    );
  }
}
