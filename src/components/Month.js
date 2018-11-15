import React from "react";
import styled from "styled-components";

import Day from "./Day";

const Container = styled.ul`
  width: 100%;
`;

const AMonth = styled.li`
  width: 100%;
  height: 300px;
`;

const MonthTitle = styled.h4`
  width: 100%;
  padding-left: 30px;
  color: #af9090;
  font-weight: 300;
`;

const MonthDays = styled.div`
  width: 100%;
`;

class Month extends React.Component {
  state = {
    monthInYear: {
      1: "January",
      2: "Fabruary",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December"
    }
  };

  componentDidMount() {
    const { scrollToToday } = this.props;
    scrollToToday();
  }

  render() {
    const { monthInYear } = this.state;
    const { year } = this.props;
    return (
      <Container>
        {Object.keys(monthInYear).map(month => (
          <AMonth key={month} id={`${year}_${month}`}>
            <MonthTitle>{monthInYear[month]}</MonthTitle>
            <MonthDays>
              <Day year={year} month={month - 1} />
            </MonthDays>
          </AMonth>
        ))}
      </Container>
    );
  }
}

export default Month;
