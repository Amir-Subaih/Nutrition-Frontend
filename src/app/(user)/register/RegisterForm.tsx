'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation' // لاستخدام التوجيه بعد التسجيل
import { toast } from 'react-toastify'
import Image from 'next/image'
import iconImage from "../../../../public/Logo.png"
import RegisterImage from "../../../../public/Login1.jpg"

interface FormData {
    name: string
    email: string
    password: string
    confirmPassword: string
    phone: string
    location: string
}

const RegisterForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        location: '',
    })

    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value, // ✅ إصلاح خطأ TypeScript
        }))
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Your code here
    };

    const formSubmitHandler = async (e: React.FormEvent) => {
        e.preventDefault()

        const { name, email, password, confirmPassword, phone, location } = formData

        if (!name) return toast.error("الاسم مطلوب")
        if (!email) return toast.error("البريد الإلكتروني مطلوب")
        if (!password) return toast.error("كلمة المرور مطلوبة")
        if (password !== confirmPassword) return toast.error("كلمات المرور غير متطابقة")
        if (!phone) return toast.error("رقم الهاتف مطلوب")
        if (!location) return toast.error("الموقع مطلوب")

        try {
            const response = await fetch('https://nutrition-backend-uxpv.onrender.com/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok) {
                toast.success("تم التسجيل بنجاح! سيتم تحويلك إلى صفحة تسجيل الدخول...")
                setTimeout(() => {
                    router.push('/login') // الانتقال إلى صفحة تسجيل الدخول
                }, 2000)
            } else {
                toast.error(data.message || "فشل التسجيل")
            }
        } catch (error) {
            toast.error("حدث خطأ. يرجى المحاولة مرة أخرى لاحقًا.")
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div className="text-center">
                        <Image src={iconImage} alt="الرئيسية" className="mx-auto" />
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-full flex-1">
                            <div className="mb-6 border-b text-center">
                                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                    إنشاء حساب جديد
                                </div>
                            </div>

                            <div className="mx-auto max-w-xs">
                                <input
                                    className="w-full px-8 py-4 rounded-lg bg-gray-100 border placeholder-gray-500 text-sm focus:outline-none mt-3"
                                    type="text"
                                    name="name"
                                    placeholder="الاسم"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <input
                                    className="w-full px-8 py-4 rounded-lg bg-gray-100 border placeholder-gray-500 text-sm focus:outline-none mt-3"
                                    type="email"
                                    name="email"
                                    placeholder="البريد الإلكتروني"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <input
                                    className="w-full px-8 py-4 rounded-lg bg-gray-100 border placeholder-gray-500 text-sm focus:outline-none mt-3"
                                    type="password"
                                    name="password"
                                    placeholder="كلمة المرور"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <input
                                    className="w-full px-8 py-4 rounded-lg bg-gray-100 border placeholder-gray-500 text-sm focus:outline-none mt-3"
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="تأكيد كلمة المرور"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                                <input
                                    className="w-full px-8 py-4 rounded-lg bg-gray-100 border placeholder-gray-500 text-sm focus:outline-none mt-3"
                                    type="text"
                                    name="phone"
                                    placeholder="رقم الهاتف"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <input
                                    className="w-full px-8 py-4 rounded-lg bg-gray-100 border placeholder-gray-500 text-sm focus:outline-none mt-3"
                                    type="text"
                                    name="location"
                                    placeholder="الموقع"
                                    value={formData.location}
                                    onChange={handleChange}
                                />
                                <button
                                    onClick={formSubmitHandler}
                                    className="mt-5 tracking-wide font-semibold bg-blue-500 text-white w-full py-4 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center">
                                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="ml-2">إنشاء الحساب</span>
                                </button>
                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    بالتسجيل، فإنك توافق على
                                    <a href="#" className="border-b border-gray-500 border-dotted"> شروط الخدمة </a>
                                    و
                                    <a href="#" className="border-b border-gray-500 border-dotted"> سياسة الخصوصية</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-blue-100 text-center hidden lg:flex">
                    <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
                        <Image src={RegisterImage} alt="صفحة التسجيل" height={700} width={300} className="w-full flex" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm
