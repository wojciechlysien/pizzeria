class BaseWidget {
  constructor(wrapperElement, initialValue) {
    const thisWidget = this;

    thisWidget.dom = {};
    thisWidget.dom.wrapper = wrapperElement;

    thisWidget.correctValue = initialValue;
  }

  get value() {
    const thisWidget = this;

    return thisWidget.correctValue;
  }

  set Value(value) {
    const thisWidget = this;

    const newValue = thisWidget.parseInt(value);

    if (newValue != thisWidget.correctValue && thisWidget.isValid(newValue)) {
      thisWidget.correctValue = newValue;
      thisWidget.announce();
    }

    thisWidget.renderValue();
  }

  setValue(value) {
    const thisWidget = this;

    thisWidget.value = value;
  }

  parseValue(value) {
    return parseInt(value);
  }

  isValid(value) {
    return !isNaN(value);
  }

  renderValue() {
    const thisWidget = this;

    thisWidget.dom.wrapper.innerHTML = thisWidget.correctValue;
  }

  announce() {
    const thisWidget = this;

    const event = new CustomEvent('update', {
      bubbles: true
    });
    thisWidget.dom.wrapper.dispatchEvent(event);
  }
}

export default BaseWidget;