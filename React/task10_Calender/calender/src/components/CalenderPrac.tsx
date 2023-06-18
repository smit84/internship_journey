import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function Calendar() {

  const year = 2020;  
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [optionDate , setOptionDate] = useState(new Date());


  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };
 

  const handleFindDate = (event:any) => {
    event.preventDefault();
    const year = parseInt(event.target.elements.year.value);
    const month = parseInt(event.target.elements.month.value) - 1;
    const date = event.target.elements.date.value;
    console.log(date);
    if(date==="date"){
      setCurrentDate(new Date(year, month,1));
    }
    else{
      setSelectedDate(new Date(year, month,parseInt(date)));
    setCurrentDate(new Date(year, month,parseInt(date)));
      
    }
    
  };

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const weeksInMonth = Math.ceil((firstDayOfMonth + daysInMonth) / 7);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const calenderDates =Array.from({ length: weeksInMonth }, (_,weekIndex) => (
    <tr key={weekIndex}>
      {Array.from({ length: 7 }, (_,dayIndex) => {
        const dayOfMonth =
          weekIndex * 7 + dayIndex - firstDayOfMonth + 1;
        const date = new Date(currentYear, currentMonth, dayOfMonth);
        const isToday =
          date.toDateString() === new Date().toDateString();
        const isActive =
          selectedDate &&
          date.toDateString() === selectedDate.toDateString();
        return (
          <td
            key={dayIndex}
            className={`${
              dayOfMonth > 0 && dayOfMonth <= daysInMonth
                ? ""
                : "empty-cell"
            } ${isToday  ? "today" : ""} ${isActive ? "active" : ""}`}
            onClick={() => setSelectedDate(date)}
          >
            {dayOfMonth > 0 && dayOfMonth <= daysInMonth
              ? dayOfMonth
              : ""}
          </td>
        );
      })}
    </tr>
  ))
  let optionDay = new Date(
    optionDate.getFullYear(),
    optionDate.getMonth()+1,
    0
  ).getDate();
  let optionYear = optionDate.getFullYear();
  let optionMonth = optionDate.getMonth();

  const handleYearChange = (event:any) =>{
    optionYear = parseInt(event.target.value);
    setOptionDate(new Date(optionYear,optionMonth,0))
    optionMonth = optionDate.getMonth();
    console.log(optionYear);
    console.log(optionMonth);
    console.log(optionDay);
  }
  const handleMonthChange = (event:any) =>{
    optionMonth = parseInt(event.target.value);
    setOptionDate(new Date(optionYear,optionMonth,0));
    optionDay = new Date(
      optionDate.getFullYear(),
      optionDate.getMonth()+1,
      0
    ).getDate();
    optionDay = new Date(
      optionDate.getFullYear(),
      optionDate.getMonth()+1,
      0
    ).getDate();
    console.log(optionYear);
    console.log(optionMonth);
    console.log(optionDay);
  }

  return (
    <div className="calendar">
        <div className="show-today-date">
            <button onClick={handlePrevMonth}><FontAwesomeIcon icon={faArrowLeft}/></button>
            <h2>
            {new Date(currentYear, currentMonth, 1).toLocaleString("default", {
            month: "long",
            year: "numeric"
            })}
            </h2>
            <button onClick={handleNextMonth}><FontAwesomeIcon icon={faArrowRight}/></button>
        </div>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {calenderDates}
        </tbody>
      </table>
      <div className="access-date">
        <div className="btn-today-wrapper">
        <button onClick={handleToday} className="btn-today">Today</button>
        </div>
        <form onSubmit={handleFindDate}>
            <div className="year-select-wrapper" onChange={handleYearChange}>
                <select name="year" className="year-select">
                    {Array.from({ length: 101 }, (_, index) => (
                    <option key={index} value={year - 50 + index}>
                        {year - 50 + index}
                    </option>
                    ))}
                </select>
            </div>
            <div className="month-select-wrapper">
                <select name="month" className="month-select" onChange={handleMonthChange}>
                    {Array.from({ length: 12 }, (_, index) => (
                    <option key={index} value={index + 1}>
                        {new Date(optionYear, index).toLocaleString("default", {
                        month: "long"
                        })}
                    </option>
                    ))}
                </select>
            </div>
            <div className="date-select-wrapper">
                <select name="date" className="date-select" >
                   <option defaultChecked value="date">DATE</option>
                    {Array.from({ length: optionDay }, (_, index) => (
                    <option key={index} value={index + 1}>
                        {index + 1}
                    </option>
                    ))}
                </select>
            </div>
            <div className="submit-btn-wrapper">
                <button type="submit" className="btn-submit">Find Date</button>
            </div>
        </form>
      </div>
      
    </div>
  );
}

