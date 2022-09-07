import {svg} from "./Svg";

class Layout {
  private readonly parentBlock: HTMLElement | null;
  constructor() {
    this.parentBlock = document.getElementById('resume');
  }

  render() {
    if (this.parentBlock) {
      this.parentBlock.append(this.header());
      this.parentBlock.append(this.mainSection());
    }
  }

  header() {
    const header = document.createElement('header');
    header.className = 'header';
    header.innerHTML = `
      <div class="photo"></div>
      <div class="name">
        <p class="name__name">DZIANIS</p>
        <p class="name__surname">LAHIMAKHAU</p>
        <p class="name__profession">FRONTEND DEVELOPER</p>
      </div>
      <div class="contacts">
        <div class="contact">
          ${svg.mailSvg()}
          <div class="contact__description">
            <h2 class="contact__header">Email:</h2>
            <a class="contact__value" href="mailto: denis6125038@gmail.com">denis6125038@gmail.com</a>
          </div>
        </div>
        <div class="contact">
          ${svg.telegramSvg()}
          <div class="contact__description">
            <h2 class="contact__header">Telegram:</h2>
            <a class="contact__value" href="tg://resolve?domain=Denis_logimahov">@Denis_logimahov</a>
          </div>
        </div>
        <div class="contact">
          ${svg.phoneSvg()}
          <div class="contact__description">
            <h2 class="contact__header">Phone:</h2>
            <a class="contact__value" href="tel: +375296125038">+375 (29) 6125038</a>
          </div>
        </div>
        <div class="contact">
          ${svg.linkedInSvg()}
          <div class="contact__description">
            <h2 class="contact__header">LinkedIn:</h2>
            <a class="contact__value" href="https://www.linkedin.com/in/dzianis-lahimakhau-559083212/">https://www.linkedin.com/in/dzianis-lahimakhau-559083212/</a>
          </div>
        </div>
        <div class="contact">
          ${svg.githubSvg()}
          <div class="contact__description">
            <h2 class="contact__header">Github:</h2>
            <a class="contact__value" href="https://github.com/Denis169">Denis169</a>
          </div>
        </div>
      </div>
    `;
    return header;
  }

  mainSection() {
    const mainSection = document.createElement('section');
    mainSection.className = 'main';
    return mainSection;
  }
}

export const layout = new Layout();
