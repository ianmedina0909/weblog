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
 </head>
    <body>  
       <div id="header"> </div>
       <script type="text/javascript" src="{{asset('js/app.js')}}"></script>
    </body>
</html>
