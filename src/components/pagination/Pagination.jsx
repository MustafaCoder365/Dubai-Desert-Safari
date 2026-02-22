import './pagination.css';

export default function Pagination({ pages, currentPage, setCurrentPage }) {
  const generatePage = [];
  for (let i = 1; i <= pages; i++) generatePage.push(i);

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        className="page previous"
      >
        Previous
      </button>

      {generatePage.map((page) => (
        <button
          type="button"
          onClick={() => setCurrentPage(page)}
          key={page}
          className={`page ${page === currentPage ? 'active' : ''}`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === pages}
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pages))}
        className="page next"
      >
        Next
      </button>
    </div>
  );
}
