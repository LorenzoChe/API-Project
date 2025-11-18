const header = document.getElementById('header');
if (header) {
  ["index.html|Inicio",
   "AdivinaElPais.html|Adivina el País",
   "ComparacionDosPaises.html|Comparar Países",
   "PaisONo.html|¿País o No?",
   "PaisVsPais.html|País VS País"]
  .forEach(item => {
    const [href, texto] = item.split("|");
    const a = document.createElement('a');
    a.href = href;
    a.textContent = texto;
    a.classList.add("nav-link", "px-3", "py-2"); 
    header.appendChild(a);
  });
}
