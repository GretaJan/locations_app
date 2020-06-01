<?php

use Illuminate\Database\Seeder;
use App\Overview;

class OverviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Overview::class, 30)->create();
    }
}
