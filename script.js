const posts = [
  {
    title: "How I Plan My Week in 30 Minutes",
    category: "Productivity",
    date: "2026-01-15",
    excerpt: "A lightweight weekly planning system that actually sticks.",
  },
  {
    title: "JavaScript Patterns I Reuse in Side Projects",
    category: "Tech",
    date: "2026-01-09",
    excerpt: "Small, practical patterns that keep my code easier to maintain.",
  },
  {
    title: "Writing Better Drafts Without Overthinking",
    category: "Writing",
    date: "2025-12-20",
    excerpt: "Simple habits that help me finish articles faster.",
  },
  {
    title: "Building a Learning Roadmap That Doesn't Burn You Out",
    category: "Productivity",
    date: "2025-12-04",
    excerpt: "How to pace your learning and still make meaningful progress.",
  },
];

const postGrid = document.getElementById("postGrid");
const filter = document.getElementById("categoryFilter");
const form = document.getElementById("subscribeForm");
const message = document.getElementById("formMessage");

document.getElementById("year").textContent = new Date().getFullYear();

function renderPosts(category = "all") {
  const visiblePosts =
    category === "all" ? posts : posts.filter((post) => post.category === category);

  postGrid.innerHTML = visiblePosts
    .map(
      (post) => `
      <article class="post-card">
        <h4>${post.title}</h4>
        <p class="meta">${post.category} · ${new Date(post.date).toLocaleDateString()}</p>
        <p>${post.excerpt}</p>
      </article>
    `
    )
    .join("");
}

filter.addEventListener("change", (event) => {
  renderPosts(event.target.value);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = new FormData(form).get("email");
  if (!email || !String(email).includes("@")) {
    message.textContent = "Please enter a valid email address.";
    message.style.color = "#b42318";
    return;
  }

  message.textContent = `Thanks for subscribing, ${email}!`;
  message.style.color = "#067647";
  form.reset();
});

renderPosts();
