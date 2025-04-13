/**
 * Copyright 2025 Alexander Manbeck
 * @license Apache-2.0, see LICENSE for full text.
 */
import { html, css } from "lit";
import { DDD, DDDPulseEffectSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-card-list`
 *
 * @demo index.html
 * @element ddd-card-list
 */
export class DddCardList extends DDDPulseEffectSuper(I18NMixin(DDD)) {
  static get tag() {
    return "ddd-card-list";
  }

  constructor() {
    super();
    this.dddPrimary = "";
    this.dddAccent = "";

    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/ddd-card-list.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      dddPrimary: { type: String, attribute: "ddd-primary" },
      dddAccent: { type: String, attribute: "ddd-accent" },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          font-family: var(--ddd-font-navigation);
        }
        .card-list {
          background-color: var(--ddd-accent);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
          padding: 1.75rem;
          width: 100%;
          box-sizing: border-box;
        }
        @media (max-width: 1024px) {
          .card-list {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .card-list {
            grid-template-columns: 1fr;
          }
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="card-list">
        <slot></slot>
      </div>
    `;
  }
  updated(changedProperties) {
    if (changedProperties.has("dddPrimary")) {
      this.style.setProperty(
        "--ddd-primary",
        `var(--ddd-primary-${this.dddPrimary})`
      );
      this.querySelectorAll("ddd-card").forEach((card) => {
        if (!card.hasAttribute("ddd-primary")) {
          card.dddPrimary = this.dddPrimary;
        }
      });
    }
    if (changedProperties.has("dddAccent")) {
      this.style.setProperty(
        "--ddd-accent",
        `var(--ddd-accent-${this.dddAccent})`
      );
    }
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(DddCardList.tag, DddCardList);
