"use client";

import { useForm } from "react-hook-form";
import PersianCalendar from "./PersianCalendar";

type FormData = {
    name: string;
    phone: string;
    date: string;
    time: string;
};

const AppointmentForm = () => {
    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        try {
            const response = await fetch("/api/appointments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("نوبت شما با موفقیت ثبت شد!");
                reset();
            } else {
                alert("خطایی در ذخیره نوبت رخ داده است.");
            }
        } catch (error) {
            console.error("Error submitting appointment:", error);
            alert("خطا در ارتباط با سرور.");
        }
    };

    const handleDateChange = (date: Date | null) => {
        if (date) {
            const formattedDate = date.toISOString().split("T")[0]; // Format date as YYYY-MM-DD
            setValue("date", formattedDate, { shouldValidate: true });
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 border rounded shadow-md bg-white">
            <div>
                <label className="block text-sm font-medium mb-1">نام</label>
                <input
                    type="text"
                    placeholder="نام"
                    {...register("name", { required: "نام الزامی است" })}
                    className={`border p-2 w-full rounded text-black ${errors.name ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">تلفن</label>
                <input
                    type="text"
                    placeholder="تلفن"
                    {...register("phone", {
                        required: "تلفن الزامی است",
                        pattern: {
                            value: /^[0-9]{10,11}$/,
                            message: "شماره تلفن معتبر نیست",
                        },
                    })}
                    className={`border p-2 w-full rounded text-black ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">تاریخ</label>
                <PersianCalendar onChange={handleDateChange} />
                <input type="hidden" {...register("date", { required: "تاریخ الزامی است" })} />
                {errors.date && <span className="text-red-500 text-sm">{errors.date.message}</span>}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">ساعت</label>
                <input
                    type="time"
                    {...register("time", { required: "ساعت الزامی است" })}
                    className={`border p-2 w-full rounded text-black ${errors.time ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.time && <span className="text-red-500 text-sm">{errors.time.message}</span>}
            </div>

            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600">
                ثبت نوبت
            </button>
        </form>
    );
};

export default AppointmentForm;

