'use client';

import React from 'react';
import { motion, Variants, Transition } from 'framer-motion'; // เพิ่ม Variants, Transition

interface TestimonialCardProps {
    quote: string;
    name: string;
    company: string;
}

const testimonialsData: TestimonialCardProps[] = [
    {
        quote: 'งานวิดีโอที่ได้รับมีพลังและสดใสตรงกับคอนเซ็ปต์แบรนด์ของเรามาก ยอด Engagement สูงสุดตั้งแต่เคยทำมา!',
        name: 'คุณมายด์',
        company: 'Marketing Manager, Funky Gadget Co.',
    },
    {
        quote: 'ทำงานรวดเร็ว มืออาชีพ และเข้าใจกลุ่มเป้าหมายวัยรุ่นอย่างลึกซึ้ง ทำให้แบรนด์ดูน่าสนใจขึ้นเยอะเลยค่ะ.',
        name: 'คุณเจมส์',
        company: 'Brand Director, Sweet Snack Brand',
    },
];

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, company }) => (
    <motion.div
        className="bg-white p-6 md:p-8 rounded-xl shadow-xl border-t-4 border-pink-600"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 } as Transition} // แก้ไข Type ตรงนี้ด้วย
    >
        {/* Star Rating Placeholder */}
        <div className="text-highlight-yellow text-3xl mb-4">
            ⭐⭐⭐⭐⭐
        </div>
        <blockquote className="text-lg italic text-gray-700 mb-4">
            "{quote}"
        </blockquote>
        <p className="font-bold text-gray-800">{name}</p>
        <p className="text-sm text-blue-600">{company}</p>
    </motion.div>
);

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-24 px-8 bg-pink-50">
            <div className="container mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-800"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    What Clients <span className="text-pink-600">Say</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonialsData.map((testi, index) => (
                        <TestimonialCard key={index} {...testi} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;