import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import '@vaadin/vaadin-form-layout/vaadin-form-layout.js';
import '@vaadin/vaadin-form-layout/vaadin-form-item.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-text-field/vaadin-text-area.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout.js';

class Page01View extends PolymerElement {
  static get template() {
    return html`
      <custom-style>
        <style include="shared-styles lumo-typography">
          #page01-view {
            display: block;
            padding: 1rem;
          }

          :host {
            display: block;
            padding: 1rem;
          }

          .button-layout {
            display: flex;
            flex-wrap: wrap-reverse;
            width: 100%;
            justify-content: flex-end;
          }
        </style>
      </custom-style>

<vaadin-vertical-layout id="wrapper" theme="padding">
 <h2 style="align-self: center;">Запись на прием</h2>
 <vaadin-form-layout>
  <vaadin-combo-box id="method" placeholder="Специальность" required prevent-invalid-input autofocus></vaadin-combo-box>
  <vaadin-combo-box id="doctor" placeholder="Врач" required prevent-invalid-input></vaadin-combo-box>
  <vaadin-combo-box id="branch" placeholder="Филиал" required prevent-invalid-input></vaadin-combo-box>
  <vaadin-combo-box id="payment_type" placeholder="Тип оплаты" required clear-button-visible prevent-invalid-input></vaadin-combo-box>
 </vaadin-form-layout>
 <vaadin-horizontal-layout theme="spacing" style="display:flex; flex-wrap:wrap-reverse; width:100%; justify-content:flex-end; justify-content: center;">
  <vaadin-button theme="primary" id="next" class="center" style="align-self: center;">
    Далее 
  </vaadin-button>
 </vaadin-horizontal-layout>
</vaadin-vertical-layout>

    `;
  }

  static get is() {
    return 'page01-view';
  }

  static get properties() {
    return {
      // Declare your properties here.
    };
  }
}

customElements.define(Page01View.is, Page01View);
