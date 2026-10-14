# Tarjetas Kōbai — GitHub Pages

Página estática para incrustar entrevistas en Mercury Drupal con un iframe.

## Editar tarjetas

Abre `tarjetas.js`. Cada objeto corresponde a una tarjeta. Los únicos campos son:
- `imagen`: ruta de la foto o ilustración
- `titulo`: título de la tarjeta
- `entrevista`: subtítulo de la entrevista
- `autores`: texto de autores
- `edicion`: revista, número y año
- `enlace`: URL completa (https://...) del botón "Lee la entrevista"

Los botones quedan desactivados mientras `enlace` esté vacío. Para añadir otra tarjeta, copia uno de los bloques del arreglo y pon una coma entre objetos. Guarda sus imágenes dentro de `assets/` y usa la ruta correspondiente.

**Nota:** Las imágenes de muestra se recortaron de la captura proporcionada y no son originales en alta resolución. Reemplázalas por las imágenes oficiales para la versión final.

## Publicar en GitHub Pages

1. Crea un repositorio público en GitHub, por ejemplo `tarjetas-kobai`.
2. Sube al nivel raíz los archivos `index.html`, `styles.css`, `app.js`, `tarjetas.js` y la carpeta `assets`.
3. En el repositorio entra a **Settings > Pages**.
4. En **Build and deployment**, escoge **Deploy from a branch**, rama **main**, carpeta **/(root)** y pulsa **Save**.
5. Cuando el sitio esté publicado, abre `https://TU-USUARIO.github.io/tarjetas-kobai/`.

En un repositorio público, el HTML y el contenido son públicos. GitHub Pages para este uso está disponible gratuitamente, sujeto a las condiciones del servicio.

## Integrar en Mercury Drupal

En un bloque HTML que permita iframes:

```html
<iframe src="https://TU-USUARIO.github.io/tarjetas-kobai/" title="Entrevistas Kōbai" width="100%" height="720" style="border:0;" loading="lazy"></iframe>
```

Si aparecen 3 tarjetas en una fila, la altura puede ser inferior; en pantallas estrechas se apilan y requerirán más alto o scroll. La altura fija depende del ancho real del iframe. Comprueba que el filtro HTML de Mercury permita `<iframe>` y que la política CSP del sitio no bloquee `github.io`.
