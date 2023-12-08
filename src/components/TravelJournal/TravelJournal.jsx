export function TravelJournal(PropTypes) {
  const { img, destination, date, description } = PropTypes;
  return (
    <>
      <div className="container">
        <img className="image" src={img} />
        <div className="travel-details">
          <p>{destination}</p>
          <p>{date}</p>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
