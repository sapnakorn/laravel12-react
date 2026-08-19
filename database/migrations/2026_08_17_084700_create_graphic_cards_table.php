<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('graphic_cards', function (Blueprint $table) {
            $table->id();
            $table->string('model_name');
            $table->string('architecture');
            $table->integer('vram_gb');
            $table->string('memory_type');
            $table->decimal('price_usd', 8, 2);
            $table->integer('core_count');
            $table->integer('tdp_watts');
            $table->integer('release_year');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('graphic_cards');
    }
};