import React from 'react'

export const PaginatedList = ({children, currentPage, totalPages, refreshPage}) => {
    const handleClick = () => {
        if (currentPage >= 1 && currentPage <= totalPages) {
            refreshPage(currentPage)
        }
    }

    return (
        <div>
            {children}
            <div>
                <button disabled={currentPage <= 1} onClick={() => {
                    currentPage = 1;
                    handleClick();
                }}>First Page</button>
                <button disabled={currentPage <= 1} onClick={() => {
                    currentPage--;
                    handleClick();
                }}>Prev Page</button>
                <span>{currentPage} of {totalPages}</span>
                <button disabled={currentPage >= totalPages} onClick={() => {
                    currentPage++;
                    handleClick();
                }}>Next Page</button>
                <button disabled={currentPage >= totalPages} onClick={() => {
                    currentPage = totalPages;
                    handleClick();
                }}>Last Page</button>
            </div>
        </div>
    )
}