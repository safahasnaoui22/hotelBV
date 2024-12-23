import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import'./roomlist.css'
function Roomms() {
    console.log('Roomms component rendered');
    const [rooms, setRooms] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/api/rooms')
            .then(result => {
                setRooms(result.data);  
                setError(null); // Reset error state on successful fetch
            })
            .catch(err => {
                console.error('Error fetching rooms:', err);
                setError('Error fetching rooms. Please try again later.');
            });
    }, []); 

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/api/rooms/${id}`)
          .then(res => {
            console.log(res);
            alert('Room deleted successfully');
            window.location.reload();
          })
          .catch(err => {
            console.error(err);
            alert('Error deleting room');
          });
    }

    return (
        <div className="roomlist">
 <div className='d-flex vh-100  justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
            <h1 className=" font-primary rommlistTitle ">Room LiST</h1>
              
                {error && <p>{error}</p>} {/* Display error message if there's an error */}
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Room Number</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>maxPerson</th>
                            <th>Description</th>
                            
                            <th>Available</th>
                            
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            rooms.map((room, index) => (
                                <tr key={index}>
                                    <td>{room.roomNumber}</td>
                                    <td>{room.type}</td>
                                    <td>{room.price}</td>
                                    <td>{room.description}</td>
                                   
                                    <td>{room.isAvailable ? 'Yes' : 'No'}</td>
                                    <td>{room.maxPerson}</td>
                                    <td className="tdlist">
                                    <Link to='/roomMan' className='btn confirm btn-success' > Add </Link>
                                        <button className='btn btn-success Edit' >           <Link to={`/update/${room._id}`} >Update</Link></button>
                              
                                        <button className='btn  delete btn-danger' 
                                        onClick={(e) => handleDelete(room._id)} >Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        </div>
        </div>
       
    );
}

export default Roomms;
