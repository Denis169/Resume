class Subtitle {
  private subtitle: HTMLDivElement;
  constructor(text: string) {
    this.subtitle = document.createElement('div');
    this.subtitle.className = 'subtitle';
    this.subtitle.innerHTML = `
      <p class="subtitle__text">${text}</p>
    `;
  }

  appendTo(parent: HTMLElement) {
    parent.append(this.subtitle);
  }

  prependTo(parent: HTMLElement) {
    parent.prepend(this.subtitle);
  }
}

export default Subtitle;
