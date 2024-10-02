<?php {
    // // uncomment to use authentification (restricted area) and manage credentials
    // if (isset($_SERVER["REMOTE_USER"])) {
    //     $remote_user_decode = base64_decode(string: substr(string: $_SERVER["REMOTE_USER"], offset: 6));
    //     if ((strlen(string: $remote_user_decode) != 0) && (strcasecmp(string1: $remote_user_decode, string2: ":") != 0)) {
    //         [$_SERVER['PHP_AUTH_USER'], $_SERVER['PHP_AUTH_PW']] = explode(separator: ':', string: $remote_user_decode);
    //     }
    // }
    //
    // // get credentials
    // $user = $_SERVER['PHP_AUTH_USER'] ?? '';
    // $pass = $_SERVER['PHP_AUTH_PW'] ?? '';
    //
    // // send auth query
    // if ($user != "user" || $pass != "pass") {
    //     header(header: 'WWW-Authenticate: Basic realm="restricted_area"');
    //     header(header: 'HTTP/1.0 401 Unauthorized');
    //     echo 'Not authorized';
    //     die;
    // }
}