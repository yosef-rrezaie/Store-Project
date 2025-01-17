import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";

function SideBar({ setQuery }) {
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    if (tagName !== "LI") return;
    const category = e.target.innerText.toLowerCase();
    setQuery((query) => createQueryObject(query, { category: category }));
  };

  return (
    <div>
      <div>
        <FaListUl />
        <p>Catogories</p>
      </div>
      <ul onClick={categoryHandler}>
        <li>All</li>
        <li>Electronics</li>
        <li>Jewelery</li>
        <li>Men's Clothing</li>
        <li>Women's Clothing</li>
      </ul>
    </div>
  );
}

export default SideBar;
