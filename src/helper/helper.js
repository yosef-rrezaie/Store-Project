function shortenText(text) {
  return text.split(" ").slice(0, 3).join(" ");
}

const searchProducts = (products, search) => {
  if (!search) return products;
  const searchProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search)
  );
  return searchProducts;
};

const filterProducts = (products, category) => {
  if (!category) return products;
  const filterProducts = products.filter((p) => p.category === category);
  return filterProducts;
};

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rst } = currentQuery;
    return rst;
  }
  if (newQuery.search === "") {
    const { search, ...rst } = currentQuery;
    return rst;
  }

  return {
    ...currentQuery,
    ...newQuery,
  };
};

const sumProducts = (products) => {
  const itemsCounter = products.reduce((acc, cur) => acc + cur.quantity, 0);
  const total = products
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);

  return { itemsCounter, total };
};

export {
  shortenText,
  searchProducts,
  filterProducts,
  createQueryObject,
  sumProducts,
};
