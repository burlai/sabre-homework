/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ activePage, pages, maxButtons, onPageSelected, prevClass, nextClass }) => {

  const prev = <span className={prevClass ? prevClass : 'pagination-prev'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                    </svg>
              </span>;
  const next = (<span className={nextClass ? nextClass : 'pagination-next'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </span>);
  const allPages = [];

  const generatePage = (page) => {
    return (
      <span className={`${(page === activePage) ? 'active' : ''} pagination-item`} active={page === activePage} key={page} onClick={(e) => {
          activePage;
          e.preventDefault();
          onPageSelected(page);
        }}>
          {page}
      </span>
    );
  };

  if (pages <= maxButtons) {
    for (let page = 1; page <= maxButtons && page <= pages; page++) {
      allPages.push(generatePage(page));
    }
  } else {
    let leftRange = maxButtons / 2;
    let rightRange = maxButtons - leftRange;
    if (activePage > pages - maxButtons / 2) {
      rightRange = pages - activePage;
      leftRange = maxButtons - rightRange;
    } else if (activePage < maxButtons / 2) {
      leftRange = activePage;
      rightRange = maxButtons - leftRange;
    }
    let page;
    let ellipsis;
    let ellipsisKey = 'firstEllipsis';
    for (let i = 0; i <= pages - 1; i++) {
      page = i + 1;
      if (page <= 1) {
        allPages.push(generatePage(page));
        continue;
      }
      if (page === pages) {
        allPages.push(generatePage(page));
        continue;
      }
      if (i >= activePage - leftRange && i <= activePage + rightRange) {
        allPages.push(generatePage(page));
        continue;
      }
      if (allPages[allPages.length - 1] !== ellipsis) {
        ellipsis = (
          <span disabled={true} key={ellipsisKey}>
            <span>
              ...
            </span>
          </span>
        );
        allPages.push(ellipsis);
        ellipsisKey = 'secondEllipsis';
      }
    }
  }

  return (
    <section className="pagination">

      <span className={`${activePage <= 1 ? 'disabled': ''}`}>
        <span
          onClick={(e) => {
            activePage - 1;
            e.preventDefault();
            onPageSelected(activePage - 1);
          }}>
          {prev}
        </span>
      </span>
      {allPages}
      <span className={`${activePage >= pages ? 'disabled': ''}`} disabled={activePage >= pages}>
        <span
          onClick={(e) => {
            activePage + 1;
            e.preventDefault();
            onPageSelected(activePage + 1);
          }}>
          {next}
        </span>
      </span>
    </section>
  );
};
Pagination.propTypes = {
  activePage: PropTypes.number,
  maxButtons: PropTypes.number.isRequired,
  nextClass: PropTypes.string,
  onPageSelected: PropTypes.func.isRequired,
  pages: PropTypes.number.isRequired,
  prevClass: PropTypes.string
};

export default Pagination;