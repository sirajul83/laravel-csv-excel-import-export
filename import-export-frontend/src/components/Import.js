import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Import(){
    const navigate = useNavigate();
    
    const [csv_excel, setCsvExcel] = useState('')
    const [batch, setBatch] = useState('')
    const [batchinfo, setBatchInfo] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError]     = useState(null)

    useEffect(()=>{
        if(batch){
         // geBacthIInfo();
        }
    });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
            setLoading(true);
            const data = new FormData();
            data.append('csv_excel', csv_excel)       

            if(csv_excel ){
                const response = await axios.post(process.env.REACT_APP_API_NAME+"api/auth/upload",data);

                    if (response.data.status === 'success') {
                        setLoading(false);
                        setSuccess(response.data.message);
                        setBatch(response.data.data.id);
                        // setTimeout(() => {
                        //     navigate('/');
                        //   }, 2000);
                     
                    }else{
                        setError(response.errors);
                        setLoading(false);
                    }  
            }else{
                setSuccess("Please Filed all Fields");
            }
      }

    async function geBacthIInfo(){
        try {
            const responseData = await axios.get(process.env.REACT_APP_API_NAME+"api/auth/batch/"+batch)
            setBatchInfo(responseData.data.data)
           
        } catch (error) {
            console.log(error)
        }
    }

      //console.log(batchinfo.processedJobs)


    //   function ImportProceessRander(){
    //     if(batch){
    //         return <> 
    //             <div class="progress">
    //                 <div class="progress-bar" role="progressbar" aria-valuenow={batchinfo.process}
    //                 aria-valuemin="0" aria-valuemax="100" style={{width:`${batchinfo.process}}%`}}>
    //                     {batchinfo.process}%
    //                 </div>
    //                 </div>
    //         </>
    //   }else{
    //     return <>
            
    //         <form onSubmit={handleSubmit} className="form-inline" >
    //             <label > CSV/Excel File : &nbsp; </label>
    //             <input type="file" onChange={ e => setCsvExcel(e.target.files[0])} className="form-control  fileInput" id="csv_excel" name="csv_excel" />
    //             <button type="submit" className="btn btn-success SubmitBtn"> &nbsp; Import </button>

    //             {loading && <h5>Loading.. Please Wait....</h5> }
    //             {
    //                 success && 
    //             <p className="text-lg text-white text-center bg-green-500"> {success}</p>
    //             }
    //         </form>
    //     </>
    //   }
    // }
    return (
        <>
            <form onSubmit={handleSubmit} className="form-inline" >
                <label > CSV/Excel File : &nbsp; </label>
                <input type="file" onChange={ e => setCsvExcel(e.target.files[0])} className="form-control  fileInput" id="csv_excel" name="csv_excel" />
                <button type="submit" className="btn btn-success SubmitBtn"> &nbsp; Import </button>

                {loading && <h5>Loading.. Please Wait....</h5> }
                
                {
                    success && 
                <p className="text-lg text-white text-center bg-green-500"> {success}</p>
                }
            </form>
                
        </>
    );
}