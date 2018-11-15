import React from "react";
import styled from "styled-components";

const Container = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Aday = styled.li`
  width: ${100 / 7}%;
  margin: 15px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.isSun ? "red" : "black")};
  cursor: pointer;
`;

class Day extends React.Component {
  state = {
    days: []
  };

  componentDidMount() {
    const { year, month } = this.props;
    this.getDays(year, month);
  }

  render() {
    const { days } = this.state;
    return (
      <Container>
        {days.map((day, index) => (
          <Aday
            key={index}
            onClick={() => this.onClickDay(day)}
            isSun={day !== "" && day.getDay() === 0}
          >
            {day !== "" ? day.getDate() : ""}
          </Aday>
        ))}
      </Container>
    );
  }

  getDays = (year, month) => {
    let date = new Date(year, month, 1);
    let days = [];
    let startDay = 0;

    //give offset for 1st day in month
    while (startDay !== date.getDay()) {
      days.push("");
      startDay += 1;
    }

    // set days in the month
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    this.setState({ days });
  };

  onClickDay = day => {
    console.log(day);
  };
}

export default Day;
