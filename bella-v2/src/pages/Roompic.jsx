import "./roompic.css";
import React from "react";

function RoomPic() {
    return (
        <div className="roompic">
            
            <div className="wrapper">
                <div className="roomcontainer">
                    <input  className="radioInput" type="radio" name="slide" id="c1" defaultChecked />
                    <label htmlFor="c1" className="card">
                        <div className="row">
                            <div className="icon">1</div>
                            <div className="description">
                                <h4>Room</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, aliquam?</p>
                            </div>
                        </div>
                    </label>
                    <input className="radioInput"  type="radio" name="slide" id="c2" />
                    <label htmlFor="c2" className="card">
                        <div className="row">
                            <div className="icon">2</div>
                            <div className="description">
                            <h4>Room</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, aliquam?</p>
                            </div>
                        </div>
                    </label>
                    <input className="radioInput" type="radio" name="slide" id="c3" />
                    <label htmlFor="c3" className="card">
                        <div className="row">
                            <div className="icon">3</div>
                            <div className="description">
                            <h4>Room</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, aliquam?</p>
                            </div>
                        </div>
                    </label>
                    <input className="radioInput" type="radio" name="slide" id="c4" />
                    <label htmlFor="c4" className="card">
                        <div className="row">
                            <div className="icon">4</div>
                            <div className="description">
                            <h4>Room</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, aliquam?</p>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default  RoomPic;
