export default function SelectBox({ items, label }) {
  return (
    <div className="select-box">
      <label className="select-box-label">{label}</label>
      <select className="select-box-input">
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
}
