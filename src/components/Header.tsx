import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import myImage from "./calendar.png";

const Nav = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
  font-family: "Montserrat", sans-serif;
  display: flex;
  align-items: center;
  height: 65px;
  width: 47.5%;
  padding: 20px;
  margin: 20px;
`;

const Tittle = styled.div`
  font-size: 1.75rem;
`;
const Day = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 10px;
  font-size: 1.25rem;
`;
const Project = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  margin-left: auto;
`;
const Image = styled.img`
  height: 100px;
`;

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
  const monthIndex = new Date().getDay();
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
  const day = `${currentDay + 8}`;
  const year = `${currentYear}`;
  return (
    <Nav>
      <Tittle>
        <h1>{day}</h1>
      </Tittle>
      <Day>
        <h5>
          {dayName} <br></br>
          {monthName}, {year}
        </h5>
      </Day>
      <Project>
        <Image src={myImage}></Image>
      </Project>
    </Nav>
  );
};
