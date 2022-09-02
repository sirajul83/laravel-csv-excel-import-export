@extends('layouts.master')
@section('title', 'Export | Excel or a CSV File  Export')
@section('main_content')    
    <form class="form-inline" action="/action_page.php">
        <label for="csv_excel"> Export  CSV/Excel File : &nbsp; </label>
        <button type="submit" class="btn btn-info SubmitBtn">  Download </button>
    </form> 
@endsection