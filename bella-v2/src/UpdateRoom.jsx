import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsCheckCircle, BsFillGearFill, BsHouseDoor, BsImage, BsInfoCircle, BsPerson, BsWallet } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UpdateRoom() {
    const { id } = useParams();
    const [roomNumber, setRoomNumber] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [isAvailable, setIsAvailable] = useState(false);
    const [maxPerson, setMaxPerson] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/api/rooms/${id}`)
            .then(result => {
                console.log(result);
                setRoomNumber(result.data.roomNumber);
                setType(result.data.type);
                setPrice(result.data.price);
                setDescription(result.data.setDescription);
                setIsAvailable(result.data.isAvailable);
                setMaxPerson(result.data.maxPerson);
            })
            .catch(err => console.log(err));
    }, []);

    const Update = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/api/rooms/${id}`, { roomNumber, type, price, isAvailable  , maxPerson , description })
            .then(result => {
                console.log(result);
                navigate('/roomsdetails');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="rooMangment">
  <div className='d-flex vh-100 justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form  className="addform" onSubmit={Update}>
                <h1 className=" font-primary rommlistTitle ">Room LiST</h1>
                    <div className='mb-2'>
                    <label className="addname" htmlFor="">
        <BsHouseDoor className="iconromm" /> <h2 className="title font-primary" > Room Number</h2>
      </label>
                        <input
                            type='text'
                            placeholder='Enter Room Number'
                            className='form-control'
                            value={roomNumber}
                            onChange={(e) => setRoomNumber(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                    <label className="addname"  htmlFor="">
      <BsFillGearFill  className="iconromm"/> <h2 className="title font-primary" > Type </h2> 
    </label>
                        <input
                            type='text'
                            placeholder='Enter Type'
                            className='form-control'
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                    <label  className="addname"  htmlFor="">
     <BsWallet className="iconromm" /> <h2 className="title font-primary" > Price </h2> 
    </label>
                        <input
                            type='number'
                            placeholder='Enter Price'
                            className='form-control'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
    <label  className="addname"  htmlFor="">
      <BsPerson className="iconromm" />  <h2 className="title font-primary" > Max person </h2> 
    </label>
    <input
      type="number"
      placeholder="Enter price"
      className="form-control"
      value={maxPerson}
      onChange={(e) => setMaxPerson(e.target.value)}
    />
  </div>
                    <div className='mb-2'>
                    <label className="addname"   htmlFor="">
      <BsInfoCircle  className="iconromm"/> <h2 className="title font-primary" >Description </h2> 
    </label>
    <input
      type="text"
      placeholder="about the room"
      className="form-control"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
                    </div>


                    <div className='mb-2'>
                    <label  className="addname"  htmlFor="">
      <BsCheckCircle className="iconromm" /> <h2 className="title font-primary" >Is Available </h2> 
    </label>
    <input
      type="checkbox"
      className="form-check-input"
      checked={isAvailable}
      onChange={(e) => setIsAvailable(e.target.checked)}
    />
                    </div>



                  
                    <button className=' addbtn btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
        </div>
      
    );
}

export default UpdateRoom;
