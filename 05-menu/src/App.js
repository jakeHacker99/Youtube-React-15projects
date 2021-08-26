import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

console.log(allCategories);
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }

    const newItem = items.filter((item) => item.category === category);
    setMenuItems(newItem);
  };

  return (
    <main>
      <section className="menu section">
        <div className="tilte">
          <h2>our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories  categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
