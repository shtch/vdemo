import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import '@vaadin/vaadin-text-field/vaadin-text-area.js';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';

class Page06View extends PolymerElement {
  static get template() {
    return html`
<vaadin-horizontal-layout theme="spacing" style="width: 100%; height: 100%; flex-direction: column;">
 <div style="max-width: 600px; margin: auto;">
  <h3 style="text-align: center; align-self: center;">Введите фамилию, имя, отчество</h3>
  <vaadin-vertical-layout style="max-width: 60rem; align-self: center; padding: var(--lumo-space-xl); align-items: center; flex-direction: column; justify-content: center; flex-wrap: wrap;">
   <vaadin-text-field id="lastName" class="full-width" value="" style="width: 100%;" placeholder="Фамилия"></vaadin-text-field>
   <vaadin-text-field id="firstName" class="full-width" value="" style="flex-grow: 0; width: 100%;" placeholder="Имя"></vaadin-text-field>
   <vaadin-text-field id="middleName" class="full-width" value="" style="width: 100%;" placeholder="Отчество"></vaadin-text-field>
   <div style="padding: var(--lumo-space-m);"></div>
   <vaadin-button id="next" theme="primary" style="align-self: center; min-width: 150px; margin: var(--lumo-space-xs); width: 200px;">
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
    return 'page06-view';
  }

  static get properties() {
    return {
      // Declare your properties here.
    };
  }
}

customElements.define(Page06View.is, Page06View);
