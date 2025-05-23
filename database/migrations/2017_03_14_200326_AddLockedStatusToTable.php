<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddLockedStatusToTable extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::table('packs', function (Blueprint $table) {
      $table->boolean('locked')->default(false)->after('visible');
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::table('packs', function (Blueprint $table) {
      $table->dropColumn('locked');
    });
  }
}
