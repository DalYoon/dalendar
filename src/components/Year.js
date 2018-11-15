import React from "react";
import styled from "styled-components";

import Month from "./Month";

const Container = styled.ul`
  width: 100%;
`;

const AYear = styled.li`
  width: 100%;
`;

class Year extends React.Component {
  render() {
    const { years, today, scrollToToday } = this.props;
    return (
      <Container>
        {years.map((year, index) => (
          <AYear key={index}>
            <Month year={year} today={today} scrollToToday={scrollToToday} />
          </AYear>
        ))}
      </Container>
    );
  }
}

export default Year;
