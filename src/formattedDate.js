import React from "react";

export default function FormattedDate(props) {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = weekDays[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let monthDate = props.date.getDate();
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  return (
    <div>
      {hours < 10 ? `0${hours}` : `${hours}`}:
      {minutes < 10 ? `0${minutes}` : `${minutes}`}
      <br /> {day}, {month} {monthDate}
    </div>
  );
}
