class JsVar extends HTMLElement {
  constructor() {
    super();
  }

  #validateName(name) {
    // TODO: check if name is a valid js variable name
    return name && !(name in window);
  }

  #applyType(value, type) {
    switch (type) {
      case "number": {
        return Number(value);
      }
      case "boolean": {
        return !(
          value === null ||
          value === "" ||
          value === "false" ||
          value === "0"
        );
      }
      default: {
        return value !== null ? String(value) : "";
      }
    }
  }

  connectedCallback() {
    const name = this.getAttribute("name");
    const value = this.getAttribute("value");
    const type = this.getAttribute("type");
    if (!this.#validateName(name)) {
      return;
    }
    window[name] = this.#applyType(value, type);
  }
}

customElements.define("js-var", JsVar);
