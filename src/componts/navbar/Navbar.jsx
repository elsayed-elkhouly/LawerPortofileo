import React from 'react'
import { useState } from "react";

import { FaBalanceScale } from 'react-icons/fa'
import { NavLink } from "react-router-dom";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
    return (
        <>
            {/* Navbar section */}
    <section className="relative">
      <div className="navbar bg-[#14243a] shadow-sm flex items-center justify-around lg:gap-52 fixed z-50 w-full">
        <div className="flex gap-2 items-center">
          {/* زر الهامبرجر */}
          <button
            className="btn btn-ghost bg-[#C9A24D] lg:hidden"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h8m-8 6h16"}
              />
            </svg>
          </button>

          {/* زر استشارة */}
          <NavLink to="/BookingDate">
            <span className="btn bg-[#C9A24D] text-[12px] border-0 pe-5">استشاره فوريه</span>
          </NavLink>
        </div>

        {/* اللينكات لشاشة كبيرة */}
        <div className="hidden lg:flex items-center gap-5 text-white">
          <NavLink to="/BookingDate" className={({ isActive }) => isActive ? "text-[#C9A24D] font-bold" : "hover:text-[#C9A24D]"}>
            <p className="px-3 py-2">حجز موعد</p>
          </NavLink>
          <NavLink to="/service" className={({ isActive }) => isActive ? "text-[#C9A24D] font-bold" : "hover:text-[#C9A24D]"}>
            <p className="px-3 py-2">الخدمات</p>
          </NavLink>
          <NavLink to="/" className={({ isActive }) => isActive ? "text-[#C9A24D] font-bold" : "hover:text-[#C9A24D]"}>
            <p className="px-3 py-2">الرئيسية</p>
          </NavLink>
        </div>

        {/* شعار الشركة */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <h6 className="text-[18.3px] font-bold text-white">هيلبر للمحاماة</h6>
            <h6 className="text-[10px] text-[#A0A0A0] font-normal ms-8">Helper Law Firm</h6>
          </div>
          <FaBalanceScale className="text-3xl text-[#C9A24D]" />
        </div>
      </div>

      {/* قائمة الموبايل */}
      {menuOpen && (
        <div className="flex flex-col gap-2 mt-20 bg-[#14243a] p-4 lg:hidden fixed w-52 z-50 shadow rounded-3xl">
          <NavLink to="/" onClick={closeMenu}>
            <p className="p-3 text-[#C9A24D] hover:bg-[#28364a] rounded-2xl text-center">الرئيسية</p>
          </NavLink>
          <NavLink to="/service" onClick={closeMenu}>
            <p className="p-3 text-[#C9A24D] hover:bg-[#28364a] rounded-2xl text-center">الخدمات</p>
          </NavLink>
          <NavLink to="/BookingDate" onClick={closeMenu}>
            <p className="p-3 text-[#C9A24D] hover:bg-[#28364a] rounded-2xl text-center">حجز موعد</p>
          </NavLink>
        </div>
      )}
    </section>





        </>
    )
}

export default Navbar