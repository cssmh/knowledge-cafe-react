import PropTypes from "prop-types";
const Todo = ({ give }) => {
  const { id } = give;
  if (id == 4) {
    return <p className="pt-2 pr-12 text-xl font-semibold">You Beauty!</p>;
  }
  return <div></div>;
};

Todo.propTypes = {
  give: PropTypes.object.isRequired,
};

export default Todo;
