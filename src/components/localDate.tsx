import React, { useRef, useState } from "react";
import * as S from "../styled";

export const LocalDate = () => {
  const newDate = useRef(new Date());
  const [currentDay, setCurrentDay] = useState(newDate.current.getDate());
  const [currentMonth, setCurrentMonth] = useState(newDate.current.getMonth());
  const [currentYear, setCurrentYear] = useState(newDate.current.getFullYear());

  const dayIndex = new Date().getDay();
  const getDayName = (dayIndex: number) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[dayIndex];
  };
  const monthIndex = new Date().getDay() - 1;
  const getMonthName = () => {
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return month[monthIndex];
  };
  const dayName = getDayName(dayIndex);
  const monthName = getMonthName();
  const day = `${currentDay}`;
  const year = `${currentYear}`;
  return (
    <>
      <S.Title>
        <h1>{day}</h1>
      </S.Title>
      <S.Day>
        <h5>
          {dayName} <br></br>
          {monthName}, {year}
        </h5>
      </S.Day>
    </>
  );
};
export default LocalDate;
