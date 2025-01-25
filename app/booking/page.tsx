import AppointmentForm from "@/components/AppointmentForm";
import AppointmentList from "@/components/AppointmentList";

export default function Booking() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">فرم رزرو نوبت</h1>
            <AppointmentForm />
            <AppointmentList />
        </div>
    );
}
