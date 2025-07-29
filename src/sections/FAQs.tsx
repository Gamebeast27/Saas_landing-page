"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is ADmyBRAND and how does it work?",
    answer:
      "ADmyBRAND is an AI-powered marketing and analytics platform that helps businesses streamline ad campaigns, track performance, and gain actionable insights through real-time dashboards and intelligent automation.",
  },
  {
    question: "Is ADmyBRAND suitable for small businesses?",
    answer:
      "Absolutely. ADmyBRAND is designed to scale with your business. Whether you're a startup or a large enterprise, our platform provides tools tailored to your advertising and analytics needs.",
  },
  {
    question: "What kind of analytics can I expect from ADmyBRAND?",
    answer:
      "You get access to dynamic dashboards that include campaign performance metrics, conversion tracking, ROI analysis, user engagement data, and AI-driven insights for optimization.",
  },
  {
    question: "Can I integrate ADmyBRAND with other platforms?",
    answer:
      "Yes, ADmyBRAND supports seamless integration with popular platforms like Google Ads, Facebook Ads, Instagram, LinkedIn, as well as CRMs and data warehouses.",
  },
  {
    question: "Do I need technical knowledge to use ADmyBRAND?",
    answer:
      "Not at all. Our platform features an intuitive UI and smart automation so that both marketers and non-technical users can navigate and use it effectively. No coding is required.",
  },
  {
  question: "How does ADmyBRAND use AI in marketing?",
  answer:
    "ADmyBRAND leverages AI to analyze campaign data, predict audience behavior, optimize ad placements, and recommend strategies for maximum performance and ROI.",
},
];


export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8" id="faqs">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Questions? We`&apos;`ve got <span className="text-primary">answers</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Here are some frequently asked questions about Layers.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className="border border-gray-200 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span className="text-gray-900 font-medium text-lg">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 pt-0 text-gray-700 text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
