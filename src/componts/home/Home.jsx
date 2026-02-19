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
import { motion } from "framer-motion";

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
  const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 }
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 }
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};
  return (
    <>
      {/* ================= ABOUT SECTION ================= */}
      <section className="bg-[#0e1a2b] pt-20">
        <div className="lg:flex lg:items-center lg:justify-around">
          
          {/* Image */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-90 lg:w-1/2 mx-auto lg:ms-8"
          >
            <img src={photo1} className="w-full lg:w-153.25" alt="" />
          </motion.div>

          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 flex flex-col text-right lg:me-35 lg:w-223.75 leading-tight lg:mb-50 pe-5 lg:pe-0"
          >
            <motion.h3 variants={fadeRight} transition={{ duration: 0.6 }}
              className="text-[32px] lg:text-[85.82px] font-bold text-white">
              خبرة قانونية استثنائية
            </motion.h3>

            <motion.h3 variants={fadeRight} transition={{ duration: 0.6 }}
              className="text-[32px] lg:text-[85.82px] font-bold text-[#C9A24D]">
              لحماية حقوقك
            </motion.h3>

            <motion.h3 variants={fadeRight} transition={{ duration: 0.6 }}
              className="text-[32px] lg:text-[85.82px] font-bold text-[#C9A24D]">
              ومستقبلك
            </motion.h3>

            <motion.p variants={fadeRight}
              className="text-[#A0A0A0] my-3">
              نقدم حلولاً قانونية ذكية مدعومة بعقدين من التميز في القضايا المعقدة.
            </motion.p>

            <motion.div variants={fadeRight}>
              <Link to={"/BookingDate"}>
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="cursor-pointer ms-auto mt-5 text-[#0E1A2B] p-5 font-bold bg-[#C9A24D] rounded-[2.5px]"
                >
                  احجز استشارة الآن
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-5 py-10 lg:justify-around"
        >
          {[
            { number: "89%", text: "نتائج قانونية مبهرة" },
            { number: "24h", text: "سرعة في التنفيذ والاستجابة" },
            { number: "20+", text: "عاماً من السلطة القانونية" }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <p className="text-[#C9A24D] text-[56px] font-bold">
                {item.number}
              </p>
              <p className="text-white text-[18px]">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= SPECIALTIES ================= */}
      <section className="bg-[#0e1a2b] py-20 px-5">
        <div className="text-center mb-14">
          <h2 className="text-white text-4xl font-bold mb-3">
            تخصصاتنا القانونية
          </h2>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {[
            "الأحوال الشخصية",
            "قانون الشركات",
            "القانون الجنائي"
          ].map((title, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="bg-[#132C4A] p-10 rounded-lg text-right"
            >
              <h3 className="text-white text-xl font-bold mb-3">
                {title}
              </h3>
              <p className="text-gray-400">
                نقدم أفضل الحلول القانونية باحترافية عالية.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#0e1a2b] px-6 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#14243a] max-w-6xl mx-auto border-2 border-[#c5a059] p-12 text-center"
        >
          <h2 className="text-white text-4xl font-bold mb-8">
            هل أنت جاهز للخطوة التالية؟
          </h2>

          <Link to={"/BookingDate"}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer bg-[#c5a059] text-[#0a1120] font-bold py-4 px-10"
            >
              احجز استشارتك الآن
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
  


export default Home