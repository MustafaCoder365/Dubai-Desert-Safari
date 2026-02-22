import './sort-input.css';

export default function SortInput({ toursLength, sortItem, setSortItem }) {
  return (
    <div className="sort-input-container">
      <div className="available-tours">
        {toursLength} tours found <i className="bi bi-info-circle"></i>
      </div>

      <select value={sortItem} onChange={(e) => setSortItem(e.target.value)}>
        <option value="recomended">Recomended</option>
        <option value="low">Price -low to high</option>
        <option value="high">price -High to low</option>
      </select>
    </div>
  );
}
