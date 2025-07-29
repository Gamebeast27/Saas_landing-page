"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import CheckIcon from "@/assets/check.svg";

const pricingTiers = [
  {
    title: "Starter",
    monthlyPrice: 0,
    yearlyPrice: 0,
    buttonText: "Start for Free",
    popular: false,
    features: [
      "1 Ad Campaign / Month",
      "Basic Dashboard Access",
      "Campaign ROI Tracking",
      "Limited Analytics",
      "Email Support",
    ],
  },
  {
    title: "Growth",
    monthlyPrice: 299,
    yearlyPrice: 2766,
    buttonText: "Get Started",
    popular: true,
    features: [
      "Up to 10 Ad Campaigns",
      "Full Dashboard Access",
      "Advanced Analytics & Reporting",
      "Real-time Campaign Monitoring",
      "Custom Budget Management",
      "Email + Chat Support",
      "Third-party Integrations",
    ],
  },
  {
    title: "Enterprise",
    monthlyPrice: 999,
    yearlyPrice: 9488,
    buttonText: "Contact Sales",
    popular: false,
    features: [
      "Unlimited Ad Campaigns",
      "All Growth Features",
      "AI-Powered Budget Suggestions",
      "Cross-Channel Campaign Sync",
      "Dedicated Account Manager",
      "Custom API Access",
      "White-label Options",
      "Advanced Security & SLA",
      "Phone & Priority Support",
    ],
  },
];

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [toggleKey, setToggleKey] = useState(0);

  const handleToggle = () => {
    setIsYearly((prev) => !prev);
    setToggleKey((prev) => prev + 1);
  };

  return (
    <section className="py-24 bg-white transition-colors duration-300">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title ">Pricing</h2>
          <p className="mt-5 text-gray-600">
            Free forever. Upgrade for better ROI tracking, analytics, and growth tools.
          </p>

          {/* Toggle */}
          <div className="mt-8 flex justify-center items-center gap-4">
            <span className="text-gray-700 font-medium">Monthly</span>
            <button
              onClick={handleToggle}
              className="w-14 h-8 rounded-full bg-gray-300 relative transition"
            >
              <motion.div
                layout
                className="w-6 h-6 rounded-full bg-white absolute top-1 left-1"
                animate={{ x: isYearly ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            </button>
            <span className="text-gray-700 font-medium">Yearly</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-stretch mt-14">
          <AnimatePresence mode="wait">
            {pricingTiers.map(({ title, monthlyPrice, yearlyPrice, buttonText, popular, features }, index) => {
              const price = isYearly ? yearlyPrice : monthlyPrice;
              const isFree = price === 0;

              const isMiddle = index === 1;
              const bgColor = isMiddle ? "bg-gray-900 text-white" : "bg-white text-gray-900";
              const textColor = isMiddle ? "text-gray-300" : "text-gray-600";
              const buttonColor = isMiddle
                ? "bg-white text-black"
                : "bg-black text-white";

              return (
                <motion.div
                  key={`${title}-${toggleKey}`}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={twMerge(
                    `relative group border p-6 rounded-2xl shadow-md transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl w-full max-w-sm ${bgColor}`
                  )}
                >
                  {/* Discount Label */}
                  {isYearly && !isFree && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      Save 20%
                    </div>
                  )}

                  {/* Popular Label */}
                  {popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-xl bg-gradient-to-r from-pink-400 to-blue-400 text-white text-xs font-semibold shadow-lg">
                      Popular
                    </div>
                  )}

                  <h3 className="text-xl font-semibold">{title}</h3>
                  <div className="flex items-end gap-1 mt-4">
                    <span className="text-3xl font-bold tracking-tight">
                      {isFree ? "₹0" : `₹${price}`}
                    </span>
                    <span className={`text-sm ${textColor}`}>
                      {isYearly ? "/year" : "/month"}
                    </span>
                  </div>

                  <button className={`mt-6 w-full py-2 px-4 rounded-xl font-medium ${buttonColor} hover:opacity-90 transition`}>
                    {buttonText}
                  </button>

                  <ul className="mt-6 space-y-3">
                    {features.map((feature, i) => (
                      <li key={i} className={`flex items-center text-sm gap-3 ${textColor}`}>
                        <CheckIcon className={`w-5 h-5 ${isMiddle ? "text-green-400" : "text-green-600"}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
