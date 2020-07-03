import React, { Component } from "react";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: this.minDate,
  };

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleClick = () => {
    const { text, checked, date } = this.state;
    if (text.length > 2) {
      const add = this.props.add(text, date, checked);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate,
        });
      }
    } else {
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";

    return (
      <div className="addTask">
        <input
          className="addTask__input-task"
          type="text"
          placeholder="Enter new task"
          value={this.state.text}
          onChange={this.handleText}
        />
        <input
          className="addTask__checkbox"
          type="checkbox"
          checked={this.state.checked}
          id="important"
          onChange={this.handleCheckbox}
        />
        <label className="addTask__label-priority" htmlFor="important">
          Priority
        </label>
        <label className="addTask__label-date" htmlFor="date">
          Time to do it
        </label>
        <input
          className="addTask__date"
          type="date"
          value={this.state.date}
          min={this.minDate}
          max={maxDate}
          onChange={this.handleDate}
        />
        <button className="addTask__btn" onClick={this.handleClick}>
          Add
        </button>
      </div>
    );
  }
}

export default AddTask;
