import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ getBookmarks, myTime }) => {
  return (
    <div className="w-1/3">
      <div>
        <p className="py-[14px] text-center bg-[#3C2FEC19] rounded-md mb-4 text-blue-700 font-semibold text-2xl border-[1px] border-[#6047EC]">
          Spent time on read: {myTime}
        </p>
      </div>
      <h2 className="text-2xl font-semibold bg-gray-300 py-3 pl-5">
        Bookmarks Blog: {getBookmarks.length}
      </h2>
      {getBookmarks.map((book, idx) => (
        <Bookmark key={idx} getBookmark={book}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  getBookmarks: PropTypes.array,
  myTime: PropTypes.number,
};

export default Bookmarks;
