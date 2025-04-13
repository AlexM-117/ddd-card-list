/**
 * Copyright 2025 Alexander Manbeck
 * @license Apache-2.0, see LICENSE for full text.
 */
import { html, css } from "lit";
import { DDD, DDDPulseEffectSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-card`
 *
 * @demo index.html
 * @element ddd-card
 */
export class DddCard extends DDDPulseEffectSuper(I18NMixin(DDD)) {
  static get tag() {
    return "ddd-card";
  }

  constructor() {
    super();
    this.title = "";
    this.image = "";
    this.label = "";
    this.link = "";
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
      title: { type: String },
      image: { type: String },
      label: { type: String },
      link: { type: String },
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
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-accent);
          font-family: var(--ddd-font-navigation);
          border-radius: var(--ddd-radius-lg);
          display: block;
          width: 100%;
        }
        .card {
          width: 100%;
          height: 100%;
          padding: var(--ddd-spacing-0);
          background: var(--ddd-theme-default-white);
          border-radius: var(--ddd-radius-md);
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          overflow: hidden;
          box-shadow: 0px 4px 8px 0px var(--ddd-theme-default-limestoneGray);
        }
        .image {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-top-left-radius: var(--ddd-radius-md);
          border-top-right-radius: var(--ddd-radius-md);
        }
        .bar {
          height: 12px;
          width: 100%;
          background: var(--ddd-primary);
        }
        .card-content {
          padding: 16px 16px 0 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
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
          flex-grow: 1;
        }
        .link {
          width: 100% - 32%;
          background-color: var(--ddd-theme-default-link);
          color: var(--ddd-theme-default-white);
          padding: 12px;
          margin: 24px 16px 16px 16px;
          border-radius: var(--ddd-radius-xs);
          border: none;
          font-size: 0.8rem;
          font-family: var(--ddd-font-navigation);
          cursor: pointer;
        }
        .link:hover {
          background-color: var(--ddd-theme-default-nittanyNavy);
          transition: background-color 0.3s ease-out;
        }
      `,
    ];
  }

  linkClick() {
    window.location = this.link;
  }

  updated(changedProperties) {
    if (changedProperties.has("dddPrimary")) {
      this.style.setProperty(
        "--ddd-primary",
        `var(--ddd-primary-${this.dddPrimary})`
      );
    }
    if (changedProperties.has("dddAccent")) {
      this.style.setProperty(
        "--ddd-accent",
        `var(--ddd-accent-${this.dddAccent})`
      );
    }
  }

  // Lit render the HTML
  render() {
    return html`<div class="card">
      <img class="image" src="${this.image}" alt="${this.title}" />
      <div class="bar"></div>
      <div class="card-content">
        <h2 class="title">${this.title}</h2>
        <p class="label">${this.label}</p>
      </div>
      <button class="link" @click="${this.linkClick}">Explore</button>
      <slot></slot>
    </div>`;
  }
}

globalThis.customElements.define(DddCard.tag, DddCard);
