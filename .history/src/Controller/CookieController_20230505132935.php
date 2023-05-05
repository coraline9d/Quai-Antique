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

        $timestamp = new Cookie(
            'timestamp',    // Cookie name
            time(),         // Cookie value
            time() + (24 * 60 * 60)  // Expires in 1 day
        );

        $res = new Response();
        $res->headers->setCookie($cookie);
        $res->headers->setCookie($timestamp);
        $res->send();
    }

    public function deleteCookie()
    {
        $res = new Response();
        $res->headers->clearCookie('my_cookie');
        $res->send();
    }
}
