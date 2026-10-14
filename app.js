const target = document.querySelector('#cards');
function el(tag, className, value) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (value != null) node.textContent = value;
  return node;
}
for (const item of (window.TARJETAS || [])) {
  const card = el('article', 'card');
  const image = el('img', 'card__image');
  image.src = item.imagen;
  image.alt = `Ilustración de ${item.titulo}`;
  image.loading = 'lazy';
  const content = el('div', 'card__content');
  content.append(el('h2', 'card__title', item.titulo));
  const details = el('div', 'card__details');
  details.append(el('p', 'card__subtitle', item.entrevista));
  details.append(el('p', 'card__authors', item.autores));
  details.append(el('p', 'card__issue', item.edicion));
  const footer = el('div', 'card__footer');
  const button = el('a', 'card__button', 'Lee la entrevista');
  if (item.enlace && /^https?:\/\//i.test(item.enlace)) {
    button.href = item.enlace;
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
  } else {
    button.classList.add('card__button--disabled');
    button.removeAttribute('href');
    button.setAttribute('aria-disabled', 'true');
    button.title = 'Falta configurar el enlace de la entrevista';
  }
  footer.append(button);
  content.append(details,footer);
  card.append(image,content);
  target.append(card);
}
// Si Mercury permite mensajes entre dominios, se puede configurar autoaltura
// desde el padre. Por defecto basta fijar una altura de iframe adecuada.
