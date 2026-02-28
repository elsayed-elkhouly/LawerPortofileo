import React from 'react'
import { FaBalanceScale } from 'react-icons/fa'
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            {/* Navbar section */}
            <section className='relative'>
                <div className="navbar bg-[#14243a] shadow-sm  flex items-center justify-around lg:gap-52 fixed z-50">
                    <div className="flex gap-2">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost bg-[#C9A24D]   lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-[#14243a] rounded-box z-1 mt-3 w-52 p-2 shadow   ">
                                <NavLink to={""} className={({ isActive }) =>
                                    isActive
                                        ? "text-[#C9A24D] font-bold"
                                        : "hover:text-[#C9A24D]"
                                }><p className='hover:text-[#C9A24D] text-[#C9A24D] text-center p-5 hover:bg-[#28364a] focus:bg-[#28364a] rounded-2xl '>الرئيسيه</p></NavLink>
                                <NavLink to={"/service"} className={({ isActive }) =>
                                    isActive
                                        ? "text-[#C9A24D] font-bold"
                                        : "hover:text-[#C9A24D]"
                                }><p className='hover:text-[#C9A24D] text-[#C9A24D] text-center p-5 hover:bg-[#28364a] focus:bg-[#28364a] rounded-2xl'>الخدمات</p></NavLink>
                                <NavLink to={"/BookingDate"} className={({ isActive }) =>
                                    isActive
                                        ? "text-[#C9A24D] font-bold"
                                        : "hover:text-[#C9A24D]"
                                }><p className='hover:text-[#C9A24D] text-[#C9A24D] text-center p-5 hover:bg-[#28364a] focus:bg-[#28364a] rounded-2xl'>حجز موعد</p></NavLink>
                            </ul>
                        </div>
                        <NavLink to={"/BookingDate"}><a className="btn bg-[#C9A24D] text-[12px] border-0 me-15 pe-5">استشاره فوريه</a></NavLink>
                    </div>
                    <div className=" hidden lg:flex items-center gap-5 text-white">
                        <NavLink to={"/BookingDate"} className={({ isActive }) =>
                            isActive
                                ? "text-[#C9A24D] font-bold"
                                : "hover:text-[#C9A24D]"
                        }><p className='hover:text-[#C9A24D]'>حجز موعد</p></NavLink>
                        <NavLink to={"/service"} className={({ isActive }) =>
                            isActive
                                ? "text-[#C9A24D] font-bold"
                                : "hover:text-[#C9A24D]"
                        }><p className='hover:text-[#C9A24D]'>الخدمات</p></NavLink>
                        <NavLink to={""} className={({ isActive }) =>
                            isActive
                                ? "text-[#C9A24D] font-bold"
                                : "hover:text-[#C9A24D]"
                        }><p className='hover:text-[#C9A24D]'>الرئيسيه</p></NavLink>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className='text leading-tight text-right'>
                            <h6 className='text-[18.3px] font-bold text-white'>هيلبر للمحاماة</h6>
                            <h6 className='text-[10px] text-[#A0A0A0] font-normal ms-8'>Helper Law Firm</h6>
                        </div>
                        <FaBalanceScale className='text-3xl text-[#C9A24D]' />
                    </div>
                </div>
            </section>





        </>
    )
}

export default Navbar