import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import '@vaadin/vaadin-form-layout/vaadin-form-item.js';
import '@vaadin/vaadin-text-field/vaadin-text-area.js';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout.js';

class Page04View extends PolymerElement {
  static get template() {
    return html`
<vaadin-horizontal-layout style="height: 100%; flex-direction: column;">
 <div style="margin: auto;">
  <h3 style="text-align: center; align-self: center;">Введите код из СМС</h3>
  <vaadin-vertical-layout theme="padding spacing-xl" style="align-self: center; padding: var(--lumo-space-xl); align-items: center; justify-content: center; flex-direction: column; flex-wrap: wrap; align-content: center;">
   <vaadin-text-field id="sms" placeholder="" style="align-self: center; margin: var(--lumo-space-xl);"></vaadin-text-field>
   <vaadin-button id="next" theme="primary" style="align-self: center; min-width: 150px; margin: var(--lumo-space-xs); width: 200px;">
     Отправить 
   </vaadin-button>
   <vaadin-button id="home" theme="secondary" style="align-self: center; min-width: 150px; margin: var(--lumo-space-xs); width: 200px;">
     Отмена 
   </vaadin-button>
  </vaadin-vertical-layout>
 </div>
</vaadin-horizontal-layout>
`;
  }

  static get is() {
    return 'page04-view';
  }

  static get properties() {
    return {
      // Declare your properties here.
    };
  }
}

customElements.define(Page04View.is, Page04View);
