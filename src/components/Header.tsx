import React, { useEffect, useRef, useState } from "react";

export const Header = () => {
  const newDate = useRef(new Date());
  const [currentDay, setCurrentDay] = useState(newDate.current.getDate());
  const [currentMonth, setCurrentMonth] = useState(newDate.current.getMonth());
  const [currentYear, setCurrentYear] = useState(newDate.current.getFullYear());
  setInterval(() => {
    newDate.current = new Date();
    setCurrentDay(newDate.current.getDay());
    setCurrentMonth(newDate.current.getMonth());
    setCurrentYear(newDate.current.getFullYear());
  }, 1000);
  const dayIndex = new Date().getDay();
  const getDayName = (dayIndex: number) =>{
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[dayIndex];
  }
  const monthIndex = new Date().getDay();
  const getMonthName = () => {
    const month = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
    return month[monthIndex - 4];
  };
  const dayName = getDayName(dayIndex);
  const monthName = getMonthName();
  const day = `${currentDay + 1}`;
  const year = `${currentYear}`;
  return (
    <header className="header">
      <h1 className="header--title">{day}</h1>
      <h5 className="header--dayy"> {dayName} <br></br>{monthName}, {year}</h5>
      <h4 className="header--project">
        <img src="calendar.png" className="header--image" alt="Calendar" />
      </h4>
    </header>
  );}