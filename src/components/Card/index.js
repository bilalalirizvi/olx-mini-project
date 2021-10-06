import "./index.css";
import { useHistory } from "react-router-dom";

const Card = ({ item }) => {
  const { state, price, description, images, id } = item;
  const history = useHistory();
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <>
      <div
        id="card-container"
        onClick={() => {
          history.push(`/detailpage/${id}`);
        }}
      >
        <div id="card-image-wrap">
          <div id="card-image">
            <img src={images[0]} alt="card" />
          </div>
        </div>
        <div id="card-content">
          <div id="price-and-description">
            <h2>Rs {numberWithCommas(price)}</h2>
            <p>{`${description.slice(0, 32)}...`}</p>
          </div>
          <div id="location-and-time-ago">
            <p>{state}</p>
            <p>"1 Hour Ago"</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
