export class BeatBar {
  value: number = 0;
  setValue(value: number) {
    this.value = value;
  }
  getValue() {
    return this.value;
  }
}
export class Label {
  text: string = "";
  constructor(text: string) {
    this.text = text;
  }
  setText(text: string) {
    this.text = text;
  }
  getText() {
    return this.text;
  }
}

export class Button {
  text: string = "";
  constructor(text: string) {
    this.text = text;
  }
  addActionListener(action: (event: string) => void) {
		action(`${this.text} 클릭 이벤트 추가`)
	}
}

export class TextField {
  text: string = "";
  constructor(text: string) {
    this.text = text;
  }
  setText(text: string) {
    this.text = text;
  }
  getText() {
    return this.text;
  }
}

export class Menu {
  add(menuItem: MenuItem){
    console.log(`${menuItem.text} 메뉴 아이템 추가`)
  }
}

export class MenuItem {
  text: string = "";
  enable: boolean = true;
  constructor(text: string) {
    this.text = text;
  }

  addActionListener(action: (event: string) => void) {
		action(`${this.text} 클릭 이벤트 추가`)
	}
  setEnabled(enable: boolean) {
    this.enable = enable;
  }
  getEnabled() {
    return this.enable
  }
  setText(text: string) {
    this.text = text;
  }
  getText() {
    return this.text;
  }
}
