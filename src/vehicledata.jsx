import { useEffect, useState } from "react"
import './vehicledata.css'
const VehicleData = () => {
    const [data, setData] = useState([])
    const [srch, setSrch] = useState("");
    const [type, setType] = useState({vehctype : ""})
    useEffect(() => {
            fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json`).then((resp) => {
                return resp.json()
            }).then((data) => {
                console.log(data);
                // arr.push(data.Results)
                setData(data.Results)
                console.log(data.Results);
                
            }).catch((e) => {
                console.log(e);
            })
    },[])
    // console.log(arr);
    // console.log(data.Country);
    // data.filter
    // setTimeout(()=>{
    //     data.map((x)=>{
    //         setType({...type, vehctype : x.VehicleTypes[0].Names})
    //     })
    // }, 3000)

    // console.log(type);
    // console.log(srch);
    // const updateData = ()=>{
    //     const filterData = data.filter((val, index)=>{
    //         return val.Mfr_CommonName == srch
    //     })
    //     console.log(filterData);
    //     setData(filterData)
    // }
    // useEffect(()=>{
    //     updateData()
    // },[])
    
    return (
        <div>
            <h2>VEHICLE MANUFACTURERS</h2>
            <div id="search-filter">
                <div id="search-div">
                    <label htmlFor="search">Search: </label>
                    <input type="text" id="search" onChange={(e)=>setSrch(e.target.value)}/>
                </div>
                <div id="filter-div">
                    <label htmlFor="filter">Filter by Vehicle Type: </label>
                    <select name="" id="filter" defaultValue="Name">
                        <option value="All">All</option>
                    </select>
                </div>
            </div>
            <div id="table-div">
                <table id="table">
                    <thead id="table-head">
                        <tr>
                            <th className="th">Name</th>
                            <th className="th">Country</th>
                            <th className="th">Type</th>
                        </tr>
                    </thead>
                    <tbody id="table-body">

                        {data.map((ele, index) => {
                            return (
                                ele.Mfr_CommonName ?
                                <tr key={index}>
                                    <td className="td">{ele.Mfr_CommonName}</td>
                                    <td className="td">{ele.Country}</td>
                                    <td className="td">{ele.Mfr_Name}</td>
                                </tr> : null
                            )
                        })}
                        {/* {data.map((val, index)=>{
                            return(
                                val.Mfr_CommonName ?
                                <tr key={index}>
                                    <td className="td">{val.Mfr_CommonName}</td>
                                    <td className="td">{val.Country}</td>
                                    {val.VehicleTypes.map((new_val, idx)=>{
                                        return(
                                            <td className="td">{new_val.Name}</td>
                                        )
                                    })}
                                </tr> : null
                            )
                        })} */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default VehicleData