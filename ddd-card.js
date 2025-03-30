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
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
          border-radius: var(--ddd-radius-lg);
          text-align: center;
        }
        .card {
          width: 300px;
          padding: var(--ddd-spacing-0);
          background: var(--ddd-theme-default-white);
          border-radius: var(--ddd-radius-md);
          display: flex;
          flex-direction: column;
        }
        .image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-top-left-radius: var(--ddd-radius-md);
          border-top-right-radius: var(--ddd-radius-md);
        }
        .line {
          height: 12px;
          width: 100%;
          background: var(--ddd-theme-default-nittanyNavy);
        }
        .card-content {
          padding: 12px;
        }
        .title {
          font-size: 1.2rem;
          font-weight: bold;
          color: var(--ddd-theme-default-nittanyNavy);
          text-align: left;
          margin: 0;
        }
        .label {
          font-size: 0.9rem;
          color: black;
          margin: 8px 0;
          text-align: left;
        }
        .link {
          width: 100%;
          background-color: var(--ddd-theme-default-link);
          color: var(--ddd-theme-default-white);
          padding: 12px;
          margin-top: 8px;
          border-radius: var(--ddd-radius-sm);
          border: none;
          font-size: 0.8rem;
          cursor: pointer;
          transition: background-color 0.3s;
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
    return html`<div class="card">
      <img class="image" src="${this.image}" alt="${this.title}" />
      <div class="line"></div>
      <div class="card-content">
        <h2 class="title">${this.title}</h2>
        <p class="label">${this.label}</p>
        <button class="link" @click="${this.linkClick}">Explore</button>
      </div>
      <slot></slot>
    </div>`;
  }
}

globalThis.customElements.define(DddCard.tag, DddCard);
