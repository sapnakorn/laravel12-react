import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';

export default function Index() {
    // 1. หัวใจสำคัญของ State: ดึงข้อมูลจาก LocalStorage ถ้าไม่มีให้ใช้ข้อมูลสมมุติ (Mock Data)
    const [websites, setWebsites] = useState(() => {
        const saved = localStorage.getItem('my_bookmarks_state');
        if (saved) {
            return JSON.parse(saved);
        }
        return [
            { id: 1, title: 'Google Thailand', url: 'https://google.co.th', is_bookmarked: true },
            { id: 2, title: 'Laravel Docs', url: 'https://laravel.com', is_bookmarked: false },
        ];
    });

    const [form, setForm] = useState({ title: '', url: '' });

    // 2. Side Effect: ทุกครั้งที่ State 'websites' เปลี่ยนแปลง ให้แอบเอาไปเซฟลงเบราว์เซอร์อัตโนมัติ
    useEffect(() => {
        localStorage.setItem('my_bookmarks_state', JSON.stringify(websites));
    }, [websites]);

    // ฟังก์ชันเพิ่มเว็บ (จัดการผ่าน State ล้วนๆ)
    const handleAdd = (e) => {
        e.preventDefault();
        const newSite = {
            id: Date.now(), // ใช้เวลาวินาทีนั้นๆ เป็น ID สมมุติ
            title: form.title,
            url: form.url,
            is_bookmarked: false
        };
        setWebsites([newSite, ...websites]); // เอาของใหม่ต่อหัวแถวของเดิม
        setForm({ title: '', url: '' });     // เคลียร์ร่างฟอร์ม
    };

    // ฟังก์ชันสลับสถานะดาว (Toggle State)
    const toggleBookmark = (id) => {
        setWebsites(websites.map(site => 
            site.id === id ? { ...site, is_bookmarked: !site.is_bookmarked } : site
        ));
    };

    // แถม: ฟังก์ชันลบเว็บทิ้ง
    const deleteSite = (id) => {
        setWebsites(websites.filter(site => site.id !== id));
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 font-sans">
            <Head title="React State Bookmark" />

            <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                        📌 บันทึกบุ๊กมาร์ก (Pure State)
                    </h1>
                    <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-2.5 py-1 rounded-full">
                        No Database
                    </span>
                </div>

                {/* Form */}
                <form onSubmit={handleAdd} className="flex gap-2 mb-8">
                    <input
                        type="text"
                        placeholder="ชื่อเว็บไซต์"
                        className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        value={form.title}
                        onChange={e => setForm({ ...form, title: e.target.value })}
                        required
                    />
                    <input
                        type="url"
                        placeholder="https://..."
                        className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        value={form.url}
                        onChange={e => setForm({ ...form, url: e.target.value })}
                        required
                    />
                    <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                        เพิ่ม
                    </button>
                </form>

                <hr className="my-6 border-slate-100" />

                {/* List */}
                <div className="space-y-3">
                    {websites.map((site) => (
                        <div key={site.id} className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl hover:bg-slate-100 transition group">
                            <div className="overflow-hidden mr-2">
                                <h3 className="font-semibold text-slate-700 text-sm truncate">{site.title}</h3>
                                <a href={site.url} target="_blank" rel="noreferrer" className="text-xs text-blue-500 hover:underline truncate block">
                                    {site.url}
                                </a>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <button
                                    type="button"
                                    onClick={() => toggleBookmark(site.id)}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition shadow-sm ${
                                        site.is_bookmarked 
                                        ? 'bg-amber-400 text-slate-900 hover:bg-amber-500' 
                                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                                    }`}
                                >
                                    {site.is_bookmarked ? '⭐ บันทึกแล้ว' : '☆ บุ๊กมาร์ก'}
                                </button>

                                <button 
                                    type="button"
                                    onClick={() => deleteSite(site.id)}
                                    className="text-slate-400 hover:text-red-500 p-1.5 opacity-0 group-hover:opacity-100 transition text-xs"
                                    title="ลบ"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-[11px] text-center text-slate-400 mt-8">
                    *ข้อมูลถูกบันทึกชั่วคราวอยู่ใน LocalStorage ของเบราว์เซอร์นี้เท่านั้น
                </p>
            </div>
        </div>
    );
}