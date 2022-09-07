class Layout{
  private parentBlock: HTMLElement | null;
  constructor() {
    this.parentBlock = document.getElementById('async-race');
  }

  render() {
    if (this.parentBlock) {
      this.parentBlock.innerHTML = 'Hello World';
    }
  }
}

export const layout = new Layout();
