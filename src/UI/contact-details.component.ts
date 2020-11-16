const contactDetailsTemplate = document.createElement('template');
const contactDetailsTemplateContent = `
<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000;
  filter: alpha(opacity=50);
  opacity: .5;
  box-sizing: border-box;
}

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: none;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  outline: 0;
  opacity: 1;
  display: block;
  box-sizing: border-box;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
}

.modal-dialog {
  position: relative;
  width: 600px;
  margin: 30px auto;
}

.modal-content {
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #999;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 6px;
  -webkit-box-shadow: 0 3px 9px rgba(0,0,0,.5);
  box-shadow: 0 3px 9px rgba(0,0,0,.5);
  outline: 0;
  box-shadow: 0 5px 15px rgba(0,0,0,.5);
}

.modal-header {
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
  box-sizing: border-box;
}

.modal-title {
  font-family: inherit;
  font-weight: 500;
  color: inherit;
  margin: 0;
  line-height: 1.42857143;
  font-size: 18px;
}

.modal-body {
  position: relative;
  padding: 15px;
  box-sizing: border-box;
  display: block;
}

.modal-footer {
  padding: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5;
  box-sizing: border-box;
}

.btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #333;
    background-color: #fff;
    border-color: #ccc;
}

p {
  margin: 0 0 10px;
}
</style>
<div id="content">
      <div class="modal-backdrop fade in"></div>
      <div class="modal fade in visible"  role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Contact Details</h4>
            </div>
            <div class="modal-body">
              <p>
                <b>Name:</b> <span id="name"></span>
              </p>
              <p>
                <b>Email:</b> <span id="email"></span>
              </p>
              <p>
                <b>Address:</b> <span id="address"></span>, <span id="city"></span>, <span id="zip"></span>, <span id="country"></span>
              </p>
              <p>
                <b>Company:</b> <span id="company"></span>
              </p>
              <p>
                <b>Phone:</b> <span id="phone"></span>
              </p>
              <p>
                <b>Mobile:</b> <span id="mobile"></span>
              </p>
              <br />
              <p>
                <b>Notes:</b>
              </p>
              <br />
              <p id="notes"></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
`;
contactDetailsTemplate.innerHTML = contactDetailsTemplateContent;


export class XContactDetails extends HTMLElement {
    protected _shadowRoot;
    protected _container;
    protected _contact;
    protected _buttonEl;

    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: "open" });
        this._shadowRoot.appendChild(contactDetailsTemplate.content.cloneNode(true));
        this._container = this.shadowRoot.querySelector("#content");
        this._buttonEl = this.shadowRoot.querySelector(".btn.btn-default");
        this.onCloseDialog = this.onCloseDialog.bind(this);
    }

    static get observedAttributes() {
        return ["contact"];
    }

    connectedCallback() {
        if (this._container.isConnected) {
            this._buttonEl.addEventListener('click', this.onCloseDialog);
            this.render();
        }

    }

    onCloseDialog(e) {
        e.preventDefault();

        const closeDialogEvent = new CustomEvent("close", {
            detail: true,
            bubbles: true,
            cancelable: true,
        });
        this.dispatchEvent(closeDialogEvent);
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
        for (let key in this._contact) {
            if (this._shadowRoot.querySelector('#' + key)) {
                this._shadowRoot.querySelector('#' + key).innerText = this._contact[key];
            }
        }
    }
}
