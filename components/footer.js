// ES5 class declaring custom footer component, with the constructor method and special super keyword.
class footer extends HTMLElement {
  constructor() {
    super();
  }

  // connectedCallback is used to add a footer to the page.
  // It runs each time your custom element is inserted into the DOM.
  connectedCallback() {
    this.innerHTML =
    `
    <footer>
      <div class="footer-section">
        <h2 class="footer-section-title">fyndro</h2>

        <ul class="links">
          <li>
            <a href="https://github.com/CMihai99/fyndro/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBug%5D"
            target="_blank">Report a Bug</a>
          </li>
          <li>
            <a href="https://github.com/CMihai99/fyndro/issues/new?assignees=&labels=feature&template=feature_request.md&title=%5BFeature%5D"
            target="_blank">Request a Feature</a>
          </li>
          <li>
            <a href="https://cmihai99.github.io/fyndro/services">Our Services</a>
          </li>
        </ul>
      </div>

      <div class="footer-section">
        <h2 class="footer-section-title">company</h2>

        <ul class="links">
          <li>
            <a href="mailto:androteamfaq@gmail.com?subject=Sent%20from%20your%20website&body=Hey%20Fyndro%2C%20I%20am%20contacting%20you%20in%20regard%20with%20REASON.%0D%0A%0D%0ABest%20wishes%2C%0D%0AYOUR%20NAME"
            target="_blank">Contact Us</a>
          </li>
          <li>
            <a href="https://cmihai99.github.io/fyndro/legal">Legal</a>
          </li>
        </ul>
      </div>

      <div class="footer-section">
        <h2 class="footer-section-title">connect</h2>

        <ul class="links">
          <li>
            <a href="https://twitter.com/androteamfaq" target="_blank">Follow on Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com/androteamfaq" target="_blank">Follow on Instagram</a>
          </li>
          <li>
            <a href="https://discord.gg/ruTBDN5rf7" target="_blank">Chat on Discord</a>
          </li>
        </ul>
      </div>

      <div class="footer-section">
        <h2 class="footer-section-title">support</h2>

        <ul class="links">
          <li>
            <a href="https://github.com/CMihai99/fyndro" target="_blank">Star on GitHub</a>
          </li>
          <li>
            <a href="https://www.paypal.com/paypalme/Impulse884?locale.x=en_US"
            target="_blank">Contribute via PayPal</a>
          </li>
        </ul>
      </div>

      <div class="footer-section">
        <ul class="links">
          <li id="trademark">© 2021 Fyndro</li>
        </ul>
      </div>
    </footer>
    `;
  }
}

// Register it with the customElements.define() method
customElements.define('footer-component', footer);