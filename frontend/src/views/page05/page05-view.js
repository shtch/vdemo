import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import '@vaadin/vaadin-form-layout/vaadin-form-layout.js';
import '@vaadin/vaadin-form-layout/vaadin-form-item.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-text-field/vaadin-text-area.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout.js';

class Page05View extends PolymerElement {
  static get template() {
  return html`
<vaadin-vertical-layout>
 <vaadin-vertical-layout theme="padding spacing-xl" style="max-width: 60rem; align-self: center; padding: var(--lumo-space-xl);">
  <h3 style="text-align: center; align-self: center;">Для идентификации введите дату рождения</h3>
  <vaadin-form-layout responsive-steps="[{&quot;columns&quot;: 1}]" style="align-self: center; align-items:center;">
   <vaadin-text-field id="birthday" placeholder="Дата рождения ДД.ММ.ГГГГ"></vaadin-text-field>
  </vaadin-form-layout>
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
    return 'page05-view';
  }

  static get properties() {
    return {
      // Declare your properties here.
    };
  }
}

customElements.define(Page05View.is, Page05View);
