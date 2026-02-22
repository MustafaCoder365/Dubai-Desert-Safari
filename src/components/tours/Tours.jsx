import './tours.css';
import ToursItem from './ToursItem';
export default function Tours({ toursList }) {
  return (
    <div className="tours-list">
      {toursList.map((item) => (
        <ToursItem item={item} key={item.id} />
      ))}
    </div>
  );
}
