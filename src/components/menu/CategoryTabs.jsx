function CategoryTabs({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="category-tabs">

      {categories.map((category) => (

        <button
          key={category}
          className={
            selectedCategory === category
              ? "active-category"
              : ""
          }
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>

      ))}

    </div>
  );
}

export default CategoryTabs;