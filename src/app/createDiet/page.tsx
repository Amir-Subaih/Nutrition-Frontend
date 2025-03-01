"use client";

import React, { useState, useEffect } from "react";
import { useUser } from "@/components/context1/UserContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const NutritionDashboard = () => {
    const { user } = useUser();
    const router = useRouter();
    const [formData, setFormData] = useState({
        Weight: "",
        Length: "",
        FavoriteFood: "",
        NotFavoriteFood: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const userId = user?.id || null;
    const userToken = user?.token || "";

    useEffect(() => {
        if (!userId) {
            console.warn("User not logged in!");
        }
    }, [userId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userId) return toast.error("يجب تسجيل الدخول أولاً");

        setIsLoading(true);

        try {
            const response = await fetch("https://nutrition-backend-uxpv.onrender.com/api/nutrition/create", {
                method: "POST",
                headers: { "Content-Type": "application/json", 'token': `${userToken}` },
                body: JSON.stringify({ ...formData, userId }),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "خطأ أثناء إرسال البيانات");

            toast.success("تم إنشاء نظامك الغذائي!");
            router.push("/");
        } catch (error) {
            console.error("Error:", error);
            toast.error("خطأ أثناء إرسال البيانات");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.div 
            className="flex min-h-screen bg-gray-100 p-8 gap-8 justify-center items-center"
            dir="rtl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div 
                className="w-full max-w-lg bg-white p-8 rounded-xl shadow-xl"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                    إدخال بيانات التغذية
                </h2>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <motion.input
                        type="number"
                        name="Weight"
                        placeholder="الوزن (كجم)"
                        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                        onChange={handleChange}
                        value={formData.Weight}
                        required
                        disabled={isLoading}
                        whileFocus={{ scale: 1.02 }}
                    />
                    
                    <motion.input
                        type="number"
                        name="Length"
                        placeholder="الطول (سم)"
                        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                        onChange={handleChange}
                        value={formData.Length}
                        required
                        disabled={isLoading}
                        whileFocus={{ scale: 1.02 }}
                    />

                    <motion.textarea
                        name="FavoriteFood"
                        placeholder="الأطعمة المفضلة"
                        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                        onChange={handleChange}
                        value={formData.FavoriteFood}
                        required
                        disabled={isLoading}
                        whileFocus={{ scale: 1.02 }}
                    />

                    <motion.textarea
                        name="NotFavoriteFood"
                        placeholder="الأطعمة غير المفضلة"
                        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                        onChange={handleChange}
                        value={formData.NotFavoriteFood}
                        required
                        disabled={isLoading}
                        whileFocus={{ scale: 1.02 }}
                    />

                    <motion.button
                        type="submit"
                        className={`w-full bg-green-500 text-white py-3 rounded-lg text-lg font-semibold transition-all flex items-center justify-center ${
                            isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"
                        }`}
                        disabled={isLoading}
                        whileTap={{ scale: 0.98 }}
                    >
                        {isLoading ? (
                            <div className="flex items-center gap-2">
                                <span className="animate-spin h-5 w-5 border-4 border-white border-t-transparent rounded-full"></span>
                                جاري الحفظ...
                            </div>
                        ) : (
                            "حفظ البيانات"
                        )}
                    </motion.button>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default NutritionDashboard;
