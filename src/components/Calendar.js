import React from "react";
import styled from "styled-components";

import Year from "./Year";

const Container = styled.div`
  width: 500px;
  min-height: 400px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.ul`
  width: 100%;
  height: 30px;
  display: flex;
  margin-top: 0px;
`;

const DayIndex = styled.li`
  width: ${100 / 7}%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #bf8136;
  margin: 30px 0px;
`;

const TodayBtn = styled.div`
  position: absolute;
  top: 55px;
  width: 80px;
  height: 30px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
  background: white;
  border-radius: 30px;
  font-size: 14px;
  color: #bf8136;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    background: #bf8136;
    color: white;
  }
`;

const ScrollArea = styled.div`
  width: 100%;
  height: 400px;
  overflow: scroll;
  overflow-x: hidden;
`;

class Calendar extends React.Component {
  state = {
    today: new Date(),
    years: [],
    daysInWeek: ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"],
    currentScrollTop: 0
  };

  componentDidMount() {
    this.getCalendarRange();
  }

  render() {
    const { years, daysInWeek, today } = this.state;
    return (
      <Container>
        <Header>
          {daysInWeek.map((day, index) => (
            <DayIndex key={index}>{day}</DayIndex>
          ))}
        </Header>
        <TodayBtn onClick={() => this.setScrollTop(3000)}>today</TodayBtn>
        <ScrollArea id={"scrollArea"} onScroll={this.scrollListener}>
          <Year
            years={years}
            today={today}
            setScrollTop={this.setScrollTop}
            scrollToToday={this.scrollToToday}
          />
        </ScrollArea>
      </Container>
    );
  }

  getCalendarRange = () => {
    const { today } = this.state;
    const thisYear = today.getFullYear();

    this.setState({
      years: [thisYear - 1, thisYear, thisYear + 1]
    });
  };

  scrollListener = event => {
    const { target } = event;
    const currentScrollTop = target.scrollTop;

    this.setState({
      currentScrollTop
    });
  };

  setScrollTop = positionY => {
    document.getElementById("scrollArea").scrollTop = positionY;
  };

  scrollToToday = () => {
    const { today } = this.state;
    const year = today.getFullYear();
    const month = today.getMonth();

    // get todays top offset from scroll top
    const thisMonth = document.getElementById(`${year}_${month}`);
    const topPos = thisMonth.offsetTop;

    // set scroll top to move to today
    this.setScrollTop(topPos);
  };
}

export default Calendar;
