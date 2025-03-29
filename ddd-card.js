/**
 * Copyright 2025 Alexander Manbeck
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-card`
 *
 * @demo index.html
 * @element ddd-card
 */
export class DddCard extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "ddd-card";
  }

  constructor() {
    super();
    this.title = "";
    this.image = "";
    this.label = "";
    this.link = "";
    // this.ddd_primary = "7";

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
      title: { type: String },
      image: { type: String },
      label: { type: String },
      link: { type: String },
      // ddd_primary: { type: String, attribute: "ddd-primary" }, > implement later, focus on ddd-card format
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
          border-radius: var(--ddd-radius-lg);
          width: 300px;
          text-align: center;
        }
        .card {
          width: 100%;
          padding: var(--ddd-spacing-0);
          background: var(--ddd-theme-default-white);
          border-radius: var(--ddd-radius-lg);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .image {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-top-left-radius: var(--ddd-radius-lg);
          border-top-right-radius: var(--ddd-radius-lg);
        }
        .line {
          height: 12px;
          width: 100%;
          background: var(--ddd-theme-default-nittanyNavy);
        }
        .title {
          font-size: 1.2rem;
          font-weight: bold;
          margin: 8px 0;
          color: var(--ddd-theme-default-nittanyNavy);
        }
        .label {
          font-size: 0.9rem;
          color: black;
        }
        .link {
          display: inline-block;
          margin-top: 12px;
          padding: 8px 16px;
          background-color: var(--ddd-theme-default-link);
          font-weight: bold;
          border-radius: 4px;
          border: solid 2px var(--ddd-theme-default-link);
          color: white;
          cursor: pointer;
          transition: background-color 0.3s ease-in-out;
        }
        .link:hover {
          background-color: #005a8d;
        }
      `,
    ];
  }

  linkClick() {
    window.location = this.link;
  }

  // Lit render the HTML
  render() {
    return html` <div class="card">
      <img class="image" src="${this.image}" alt="${this.title}" />
      <div class="line"></div>
      <div class="title">${this.title}</div>
      <p class="label">${this.label}</p>
      <button class="link" @click="${this.linkClick}">Explore</button>
      <slot></slot>
    </div>`;
  }
}

globalThis.customElements.define(DddCard.tag, DddCard);
