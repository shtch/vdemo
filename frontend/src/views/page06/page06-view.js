import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import '@vaadin/vaadin-form-layout/vaadin-form-layout.js';
import '@vaadin/vaadin-form-layout/vaadin-form-item.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-text-field/vaadin-text-area.js';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout.js';
import '@vaadin/vaadin-button/vaadin-button.js';

class Page06View extends PolymerElement {
  static get template() {
    return html`
<vaadin-vertical-layout>
 <vaadin-vertical-layout theme="padding spacing-xl" style="max-width: 40rem; align-self: center; padding: var(--lumo-space-xl);">
  <h3 style="text-align: center; align-self: center;">Введите фамилию, имя, отчество</h3>
  <vaadin-form-layout responsive-steps="[{&quot;columns&quot;: 1}]" style="align-self: center; align-items:center;">
   <vaadin-form-item>
    <label slot="label">Имя</label>
    <vaadin-text-field id="firstName" class="full-width" value=""></vaadin-text-field>
   </vaadin-form-item>
   <vaadin-form-item>
    <label slot="label">Отчество</label>
    <vaadin-text-field id="middleName" class="full-width" value=""></vaadin-text-field>
   </vaadin-form-item>
   <vaadin-form-item>
    <label slot="label">Фамилия</label>
    <vaadin-text-field id="lastName" class="full-width" value=""></vaadin-text-field>
   </vaadin-form-item>
  </vaadin-form-layout>
  <vaadin-vertical-layout theme="spacing" style="display:flex; flex-wrap:wrap-reverse; width:100%; justify-content:flex-end; align-items: center;">
   <vaadin-button id="next" theme="primary" style="align-self: center; min-width: 150px;">
     Отправить 
   </vaadin-button>
   <vaadin-button id="home" theme="secondary" style="align-self: center; min-width: 150px;">
     Отмена 
   </vaadin-button>
  </vaadin-vertical-layout>
 </vaadin-vertical-layout>
</vaadin-vertical-layout>
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
