<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Bus;
use App\Jobs\UserProcess;

class ImportExportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    public function import()
    {
        return view('import');
    }
    public function upload(Request $request)
    {
        if($request->has('csv_excel')){
            
           $data = file($request->csv_excel);

           $chaunks = array_chunk($data, 1000);

           $header = [];
           $batch = Bus::batch([])->dispatch();

           foreach($chaunks as $key => $chunk){

            $data = array_map('str_getcsv', $chunk);
   
               if($key == 0){
   
                   $header = $data[0];
                   unset($data[0]);
               }

               $batch->add(new UserProcess($data, $header));
               
           };

           return response()->json(['status' => 'success', 'message' =>  "CSV Impoted", "data" => $batch ]);

        }else{
            return response()->json(['status' => 'error', 'message' =>  "Something Went Wrong" , 'data'=> []]);
        }
    }

    public function batch($batchId){
        // $batchId = request('id');

       $batch_info=  Bus::findBatch($batchId);

       return response()->json(['status' => 'success', 'message' =>  "CSV Batch Data", "data" => $batch_info ]);
    }

    public function export()
    {
        return view('export');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
