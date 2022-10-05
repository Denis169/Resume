class Skill {
  private readonly skill: HTMLDivElement;
  private readonly _rating: number;
  constructor(svg: string, rating: number) {
    this._rating = rating;
    this.skill = document.createElement('div');
    this.skill.className = 'skill';
    this.skill.innerHTML = `
      <div class='skill__circle'>
        ${svg}
      </div>
      <div class="skill__rating"></div>
    `;

    const skillRating = this.skill.querySelector('.skill__rating');
    for (let i = 0; i < 5; i++) {
      const mark = document.createElement('div');
      mark.className = 'mark';
      if (i < this._rating) {
        mark.classList.add('mark__good');
      }
      skillRating && skillRating.append(mark);
    }
  }

  appendTo(parent: HTMLElement) {
    parent.append(this.skill);
  }
}

export default Skill;
