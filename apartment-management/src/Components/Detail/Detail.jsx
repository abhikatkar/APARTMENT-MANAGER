import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios  from "axios";
import "../Detail/Detail.css"


export const Detail = ()=>{
    const {id} = useParams();

     const [data, setData] = useState([]);

     useEffect(()=>{
         getData()
     },[]);

     const getData = () => {
        axios
          .get(`https://apartment-management-app.herokuapp.com/data/${id}`)
          .then((res) => {
            setData(res.data);
          });
      };
 
    return(
        <div className="detail">
            
            <img src={data.pic} alt="" />
            <hr />
            <h2>Flat no. - {data.flat_no}</h2>
            <hr />
             <h2>Total No. of residents - {data.no_res}</h2>
             <hr />
             <h2>Block - {data.block}</h2>
             <hr />
             <h2>Type - {data.type}</h2>
             <hr />
             <h2>Resident's Details - 
                 
                 <div className="p">
                 <p>Name-{data.res1name} | Age-{data.res1age} | Gender-{data.res1gender}</p>
                     <p>Name-{data.res2name} | Age-{data.res2age} | Gender-{data.res2gender}</p>
                     <p>Name-{data.res3name}| Age-{data.res3age} | Gender-{data.res3gender}</p>
                     <p>Name-{data.res4name}| Age-{data.res4age} | Gender-{data.res4gender}</p>
                     <p>Name-{data.res5name}| Age-{data.res5age} | Gender-{data.res5gender}</p>
                 </div>
                                        
                 
             </h2>
             <hr />
            
        </div>
    )
}