'use client';

import Link from "next/link";
import { FaBowlFood } from "react-icons/fa6";
import style from "./header.module.css";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={style.navbar}>
        <div>
            <Link href="/" className={style.logo}>AMS<FaBowlFood/>الغذائية</Link>
            <div className={style.menu}>
                {toggle ? 
                          (<IoCloseCircleSharp onClick={() => setToggle(!toggle)} />)
                        : 
                          (<TiThMenu onClick={() => setToggle(!toggle)} />) 
                }
            </div>
        </div>
       <div 
        className={style.navLinksWrapper}
        style={{
                  clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)" || ""
                }}
       >
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-200 pr-20">الرئيسية</Link>
            <Link href="/about" className="hover:text-gray-200 pr-14">عن</Link>
            <Link href="/contact" className="hover:text-gray-200 pr-10">اتصل</Link>
            <Link href="/createDiet" className="hover:text-gray-200 pr-10">أنشئ نظامك الغذائي</Link>
            <Link href="/displayDiet" className="hover:text-gray-200 pr-10"> نظامك الغذائي</Link>
          </div>
       </div>
      </nav>
  );
}

export default Navbar;
