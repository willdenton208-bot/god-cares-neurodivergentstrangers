const container = document.getElementById("content");
const searchInput = document.getElementById("searchInput");

function render(list) {
  container.innerHTML = "";
  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h2>${item.title}</h2>
      <p>${item.text}</p>
      <p class="verse">${item.verse}</p>
    `;
    container.appendChild(card);
  });
}

function filter(query) {
  const q = query.toLowerCase();
  return messages.filter(m => {
    const text = m.title + " " + m.text + " " + m.keywords.join(" ");
    return text.toLowerCase().includes(q);
  });
}

searchInput.addEventListener("input", () => {
  render(filter(searchInput.value));
});

render(messages);
