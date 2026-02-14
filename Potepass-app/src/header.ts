// header.ts
// Made by Ole Lasse, to use same header and navigation on all pages
import "./style.css";
import potepassLogo from "/logo_potepass.png";

const elementId: string = "main-header";
replaceHeader(elementId);

export function replaceHeader(elementId: string): void {
  const headerHtml = `
    <a href="index.html">
        <img src="${potepassLogo}" class="logo" alt="Potepass logo. Potepass i store blå bokstaver over en lysebrun pote, med en litt mindre pote til høyre for teksten." />
    </a>
      <nav>
        <a href="om.html">Om potepass</a>
        <a href="komigang.html">Kom i gang</a>
        eller
        <a href="logginn.html">Logg inn</a>
    `;
  const headerElement = document.getElementById(elementId);
  if (headerElement) {
    headerElement.innerHTML = headerHtml;
  }
}
