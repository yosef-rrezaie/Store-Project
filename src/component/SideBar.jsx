import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";
import styles from "./SideBar.module.css";

const categories = [
  { id: 1, type: "All" },
  { id: 2, type: "Electronics" },
  { id: 3, type: "Jewelery" },
  { id: 4, type: "Men's Clothing" },
  { id: 5, type: "Women's Clothing" },
];

function SideBar({ query, setQuery }) {
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    if (tagName !== "LI") return;
    const category = e.target.innerText.toLowerCase();
    setQuery((query) => createQueryObject(query, { category: category }));
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Catogories</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map((p) => (
          <li
            className={
              p.type.toLocaleLowerCase() === query.category ? styles.selected : null
            }
            key={p.id}
          >
            {p.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
