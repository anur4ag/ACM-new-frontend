"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import acmlogo from "../assets/acmlogo.png";
import Navbar from "../components/Navbar";

const Layout = ({ children, heading }) => {
  const pathname = usePathname();

  return (
    <div className="flex h-[100vh]">
      <nav className="w-1/6 flex flex-col items-center justify-evenly rounded-tr-3xl rounded-br-3xl bg-gradient-to-b from-[#4E73DF] to-[#234BBF] text-white p-4">
        <div className="bg-white rounded-full w-[8em] h-[8em] flex items-center justify-center">
          <Image src={acmlogo} alt="ACM Logo" width={100} height={100} />
        </div>
        <ul className="space-y-4">
          <li>
            <Link href="/admin">
              <p
                className={`text-2xl block p-5 rounded-3xl font-semibold w-[10em] text-center ${
                  pathname === "/dashboard"
                    ? "bg-white text-[#234BBF]"
                    : "hover:bg-white text-white hover:text-[#234BBF]"
                }`}
              >
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link href="/admin/announcements">
              <p
                className={`text-2xl block p-5 rounded-3xl font-semibold w-[10em] text-center  ${
                  pathname === "/dashboard/announcements"
                    ? "bg-white text-[#234BBF]"
                    : "hover:bg-white text-white hover:text-[#234BBF]"
                }`}
              >
                Announcements
              </p>
            </Link>
          </li>
          <li>
            <Link href="/admin/events">
              <p
                className={`text-2xl block p-5 rounded-3xl font-semibold w-[10em] text-center  ${
                  pathname === "/dashboard/events"
                    ? "bg-white text-[#234BBF]"
                    : "hover:bg-white text-white hover:text-[#234BBF]"
                }`}
              >
                Events
              </p>
            </Link>
          </li>
          <li>
            <Link href="/admin/blogs">
              <p
                className={`text-2xl block p-5 rounded-3xl font-semibold w-[10em] text-center  ${
                  pathname === "/dashboard/blogs"
                    ? "bg-white text-[#234BBF]"
                    : "hover:bg-white text-white hover:text-[#234BBF]"
                }`}
              >
                Blogs
              </p>
            </Link>
          </li>
          <li>
            <Link href="/admin/podcast">
              <p
                className={`text-2xl block p-5 rounded-3xl font-semibold w-[10em] text-center  ${
                  pathname === "/dashboard/podcast"
                    ? "bg-white text-[#234BBF]"
                    : "hover:bg-white text-white hover:text-[#234BBF]"
                }`}
              >
                Podcast
              </p>
            </Link>
          </li>
          <li>
            <Link href="/admin/profile">
              <p
                className={`text-2xl block p-5 rounded-3xl font-semibold w-[10em] text-center  ${
                  pathname === "/dashboard/profile"
                    ? "bg-white text-[#234BBF]"
                    : "hover:bg-white text-white hover:text-[#234BBF]"
                }`}
              >
                Profile
              </p>
            </Link>
          </li>
        </ul>
      </nav>
      <main className="w-5/6 bg-gray-100">
        <Navbar dashPage={heading} />
        <div className="overflow-x-scroll hide-scroll">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
