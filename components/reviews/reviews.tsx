import React, {useState} from 'react';
import Star from "@/components/star/star";
const Reviews = () => {
  // Sample data representing a list of items
  const items = Array.from({ length: 18 }, (_, index) => `Item ${index + 1}`);

  // Pagination settings
  const itemsPerPage = 5;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  // Function to handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
    // Calculate the range of page numbers to display in pagination
  const maxVisibleButtons = 4; // Set the maximum number of visible buttons
  const halfVisibleButtons = Math.floor(maxVisibleButtons / 2);
  const startPage = Math.max(currentPage - halfVisibleButtons, 1);
  const endPage = Math.min(startPage + maxVisibleButtons - 1, totalPages);

  // Calculate the range of items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

   // Function to handle going to the first page
  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  // Function to handle going to the last page
  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  return (
    <div>
      {/* Display the current page's items: change for other paginations */}
      <ul className="grid grid-cols-1 gap-3">
        {currentItems.map((item, index) => (
            index % 2 === 0 ? <li key={index}>
            <div className="bg-gray-100 py-10 flex flex-col lg:flex-row lg:relative">
              <div className="lg:w-1/4">
                <div className="flex relative gap-8 px-8">
                  <span className="aspect-square w-16 h-16 rounded-full bg-blue-500 text-black text-2xl flex items-center justify-center font-bold">P</span>
                  <div className="grid grid-cols-1 gap-1">
                    <span className="font-semibold text-xl">Paula &nbsp;&#x1F1FA;&#x1F1F8;</span>
                    <p>Feb 12, 2023</p>
                    <p>Date of visit: Jan 09, 2023</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-3/4 mt-3 lg:mt-0">
                <div className="flex flex-col gap-2.5 px-8">
                  <div className="flex">
                    <Star large={true}/>
                    <Star large={true}/>
                    <Star large={true}/>
                    <Star large={true}/>
                    <Star large={true}/>
                  </div>
                  <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making it look like
                    readable English. It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                    making it look like readable English.
                  </p>
                </div>
              </div>
            </div>
          </li>
          : <li key={index}>
          <div className="bg-gray-100 py-10 flex flex flex-col lg:flex-row lg:relative">
            <div className="lg:w-1/4">
              <div className="flex relative gap-8 px-8">
                <span className="aspect-square w-16 h-16 rounded-full bg-orange-300 text-black text-2xl flex items-center justify-center font-bold">M</span>
                <div className="grid grid-cols-1 gap-1">
                  <span className="font-semibold text-xl">Matthew &nbsp;&#x1F1FA;&#x1F1F8;</span>
                  <p>Feb 12, 2023</p>
                  <p>Date of visit: Jan 09, 2023</p>
                </div>
              </div>
            </div>
            <div className="lg:w-3/4 mt-3 lg:mt-0">
              <div className="flex flex-col gap-2.5 px-8">
                <div className="flex">
                  <Star large={true}/>
                  <Star large={true}/>
                  <Star large={true}/>
                  <Star large={true}/>
                  <Star large={true}/>
                </div>
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a page
                  when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters, as opposed to using 'Content here, content here', making it look like
                  readable English. It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                  making it look like readable English.
                </p>
              </div>
            </div>
          </div>
        </li>
        ))}
      </ul>

      {/* Limited pagination links */}
      <div className="flex mt-12 justify-center space-x-2">
        <button
          className={`px-3 py-2 rounded border border-blue-950 ${
            currentPage === 1 ? 'bg-blue-950 text-white' : 'bg-white text-blue-950'
          }`}
          onClick={handleFirstPage}
        >
          First
        </button>
        {Array.from({ length: totalPages }, (_, index) => {
          if (index + 1 >= startPage && index + 1 <= endPage) {
            return (
              <button
                key={index}
                className={`px-3 py-2 rounded border border-blue-950 ${
                  currentPage === index + 1 ? 'bg-blue-950 text-white' : 'bg-white text-blue-950'
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            );
          }
          // Show ellipsis (...) for pages not in the visible range
          if (index === startPage - 2 || index === endPage) {
            return <span key={index}>...</span>;
          }
          return null; // Hide other buttons not in the visible range
        })}
        <button
          className={`px-3 py-2 rounded border border-blue-950 ${
            currentPage === totalPages ? 'bg-blue-950 text-white' : 'bg-white text-blue-950'
          }`}
          onClick={handleLastPage}
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default Reviews;
