import React from 'react'
import { useSelector } from 'react-redux';

const Table = () => {
    const MYJSONDATA = useSelector((state) => state.document);
    console.log(MYJSONDATA);

    return (
        <>

            <div className="table-responsive">
                <table className="table m-2">
                    <thead>
                        <tr>
                            <th scope="col">User</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                            <th scope="col">Date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        MYJSONDATA.documentdata.map((data, i) => <tr>
                        <th>{data.user}</th>
                        <td>{data.product}</td>
                        <td>{data.price}</td>
                        <td>{data.quantity}</td>
                        <td>{data.price * data.quantity}</td>
                        <td>{data.date}</td>
                        <td>
                            <button className="mr-2 btn btn-info">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>)
                    }
                    </tbody>
                </table>
            </div>

        </>

    )
}
export default Table;