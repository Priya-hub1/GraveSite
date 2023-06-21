import React, { useState,useEffect } from "react";
import instance from "../instance";
import '../css/table.css';
import Pagination from "./pagination";

const Table = () => {

    const [data,setData] = useState()
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState('')
    const [currentPage, setCurrentPage] = useState(1); 
    const [recordsPerPage, setRecordsPerPage] = useState(10); 
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const [noOfPages,setNoOfPages] = useState(0);
    const [pageNumbers,setPageNumbers] = useState([]);
    

    useEffect(()=>{
        console.log("print after the comp.mounts");
        instance.get('/paymentDetails')
        .then(response => {
            setLoading(false);
            setData(response.data)
            setNoOfPages( Math.ceil(data.length / recordsPerPage))
            setPageNumbers([...Array(noOfPages + 1).keys()].slice(1))
        })
        .catch(error => {
            setLoading(false);
            setError("No data found")
        })

    },[])


    useEffect(()=>{
      console.log("in useeffect");
      console.log("noOfPages",noOfPages);
      console.log("pageNumbers",pageNumbers);
    })


    const prevPage = () => {

    }

    const nextPage = () => {
        
    }

    return(
       <div className="tableContainer">
            <table>
                <tr>
                    <th> Receipt </th>
                    <th> Status </th>
                    <th> Date Paid </th>
                    <th> Grave Site </th>
                    <th> Paid By </th>
                    <th>No.of.Payment</th>
                    <th>Total</th>
                </tr>
        
              {!loading  ? data.map( row => 
               (
                <tr key={row.id}>
                    <td> {row.receipt} </td>
                    <td>  {row.status} </td>
                    <td>  {row.DatePaid} </td>
                    <td>  {row.GraveSite} </td>
                    <td>  {row.PaidBy} </td>
                    <td>  {row.NoofPayment} </td>
                    <td>  {row.Total} </td>
                </tr>
                )) : (
                    <tr key={1}>
                        <td> {loading} </td>
                        <td> {loading} </td>
                        <td> {loading} </td>
                        <td> {loading} </td>
                        <td> {loading} </td>
                        <td> {loading} </td>
                        <td> {loading} </td>
                    </tr>
                )}
              
            </table>
            <div>
                <nav>
                    <ul>
                        <li> <a onClick={prevPage} href='#'>Prev page </a></li>
                        {pageNumbers.map( num => <li> <a onClick={setCurrentPage(num)} href='#'> {num} </a> </li> )}
                        <li> <a onClick={nextPage} href='#'>Next page</a> </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Table;
