<!doctype html>
<html>


@section('title', 'SignIn')

@section('description', '')

@section('keyword', '')

@section('custom-css')
 
@stop

@section('custom-js')

@stop

@section('css-lib')

@stop

@section('js-lib')

@stop
<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <!-- <link href="/css/dist/sign-in.css" rel="stylesheet" type="text/css">    -->
 </head>
    <body>  
       <div id="login"> </div>
       <script src="js/app.js"></script>
    </body>
</html>
