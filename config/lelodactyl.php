<?php

use Illuminate\Support\Facades\Facade;

return [

    /*
    |--------------------------------------------------------------------------
    | PostHog API Key
    |--------------------------------------------------------------------------
    |
    | This value is the name of your application, which will be used when the
    | framework needs to place the application's name in a notification or
    | other UI elements where an application name needs to be displayed.
    |
    */

    'posthog_api' => env('VITE_POSTHOG_API_KEY', 'none'),
    'posthog_url' => env('VITE_POSTHOG_URL', 'none'),

];
