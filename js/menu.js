const list = document.getElementById("menu-list");
const chips = document.querySelectorAll(".chip");

function render(items) {
  if (items.length === 0) {
    list.innerHTML = '<p class="empty">No items found.</p>';
    return;
  }
  list.innerHTML = items
    .map(
      (item) => `
    <article class="item">
      <div class="icon" aria-hidden="true">${item.icon}</div>
      <h3>${item.name}</h3>
      <p class="desc">${item.description}</p>
      <span class="price">RM ${item.price.toFixed(2)}</span>
    </article>
  `,
    )
    .join("");
}

function filterBy(category) {
  //added two lines below to debug
  console.log("category", category);
  console.log(category.length);

  const wanted = category.toLowerCase();
  if (wanted === "all") {
    render(MENU_ITEMS);
    return;
  }
  const filtered = MENU_ITEMS.filter((item) => item.category === wanted);
  render(filtered);
}

chips.forEach((chip) => {
  //added .trim to line below
  chip.addEventListener("click", () => filterBy(chip.textContent.trim()));
});

render(MENU_ITEMS);
