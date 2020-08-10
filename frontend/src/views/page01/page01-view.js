import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import '@vaadin/vaadin-form-layout/vaadin-form-item.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-text-field/vaadin-text-area.js';
import '@vaadin/vaadin-form-layout/vaadin-form-layout.js';
import '@vaadin/vaadin-combo-box/src/vaadin-combo-box.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class Page01View extends PolymerElement {
  static get template() {
    return html`
<vaadin-vertical-layout style="align-items: center;">
 <vaadin-vertical-layout theme="padding" style="max-width: 30rem; ">
  <h3 style="align-self: center;">Запись к врачу</h3>
  <vaadin-vertical-layout style="align-self: center; align-items: center;" theme="spacing">
   <vaadin-form-layout responsive-steps="[{&quot;columns&quot;: 1}]" theme="spacing" style="align-self: center;">
    <vaadin-combo-box id="payment_type" placeholder="Оплата" required clear-button-visible prevent-invalid-input error-message="Выберите вид оплаты."></vaadin-combo-box>
    <vaadin-combo-box id="branch" placeholder="Филиал" required prevent-invalid-input error-message="Выберите место приема."></vaadin-combo-box>
    <vaadin-combo-box id="method" placeholder="Специальность" required prevent-invalid-input error-message="Выберите специальность."></vaadin-combo-box>
    <vaadin-combo-box id="doctor" placeholder="Врач" required prevent-invalid-input  error-message="Выберите врача."></vaadin-combo-box>
    <vaadin-combo-box id="prefer_time" placeholder="Удобное время"></vaadin-combo-box>
   </vaadin-form-layout>
   <vaadin-button id="next" style="align-self: center; width: 200px;" theme="primary" autofocus>
     Записаться 
   </vaadin-button>
  </vaadin-vertical-layout>
  <h4 style="text-align: center; align-self: center;">Для записи к нескольким специалистам, войдите в личный кабинет</h4>
  <vaadin-button id="enter" style="align-self: center; width: 200px;" theme="secondary">
    Войти 
  </vaadin-button>
 </vaadin-vertical-layout>
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
