<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="title" content="Inflexionpoint Technologies (BD) Limited">
    <meta name="description" content="Inflexionpoint Technologies (BD) Limited">
    <meta name="author" content="Sirajul Islam">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/customs.css">
    @yield('custom_css')
    <title> @yield('title') </title>
  </head>
  <body>
      <div class="container">
         @include('layouts.include.topBar')
          <div class="row">
            <div class="col-md-12">
                <div class="card cardArea">
                    @yield('main_content')
                </div>
            </div>
          </div>
      </div>
    <script src="assets/js/jquery-3.4.1.slim.min.js"></script>
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    @yield('js_script')
  </body>
</html>