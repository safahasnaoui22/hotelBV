import "./roomlist.scss";
import Carousel from "../Carousel/Carousel";
import { Link } from "react-router-dom";

const RoomList = ({ data }) => {
  return (
    <div id="room-list">
      {data.map((item, index) => {
        return (
          <Link
            to={`/rooms/all/${item._id}`}
            key={item._id}
            className="room-unit"
          >
            <div className="img-wrapper">
              {/* <img src={item.img[0]} alt="" /> */}
              <Carousel data={item.img} />
            </div>
            <p className="name"> {item.name} </p>
          </Link>
        );
      })}
    </div>
  );
};

export default RoomList;
