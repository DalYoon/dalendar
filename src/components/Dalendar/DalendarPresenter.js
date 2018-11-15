import React from "react";
import styled from "styled-components";

import Year from "../Year";

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

const DalendarPresenter = ({
  years,
  daysInWeek,
  today,
  scrollListener,
  scrollToToday,
  currentScrollTop,
  todayScrollTop
}) => (
  <Container>
    <Header>
      {daysInWeek.map((day, index) => (
        <DayIndex key={index}>{day}</DayIndex>
      ))}
    </Header>
    {(currentScrollTop - 70 > todayScrollTop || currentScrollTop + 70 < todayScrollTop) && (
      <TodayBtn onClick={() => scrollToToday()}>today</TodayBtn>
    )}
    <ScrollArea id={"scrollArea"} onScroll={scrollListener} scrollTop={1380}>
      <Year years={years} today={today} scrollToToday={scrollToToday} />
    </ScrollArea>
  </Container>
);

export default DalendarPresenter;
