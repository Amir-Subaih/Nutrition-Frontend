'use client';
import Link from "next/link";
import style from "./header.module.css";
import Navbar from "./Navbar";
import { useUser } from "@/components/context1/UserContext"; // ✅ Correct import

const Header = () => {
  const { user, logout } = useUser(); // ✅ Using useUser hook

  return (
    <header className={style.Header} dir="rtl">
      <Navbar />
      <div className={style.right}>
        {user ? (
          <>
            <span className={style.username}>مرحبًا، {user.name}</span> {/* ✅ Fix user.username -> user.name */}
            <button onClick={logout} className={style.btn}>
              تسجيل الخروج
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className={style.btn}>
              تسجيل الدخول
            </Link>
            <Link href="/register" className={style.btn}>
              التسجيل
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
