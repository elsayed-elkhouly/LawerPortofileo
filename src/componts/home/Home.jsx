import React from 'react'
import Navbar from '../navbar/Navbar'
import photo1 from "../../assets/images/ede1b7d10d8859f102445bc817be8806da250fe1.png"
import court from "../../assets/images/6c2789f4869af593f01bba4755810d65f972e8ca.jpg"
import { GoShieldCheck } from 'react-icons/go'
import { TfiMedall } from 'react-icons/tfi'
import { TbBuildingBank } from 'react-icons/tb'
import { MdElectricBolt, MdOutlineLock } from 'react-icons/md'
import { FaBalanceScale, FaBuilding, FaGraduationCap, FaUsers } from 'react-icons/fa'
import { BsShieldCheck } from 'react-icons/bs'
import { SiCalendly } from 'react-icons/si'
import { PiSealCheck } from 'react-icons/pi'
import { Link } from 'react-router-dom'
const Home = () => {
  const reviews = [
    {
      name: "احمد مصطفي",
      text: "وجدت لديهم الأمان والاحترافية والسرية التامة.",
      stars: 5,
      featured: false
    },
    {
      name: "مصطفي شريف",
      text: "الدقة والعمق القانوني هو ما يميز إيليت بحق.",
      stars: 5,
      featured: true
    },
    {
      name: "محمد عماد",
      text: "أداء يفوق التوقعات في قضية تجارية معقدة.",
      stars: 5,
      featured: false
    }
  ];
  return (
    <>

      {/* about section  */}
      <section className='bg-[#0e1a2b] pt-20 '>
        <div className='lg:flex lg:items-center lg:justify-around '>
          <div className='w-90  lg:w-1/2 mx-auto lg:ms-8  '>
            <img src={photo1} className=' w-full lg:w-153.25 overflow-hidden' alt="" />
          </div>
          <div className=' mt-8 flex flex-col text-right lg:me-35 lg:w-223.75 leading-tight lg:mb-50 pe-5 lg:pe-0 '>
            <h3 className='text-[32px]  lg:text-[85.82px] font-bold text-white'>خبرة قانونية استثنائية</h3>
            <h3 className='text-[32px]  lg:text-[85.82px] font-bold text-[#C9A24D] '>لحماية حقوقك</h3>
            <h3 className='text-[32px]  lg:text-[85.82px] font-bold text-[#C9A24D]'>ومستقبلك</h3>
            <p className='text-[#A0A0A0] my-3'>نقدم حلولاً قانونية ذكية مدعومة بعقدين من التميز في القضايا المعقدة.</p>
            <Link to={"/BookingDate"}><button className=" cursor-pointer ms-auto mt-5 text-[#0E1A2B]  text-center p-5 font-bold bg-[#C9A24D] rounded-[2.5px] "> <p className='text-[15px] px-5 '>احجز استشارة الآن</p></button></Link>
            <div className='ms-auto flex items-center gap-6 my-5'>
              <div className='flex ms-auto items-center gap-2 mt-3'>
                <p className='text-[18px] text-[#A0A0A0]'>حائز على جوائز</p>
                <TfiMedall className='text-[#C9A24D] text-2xl' />
              </div>
              <div className='flex ms-auto items-center gap-2 mt-3'>
                <p className='text-[18px] text-[#A0A0A0]'>مرخص من وزارة العدل</p>
                <GoShieldCheck className='text-[#C9A24D] text-2xl' />
              </div>
            </div>
          </div>




        </div>
        <div className='flex flex-col lg:flex-row  gap-5 py-5 lg:items-center lg:justify-around lg:px-10'>
          <div className='flex flex-col items-center'>
            <TfiMedall className='text-[#C9A24D] text-3xl' />
            <p className='text-[#C9A24D] text-[56px] font-bold'>89%</p>
            <p className='text-white text-[18px]'>نتائج قانونية مبهرة</p>
          </div>
          <div className='flex flex-col items-center'>
            <MdElectricBolt className='text-[#C9A24D] text-3xl' />
            <p className='text-[#C9A24D] text-[56px] font-bold'>24h</p>
            <p className='text-white text-[18px]'> سرعة في التنفيذ والاستجابة</p>
          </div>
          <div className='flex flex-col items-center'>
            <TbBuildingBank className='text-[#C9A24D] text-3xl' />
            <p className='text-[#C9A24D] text-[56px] font-bold'>20+</p>
            <p className='text-white text-[18px]'>عاماً من السلطة القانونية</p>
          </div>
        </div>
        <p className='text-[#A0A0A080] text-center font-normal py-10'>نحن نؤمن بأن كل قضية تستحق الاهتمام الكامل</p>
      </section>
      {/* specialties section / تخصصاتنا */}
      <section className="bg-[#0e1a2b] py-20 px-5">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-white text-4xl font-bold mb-3">
            تخصصاتنا القانونية
          </h2>
          <p className="text-gray-400">
            نجمع بين العمق الأكاديمي والخبرة العملية لنقدم لك أفضل دفاع.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Card 1 */}
          <div className="bg-[#132C4A] p-10 rounded-lg text-right hover:scale-105 duration-300">
            <FaUsers className="text-[#C9A24D] text-3xl mb-6" />
            <h3 className="text-white text-xl font-bold mb-3">
              الأحوال الشخصية
            </h3>
            <p className="text-gray-400">
              حلول قانونية تراعي الخصوصية في قضايا المواريث والنزاعات العائلية.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#132C4A] p-10 rounded-lg text-right hover:scale-105 duration-300">
            <FaBuilding className="text-[#C9A24D] text-3xl mb-6" />
            <h3 className="text-white text-xl font-bold mb-3">
              قانون الشركات
            </h3>
            <p className="text-gray-400">
              صياغة العقود التجارية والاندماجات والامتثال القانوني الكامل.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#132C4A] p-10 rounded-lg text-right hover:scale-105 duration-300">
            <FaBalanceScale className="text-[#C9A24D] text-3xl mb-6" />
            <h3 className="text-white text-xl font-bold mb-3">
              القانون الجنائي
            </h3>
            <p className="text-gray-400">
              تمثيل قانوني حازم للدفاع عن حقوقك بأعلى معايير المهنية.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-14">
          <Link to={"/BookingDate"}><button className="cursor-pointer bg-[#C9A24D] text-black px-10 py-4 rounded-md font-semibold hover:opacity-90 transition">
            احجز استشارة قانونية اليوم
          </button></Link>
        </div>

      </section>
      {/* our office / مكتبنا */}
      <section className="bg-[#0e1a2b] text-white py-10 px-6 md:px-12 font-sans" dir="rtl">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image & Stats */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              <img
                src={court}
                alt="Gavel"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Success Rate Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#c5a059] p-6 rounded-sm text-center min-w-[120px]">
              <h3 className="text-3xl font-bold text-[#0a1120]">98%</h3>
              <p className="text-sm text-[#0a1120] font-semibold">نسبة النجاح</p>
            </div>
          </div>
          {/* Right Side: Content */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold mb-10">لماذا يختار النخبة مكتبنا؟</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="flex flex-col items-start space-y-3">
                <div className="flex items-center gap-3">
                  <PiSealCheck className="text-[#c5a059]" size={28} />
                  <h4 className="text-xl font-bold">خبرة معمقة</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  نخبة من خريجي أرقى الجامعات العالمية.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-start space-y-3">
                <div className="flex items-center gap-3">
                  <MdOutlineLock className="text-[#c5a059]" size={28} />
                  <h4 className="text-xl font-bold">سرية مطلقة</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  حماية مشفرة لكافة بيانات الموكلين.
                </p>
              </div>
            </div>

            <div className="pt-6 border-r-2 border-[#c5a059] pr-4">
              <p className="text-gray-300 italic">
                "نحن نؤمن بأن كل قضية تستحق الاهتمام الكامل"
              </p>
            </div>
          </div>
        </div>
        {/* Section Footer Title */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold">ثقة الموكلين</h2>
        </div>
      </section>

      <section>
        <div className="bg-[#0e1a2b] pb-24 px-6 font-sans" dir="rtl">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 justify-center items-stretch ">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`flex-1 p-8 rounded-sm flex flex-col items-center text-center transition-all hover:border-amber-200 hover:scale-105 duration-300
              ${review.featured
                    ? 'bg-[#111c30] border-2 border-gray-800  '
                    : 'bg-[#0d1626] border border-gray-800 '
                  }`}
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(review.stars)].map((_, i) => (
                    <span key={i} className="text-[#c5a059] text-xl">★</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 text-lg mb-8 leading-relaxed italic">
                  "{review.text}"
                </p>

                {/* Name */}
                <h4 className="text-white font-bold text-xl mt-auto">
                  {review.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* last section */}
      <section className="bg-[#0e1a2b] px-6 py-12" dir="rtl"> 
        <div className=" bg-[#14243a] max-w-6xl mx-auto border-2 border-[#c5a059] p-12 relative overflow-hidden flex flex-col items-center text-center">

          {/* Background Watermark Icon */}
          <FaBalanceScale
            size={180}
            className="absolute -bottom-3 right-3 text-white opacity-5  pointer-events-none"
          />

          <h2 className="text-white text-4xl md:text-5xl font-bold mb-8 z-10">
            هل أنت جاهز للخطوة التالية؟
          </h2>

          <Link to={"/BookingDate"}><button className="cursor-pointer bg-[#c5a059] hover:bg-[#b08e4d] text-[#0a1120] font-bold py-4 px-10 text-lg transition-colors z-10">
            احجز استشارتك الآن
          </button></Link>

          <p className="text-gray-400 mt-6 text-sm z-10">
            نحن نؤمن بأن كل قضية تستحق الاهتمام الكامل
          </p>
        </div>
      </section>


    </>
  )
}

export default Home