<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>Laravel</title>

  <link href="{{ mix('css/app.css') }}" rel="stylesheet">

  <!-- BODY options, add following classes to body to change options

    // Header options
    1. '.header-fixed'					- Fixed Header

    // Sidebar options
    1. '.sidebar-fixed'					- Fixed Sidebar
    2. '.sidebar-hidden'				- Hidden Sidebar
    3. '.sidebar-off-canvas'		- Off Canvas Sidebar
    4. '.sidebar-compact'				- Compact Sidebar Navigation (Only icons)

    // Aside options
    1. '.aside-menu-fixed'			- Fixed Aside Menu
    2. '.aside-menu-hidden'			- Hidden Aside Menu
    3. '.aside-menu-off-canvas'	- Off Canvas Aside Menu

    // Footer options
    1. '.footer-fixed'						- Fixed footer

    -->
</head>

<body>
  <noscript>
    <strong>We're sorry but this app doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
  </noscript>
  <div id="app"></div>
  <!-- built files will be auto injected -->
</body>

<script src="{{ mix('js/app.js') }}"></script>

</body>

</html>
