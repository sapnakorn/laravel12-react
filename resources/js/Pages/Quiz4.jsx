// resources/js/Pages/Quiz4.jsx
import React from 'react';

// รับค่า gpus ที่ส่งมาจาก Route โดยตรง
export default function Quiz4({ gpus }) {
    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h2>ตารางข้อมูลการ์ดจอ</h2>
            <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ backgroundColor: '#f0f0f0' }}>
                    <tr>
                        <th>ID</th>
                        <th>ชื่อรุ่น</th>
                        <th>สถาปัตยกรรม</th>
                        <th>VRAM (GB)</th>
                        <th>ประเภท</th>
                        <th>ราคา (USD)</th>
                        {/* เพิ่มหัวตาราง 3 คอลัมน์ใหม่ */}
                        <th>จำนวน Core</th>
                        <th>กินไฟ (Watts)</th>
                        <th>ปีที่เปิดตัว</th>
                    </tr>
                </thead>
                <tbody>
                    {gpus.map((gpu) => (
                        <tr key={gpu.id}>
                            <td>{gpu.id}</td>
                            <td>{gpu.model_name}</td>
                            <td>{gpu.architecture}</td>
                            <td>{gpu.vram_gb}</td>
                            <td>{gpu.memory_type}</td>
                            <td>{gpu.price_usd}</td>
                            {/* เพิ่มข้อมูล 3 คอลัมน์ใหม่ */}
                            <td>{gpu.core_count}</td>
                            <td>{gpu.tdp_watts}</td>
                            <td>{gpu.release_year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}