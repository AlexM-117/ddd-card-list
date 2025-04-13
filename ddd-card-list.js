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
          background-color: var(--ddd-accent);
          font-family: var(--ddd-font-navigation);
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html` <slot></slot> `;
  }
  updated(changedProperties) {
    if (changedProperties.has("dddPrimary")) {
      this.style.setProperty(
        "--ddd-primary",
        `var(--ddd-primary-${this.dddPrimary})`
      );
      this.querySelectorAll("ddd-card").forEach((card) => {
        card.dddPrimary = this.dddPrimary;
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
