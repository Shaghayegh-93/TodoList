
const Navbar = ({ todoList,sortBy, sortHandler }) => {
  return (
    <div className="flex items-center justify-evenly mb-12 border-b border-solid border-text400">
      <h1 className="mb-6 text-text700 text-2xl md:text-4xl">
        My Notes({todoList.length})
      </h1>
      <select className="py-2 px-4 outline-none border border-solid border-text400 rounded-xl font-bold"  value={sortBy} onChange={sortHandler}>
        <option value="earliest">earliest</option>
        <option value="latest">latest</option>
        <option value="completed">completed</option>
      </select>
    </div>
  );
};

export default Navbar;
