"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Image from "next/image";
import iconImage from "../../../../public/Logo.png";
import LoginImage from "../../../../public/Login1.jpg";
import { useUser } from "@/components/context1/UserContext";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { user, login } = useUser();

    useEffect(() => {
        if (user) {
            router.push("/");
        }
    }, [user, router]);

    const formSubmitHandler = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) return toast.error("البريد الإلكتروني مطلوب");
        if (!password) return toast.error("كلمة المرور مطلوبة");

        try {
            const response = await fetch("https://nutrition-backend-uxpv.onrender.com/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "فشل تسجيل الدخول");

            toast.success("تم تسجيل الدخول بنجاح!");
            login({ name: data.other.name, email: data.other.email, token: data.token, id: data.other._id });
            console.log("User data:", data); 
            console.log("User data saved to localStorage:", localStorage.getItem("user"));
            router.push("/");
        } catch (error: any) {
            toast.error(error.message || "حدث خطأ ما");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div>
                        <Image src={iconImage} alt="الصفحة الرئيسية" className="mx-auto w-32" />
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-full flex-1">
                            <div className="mb-6 border-b text-center">
                                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                    <h2>تسجيل الدخول</h2>
                                </div>
                            </div>
                            <form onSubmit={formSubmitHandler} className="mx-auto max-w-xs">
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="email"
                                    placeholder="البريد الإلكتروني"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                    type="password"
                                    placeholder="كلمة المرور"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="mt-5 tracking-wide font-semibold bg-green-400 text-white w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                >
                                    <span className="ml-2">تسجيل الدخول</span>
                                </button>
                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    أوافق على الالتزام بـ
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        شروط الخدمة
                                    </a>
                                    و
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        سياسة الخصوصية
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-green-100 text-center hidden lg:flex">
                    <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
                        <Image src={LoginImage} alt="الصفحة الرئيسية" className="w-full h-auto object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
