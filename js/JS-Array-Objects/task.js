/* Theory
// const array = [1, 2, 3, 5, "madiyar", true];
// const array = new Array(1, 2, 3, 5, "madiyar", true);
// console.log(array);
// const array = [1, 2, 3, 5];
// console.log(array[1]);
// console.log(array[array.length - 1]); // array.lenght = 4
// array[0] = "Madiyar";
// console.log(array);
// array[5] = "Mad"; */

/*Object Theory
const person = {
  firstName: "Vladilen",

  lastName: "Minin",

  year: 1993,

  hasGirlfriend: false,

  languages: ["ru", "en", "de"],

  getFullName: function () {
    console.log(person.firstName + +person.lastName);
  },
};

console.log(person.year);

console.log(person["languages"]);

const key = "hasGirlfriend";

console.log(person[key]);

person.hasGirlfriend = true;

console.log(person[key]);

person.getFullName(); */

const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

// const notes = ["1task", "2task"];

// function render() {
//   //   for (let i = 0; i < notes.length; i++) {
//   //     listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i]));
//   //   }

//   for (let note of notes) {
//     listElement.insertAdjacentHTML("beforeend", getNoteTemplate(note));
//   }
// }

// render();

// createBtn.onclick = function () {
//   if (inputElement.value.length == 0) {
//     return;
//   }
//   listElement.insertAdjacentHTML(
//     "beforeend",
//     getNoteTemplate(inputElement.value)
//   );
//   inputElement.value = "";
// };

// function getNoteTemplate(title) {
//   return `<li
//           class="list-group-item d-flex justify-content-between align-items-center"
//         >
//           <span>${title}</span>
//           <span>
//             <span class="btn btn-small btn-success">&check;</span>
//             <span class="btn btn-small btn-danger">&times;</span>
//           </span>
//         </li>`;
// }

const notes = [
  {
    title: "1task",
    completed: false,
  },
  {
    title: "2task",
    completed: true,
  },
];

function render() {
  listElement.innerHTML = "";
  if (notes.length == 0) {
    listElement.innerHTML = "<p>Нет элементов</p>";
  }
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i], i));
  }
}

render();

createBtn.onclick = function () {
  if (inputElement.value.length == 0) {
    return;
  }

  const newNote = {
    title: inputElement.value,
    completed: false,
  };
  notes.push(newNote);
  render();
  inputElement.value = "";
};

listElement.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = Number(event.target.dataset.index);
    const type = event.target.dataset.type;

    if (type == "toggle") {
      // console.log("toggle", index);
      notes[index].completed = !notes[index].completed;
    } else if (type == "remove") {
      // console.log("remove", index);
      notes.splice(index, 1);
    }

    render();
  }
  // console.log(event.target.dataset.index);
};

function getNoteTemplate(note, index) {
  return `<li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span class="${
            note.completed ? "text-decoration-line-through" : ""
          }">${note.title}</span>
          <span>
            <span class="btn btn-small btn-${
              note.completed ? "warning" : "success"
            }" data-index="${index}" data-type="toggle">&check;</span>
            <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
          </span>
        </li>`;
}
