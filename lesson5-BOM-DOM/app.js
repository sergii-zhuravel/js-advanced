class Widget {
  // @element - string: Tag name
  // @id - string: Id string
  constructor(element, id) {
    if (element && id) {
      this.widgetElement = document.createElement(element)
      this.widgetElement.setAttribute('id', id)
      this.widgetElement.innerHTML = '<span>Test content</span>'
    } else {
      throw "Element and Id are mandatory"
    }
    this.created = false
  }

  show() {
    if (this.created) return // do nothing if the widget already created
    // display widget
    console.log('Element content is: ', this.widgetElement.outerHTML)
    this.created = true
  }
}

class Button extends Widget {
  handleClick() {
    console.log('I can be clicked')
  }
}

b = new Button('div', 'my-widget')
b.show()

