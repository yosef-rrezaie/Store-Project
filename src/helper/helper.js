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

export { shortenText, searchProducts , filterProducts };
