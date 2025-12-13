// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro T",
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 28,
      days: "TTh",
      instructor: "Sis A",
    },
  ],

  enrollStudent(sectionNum) {
    const index = this.sections.findIndex(s => s.sectionNum === sectionNum);
    if (index >= 0) {
      this.sections[index].enrolled++;
      renderSections(this.sections);
    }
  },

  dropStudent(sectionNum) {
    const index = this.sections.findIndex(s => s.sectionNum === sectionNum);
    if (index >= 0 && this.sections[index].enrolled > 0) {
      this.sections[index].enrolled--;
      renderSections(this.sections);
    }
  }
};

function setCourseInfo(course) {
  document.querySelector("#courseName").textContent = course.name;
  document.querySelector("#courseCode").textContent = course.code;
}

function sectionTemplate(section) {
  return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`;
}

function renderSections(sections) {
  const html = sections.map(sectionTemplate);
  document.querySelector("#sections").innerHTML = html.join("");
}

document.querySelector("#enrollStudent").addEventListener("click", () => {
  const num = Number(document.querySelector("#sectionNumber").value);
  aCourse.enrollStudent(num);
});

document.querySelector("#dropStudent").addEventListener("click", () => {
  const num = Number(document.querySelector("#sectionNumber").value);
  aCourse.dropStudent(num);
});

setCourseInfo(aCourse);
renderSections(aCourse.sections);