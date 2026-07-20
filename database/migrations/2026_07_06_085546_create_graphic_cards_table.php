<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations. (คำสั่งสำหรับสร้างตาราง)
     */
    public function up(): void
    {
        Schema::create('graphic_cards', function (Blueprint $table) {
            // 1. Primary Key (คอลัมน์ ID รันอัตโนมัติ)
            $table->id(); 

            // 2. ชื่อรุ่นของการ์ดจอ (เช่น RTX 5090)
            $table->string('model_name'); 

            // 3. สถาปัตยกรรม (เช่น Blackwell, RDNA 4)
            $table->string('architecture'); 

            // 4. ขนาดหน่วยความจำ VRAM (เก็บเป็นตัวเลขจำนวนเต็ม)
            $table->integer('vram_gb'); 

            // 5. ประเภทของหน่วยความจำ (เช่น GDDR7)
            $table->string('memory_type'); 

            // 6. ราคาเปิดตัว (เก็บเป็นทศนิยม 8 หลัก โดยมีทศนิยม 2 ตำแหน่ง)
            $table->decimal('price_usd', 8, 2); 

            // 7. สร้างคอลัมน์ created_at และ updated_at อัตโนมัติ
            $table->timestamps(); 
            
        });
    }

    /**
     * Reverse the migrations. (คำสั่งสำหรับลบตาราง เมื่อใช้คำสั่ง rollback)
     */
    public function down(): void
    {
        Schema::dropIfExists('graphic_cards');
    }
};