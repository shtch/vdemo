import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import '@vaadin/vaadin-text-field/vaadin-text-area.js';
import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout.js';
import '@vaadin/vaadin-form-layout/src/vaadin-form-layout.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class Page03View extends PolymerElement {
  static get template() {
    return html`
<vaadin-vertical-layout>
 <vaadin-vertical-layout theme="padding spacing-xl" style="max-width: 60rem; align-self: center; padding: var(--lumo-space-xl);">
  <h3 style="text-align: center; align-self: center;">Подтверждение телефона</h3>
  <vaadin-form-layout responsive-steps="[{&quot;columns&quot;: 1}]" style="align-self: center; align-items:center;">
   <vaadin-text-field id="phone" placeholder="Номер телефона"></vaadin-text-field>
  </vaadin-form-layout>
  <h5 style="text-align: center; align-self: center; width: 250px;">На этот номер вы получите SMS с кодом подтверждения авторизации</h5>
  <vaadin-button id="next" theme="primary" style="align-self: center; min-width: 150px;">
    Отправить 
  </vaadin-button>
  <vaadin-button id="home" theme="secondary" style="align-self: center; min-width: 150px;">
    Отмена 
  </vaadin-button>
 </vaadin-vertical-layout>
</vaadin-vertical-layout>
`;
  }

  static get is() {
    return 'page03-view';
  }

  static get properties() {
    return {
      // Declare your properties here.
    };
  }
}

customElements.define(Page03View.is, Page03View);
