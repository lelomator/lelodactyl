<?php

use Illuminate\Support\Facades\Facade;

return [

    /*
    |--------------------------------------------------------------------------
    | PostHog API Key
    |--------------------------------------------------------------------------
    |
    | 
    | 
    |
    */

    'posthog_api' => env('VITE_POSTHOG_API_KEY', 'none'),
    'posthog_url' => env('VITE_POSTHOG_URL', 'none'),


    /*
    |--------------------------------------------------------------------------
    | API Backend URL
    |--------------------------------------------------------------------------
    |
    | 
    | 
    |
    */

    'backend_url' => env('VITE_BACKEND_URL', 'none'),

];
