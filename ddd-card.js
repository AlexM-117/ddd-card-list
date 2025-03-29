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
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: flex;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
          border-radius: 12px;
          width: 300px;
          text-align: center;
        }
        .card {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-0);
          background-color: blue;
          border-radius: var(--ddd-radius-lg);
        }
        .image {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }
        .line {
          height: 5px;
          background: red;
        }
        .title {
          font-size: 1.2rem;
          font-weight: bold;
          margin: 8px 0;
        }
        .label {
          font-size: 0.9rem;
          color: black;
        }
        .link-button {
          display: inline-block;
          margin-top: 12px;
          padding: 8px 16px;
          background-color: green;
          font-weight: bold;
          border-radius: 8px;
          cursor: pointer;
        }
        .link-button:hover {
          background-color: yellow;
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html` <div class="card">
      <img class="image" src="${this.image}" alt="Campus" />
      <div class="line"></div>
      <div class="title">${this.title}</div>
      <p class="label">${this.label}</p>
      ${this.link
        ? html`<a class="link-button" href="${this.link}" target="_blank"
            >Explore</a
          >`
        : ""}
      <slot></slot>
    </div>`;
  }
}

globalThis.customElements.define(DddCard.tag, DddCard);
