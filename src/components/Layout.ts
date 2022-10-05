import { svg } from './Svg';
import Skill from './Skill';
import { skillSvg } from './SkillSvg';
import Subtitle from './Subtitle';
import { config } from './Chart';
import { ChartItem } from 'chart.js';
import Chart from 'chart.js/auto';

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
            <a class="contact__value" href="tel: +375296125038">+375 (29) 612-50-38</a>
          </div>
        </div>
        <div class="contact">
          ${svg.linkedInSvg()}
          <div class="contact__description">
            <h2 class="contact__header">LinkedIn:</h2>
            <a class="contact__value" href="https://www.linkedin.com/in/dzianis-lahimakhau-559083212/">My profile</a>
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
    mainSection.innerHTML = `
      <div class="left" id="main-left">
        <div class="skills" id="skills"></div>
      </div>
      <div class="right" id="main-right"></div>
    `;

    const left: HTMLElement | null = mainSection.querySelector('#main-left');
    const right: HTMLElement | null = mainSection.querySelector('#main-right');

    if (left) {
      new Subtitle('MY SKILLS').prependTo(left);
    }

    const skills: HTMLElement | null = mainSection.querySelector('#skills');

    if (skills) {
      new Skill(skillSvg.jsSvg(), 4).appendTo(skills);
      new Skill(skillSvg.reactSvg(), 4).appendTo(skills);
      new Skill(skillSvg.htmlSvg(), 4).appendTo(skills);
      new Skill(skillSvg.cssSvg(), 4).appendTo(skills);
      new Skill(skillSvg.sassSvg(), 4).appendTo(skills);
      new Skill(skillSvg.githubSvg(), 4).appendTo(skills);
      new Skill(skillSvg.tsSvg(), 3).appendTo(skills);
      new Skill(skillSvg.webpackSvg(), 4).appendTo(skills);
      new Skill(skillSvg.reduxSvg(), 4).appendTo(skills);
      new Skill(skillSvg.figmaSvg(), 3).appendTo(skills);
      new Skill(skillSvg.nodejsSvg(), 2).appendTo(skills);
    }

    if (left) {
      new Subtitle('EDUCATION').appendTo(left);
      left.append(this.education());
      new Subtitle('LANGUAGES').appendTo(left);
      left.append(this.languages());
    }

    if (right) {
      right.append(this.aboutMe());
      new Subtitle('EXPERIENCE').appendTo(right);
      right.append(this.experience());
      new Subtitle('SOFT SKILLS').appendTo(right);
      right.append(this.myChart());
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const myChart = new Chart(right.querySelector('#myChart') as ChartItem, config);
      Chart.defaults.color = '#d7d7d7';
    }

    return mainSection;
  }

  education() {
    const education = document.createElement('div');
    education.className = 'education';
    education.innerHTML = `

      <div class="course">
        <div class="course__ears">
          <p class="course__ear">May 2022</p>
          <p class="course__ear">September 2022</p>
        </div>
        <div class="course__description">
          <p class="course__title">RS School</p>
          <p class="course__name">JS / FRONT-END</p>
        </div>
      </div>
      
      <div class="course">
        <div class="course__ears">
          <p class="course__ear">May 2021</p>
          <p class="course__ear">January 2022</p>
        </div>
        <div class="course__description">
          <p class="course__title">INTELLECT FOX</p>
          <p class="course__name">Frontend developer</p>
        </div>
      </div>
      <div class="course">
        <div class="course__ears">
          <p class="course__ear">March 2021</p>
        </div>
        <div class="course__description">
          <p class="course__title">IT-ACADEMY</p>
          <p class="course__name">Computer Science</p>
        </div>
      </div>
      <div class="course">
        <div class="course__ears">
          <p class="course__ear">2006</p>
          <p class="course__ear">2011</p>
        </div>
        <div class="course__description">
          <p class="course__title">Belarusian National Technical University</p>
          <p class="course__name">Organization of transportation and management of road and city transport</p>
        </div>
      </div>
    `;

    return education;
  }

  aboutMe() {
    const aboutMe = document.createElement('div');
    aboutMe.className = 'about';
    aboutMe.innerHTML = `
      <h2 class="about__header">ABOUT ME</h2>
      <p class="about__text">
        Extremely motivated to constantly develop personal skills and grow professionally.
        Good logical thinking. Improved soft skills. I'm on fire with frontend development. 
        I am open for job offers.
      </p>
    `;
    return aboutMe;
  }

  experience() {
    const experience = document.createElement('div');
    experience.className = 'experience';
    experience.innerHTML = `
      <div class="work">
        <div class="work__ears">
          <p class="work__ear">2022 February</p>
          <p class="work__ear">Till now</p>
        </div>
        <div class="work__description">
          <p class="work__title">Finwin Technologies</p>
          <p class="work__name">Frontend developer</p>
        </div>
      </div>
      <div class="work">
        <div class="work__ears">
          <p class="work__ear">2014 July</p>
          <p class="work__ear">2022 January</p>
        </div>
        <div class="work__description">
          <p class="work__title">BelFlagman</p>
          <p class="work__name">Head of Sales department</p>
        </div>
      </div>
      <div class="work">
        <div class="work__ears">
          <p class="work__ear">2011 August</p>
          <p class="work__ear">2014 July</p>
        </div>
        <div class="work__description">
          <p class="work__title">BelFlagman</p>
          <p class="work__name">Sales manager</p>
        </div>
      </div>
    `;

    return experience;
  }

  myChart() {
    const chart = document.createElement('div');
    chart.className = 'myChart';
    chart.innerHTML = `
      <canvas id="myChart"></canvas>
    `;

    return chart;
  }

  languages() {
    const languages = document.createElement('div');
    languages.className = 'languages';
    languages.innerHTML = `
      <p class="languages__item">English - B1</p>
      <p class="languages__item">Belarusian - native speaker</p>
      <p class="languages__item">Russian - native speaker</p>
    `;

    return languages;
  }
}

export const layout = new Layout();
