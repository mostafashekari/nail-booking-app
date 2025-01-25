"use client";

import { useEffect, useState } from "react";

const AppointmentList = () => {
    const [appointments, setAppointments] = useState<any[]>([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            const response = await fetch("/api/appointments");
            if (response.ok) {
                setAppointments(await response.json());
            }
        };
        fetchAppointments();
    }, []);

    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">لیست نوبت‌ها</h2>
            <ul>
                {appointments.map((appointment) => (
                    <li
                        key={appointment.id}
                        className="border p-2 mb-2 rounded shadow"
                    >
                        <p>نام: {appointment.name}</p>
                        <p>تلفن: {appointment.phone}</p>
                        <p>تاریخ: {appointment.date}</p>
                        <p>ساعت: {appointment.time}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AppointmentList;
