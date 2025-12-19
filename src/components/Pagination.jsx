import { useContext, useEffect, useState } from "react"
import GlobalContext from "../context/GlobalContext";

const Pagination = ({ totalPages }) => {
    const { currentPage, setCurrentPage } = useContext(GlobalContext);

    const handlePrevious = () => {
        if (currentPage > 1) {
            const newPage = currentPage - 1;
            setCurrentPage(newPage);
            localStorage.setItem("page", newPage);
        }
    }

    const handleNext = () => {
        if (currentPage < totalPages) {
            const newPage = currentPage + 1;
            setCurrentPage(newPage);
            localStorage.setItem("page", newPage);
        }
    }

    return (
        <div className="w-[300px] mx-auto bg-amber-50 m-4 p-4 rounded-xl shadow-md flex justify-center items-center gap-4">
            <button
                className={`bg-blue-600 text-white px-5 py-2 rounded-lg font-bold transition-opacity ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                onClick={handlePrevious}
                disabled={currentPage === 1}
            >
                {"<"}
            </button>
            <div className="text-xl font-bold bg-yellow-300 text-gray-800 rounded-lg px-5 py-2 shadow-inner">
                {currentPage}
            </div>
            <button
                className={`bg-blue-600 text-white px-5 py-2 rounded-lg font-bold transition-opacity ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                onClick={handleNext}
                disabled={currentPage === totalPages}
            >
                {">"}
            </button>
        </div>
    )
}

export default Pagination;
