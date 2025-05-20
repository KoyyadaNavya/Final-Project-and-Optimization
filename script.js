const products = [
  {
    name: "Modern Chair",
    description: "A stylish modern chair.",
    image: "images/product1.webp"
  },
  {
    name: "Wooden Desk",
    description: "Perfect for work or study.",
    image: "images/product2.webp"
  },
  {
    name: "Comfort Sofa",
    description: "Relax in this comfy sofa.",
    image: "images/product3.webp"
  }
];

window.onload = () => {
  const container = document.getElementById('product-list');
  products.forEach(p => {
    const card = document.createElement('div');
    card.className = "product";
    card.innerHTML = `
      <img src="${p.image}" loading="lazy" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.description}</p>
    `;
    container.appendChild(card);
  });

  // Contact form validation
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert("Message sent!");
    form.reset();
  });
};
