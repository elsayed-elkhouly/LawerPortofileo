import React from 'react'
import lawerphoto from "../../assets/images/df9c79f70121aee15fd66c884f20ff8e825dc552.jpg"
import { BiBriefcase, BiHome } from 'react-icons/bi';
import { BsArrowLeft } from 'react-icons/bs';
import { FaBalanceScale, FaGavel, FaLandmark, FaUsers } from 'react-icons/fa';
import { LuBadgeCheck, LuBuilding2, LuLightbulb, LuMessageSquare, LuSearch } from 'react-icons/lu';
import { MdGavel, MdOutlineChat } from 'react-icons/md';
import { PiBuildingOfficeBold } from 'react-icons/pi';
import { CiCircleCheck } from 'react-icons/ci';
import { HiLightBulb, HiOutlineChartBarSquare, HiOutlineLightBulb } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Service = () => {
    const services = [
        {
            title: "القانون الجنائي",
            desc: "تمثيل قانوني متخصص في القضايا الجنائية المعقدة، مع ضمان أعلى مستويات الدفاع.",
            icon: <MdGavel size={32} />
        },
        {
            title: "الأحوال الشخصية",
            desc: "إدارة قضايا الأسرة والتركات والطلاق بخصوصية تامة واحترافية عالية.",
            icon: <FaUsers size={32} />
        },
        {
            title: "الشركات والشركاء",
            desc: "تأسيس الشركات، صياغة الاتفاقيات التجارية، وإدارة النزاعات بين الشركاء.",
            icon: <PiBuildingOfficeBold size={32} />
        },
        {
            title: "القانون المدني",
            desc: "التعامل مع التعويضات، العقود المدنية، والمطالبات المالية بين الأفراد والكيانات.",
            icon: <FaLandmark size={32} />
        },
        {
            title: "القضايا العمالية",
            desc: "حماية حقوق الموظفين وأصحاب العمل، وفض النزاعات العمالية بما يتوافق مع الأنظمة.",
            icon: <BiBriefcase size={32} />
        },
        {
            title: "القانون العقاري",
            desc: "إتمام الصفقات العقارية، فض النزاعات على الملكية، وتوثيق العقود لضمان الاستثمار.",
            icon: <BiHome size={32} />
        }
    ];
    const steps = [
        { title: "استشارة", desc: "فهم أولي لتفاصيل القضية وتحديد المتطلبات الأساسية.", icon: <MdOutlineChat /> },
        { title: "دراسة الحالة", desc: "تحليل معمق للمستندات والبحث في السوابق القانونية.", icon: <HiOutlineChartBarSquare /> },
        { title: "استراتيجية قانونية", desc: "رسم خارطة طريق قانونية واضحة لتحقيق أفضل النتائج.", icon: <HiOutlineLightBulb /> },
        { title: "متابعة حتى النتيجة", desc: "تنفيذ الإجراءات والتمثيل أمام الجهات المختصة بفعالية.", icon: <LuBadgeCheck /> }
    ];
    return (
        <>
            {/* Our legal services / خدماتنا القانونيه */}
            <section className="bg-[#0e1a2b] py-20 px-6 font-sans text-right" dir="rtl">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-white text-4xl font-bold mb-4">خدماتنا القانونية</h2>
                        <p className="text-gray-400">اختر التخصص المناسب وسنقوم بمساعدتك فورًا</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-[#0d1626] border border-gray-800 p-8 rounded-sm hover:border-[#c5a059] transition-all duration-300"
                            >
                                <div className="bg-[#1a2436] w-16 h-16 rounded-full flex items-center justify-center text-[#c5a059] mb-6 group-hover:bg-[#c5a059] group-hover:text-[#0a1120] transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-white text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                    {item.desc}
                                </p>
                                <button className="flex items-center gap-2 text-[#c5a059] font-semibold text-sm hover:underline cursor-pointer" onClick={() => document.getElementById('my_modal_2').showModal()}>
                                    <span>عرض التفاصيل</span>
                                    <BsArrowLeft size={16} /></button>
                                <dialog id="my_modal_2" className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Press ESC key or click outside to close</p>
                                    </div>
                                    <form method="dialog" className="modal-backdrop">
                                        <button>close</button>
                                    </form>
                                </dialog>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Corporate and Contract Law / قانون الشركات والعقود  */}
            <section className="bg-[#0e1a2b] py-20 px-6" dir="rtl">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="lg:w-1/2 text-right">
                        <h2 className="text-white text-4xl font-bold mb-6">قانون الشركات والعقود</h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            نقدم حلولاً قانونية شاملة لدعم نمو أعمالكم وحمايتها من المخاطر القانونية المحتملة.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "صياغة ومراجعة العقود التجارية الدولية والمحلية.",
                                "تمثيل الشركات في المفاوضات وعمليات الاستحواذ.",
                                "الاستشارات الضريبية والتنظيمية للشركات الكبرى."
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <CiCircleCheck
                                        className="text-[#c5a059] shrink-0 text-2xl" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Link to={"/BookingDate"} ><button className="bg-[#c5a059] text-[#0a1120] px-8 py-3 font-bold hover:bg-[#b08e4d] transition-all">
                            احجز استشارة لهذه الخدمة
                        </button></Link>
                    </div>
                    {/* Lawyer Image */}
                    <div className="lg:w-1/2">
                        <img
                            src={lawerphoto}
                            alt="قانون الشركات والعقود"
                            className="rounded-sm shadow-2xl border border-gray-800"
                        />
                    </div>


                </div>
            </section>
            {/* Methodology / منهجية العمل  */}
            <section className="bg-[#0e1a2b] py-20 px-6 text-center" dir="rtl">
                <h2 className="text-white text-3xl font-bold mb-2">منهجية العمل</h2>
                <div className="w-16 h-1 bg-[#c5a059] mx-auto mb-16"></div>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 ">
                    {steps.map((step, i) => (
                        <div key={i} className="bg-[#0d1626] p-8 rounded-sm border border-gray-800 flex flex-col items-center hover:scale-105 duration-300 overflow-hidden">
                            <div className="text-2xl bg-[#c5a059] text-[#0a1120] w-12 h-12 flex items-center justify-center rounded-full mb-6">
                                {step.icon}
                            </div>
                            <h3 className="text-white text-xl font-bold mb-4">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
            {/* Asked Questions / الأسئلة الشائعة  */}
            <section className="bg-[#0e1a2b] py-20 px-6 text-center">
                <h2 className="text-white text-3xl font-bold mb-2"> الأسئلة الشائعة</h2>
                <div className=' w-full lg:w-3/4 flex justify-center items-center flex-col gap-2 mx-auto py-10'>
                    <div className="collapse collapse-arrow bg-[#162132] border border-[#C9A14A33] text-right">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-semibold text-white  py-8 text-2xl">كيف يمكنني حجز موعد استشارة؟</div>
                        <div className="collapse-content text-l text-[#9CA3AF] pt-3 me-5  ">يمكنك الحجز بسهولة عبر نموذج التواصل في الموقع أو الاتصال مباشرة بفريقنا عبر الأرقام الموضحة.</div>
                    </div>
                    <div className="collapse collapse-arrow bg-[#162132] border border-[#C9A14A33] text-right ">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold text-white text-2xl py-8">ما هي تكلفة الخدمات القانونية؟</div>
                        <div className="collapse-content text-sm text-[#9CA3AF] me-5">الخدمات القانونية تُحدد وفقًا لاحتياج كل عميل، وتُقدَّر تكلفتها باعتبارها استثمار يعكس القيمة والحماية القانونية التي سيحصل عليها</div>
                    </div>
                    <div className="collapse collapse-arrow bg-[#162132] border border-[#C9A14A33] text-right">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold text-white text-2xl py-8">هل تقدمون استشارات عن بعد؟</div>
                        <div className="collapse-content text-sm text-[#9CA3AF] me-5">نعم، نُقدّم استشارات عن بُعد، لتيسير التواصل مع عملائنا وضمان تجربة احترافية ترتقي لأعلى معايير خدمة العملاء، لأن راحتهم وثقتهم هي أولويتنا</div>
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
                        هل تحتاج إلى محامي الآن؟                      </h2>

                    <Link to={"/BookingDate"}><button className="bg-[#c5a059] hover:bg-[#b08e4d] text-[#0a1120] font-bold py-4 px-10 text-lg transition-colors z-10">
                        احجز استشارتك الآن
                    </button></Link>

                    <p className="text-gray-400 mt-6 text-sm z-10">
                        سرية تامة – رد سريع – دعم كامل                      </p>
                </div>
            </section>
        </>
    )
}

export default Service