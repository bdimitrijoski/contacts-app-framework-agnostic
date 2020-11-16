const contactCardTemplate = document.createElement('template');
const contactCardTemplateContent = `
<style>
.media {
  margin-top: 15px;
  box-sizing: border-box;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  display: block;
  overflow: hidden;
  zoom: 1;
  width: auto;
}

a {
  color: #337ab7;
  text-decoration: none;
  background-color: transparent;
}

.media-object {
  display: block;
  vertical-align: middle;
  border: 0;
  box-sizing: border-box;
  width: 64px;
  height: 64px;
}

.media-body, .media-left, .media-right {
  display: table-cell;
  vertical-align: top;
}

.media-left, .media>.pull-left {
  padding-right: 10px;
}

.media-right, .media>.pull-right {
  padding-left: 10px;
}

.media-body {
  overflow: hidden;
  zoom: 1;
  width: 10000px;
  padding-top: 5px;
}

.contact-card {
  cursor: pointer;
}

.media:first-child {
  margin-top: 0;
}

.media-heading {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 18px;

}

p {
  margin: 0 0 10px;
}


.contact-card:hover {
  background: rgba(0,0,0,0.02);
}

.contact-card .media-body {
  padding-top: 5px;
}

.contact-card .btn {
  display: none;
}
.contact-card .btn.btn-link {
  margin:0;
  padding:0 10px;
  font-size: 12px;
}
.contact-card:hover .btn {
  display: inline-block;
}

</style>
<div class="media contact-card" id="content">
  <div class="media-left">
    <a href="#" id="imageLink" >
      <img
        className="media-object"
        data-src="holder.js/64x64"
        alt="64x64"
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNzViMjQxZGM1OCB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE3NWIyNDFkYzU4Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy4xNzE4NzUiIHk9IjM2LjUiPjY0eDY0PC90ZXh0PjwvZz48L2c+PC9zdmc+"
        data-holder-rendered="true"
        width="64"
        height="64"
      />
    </a>
  </div>
  <div class="media-body">
    <h4 class="media-heading" id="mediaHeadingLink" >
      <span class="contact-name"></span>
      <slot name="left"></slot>
    </h4>
    <p class="contact-email"></p>
  </div>
  <div className="media-right">
  <slot name="right"></slot>
  </div>
</div>
`;
contactCardTemplate.innerHTML = contactCardTemplateContent;


export class XContactCard extends HTMLElement {
    protected _shadowRoot;
    protected _container;
    protected _contact;
    protected _nameEl;
    protected _emailEl;

    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: "open" });
        this._shadowRoot.appendChild(contactCardTemplate.content.cloneNode(true));
        this._container = this.shadowRoot.querySelector("#content");
        this._nameEl = this.shadowRoot.querySelector("#mediaHeadingLink .contact-name");
        this._emailEl = this.shadowRoot.querySelector(".contact-email");
        this.onContactSelect = this.onContactSelect.bind(this);
    }

    static get observedAttributes() {
        return ["contact"];
    }

    connectedCallback() {
        if (this._container.isConnected) {
            this.shadowRoot.querySelector('#imageLink').addEventListener('click', this.onContactSelect);
            this.shadowRoot.querySelector('#mediaHeadingLink').addEventListener('click', this.onContactSelect);
            this.render();
        }

    }

    onContactSelect(e) {
        e.preventDefault();

        const selectEvent = new CustomEvent("select", {
            detail: this._contact,
            bubbles: true,
            cancelable: true,
        });
        this.dispatchEvent(selectEvent);
    }

    get contact() {
        return this._contact;
    }

    set contact(newValue) {
        this._contact = newValue;
        this.render();
    }

    private render() {
        if (!this._contact) {
            return;
        }
        this._nameEl.innerText = this._contact.name;
        this._emailEl.innerText = this._contact.email;
    }
}
