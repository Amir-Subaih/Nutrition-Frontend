"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useUser } from "@/components/context1/UserContext";

const steps = [
  { 
    img: "/images/weight.jpg", 
    title: "الخطوة 1", 
    desc: "أدخل وزنك وطولك" 
  },
  { 
    img: "/images/fav-food.jpg", 
    title: "الخطوة 2", 
    desc: "حدد الأطعمة المفضلة لديك" 
  },
  { 
    img: "/images/not-fav-food.jpg", 
    title: "الخطوة 3", 
    desc: "استبعد الأطعمة غير المفضلة لديك" 
  },
  { 
    img: "/images/ai-diet.jpg", 
    title: "الخطوة 4", 
    desc: "احصل على خطة غذائية من الذكاء الاصطناعي" 
  }
];

const Home = () => {
  const { user } = useUser(); // Destructure user from the context
  
  console.log("User:", user); // You can now safely use user
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-gray-100" style={{ direction: "rtl" }}>
      {/* القسم العلوي (الفيديو + معلومات الموقع) */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between p-6 md:p-16">
        {/* قسم الفيديو */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <video
            autoPlay
            loop
            muted
            className="w-full rounded-lg shadow-lg"
          >
            <source src="/video/home.mp4" type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو.
          </video>
        </motion.div>

        {/* معلومات الموقع */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full md:w-1/2 text-center md:text-right p-6"
        >
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            مخطط الحمية الذكي
          </h1>
          <p className="text-lg text-gray-700">
            يوفر لك الموقع **نظامًا غذائيًا شخصيًا** باستخدام **الذكاء الاصطناعي**.
          </p>
        </motion.div>
      </div>

      {/* القسم السفلي (كيف يعمل) */}
      <div className="w-full py-12 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          كيف يعمل؟
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="rounded-lg overflow-hidden shadow-lg border-2 border-white"
            >
              <Image
                src={step.img}
                alt={step.title}
                width={150}
                height={150}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-green-700">{step.title}</h3>
              <p className="text-gray-700">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* زر إنشاء النظام الغذائي */}
      <motion.button
        onClick={() => router.push("/createDiet")}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="mt-10 mb-6 px-8 py-3 text-lg font-semibold text-white bg-green-600 rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-400"
      >
        أنشئ نظامك الغذائي 🍽️
      </motion.button>
    </div>
  );
};

export default Home;
