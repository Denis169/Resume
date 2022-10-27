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
        <p class="name__name">MARIA</p>
        <p class="name__surname">LAHIMAKHAVA</p>
        <p class="name__profession">PROJECT MANAGER</p>
      </div>
      <div class="contacts">
        <div class="contact">
          ${svg.mailSvg()}
          <div class="contact__description">
            <h2 class="contact__header">Email:</h2>
            <a class="contact__value" href="mailto: tsekhanovich92@mail.ru">tsekhanovich92@mail.ru</a>
          </div>
        </div>
        <div class="contact">
          ${svg.telegramSvg()}
          <div class="contact__description">
            <h2 class="contact__header">Telegram:</h2>
            <a class="contact__value" href="tg://resolve?domain=garrykarry">@garrykarry</a>
          </div>
        </div>
        <div class="contact">
          ${svg.phoneSvg()}
          <div class="contact__description">
            <h2 class="contact__header">Phone:</h2>
            <a class="contact__value" href="tel: +375336129818">+375 (33) 612-98-18</a>
          </div>
        </div>
        <div class="contact">
          ${svg.linkedInSvg()}
          <div class="contact__description">
            <h2 class="contact__header">LinkedIn:</h2>
            <a class="contact__value" href="https://www.linkedin.com/in/maria-lahimakhava-a0742b106/">My profile</a>
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
      new Skill(skillSvg.jira(), 5).appendTo(skills);
      new Skill(skillSvg.confluence(), 5).appendTo(skills);
      new Skill(skillSvg.trello(), 5).appendTo(skills);
      new Skill(skillSvg.slack(), 5).appendTo(skills);
      new Skill(skillSvg.notion(), 3).appendTo(skills);
      new Skill(skillSvg.miro(), 3).appendTo(skills);
      new Skill(skillSvg.jsSvg(), 2).appendTo(skills);
      new Skill(skillSvg.htmlSvg(), 3).appendTo(skills);
      new Skill(skillSvg.cssSvg(), 3).appendTo(skills);
      new Skill(skillSvg.gitlab(), 2).appendTo(skills);
      new Skill(skillSvg.figmaSvg(), 3).appendTo(skills);
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
          <p class="course__ear">January 2022</p>
        </div>
        <div class="course__description">
          <p class="course__title">Stratoplan Management School</p>
          <p class="course__name">Team management</p>
        </div>
      </div>

      <div class="course">
        <div class="course__ears">
          <p class="course__ear">January 2021</p>
        </div>
        <div class="course__description">
          <p class="course__title">Udemy</p>
          <p class="course__name">Project and product management. Scrum master</p>
        </div>
      </div>
      
      <div class="course">
        <div class="course__ears">
          <p class="course__ear">December 2020</p>
        </div>
        <div class="course__description">
          <p class="course__title">Udemy</p>
          <p class="course__name">Agile Scrum</p>
        </div>
      </div>
      <div class="course">
        <div class="course__ears">
          <p class="course__ear">September 2020</p>
        </div>
        <div class="course__description">
          <p class="course__title">MBA</p>
          <p class="course__name">Management and economics of a modern enterprise</p>
        </div>
      </div>
      <div class="course">
        <div class="course__ears">
          <p class="course__ear">September 2010</p>
          <p class="course__ear">July 2015</p>
        </div>
        <div class="course__description">
          <p class="course__title">Mogilev Kuleshov State University</p>
          <p class="course__name">Foreign languages</p>
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
        Extremely motivated to start and finish successful projects with the help of existing skills and knowledge. 
        Analytical thinking. Improved soft skills.
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
          <p class="work__ear">2019 December</p>
          <p class="work__ear">Till now</p>
        </div>
        <div class="work__description">
          <p class="work__title">FinWin Technologies</p>
          <p class="work__name">PM / PO</p>
        </div>
      </div>
      <div class="work">
        <div class="work__ears">
          <p class="work__ear">2020 March</p>
          <p class="work__ear">2020 September</p>
        </div>
        <div class="work__description">
          <p class="work__title">FinWin Technologies</p>
          <p class="work__name">QA</p>
        </div>
      </div>
      <div class="work">
        <div class="work__ears">
          <p class="work__ear">2018 December</p>
          <p class="work__ear">2019 December</p>
        </div>
        <div class="work__description">
          <p class="work__title">Seykom</p>
          <p class="work__name">PM / PO</p>
        </div>
      </div>
      <div class="work">
        <div class="work__ears">
          <p class="work__ear">2018 March</p>
          <p class="work__ear">2019 January</p>
        </div>
        <div class="work__description">
          <p class="work__title">Seykom</p>
          <p class="work__name">Technical Support engineer</p>
        </div>
      </div>
      <div class="work">
        <div class="work__ears">
          <p class="work__ear">2017 July</p>
          <p class="work__ear">2018 March</p>
        </div>
        <div class="work__description">
          <p class="work__title">Seykom</p>
          <p class="work__name">Software Support specialist</p>
        </div>
      </div>
      <div class="work">
        <div class="work__ears">
          <p class="work__ear">2016 September</p>
          <p class="work__ear">2019 April</p>
        </div>
        <div class="work__description">
          <p class="work__title">Biglion</p>
          <p class="work__name">Client Service manager</p>
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
      <p class="languages__item">Italian - A1</p>
      <p class="languages__item">German - A2</p>
      <p class="languages__item">Russian - native speaker</p>
    `;

    return languages;
  }
}

export const layout = new Layout();
