"use client";

import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

interface PersianCalendarProps {
    value: Date | null;
    onChange: (date: Date | null) => void;
}

const PersianCalendar: React.FC<PersianCalendarProps> = ({ value, onChange }) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(value);

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
        if (onChange) onChange(date);
    };

    return (
        <DatePicker
            value={selectedDate}
            onChange={(date) => handleDateChange(date?.toDate() || null)} // Ensure the date is a valid JavaScript Date
            calendar={persian}
            locale={persian_fa}
            style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                color: "#000",
            }}
            className="custom-calendar"
        />
    );
};

export default PersianCalendar;

