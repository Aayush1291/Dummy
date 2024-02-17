import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import styles from "./HolidayCalendar.Styles";
import Icon from "react-native-vector-icons/Ionicons";
import { black } from "../utils/color";

const Calendar = () => {
  const currentDate = new Date();
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth());

  const daysInWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const monthsOfYear = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];
  // Indian Festivals aahet
  const indianFestivals = [
    { day: 14, month: 1, name: "Makar Sankranti" },
    { day: 21, month: 3, name: "Holi" },
    { day: 2, month: 4, name: "Ram Navami" },
    { day: 14, month: 4, name: "Baisakhi" },
    { day: 16, month: 8, name: "Ganesh Chaturthi" },
    { day: 2, month: 10, name: "Gandhi Jayanti" },
    { day: 4, month: 10, name: "Navaratri" },
    { day: 14, month: 10, name: "Dussehra" },
    { day: 4, month: 11, name: "Diwali" },
    { day: 25, month: 12, name: "Christmas" },
  ];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handlePreviousMonth = () => {
    setMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
  };

  const handleNextMonth = () => {
    setMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
  };

  const handleYearChange = (index, value) => {
    setYear(parseInt(value));
  };

  const renderWeekdays = () => {
    return (
      <View style={styles.weekdays}>
        {daysInWeek.map((weekday, index) => (
          <Text key={index} style={styles.weekday}>{weekday}</Text>
        ))}
      </View>
    );
  };

  const renderCalendarDays = () => {
    const totalDays = getDaysInMonth(year, month);
    const firstDay = new Date(year, month, 1).getDay();

    const calendarDays = Array.from({ length: totalDays }, (_, index) => index + 1);
    return (
      <View style={styles.calendarDays}>
        {Array(firstDay)
          .fill(null)
          .map((_, index) => (
            <Text key={`empty-${index}`} style={styles.emptyDay}></Text>
          ))}
        {calendarDays.map((day) => {
          const isFestivalDay = indianFestivals.some(
            (festival) => festival.day === day && festival.month === month + 1
          );
          return (
            <Text
              key={day}
              style={[
                styles.day,
                new Date(year, month, day).getDay() === 0 ? styles.sunday : null,
                isFestivalDay ? styles.festivalDay : null,
              ]}
            >
              {day}
            </Text>
          );
        })}
      </View>
    );
  };

  const renderFestivalList = () => {
    const festivalsInMonth = indianFestivals.filter(
      (festival) => festival.month === month + 1
    );

    return (
      <View style={styles.festivalList}>
        <Text style={styles.festivalTitle}>Festivals in {monthsOfYear[month]}</Text>
        {festivalsInMonth.map((festival, index) => (
          <View key={index} style={styles.festivalCard}>
            <Text style={styles.festivalDate}>{festival.day}/{festival.month}</Text>
            <Text style={styles.festivalName}>{festival.name}</Text>
          </View>
        ))
        }
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.buttonview}>
          <TouchableOpacity onPress={handlePreviousMonth}>
            <Text style={styles.button}>
              <Icon name="md-chevron-back-circle-outline" size={28} color={black} ></Icon>
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.month}>{monthsOfYear[month]}</Text>
        <View style={styles.buttonview}>
          <TouchableOpacity onPress={handleNextMonth}>
            <Text style={styles.button}>
              <Icon name="md-chevron-forward-circle-outline" size={28} color={black}></Icon>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.flatlist}>
        {renderWeekdays()}
        {renderCalendarDays()}
        {renderFestivalList()}
      </View>

    </View>
  );
};

export default Calendar;