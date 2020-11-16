const pageHeaderTemplate = document.createElement('template');
const pageHeaderTemplateContent = `
<style>
.heading-container {
  position: relative;
  padding: 30px 0;
  color: #cdbfe3;
  text-align: center;
  text-shadow: 0 1px 0 rgba(0,0,0,.1);
  background-color: #6f5499;
  background-image: linear-gradient(to bottom,#563d7c 0,#6f5499 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#563d7c", endColorstr="#6F5499", GradientType=0);
  background-repeat: repeat-x;
  padding-top: 60px;
  padding-bottom: 60px;
  font-size: 24px;
  text-align: left;
  box-sizing: border-box;
  display: block;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 1170px;
}

.heading-container h1 {
  font-size: 60px;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 10px;
  color: #fff;
  font-family: inherit;
  font-weight: 500;
}

p {
  margin: 0 0 10px;
  margin-bottom: 0;
  font-weight: 300;
  line-height: 1.4;

}
</style>
<div class="heading-container" id="content" >
    <div class="container">
      <h1 id="pageTitle"></h1>
      <p id="pageDescription"></p>

    </div>
</div>
`;
pageHeaderTemplate.innerHTML = pageHeaderTemplateContent;


export class XPageHeader extends HTMLElement {
    protected _shadowRoot;
    protected _container;
    protected _title;
    protected _titleEl;
    protected _description;
    protected _descriptionEl;

    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: "open" });
        this._shadowRoot.appendChild(pageHeaderTemplate.content.cloneNode(true));
        this._container = this.shadowRoot.querySelector("#content");
        this._titleEl = this.shadowRoot.querySelector("#pageTitle");
        this._descriptionEl = this.shadowRoot.querySelector("#pageDescription");
    }

    static get observedAttributes() {
        return ["title", "description"];
    }

    connectedCallback() {
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        switch (name) {
            case "title":
                this._title = newValue;
                this._titleEl.innerText = newValue;
                break;
            case "description":
                this._description = newValue;
                this._descriptionEl.innerText = `${newValue}`;
                break;
            default:
                break;
        }
    }

    get title() {
        return this._title;
    }

    set title(newValue) {
        this._title = newValue;
        this._titleEl.innerText = newValue;
    }

    get description() {
        return this._description;
    }

    set description(newValue) {
        this._description = newValue;
        this._descriptionEl.innerText = newValue;
    }
}
