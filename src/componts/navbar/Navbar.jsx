import React from 'react'
import { FaBalanceScale } from 'react-icons/fa'
import { Link } from 'react-router-dom'

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
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <Link to={"/BookingDate"}><p className='hover:text-[#C9A24D]'>حجز موعد</p></Link>
                                <Link to={"/service"}><p className='hover:text-[#C9A24D]'>الخدمات</p></Link>
                                <Link to={""}><p className='hover:text-[#C9A24D]'>الرئيسيه</p></Link>
                            </ul>
                        </div>
                        <Link to={"/BookingDate"}><a className="btn bg-[#C9A24D] text-[12px] border-0 me-15 pe-5">استشاره فوريه</a></Link>
                    </div>
                    <div className=" hidden lg:flex items-center gap-5 text-white">
                        <Link to={"/BookingDate"}><p className='hover:text-[#C9A24D]'>حجز موعد</p></Link>
                        <Link to={"/service"}><p className='hover:text-[#C9A24D]'>الخدمات</p></Link>
                        <Link to={""}><p className='hover:text-[#C9A24D]'>الرئيسيه</p></Link>
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