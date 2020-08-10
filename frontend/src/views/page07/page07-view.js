import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import '@vaadin/vaadin-text-field/vaadin-text-area.js';
import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class Page07View extends PolymerElement {
  static get template() {
    return html`
<vaadin-vertical-layout style="width: 100%; height: 100%; padding: var(--lumo-space-xl);">
 <h1>Вы записаны</h1>
 <h2>MK№ 12555/20-2 Петров Петр Петрович</h2>
 <vaadin-vertical-layout style="align-self: center; margin: var(--lumo-space-xl);" theme="spacing-l">
  <vaadin-vertical-layout style="align-self: center; margin: var(--lumo-space-xl); padding: var(--lumo-space-l);" theme="spacing-xs" border="">
   <h3>Четверг, 20 августа 8:20</h3>
   <h5>Акушер</h5>
   <h3>Кабинет №1</h3>
   <h5>ПМУ</h5>
  </vaadin-vertical-layout>
  <vaadin-horizontal-layout style="justify-content: space-around; align-self: stretch;">
   <vaadin-button>
     Перенести 
   </vaadin-button>
   <vaadin-button>
     Отменить 
   </vaadin-button>
  </vaadin-horizontal-layout>
 </vaadin-vertical-layout>
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
