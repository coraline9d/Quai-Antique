<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CookieController extends AbstractController
{
    public function setCookie()
    {
        $cookie = new Cookie(
            'my_cookie',    // Cookie name
            'cookie_value', // Cookie value
            time() + (24 * 60 * 60)  // Expires in 1 day
        );

        $res = new Response();
        $res->headers->setCookie($cookie);
        $res->send();
    }
}
