import TopBar from "./TopBar";

export default function Layout({children}){
    return (
        <>
        <TopBar />
        <div className="row">
            <div className="col-md-12">
                <div className="card cardArea">

                    {children}
                    
               </div>
            </div>
          </div>
        </>
    );

}