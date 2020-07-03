import React from "react";

const Task = (props) => {
  const style = {
    color: "red",
  };

  const { text, date, id, active, important, finishDate } = props.task;

  if (active) {
    return (
      <div className="active-task__box">
        <div className="active-task__conte">
          <strong
            className="active-task__name"
            style={important ? style : null}
          >
            {text}
          </strong>{" "}
          <span className="active-task__text">- do to - </span>
          <span className="active-task__date">{date} </span>
        </div>
        <button
          className="active-task__btn-done"
          onClick={() => props.change(id)}
        >
          Task done
        </button>
        <button
          className="active-task__btn-delete"
          onClick={() => props.delete(id)}
        >
          X
        </button>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <div className="done__box-d">
        <div className="done__box-d-conte1">
          <strong className="done__name-d">{text}</strong>
          <em className="done__date-d"> (do to - {date})</em>
        </div>
        <div className="done__box-d-conte2">
          <span className="done__text-d"> Task completed -</span>
          <span className="done__date-complete-d"> {finish}</span>
        </div>
        <button className="done__btn-delete-d" onClick={() => props.delete(id)}>
          X
        </button>
      </div>
    );
  }
};

export default Task;
