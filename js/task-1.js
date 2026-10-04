const allElements = document.querySelector('#categories');
console.log(`Number of categories:`, allElements.children.length);

[...allElements.children].forEach(item => {
  console.log(`Category:`, item.firstElementChild.textContent);
  console.log(`Elements:`, item.lastElementChild.children.length);
});
