"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useUser } from "@/components/context1/UserContext";

interface NutritionData {
    id: string;
    Weight: number;
    Length: number;
    FavoriteFood: string;
    NotFavoriteFood: string;
    createdAt: string;
    Result: string;
}

const NutritionPage = () => {
    const { user } = useUser();
    const [data, setData] = useState<NutritionData[]>([]); // Ensure data is initialized as an array
    const [selectedItem, setSelectedItem] = useState<NutritionData | null>(null);
    const userId = user?.id || null;
    const TOKEN = user?.token || "";

    console.log("userId1:", userId);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://nutrition-backend-uxpv.onrender.com/api/nutrition/byUserId/${userId}`, {
                    method: "GET",
                    headers: { "Content-Type": "application/json", "token": `${TOKEN}` },
                });
    
                console.log("Response:", response);
    
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
    
                const result = await response.json();
    
                // Check if the API returned an object with a `nutritions` array
                if (result && Array.isArray(result.nutritions)) {
                    setData(result.nutritions);
                    console.log("result:", result.nutritions[0].Result);
                    if (result.nutritions.length > 0) setSelectedItem(result.nutritions[0]); // Default selection
                } else {
                    console.error("API did not return a valid nutritions array:", result);
                    setData([]); // Reset data to an empty array
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData();
    }, [userId, TOKEN]);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    };

    return (
        <div className="flex min-h-screen bg-gray-100 p-8 gap-8" dir="rtl">
            <div className="bg-white p-6 rounded-lg shadow-md w-full">
                <h2 className="text-2xl font-bold mb-4 text-center">بيانات التغذية</h2>
                {data.length > 0 ? (
                    <div className="pb-10">
                        {data.map((item, index) => (
                            <div key={item.id || index} className="min-h-screen bg-gray-100 p-8 my-10 rounded-e-sm">
                                <div className="mb-4 flex gap-2">
                                    <div>
                                        <p><strong>الوزن:</strong> {item.Weight} كجم</p>
                                        <p><strong>الطول:</strong> {item.Length} سم</p>
                                        <p><strong>الأطعمة المفضلة:</strong> {item.FavoriteFood}</p>
                                        <p><strong>الأطعمة غير المفضلة:</strong> {item.NotFavoriteFood}</p>
                                    </div>
                                    <div className="mr-10">
                                        <p><strong>التاريخ:</strong> {formatDate(item.createdAt)}</p>
                                    </div>
                                </div>
                                <motion.div
                                    className="p-4 cursor-pointer bg-gray-200 rounded-lg"
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => setSelectedItem(item)}
                                >
                                    <p className="text-lg font-semibold text-black">{item.Result}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">لا توجد بيانات متاحة</p>
                )}
            </div>
        </div>
    );
};

export default NutritionPage;