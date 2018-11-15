import React from "react";
import DalendarPresenter from "./DalendarPresenter";

class DalendarContainer extends React.Component {
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
    console.log(this.state.currentScrollTop);
    return (
      <DalendarPresenter
        years={years}
        daysInWeek={daysInWeek}
        today={today}
        scrollListener={this.scrollListener}
        scrollToToday={this.scrollToToday}
        setScrollTop={this.setScrollTop}
        setTodayPosition={this.setTodayPosition}
      />
    );
  }

  getCalendarRange = () => {
    const { today } = this.state;
    const thisYear = today.getFullYear();

    this.setState({
      years: [thisYear - 1, thisYear, thisYear + 1]
    });
  };

  // -----------------------------------------------------------------

  scrollListener = event => {
    const { target } = event;
    const currentScrollTop = target.scrollTop;

    this.setState({
      currentScrollTop
    });
  };

  // -----------------------------------------------------------------

  scrollToToday = async () => {
    const { today } = this.state;
    const year = today.getFullYear();
    const month = today.getMonth();
    let todayPosition = 0;
    // get todays top offset from scroll top
    const thisMonth = document.getElementById(`${year}_${month}`);
    todayPosition = thisMonth.offsetTop;

    // set scroll top to move to today
    this.setScrollTop(todayPosition);
  };

  // -----------------------------------------------------------------

  setScrollTop = positionY => {
    document.getElementById("scrollArea").scrollTop = positionY;
  };

  // -----------------------------------------------------------------
}

export default DalendarContainer;
