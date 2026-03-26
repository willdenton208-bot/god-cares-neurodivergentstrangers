const input = document.getElementById("searchInput");
const contentDiv = document.getElementById("content");

function renderMessages(list) {
  contentDiv.innerHTML = "";

  if (list.length === 0) {
    contentDiv.innerHTML = `
      <div class="card">
        <h2>I hear you</h2>
        <p>Your feelings matter, even if I don’t have a perfect response yet.</p>
      </div>
    `;
    return;
  }

  list.forEach(msg => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h2>${msg.title}</h2>
      <p>${msg.text}</p>
      <p class="verse">${msg.verse}</p>
    `;
    contentDiv.appendChild(card);
  });
}

function searchMessages(query) {
  const q = query.toLowerCase();

  const results = messages.filter(msg =>
    msg.title.toLowerCase().includes(q) ||
    msg.text.toLowerCase().includes(q) ||
    msg.keywords.some(k => k.toLowerCase().includes(q))
  );

  renderMessages(results);
}

// When the user types their answer to the question
input.addEventListener("input", () => {
  searchMessages(input.value);
});

// Optional: show nothing until they type
contentDiv.innerHTML = "";
