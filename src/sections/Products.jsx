import { useEffect, useRef, useState } from 'react'
import { productTabs, products } from '../constants/data';
import { ProductCard } from '../components';
import ReactPaginate from 'react-paginate';
import { useAppContext } from '../context/AppContext';

const ArrowLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Products = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { products : data } = useAppContext();
  const [filteredProduct, setFilteredProduct] = useState([]);
  const cardRefs = useRef([]);
  const itemsPerPage = 8;

  useEffect(() => {
    if (data?.items) {
      setFilteredProduct(data.items);
    }
  }, [data]);

  useEffect(() => {
    if (cardRefs.current.length > 0) {
      const heights = cardRefs.current.map(card => card?.offsetHeight || 0);
      const maxHeight = Math.max(...heights);
      cardRefs.current.forEach(card => {
        if (card) {
          card.style.height = `${maxHeight}px`;
        }
      });
    }
  }, [filteredProduct, currentPage]);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const setCurrentTab = (index) => {
    setCurrentIndex(index);
    const currentTabCat = productTabs[index].category;

    if (currentTabCat === 'all') {
      setFilteredProduct(data?.items || []);
    } else {
      const filteredProd = (data?.items || []).filter(p => p?.categories[0]?.name === currentTabCat);
      setFilteredProduct(filteredProd);
    }
    setCurrentPage(0); // Reset to the first page
  };

  // Get current items for the page
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProduct.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section className="mt-10">
      <div className="xl:max-w-[1080px] 2xl:max-w-[1240px] mx-auto">
        <h3 className="uppercase font-normal text-[30px] leading-[34px] text-[#4E4E4F] pl-[105px]">
          Our Products
        </h3>
        <div className="flex items-center border border-[#4E4E4F] mt-4 h-[72px] justify-between">
          {productTabs.map((data, index) => (
            <div
              onClick={() => setCurrentTab(index)}
              key={data.id}
              className={`${
                index == currentIndex ? 'product-tabs active' : ''
              } cursor-pointer transition-all duration-500 hover:bg-[#052E70] hover:text-white w-[248px] flex items-center justify-center gap-[28px] border-r border-[#4E4E4F] last:border-r-0 h-full group`}
            >
              {data.icon}
              <p className="uppercase">{data.title}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-x-5 gap-y-8 mt-[38px]">
          {currentItems?.map((data) => (
            <ProductCard data={data} key={data.id} />
          ))}
        </div>
        <ReactPaginate
          previousLabel={<ArrowLeftIcon />}
          nextLabel={<ArrowRightIcon />}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={Math.ceil(filteredProduct.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
          previousClassName={'pagination-arrow'}
          nextClassName={'pagination-arrow'}
          pageClassName={'pagination-number'}
          pageLinkClassName={'pagination-number-link'}
          activeLinkClassName={'pagination-active-link'}
          disabledClassName={'pagination-disabled'}
        />
      </div>
    </section>
  );
}

export default Products;