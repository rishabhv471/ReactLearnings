//functional component
function AirbnbListing(props) {
    return (
      <div>
        <p>Host: {props.host}</p>
        <p>Experience: {props.experience}</p>
        <p>Location: {props.location}</p>
        <p>Price: {props.price}</p>
      </div>
    );
  }
  export default AirbnbListing;