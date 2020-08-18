import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import '@vaadin/vaadin-text-field/vaadin-text-area.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class Page07View extends PolymerElement {
  static get template() {
    return html`
<vaadin-vertical-layout style="width: 100%; height: 100%; padding: var(--lumo-space-xl);">
 <div style="margin-top: 20px; margin-bottom: 20px; padding: 10px 20px 20px; border-radius: 20px; background-color: #f7f1f1; align-self: center;">
  <h2>Вы записаны</h2>
  <h2>MK№ 12555/20-2 Петров Петр Петрович</h2>
  <h3>Четверг, 20 августа 8:20</h3>
  <h5>Акушер</h5>
  <h3>Кабинет №1</h3>
  <h5>ПМУ</h5>
  <vaadin-horizontal-layout style="justify-content: space-around; align-self: stretch;">
   <vaadin-button style="width: 100%; margin: var(--lumo-space-s);">
     Перенести 
   </vaadin-button>
   <vaadin-button style="width: 100%; margin: var(--lumo-space-s);">
     Отменить 
   </vaadin-button>
  </vaadin-horizontal-layout>
 </div>
 <vaadin-button id="back" style="align-self: center;" theme="secondaty">
   Записаться 
 </vaadin-button>
</vaadin-vertical-layout>
`;
  }

  static get is() {
    return 'page07-view';
  }

  static get properties() {
    return {
      // Declare your properties here.
    };
  }
}

customElements.define(Page07View.is, Page07View);
