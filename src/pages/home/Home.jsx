import { toursList } from '../../data';
import { useState } from 'react';
import { paginate } from '../../utils/pagination';
import Banner from '../../components/banner/Banner';
import NewsLetter from '../../components/news-letter/NewsLetter';
import Hero from '../../components/hero/Hero';
import Pagination from '../../components/pagination/Pagination';
import Services from '../../components/services/Services';
import SortInput from '../../components/sort-input/SortInput';
import Tours from '../../components/tours/Tours';
export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortItem, setSortItem] = useState('recomended');
  // sort Tour
  const sortedToursList =
    sortItem === 'low'
      ? toursList.sort((a, b) => a.priceFrom - b.priceFrom)
      : sortItem === 'high'
        ? toursList.sort((a, b) => b.priceFrom - a.priceFrom)
        : toursList.sort((a, b) => b.rating - a.rating);
  const { pages, orderedTourList } = paginate(
    toursList.length,
    sortedToursList,
    currentPage
  );
  return (
    <div>
      <Hero />
      <Services />

      <SortInput
        toursLength={toursList.length}
        sortItem={sortItem}
        setSortItem={setSortItem}
      />

      <Tours toursList={orderedTourList} />

      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Banner />
      <NewsLetter />
    </div>
  );
}
