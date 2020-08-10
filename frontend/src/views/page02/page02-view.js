import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import '@vaadin/vaadin-lumo-styles/all-imports.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-vertical-layout.js';
import '@vaadin/vaadin-form-layout/src/vaadin-form-layout.js';
import '@vaadin/vaadin-form-layout/src/vaadin-form-item.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import '@vaadin/vaadin-date-picker/src/vaadin-date-picker.js';
import '@polymer/iron-icon/iron-icon.js';
import '@vaadin/vaadin-ordered-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-button/src/vaadin-button.js';

class Page02View extends PolymerElement {
  static get template() {
    return html`
<style include="shared-styles lumo-badge lumo-typography">
        :host {
          background-color: var(--lumo-contrast-10pct);
          box-sizing: border-box;
          display: block;
          font-size: var(--lumo-font-size-m);
          height: 100%;
          overflow: auto;
          padding: var(--lumo-space-m) var(--lumo-space-l);
        }

        vaadin-board {
          margin: 0 auto;
          max-width: 1024px;
        }

        /* Wrapper */
        .wrapper {
          display: flex;
          padding: var(--lumo-space-s);
        }

        /* Card */
        .card {
          align-items: baseline;
          background-color: var(--lumo-base-color);
          border-radius: var(--lumo-border-radius);
          box-shadow: var(--lumo-box-shadow-xs);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          width: 100%;
        }

        .card h2 {
          margin-bottom: 0;
          margin-top: var(--lumo-space-m);
        }

        .card h3 {
          margin-bottom: var(--lumo-space-xs);
          margin-right: var(--lumo-space-m);
          margin-left: var(--lumo-space-m);
          margin-top: var(--lumo-space-m);
        }

        /* Spacing */
        .space-m {
          padding: var(--lumo-space-m);
        }

        /* Text colors */
        .error-text {
          color: var(--lumo-error-text-color);
        }

        .primary-text {
          color: var(--lumo-primary-text-color);
        }

        .secondary-text {
          color: var(--lumo-secondary-text-color);
        }

        .success-text {
          color: var(--lumo-success-text-color);
        }

        /* Charts */
        vaadin-chart {
          padding-top: var(--lumo-space-s);
        }

        /* Grid */
        vaadin-grid {
          height: 300px;
        }
        /* Button */
        vaadin-button {
          width:  100px;
        }
        </style>
<vaadin-vertical-layout style="align-items: center;">
 <vaadin-vertical-layout theme="padding" style="max-width: 50rem;">
  <vaadin-form-layout responsive-steps="[{&quot;columns&quot;: 1}]" style="align-self: stretch;">
   <h5 style="text-align: center; align-self: center;">Расписание приема</h5>
   <vaadin-form-item>
    <label slot="label">Врач: </label>
    <label slot="label"> Акушер</label>
   </vaadin-form-item>
   <vaadin-form-item>
    <label slot="label">Филиал: </label>
    <label slot="label"> КДО </label>
   </vaadin-form-item>
   <vaadin-form-item>
    <label slot="label">Оплата:</label>
    <label slot="label"> ПМУ</label>
   </vaadin-form-item>
  </vaadin-form-layout>
  <vaadin-vertical-layout style="align-items: stretch; align-self: stretch;">
   <vaadin-horizontal-layout style="align-self: center;">
    <vaadin-button>
     <iron-icon icon="lumo:chevron-left"></iron-icon>
    </vaadin-button>
    <vaadin-date-picker value="2020-08-20" style="width: 150px;"></vaadin-date-picker>
    <vaadin-button>
     <iron-icon icon="lumo:chevron-right"></iron-icon>
    </vaadin-button>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout style="align-self: center;">
    <h5>Утро </h5>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout style="padding: var(--lumo-space-m); justify-content: space-evenly; width: 100%;">
    <vaadin-button id="ts1" theme="success primary">
      8:20 
    </vaadin-button>
    <vaadin-button theme="error primary" disabled>
      8:40 
    </vaadin-button>
    <vaadin-button theme="success primary">
      9:00 
    </vaadin-button>
    <vaadin-button theme="success primary">
      9:20 
    </vaadin-button>
    <vaadin-button></vaadin-button>
    <vaadin-button></vaadin-button>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout style="justify-content: center;">
    <h5>День</h5>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout style="padding: var(--lumo-space-m); justify-content: space-evenly;">
    <vaadin-button theme="error primary" disabled>
      14:20 
    </vaadin-button>
    <vaadin-button theme="success primary">
      14:40 
    </vaadin-button>
    <vaadin-button theme="success primary">
      15:00 
    </vaadin-button>
    <vaadin-button theme="error primary" disabled>
      15:20 
    </vaadin-button>
    <vaadin-button theme="error primary" disabled>
      15:40 
    </vaadin-button>
    <vaadin-button></vaadin-button>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout style="justify-content: center;">
    <h5>Вечер</h5>
   </vaadin-horizontal-layout>
   <vaadin-horizontal-layout style="padding: var(--lumo-space-m); justify-content: space-evenly;">
    <vaadin-button theme="error primary" disabled>
      18:00 
    </vaadin-button>
    <vaadin-button theme="error primary" disabled>
      18:20 
    </vaadin-button>
    <vaadin-button theme="error primary" disabled>
      18:40 
    </vaadin-button>
    <vaadin-button></vaadin-button>
    <vaadin-button></vaadin-button>
    <vaadin-button></vaadin-button>
   </vaadin-horizontal-layout>
   <vaadin-button id="back" theme="secondary" style="align-self: center; min-width: 150px;">
    Назад
   </vaadin-button>
  </vaadin-vertical-layout>
 </vaadin-vertical-layout>
</vaadin-vertical-layout>
`;
  }

  static get is() {
    return 'page02-view';
  }

  static get properties() {
    return {
      // Declare your properties here.
    };
  }
}

customElements.define(Page02View.is, Page02View);
