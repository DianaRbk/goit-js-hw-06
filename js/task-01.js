const categoriesList = document.querySelectorAll('ul#categories li.item');
console.log('Number of categories:', categoriesList.length);

Array.from(categoriesList).forEach((category) => {
  const categoryName = category.firstElementChild.textContent;
  const elements = category.getElementsByTagName('li').length;
  console.log(`\nCategory: ${categoryName}`);
  console.log(`Elements: ${elements}`);
});
