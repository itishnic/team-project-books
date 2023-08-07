import axios from 'axios';

export function getCategoryList() {
  const URL = `https://books-backend.p.goit.global/books/category-list`;

  return axios.get(URL);
}
// ------ отрисовываем категории книг------//

const categoriesList = document.querySelector('.categories__list');

async function showCategories() {
  try {
    const response = await getCategoryList();
    const categories = response.data;
    const markup = categories
      .map(category => createCategoryItemMarkup(category.list_name))
      .join(' ');

    categoriesList.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
  }
}
showCategories();

function createCategoryItemMarkup(category) {
  return `
    <li class="categories__item">
      <a class="categories__link js-click-link" data-value="${category}">
        ${category}
       </a>
    </li>
  `;
}
