"use client";
import React from "react";

const About = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "var(--bg-color)", direction: "rtl" }} // ضبط الاتجاه لليمين
    >
      {/* فيديو الخلفية */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video/about.mp4" type="video/mp4" />
        متصفحك لا يدعم تشغيل الفيديو.
      </video>

      {/* المحتوى */}
      <div
        className="relative z-10 p-10 rounded-lg max-w-2xl text-center"
        style={{
          backgroundColor: "var(--overlay-color)",
          color: "var(--text-color)",
        }}
      >
        <h1 className="text-4xl font-bold mb-4">من نحن</h1>
        <p className="text-lg">
          مرحبًا بك في منصتنا! نحن نسعى لتقديم خدمات عالية الجودة لتعزيز تجربتك.  
          يعمل فريقنا بجد لتوفير أفضل الحلول التي تناسب احتياجاتك.
        </p>
      </div>
    </div>
  );
};

export default About;
