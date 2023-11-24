function SearchBox() {
  return (
    <div className="searchBox p-4 bg-white m-2 rounded-lg md:flex md:justify-center md:items-center md:w-2/4">
      <input
        type="text"
        placeholder="Type here"
        className="input w-full bg-base-200 mb-5 font-['Plus_Jakarta_Sans'] placeholder-black focus:outline-none md:m-2 font-medium "
      />
      <select className="select w-full  bg-base-200 mb-5 font-['Plus_Jakarta_Sans'] focus:outline-none md:m-2 font-medium text-base">
        <option disabled selected>
          Pick your flat type
        </option>
        <option>Family</option>
        <option>Bachelor</option>
        <option>Sublet</option>
      </select>
      <button className="btn bg-[#6C60FE] text-white w-full md:w-auto">
        Search
      </button>
    </div>
  );
}

export default SearchBox;
