@extends('layouts.master')
@section('title', 'Import | Excel or a CSV File Import')
@section('main_content')    
    <form class="form-inline" method="POST" action="{{ route('import.upload')}}" enctype="multipart/form-data">
        @csrf
        <label for="csv_excel"> CSV/Excel File : &nbsp; </label>
        <input type="file" class="form-control  fileInput" id="csv_excel" name="csv_excel">
        <button type="submit" class="btn btn-success SubmitBtn">  Import </button>
    </form> 
@endsection