// ===-----------------------------------------------------------------------------------===
// Copyright (c) 2021 Fyndro
//
// For copying notice, see https://github.com/CMihai99/fyndro/blob/main/COPYING.
// For licenses we use, see https://github.com/CMihai99/fyndro/tree/main/LICENSES.
// ===-----------------------------------------------------------------------------------===

class navbar extends HTMLElement {
  // connectedCallback is used to add a navigation-bar to the page.
  // It runs each time your custom element is inserted into the DOM.
  connectedCallback() {
    this.innerHTML =
    `
    <nav class="navbar">
      <div class="navbar-header">
        <a href="https://cmihai99.github.io/fyndro">
          <img src="resources/icon.svg" class="nav-icon">
        </a>

        <div class="search-toggle-bar" data-toggle="dropdown">
          <input class="form-control" type="text" placeholder="Search...">
        </div>

        <ul class="dropdown-menu" id="search-menu">
          <li>
            <a class="search-menu-last-text" href="https://cmihai99.github.io/fyndro">Home</a>
          </li>
        </ul>
      </div>

      <div class="nav navbar-nav navbar-right">
        <li>
          <div class="options-toggle-icons" data-toggle="dropdown">
            <img src="resources/dropdown-icon.svg">
            <span class="caret"></span>
          </div>

          <ul class="dropdown-menu" id="options-menu">
            <li>
              <a href="https://cmihai99.github.io/fyndro">Home</a>
            <li>

            <li class="divider"></li>

            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>

            <li class="divider"></li>

            <li>
              <a href="mailto:androteamfaq@gmail.com?subject=Sent%20from%20your%20website&body=Hey%20Fyndro%2C%20I%20am%20contacting%20you%20in%20regard%20with%20REASON.%0D%0A%0D%0ABest%20wishes%2C%0D%0AYOUR%20NAME"
              target="_blank">Contact Us</a>
            </li>
            <li>
              <a href="https://github.com/CMihai99/fyndro/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBug%5D"
              target="_blank">Report a Bug</a>
            </li>
            <li>
              <a href="https://github.com/CMihai99/fyndro/issues/new?assignees=&labels=feature&template=feature_request.md&title=%5BFeature%5D"
              target="_blank">Request a Feature</a>
            </li>
          </ul>
        </li>
      </div>
    </nav>
    `;
  }
}

// Register component
customElements.define("navbar-component", navbar);