import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import '@vaadin/vaadin-text-field/vaadin-text-area.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';
import '@vaadin/vaadin-form-layout/src/vaadin-form-layout.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';

class Page03View extends PolymerElement {
  static get template() {
    return html`
<vaadin-horizontal-layout style="height: 100%; flex-direction: column;">
 <div style="margin: auto; align-self: center;">
  <h3 style="text-align: center; align-self: center; margin: var(--lumo-space-xl);">Подтверждение телефона</h3>
  <vaadin-vertical-layout style="align-self: center; padding: var(--lumo-space-xl); align-items: center; justify-content: center; flex-direction: column; align-content: center; flex-wrap: wrap;">
   <vaadin-form-layout responsive-steps="[{&quot;columns&quot;: 1}]">
    <vaadin-text-field id="phone" placeholder="Номер телефона"></vaadin-text-field>
   </vaadin-form-layout>
   <h5 style="text-align: center; align-self: center; width: 250px;">На этот номер вы получите SMS с кодом подтверждения авторизации</h5>
   <vaadin-button id="next" theme="primary" style="min-width: 150px; width: 200px;">
     Отправить 
   </vaadin-button>
   <vaadin-button id="home" theme="secondary" style="align-self: center; min-width: 150px; width: 200px;">
     Отмена 
   </vaadin-button>
  </vaadin-vertical-layout>
 </div>
</vaadin-horizontal-layout>
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
