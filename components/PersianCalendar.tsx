"use client";

import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const PersianCalendar = ({ value, onChange }) => {
    const [selectedDate, setSelectedDate] = useState(value);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        if (onChange) onChange(date);
    };

    return (
        <DatePicker
            value={selectedDate}
            onChange={handleDateChange}
            calendar={persian}
            locale={persian_fa}
            style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                color: "#000", // تغییر رنگ متن به مشکی
            }}
            className="custom-calendar" // کلاس برای استایل‌دهی پیشرفته
        />
    );
};

export default PersianCalendar;
