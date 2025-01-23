import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ul className="flex w-full gap-5 items-center bg-blue-600 py-3 max-sm:flex-col max-sm:gap-2 justify-center font-bold">
        <li className="text-white-600"><a href="/">মেডিসিন সার্চ করুন</a> </li>
        <li className="text-white-600"><a href="/vashojShoktikorn">ভেষজের শক্তি করণ</a> </li>
        <li className="text-white-600"><a href="/matragiyan">মাত্রা জ্ঞান</a> </li>
        <li className="text-white-600"><a href="/prougbidhi">প্রয়োগ বিধি</a> </li>
        <li className="text-white-600"><a href="/proticriaorugotishoj">প্রতিক্রিয়া ও রোগাতিশয্য</a> </li>
      </ul>
        {children}
      </body>
    </html>
  );
}
