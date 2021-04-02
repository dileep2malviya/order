import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata } from "../store/actions/index";
import Table from "./table"


const Order = () => {
    const MYJSONDATA = useSelector((state) => state.document);
    console.log(MYJSONDATA);
    const dispatch = useDispatch();
        
    const fetchedData = () => dispatch(fetchdata());

    useEffect(() => {
        (async () => {
            fetchedData();
        })();
    }, []);

    return (
        <>
            <div className="order p-2 m-2 border_black">
                <p>Add new user</p>
                <form action="">
                    <div>
                        <label htmlFor="">User</label>
                        <select className="p-2 form-select form-select-lg mb-3" >
                            <option >Open </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Product</label>
                        <select className="p-2 form-select form-select-lg mb-3" >
                            <option value="Fanta">Fanta</option>
                            <option value="Drink">Drink</option>
                            <option value="7up">7up</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Quantity</label>
                        <input type="number" className="p-2" />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">add</button>
                </form>
            </div>
            <div className="p-2 m-2 border_black">
                <p>Search</p>
                <div className="d-flex justify-content-between">
                    <div className="search_box">
                        <select  className="form-select p-2 form-select-lg mb-3">
                            <option value="fanta">fanta</option>
                            <option value="mirinda">mirinda</option>
                            <option value="7up">7up</option>
                        </select>
                    </div>
                    <div className="search_box">
                        <input type="text" className="p-2" placeholder="enter search item.." />
                    </div>
                    <div className="search_box d-flex justify-content-center">
                        <button className="btn btn-primary">Search</button>
                    </div>
                </div>
            </div>
            <Table />
        </>
    )
}
export default Order;