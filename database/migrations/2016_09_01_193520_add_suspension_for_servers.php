<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddSuspensionForServers extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::table('servers', function (Blueprint $table) {
      $table->tinyInteger('suspended')->unsigned()->default(0)->after('active');
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::table('servers', function (Blueprint $table) {
      $table->dropColumn('suspended');
    });
  }
}
