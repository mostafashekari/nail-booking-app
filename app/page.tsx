import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">سیستم نوبت‌دهی سالن ناخن</h1>
      <Link href="/booking" className="bg-blue-500 text-white py-2 px-4 rounded">
        رزرو نوبت
      </Link>
    </main>
  );
}
