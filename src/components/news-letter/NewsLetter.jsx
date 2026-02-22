import './news-letter.css';
import newsletterImage from '../../images/newsletterimage.jpg';
export default function NewsLetter() {
  return (
    <div className="news-letter">
      <div className="news-letter-container">
        <div className="news-letter-image-wrapper">
          <img
            src={newsletterImage}
            alt="news-letter"
            className="news-letter-image"
          />
        </div>
        <div className="news-letter-content">
          <h2 className="news-letter-content-title">
            Your Dubai itinerary is waiting{' '}
          </h2>
          <p className="news-letter-content-desc">
            Receive a curated 48-hour itinerary featuring Dubai’s most iconic
            experiences, straight to your inbox.
          </p>
          <div className="news-letter-inputs">
            <input
              type="email"
              placeholder="your Email "
              className="news-letter-input"
            />
            <button className="news-letter-btn">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
