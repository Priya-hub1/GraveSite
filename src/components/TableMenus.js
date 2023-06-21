import React from "react";
import {AiOutlineSearch} from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { FiFilter } from "react-icons/fi";
import '../css/table.css'


const TableMenus = () => {


    const filter = () => {
        console.log("in filter function");
    }

    const addPayment = () => {
        console.log("in addPayment function");
    }

    return(
        <div className="menusContainer">
         <div>
            <h2>Payments</h2>
         </div>
         <div className="navItems">

            <div className="navItem">
                <div className="searchContainer">
                    <input type="text" placeholder="Search by receipt,grave site,Payor" className="searchInput" />
                    <button type="button" className="searchIcon"><AiOutlineSearch /></button>
                </div>
            </div>
            <div className="navItem">
                <button type="button" className="filter" onClick={filter}> <span><FiFilter/> </span>Filter</button>
            </div>
            <div className="navItem">
                <button type="button" className="payment" onClick={addPayment} > <span><FiPlus/> </span> Payment</button>
            </div>

         </div>
        </div>
    )
}

export default TableMenus;