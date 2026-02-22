import { Link } from 'react-router-dom';
import Rating from './Rating.jsx';

export default function ToursItem({ item }) {
  return (
    <div className="tour-item">
      <img src={item.image} alt={item.title} className="tour-item-img" />
      <span className="tour-item-label"> Adventure</span>
      <div className="tour-item-body">
        <div className="tour-item-title">{item.title}</div>
        <div className="tour-item-duration">
          <span>{item.duration}</span> <i className="bi bi-dot"></i>
          Pickup available
        </div>
        <Rating rating={item.rating} reviews={item.reviews} />
        <div className="tour-item-price">
          <strong>From ${item.priceFrom}</strong> per person
        </div>
        <Link to={`/tour/${item.id}`} className="tour-item-link">
          See More
        </Link>
      </div>
    </div>
  );
}
