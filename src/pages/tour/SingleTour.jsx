import { useParams } from 'react-router-dom';
import { toursList } from '../../data';
import Rating from '../../components/tours/Rating';
import BookNow from './BookNow';
import './single-tour.css';

export default function SingleTour() {
  const { id } = useParams();

  const tour = toursList.find((t) => t.id === +id);

  if (!tour) {
    return <p>Tour not found</p>;
  }

  return (
    <section className="tour">
      {/* Breadcrumb */}
      <div className="tour-step">
        United Arab Emirates <i className="bi bi-chevron-right"></i>
        things to do in Dubai <i className="bi bi-chevron-right"></i> Safari
      </div>

      {/* Category */}
      <div className="tour-category">ADVENTURE</div>

      {/* Title */}
      <h1 className="tour-title">Dubai: {tour.title}</h1>

      {/* Rating & Provider */}
      <div className="tour-info">
        <Rating rating={tour.rating} reviews={tour.reviews} />
        <div className="tour-provider">
          Activity provided : <span>Mustafa Shakir</span>
        </div>
      </div>

      {/* Image & Booking */}
      <div className="tour-img-wrapper">
        <img src={tour.image} alt={tour.title} className="tour-img" />
        <BookNow priceFrom={tour.priceFrom} />
      </div>

      {/* Description */}
      <p className="tour-description">
        Discover the desert of Dubai on a fun-filled safari across the desert.
        Enjoy sandboarding, dune bashing and a camel ride, with optional quad
        biking and a delicious BBQ dinner under the stars. Experience luxury
        adventure.
      </p>

      {/* More Information */}
      <div className="tour-more-information">
        <h2 className="tour-info-title">About this Activity</h2>

        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i style={{ color: '#27ae60' }} className="bi bi-calendar3"></i>
            Free Cancellation
          </div>
          <p className="tour-info-item-desc">
            Cancel up to 24 hours in advance to receive a full refund
          </p>
        </div>

        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i
              style={{ color: '#2980b9' }}
              className="bi bi-calendar-plus-fill"
            ></i>
            Reserve & pay later
          </div>
          <p className="tour-info-item-desc">
            Keep your travel plans flexible — book your spot and pay nothing
            today.
          </p>
        </div>

        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i style={{ color: '#c0392b' }} className="bi bi-virus"></i>
            Covid-19 precautions
          </div>
          <p className="tour-info-item-desc">
            Special health and safety measures are in place. Check your activity
            voucher once you book for full details.
          </p>
        </div>

        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i style={{ color: '#8e44ad' }} className="bi bi-clock-history"></i>
            Duration: 4 - 7 hours
          </div>
          <p className="tour-info-item-desc">
            Check availability to see starting times.
          </p>
        </div>

        <div className="tour-info-item">
          <div className="tour-info-item-title">
            <i style={{ color: '#2c3e50' }} className="bi bi-person"></i>
            Live tour guide
          </div>
          <p className="tour-info-item-desc">English</p>
        </div>
      </div>
    </section>
  );
}
