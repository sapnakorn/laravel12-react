<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('graphic_cards', function (Blueprint $table) {
            // เพิ่ม 3 คอลัมน์ใหม่ (ใส่ nullable() ไว้เผื่อข้อมูลเก่าที่อยู่ในตารางไม่มีค่านี้)
            $table->integer('core_count')->nullable(); 
            $table->integer('tdp_watts')->nullable();  
            $table->integer('release_year')->nullable(); 
        });
    }

    public function down(): void
    {
        Schema::table('graphic_cards', function (Blueprint $table) {
            // คำสั่งสำหรับลบ 3 คอลัมน์นี้ทิ้ง หากต้องการย้อนกลับ (Rollback)
            $table->dropColumn(['core_count', 'tdp_watts', 'release_year']);
        });
    }
};