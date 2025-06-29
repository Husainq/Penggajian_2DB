<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class BypassCsrfForLogin extends Middleware
{
    protected $except = [
        // '/login',
    ];
}
