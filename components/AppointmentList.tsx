"use client";

import { useEffect, useState } from "react";

interface Appointment {
    id: number;
    name: string;
    phone: string;
    date: string;
    time: string;
}

const AppointmentList = () => {
    const [appointments, setAppointments] = useState<Appointment[]>([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await fetch("/api/appointments");
                if (response.ok) {
                    const data: Appointment[] = await response.json();
                    setAppointments(data);
                } else {
                    console.error("Failed to fetch appointments.");
                }
            } catch (error) {
                console.error("Error fetching appointments:", error);
            }
        };

        fetchAppointments();
    }, []);

    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">لیست نوبت‌ها</h2>
            <ul>
                {appointments.map((appointment) => (
                    <li key={appointment.id} className="border p-2 mb-2 rounded shadow">
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
