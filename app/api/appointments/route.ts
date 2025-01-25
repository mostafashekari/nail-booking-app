import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

const filePath = path.join(process.cwd(), "lib", "data.json");

// POST: ذخیره نوبت جدید
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const data = JSON.parse(await fs.readFile(filePath, "utf-8"));
        const newAppointment = { id: Date.now(), ...body };
        data.push(newAppointment);
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
        return NextResponse.json(newAppointment);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "خطا در ذخیره نوبت" }, { status: 500 });
    }
}

// GET: دریافت نوبت‌ها
export async function GET() {
    try {
        const data = JSON.parse(await fs.readFile(filePath, "utf-8"));
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "خطا در دریافت نوبت‌ها" }, { status: 500 });
    }
}
