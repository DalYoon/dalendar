import React from "react";
import DalendarPresenter from "./DalendarPresenter";

class DalendarContainer extends React.Component {
  state = {
    today: new Date(),
    years: [],
    daysInWeek: ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"],
    todayScrollTop: 0,
    currentScrollTop: 0
  };

  componentDidMount() {
    this.getCalendarRange();
  }

  render() {
    const { years, daysInWeek, today, currentScrollTop, todayScrollTop } = this.state;
    return (
      <DalendarPresenter
        years={years}
        daysInWeek={daysInWeek}
        today={today}
        scrollListener={this.scrollListener}
        scrollToToday={this.scrollToToday}
        currentScrollTop={currentScrollTop}
        todayScrollTop={todayScrollTop}
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

  scrollToToday = () => {
    const { today } = this.state;
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    // get todays top offset from scroll top
    const thisMonth = document.getElementById(`${year}_${month}`);
    const todayScrollTop = thisMonth.offsetTop - 80;

    this.setState({
      todayScrollTop
    });
    // set scroll top to move to today
    this.setScrollTop(todayScrollTop);
  };

  // -----------------------------------------------------------------

  setScrollTop = positionY => {
    document.getElementById("scrollArea").scrollTop = positionY;
  };

  // -----------------------------------------------------------------
}

export default DalendarContainer;
