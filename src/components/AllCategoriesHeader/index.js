import React, { useState } from "react";
import "./index.css";

const AllCategoriesHeader = () => {
  const [rotate, setrotate] = useState(false);
  const arrowRotate = () => {
    setrotate(!rotate);
  };
  return (
    <div id="all-categories-header">
      <div id="all-categories-and-icon">
        <p>
          <b>ALL CATEGORIES</b>
        </p>
        &nbsp; &nbsp;
        <i
          style={{ cursor: "pointer", fontSize: "20px" }}
          onClick={arrowRotate}
          className={
            rotate ? "fas fa-chevron-down open" : "fas fa-chevron-down"
          }
        ></i>
        &nbsp; &nbsp;
        <div
          id="all-categories-dorp-down"
          style={{ display: rotate ? "" : "none" }}
        >
          <div className="all-categories-content">
            <h4>Mobiles</h4>
            <p>Mobile Phones</p>
            <p>Accessories</p>
            <p>Tablets</p>
            &nbsp;
            <h4>Vechile</h4>
            <p>Tractors & Trailers</p>
            <p>Boats</p>
            <p>Other Vehicles</p>
            <p>Rickshaw & Chingchi</p>
            <p>Buses, Vans & Trucks</p>
            <p>Spare Parts</p>
            <p>Cars Accessories</p>
            <p>Cars on Installments</p>
            <p>Cars</p>
            &nbsp;
            <h4>Property for Sale</h4>
            <p>Portions & Floors</p>
            <p>Shops - Offices - Commercial Space</p>
            <p>Apartments & Flats</p>
            <p>Houses</p>
            <p>Land & Plots</p>
            &nbsp;
            <h4>Property for Rent</h4>
            <p>Land & Plots</p>
            <p>Vacation Rentals - Guest Houses</p>
            <p>Roommates & Paying Guests</p>
            <p>Rooms</p>
            <p>Shops - Offices - Commercial Space</p>
            <p>Portions & Floors</p>
            <p>Apartments & Flats</p>
            <p>Houses</p>
          </div>
          <div className="all-categories-content">
            <h4>Electronics & Home Appliances</h4>
            <p>Washing Machines & Dryers</p>
            <p>Fridges & Freezers</p>
            <p>AC & Coolers</p>
            <p>Kitchen Appliances</p>
            <p>Generators, UPS & Power Solutions</p>
            <p>Other Home Appliances</p>
            <p>Games & Entertainment</p>
            <p>Cameras & Accessories</p>
            <p>TV - Video - Audio</p>
            <p>Computers & Accessories</p>
            &nbsp;
            <h4>Bikes</h4>
            <p>Motorcycles</p>
            <p>Spare Parts</p>
            <p>Bicycles</p>
            <p>ATV & Quads</p>
            <p>Scooters</p>
            <p>Business, Industrial & Agriculture</p>
            &nbsp;
            <h4>Business for Sale</h4>
            <p>Food & Restaurants</p>
            <p>Trade & Industrial</p>
            <p>Construction & Heavy Machinery</p>
            <p>Agriculture</p>
            <p>Other Business & Industry</p>
            <p>Medical & Pharma</p>
            &nbsp;
            <h4>Services</h4>
            <p>Education & Classes</p>
            <p>Travel & Visa</p>
            <p>Car Rental</p>
            <p>Drivers & Taxi</p>
            <p>Web Development</p>
            <p>Other Services</p>
            <p>Electronics & Computer Repair</p>
            <p>Event Services</p>
            <p>Health & Beauty</p>
            <p>Maids & Domestic Help</p>
            <p>Movers & Packers</p>
            <p>Home & Office Repair</p>
            <p>Catering & Restaurant</p>
            <p>Farm & Fresh Food</p>
          </div>
          <div className="all-categories-content">
            <h4>Jobs</h4>
            <p>Online</p>
            <p>Marketing</p>
            <p>Advertising & PR</p>
            <p>Education</p>
            <p>Customer Service</p>
            <p>Sales</p>
            <p>IT & Networking</p>
            <p>Hotels & Tourism</p>
            <p>Clerical & Administration</p>
            <p>Human Resources</p>
            <p>Accounting & Finance</p>
            <p>Manufacturing</p>
            <p>Medical</p>
            <p>Domestic Staff</p>
            <p>Part - Time</p>
            <p>Other Jobs</p>
            &nbsp;
            <h4>Animals</h4>
            <p>Fish & Aquariums</p>
            <p>Birds</p>
            <p>Hens & Aseel</p>
            <p>Cats</p>
            <p>Dogs</p>
            <p>Livestock</p>
            <p>Horses</p>
            <p>Pet Food & Accessories</p>
            <p>Other Animals</p>
            &nbsp;
            <h4>Furniture & Home Decor</h4>
            <p>Sofa & Chairs</p>
            <p>Beds & Wardrobes</p>
            <p>Home Decoration</p>
            <p>Tables & Dining</p>
            <p>Garden & Outdoor</p>
            <p>Painting & Mirrors</p>
            <p>Rugs & Carpets</p>
            <p>Curtains & Blinds</p>
            <p>Office Furniture</p>
            <p>Other Household Items</p>
          </div>
          <div className="all-categories-content">
            <h4>Fashion & Beauty</h4>
            <p>Accessories</p>
            <p>Clothes</p>
            <p>Footwear</p>
            <p>Jewellery</p>
            <p>Make Up</p>
            <p>Skin & Hair</p>
            <p>Watches</p>
            <p>Wedding</p>
            <p>Lawn & Pret</p>
            <p>Couture</p>
            <p>Other Fashion</p>
            &nbsp;
            <h4>Books, Sports & Hobbies</h4>
            <p>Books & Magazines</p>
            <p>Musical Instruments</p>
            <p>Sports Equipment</p>
            <p>Gym & Fitness</p>
            <p>Other Hobbies</p>
            &nbsp;
            <h4>Kids</h4>
            <p>Kids Furniture</p>
            <p>Toys</p>
            <p>Prams & Walkers</p>
            <p>Swings & Slides</p>
            <p>Kids Bikes</p>
            <p>Kids Accessories</p>
          </div>
        </div>
      </div>
      <p>Mobile Phones</p>
      <p>Cars</p>
      <p>Motorcycles</p>
      <p>Houses</p>
      <p>TV - Video - Audio</p>
      <p>Tablets</p>
      <p>Land & Plots</p>
    </div>
  );
};

export default AllCategoriesHeader;
