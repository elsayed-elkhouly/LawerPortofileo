import React from 'react'
import { BiCalendar, BiCalendarAlt, BiCheckCircle, BiChevronDown, BiChevronDownCircle, BiChevronDownSquare, BiLock, BiLockAlt, BiMapPin, BiPhone, BiPhoneCall, BiUser, BiUserCheck } from 'react-icons/bi'
import { BsChevronDown, BsShieldCheck } from 'react-icons/bs'
import { CgLock, CgLockUnlock } from 'react-icons/cg'
import { GoShieldCheck } from 'react-icons/go'
import { HiShieldCheck } from 'react-icons/hi2'
import { IoIosArrowBack } from 'react-icons/io'
import { MdOutlineChat } from 'react-icons/md'
import { RiMicAiLine, RiMvAiLine } from 'react-icons/ri'
import { SiCalendly } from 'react-icons/si'
import { SlCalender } from 'react-icons/sl'

const BookDate = () => {
    const features = [
        {
            title: "رد سريع خلال 24 ساعة",
            desc: "نقدر وقتك، فريقنا سيتواصل معك بأسرع وقت ممكن لتأكيد طلبك.",
        },
        {
            title: "استشارة سرية بالكامل",
            desc: "خصوصية بياناتك وقضيتك هي أولويتنا القصوى وفقاً لأعلى المعايير.",
        },
        {
            title: "خبرة أكثر من 20 سنة",
            desc: "فريق من المحامين والمستشارين ذوي الباع الطويل في القضاء السعودي.",
        },
        {
            title: "نسبة نجاح 98%",
            desc: "سجل حافل بالنجاحات في أصعب القضايا التجارية والجنائية.",
        },
    ];
    return (
        <>
            <section dir="rtl" className="min-h-screen bg-[#0e1a2b] font-sans p-4 flex items-center">
                <div className="w-full max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="text-right mt-20 pb-10 ">
                        <h1 className="text-white text-4xl font-bold mb-4">احجز موعدك الآن</h1>
                        <p className="text-gray-400 text-sm max-w-lg leading-relaxed">
                            املأ البيانات وسنتواصل معك لتأكيد الموعد خلال 24 ساعة.
                        </p>
                    </div>


                    <div className="grid lg:grid-cols-3 gap-8 items-start">


                        <div className="lg:col-span-2 bg-[#0a111a] border border-gray-800/50 rounded-3xl p-8 md:p-12 shadow-2xl">
                            <div className="w-full max-w-3xl">
                                {/* Form Container */}
                                <div className=" border border-gray-800/50 rounded-3xl p-8 md:p-12 shadow-2xl">
                                    <form className="space-y-8">

                                        {/* Row 1: Name and Phone */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-gray-300 text-sm block mr-1">الاسم الكامل</label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        placeholder="أدخل اسمك الثلاثي"
                                                        className="w-full bg-[#111927] border border-gray-700/50 rounded-xl py-4 px-12 text-white focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 outline-none transition-all placeholder:text-gray-600"
                                                    />
                                                    <BiUser className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-gray-300 text-sm block mr-1">رقم الهاتف</label>
                                                <div className="relative flex">
                                                    <div className="relative flex-1">
                                                        <input
                                                            type="tel"
                                                            placeholder="5xxxxxxx"
                                                            className="w-full bg-[#111927] border border-gray-700/50 rounded-r-xl py-4 px-12 text-white focus:border-yellow-600 outline-none transition-all placeholder:text-gray-600"
                                                        />
                                                        <BiPhoneCall className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                                                    </div>
                                                    <div className="bg-[#111927] border border-gray-700/50 border-r-0 rounded-l-xl px-4 flex items-center text-gray-300 text-sm">
                                                        +01
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Row 2: Email and Service Type */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-gray-300 text-sm block mr-1">البريد الإلكتروني</label>
                                                <div className="relative">
                                                    <input
                                                        type="email"
                                                        placeholder="example@domain.com"
                                                        className="w-full bg-[#111927] border border-gray-700/50 rounded-xl py-4 px-12 text-white focus:border-yellow-600 outline-none transition-all placeholder:text-gray-600 text-left"
                                                    />
                                                    <RiMicAiLine className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-gray-300 text-sm block mr-1">نوع الخدمة القانونية</label>
                                                <div className="relative">
                                                    <select className="w-full bg-[#111927] border border-gray-700/50 rounded-xl py-4 px-12 text-white appearance-none focus:border-yellow-600 outline-none transition-all cursor-pointer">
                                                        <option value="" disabled selected>اختر نوع الاستشارة</option>
                                                        <option>استشارة جنائية</option>
                                                        <option>استشارة عمالية</option>
                                                        <option>قضايا الأحوال الشخصية</option>
                                                    </select>
                                                    <SlCalender className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                                                    <BsChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Row 3: Date and Time */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-gray-300 text-sm block mr-1">التاريخ المفضل</label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        placeholder="mm/dd/yyyy"
                                                        onFocus={(e) => (e.target.type = "date")}
                                                        className="w-full bg-[#111927] border border-gray-700/50 rounded-xl py-4 px-12 text-white focus:border-yellow-600 outline-none transition-all placeholder:text-gray-600"
                                                    />
                                                    <BiCalendarAlt className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-gray-300 text-sm block mr-1">الوقت المتاح</label>
                                                <div className="relative">
                                                    <select className="w-full bg-[#111927] border border-gray-700/50 rounded-xl py-4 px-12 text-white appearance-none focus:border-yellow-600 outline-none transition-all cursor-pointer">
                                                        <option value="" disabled selected>اختر الوقت</option>
                                                        <option>09:00 AM - 12:00 PM</option>
                                                        <option>01:00 PM - 04:00 PM</option>
                                                    </select>
                                                    <CgLockUnlock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                                                    <BiChevronDownCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description Textarea */}
                                        <div className="space-y-2">
                                            <label className="text-gray-300 text-sm block mr-1">وصف القضية / الموضوع</label>
                                            <textarea
                                                rows="4"
                                                placeholder="يرجى كتابة تفاصيل مختصرة عن موضوع الاستشارة لنقوم بتوجيهك للمستشار المناسب..."
                                                className="w-full bg-[#111927] border border-gray-700/50 rounded-xl py-4 px-6 text-white focus:border-yellow-600 outline-none transition-all placeholder:text-gray-600 resize-none"
                                            ></textarea>
                                        </div>

                                        {/* Submit Button */}
                                        <button className="w-full bg-[#c9a152] hover:bg-[#b89144] text-[#0a111a] font-bold py-4 rounded-xl text-lg transition-colors shadow-lg shadow-yellow-900/10">
                                            تأكيد الحجز
                                        </button>

                                        {/* Footer Labels */}
                                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-800/30">
                                            <div className="flex items-center gap-2 text-[10px] text-gray-500">
                                                <BiLockAlt className="w-3 h-3" />
                                                <span>بالضغط على تأكيد الحجز أنت توافق على سياسة الخصوصية وشروط الاستخدام</span>
                                            </div>
                                            <div className="flex items-center gap-2 bg-[#111927] px-3 py-1.5 rounded-full border border-green-900/30">
                                                <HiShieldCheck className="w-4 h-4 text-green-500" />
                                                <span className="text-[10px] text-gray-300 uppercase tracking-widest font-bold">100% Secure Transaction</span>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>

                        </div>


                        {/* ===== SIDEBAR (شمال) ===== */}
                        <div className="flex flex-col gap-6">

                            {/* Why Choose Us */}
                            <section className="bg-[#0a111a] border border-gray-800/50 rounded-2xl p-6 shadow-xl">
                                <div className="flex items-center gap-2 mb-8">
                                    <GoShieldCheck className="text-[#c9a152] w-6 h-6" />
                                    <h2 className="text-white text-xl font-bold">لماذا تختارنا؟</h2>
                                </div>

                                <div className="space-y-8">
                                    {features.map((item, index) => (
                                        <div key={index} className="flex gap-4 group">
                                            <div className="bg-gray-800/40 p-2 rounded-lg group-hover:bg-[#c9a152]/10 transition-colors flex justify-center items-center">
                                                <BiCheckCircle className="text-[#c9a152] w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-bold text-sm mb-1">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-400 text-xs">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>


                            {/* Quick Booking */}
                            <section className="bg-[#0a111a] border border-gray-800/50 rounded-2xl p-6 shadow-xl text-center ">

                                <h2 className="text-white text-xl font-bold mb-2">
                                    هل تريد حجز سريع؟
                                </h2>

                                <p className="text-gray-400 text-xs mb-6">
                                    تواصل معنا مباشرة عبر القنوات الرسمية للاستفسارات المستعجلة
                                </p>

                                <a
                                    href="https://wa.me/201553132233"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between bg-[#071d1a] border border-green-900/30 rounded-xl p-4 px-6 transition-all hover:border-green-500/50 group cursor-pointer hover:scale-[1.01] active:scale-[0.98]"
                                >
                                    {/* النص والايقونة */}
                                    <div className="flex items-center gap-4">
                                        <div className="bg-[#25D366] p-2.5 rounded-lg">
                                            <MdOutlineChat />
                                        </div>
                                        <span className="text-green-500 font-bold text-sm">
                                            مراسلة عبر واتساب
                                        </span>

                                    </div>

                                    {/* السهم */}
                                    <span className="text-green-500 text-xl group-hover:-translate-x-1 transition">
                                        <IoIosArrowBack />
                                    </span>


                                </a>

                            </section>



                            {/* Map */}
                            <section className="relative h-48 rounded-2xl overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12361.64234913719!2d30.131227913794966!3d31.137101915871288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2seg!4v1771425151634!5m2!1sen!2seg" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                                <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
                                    <span className="text-white text-[10px]">
                                        البحيرة - كفر الدوار
                                    </span>
                                    <div className="bg-[#c9a152] p-1.5 rounded-full">
                                        <BiMapPin className="text-[#0a111a] w-3 h-3" />
                                    </div>
                                </div>
                            </section>

                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default BookDate