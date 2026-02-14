// footer.ts
// Made by Ole Lasse, to use same header and navigation on all pages
import "./style.css";

const elementId: string = "main-footer";
replaceFooter(elementId);

export function replaceFooter(elementId: string): void {
  const footerHtml = `
      <div class="footer-container">
        <div>
          <h3>Test mindre overskrift</h3>
          <p>
            Dette er en boks med mer tekst, for å vise riktig tekst størrelse.
          </p>
          <br />
        </div>

        <div>
          <h3>Kontakt:</h3>
          <p>
            Epost: <a href="mailto:post@kulturkaffe.no">post@kulturkaffe.no</a>
          </p>
          <p>Adresse: Kulturveien 1</p>
          <p>0000 Kulturbyen</p>
        </div>
      </div>
    `;
  const footerElement = document.getElementById(elementId);
  if (footerElement) {
    footerElement.innerHTML = footerHtml;
  }
}
