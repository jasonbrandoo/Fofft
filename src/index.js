import "./style/index.scss";

const template = [
  {
    name: "anyway",
    params: {
      company: "",
    },
  },
  {
    name: "back",
  },
  {
    name: "bag",
  },
  {
    name: "ballmer",
  },
  {
    name: "asshole",
  },
  {
    name: "bday",
  },
  {
    name: "because",
  },
  {
    name: "blackadder",
  },
  {
    name: "bm",
  },
  {
    name: "bus",
  },
  {
    name: "bye",
  },
  {
    name: "bucket",
  },
  {
    name: "caniuse",
  },
  {
    name: "chainsaw",
  },
  {
    name: "cocksplat",
  },
  {
    name: "cool",
  },
  {
    name: "cup",
  },
  {
    name: "dalton",
  },
  {
    name: "deraadt",
    params: {
      nama: "",
    },
  },
  {
    name: "diabetes",
  },
  {
    name: "donut",
  },
  {
    name: "dosomething",
    from: "",
    params: {
      do: "",
      something: "",
    },
  },
  {
    name: "equity",
  },
  {
    name: "even",
  },
  {
    name: "everyone",
  },
  {
    name: "everything",
  },
  {
    name: "family",
  },
  {
    name: "fascinating",
  },
  {
    name: "fewer",
  },
  {
    name: "field",
  },
  {
    name: "flying",
  },
  {
    name: "ftfy",
  },
  {
    name: "fts",
  },
  {
    name: "fyyff",
  },
  {
    name: "gfy",
  },
  {
    name: "give",
  },
  {
    name: "greed",
  },
  {
    name: "holygrail",
  },
  {
    name: "horse",
  },
  {
    name: "idea",
  },
  {
    name: "immensity",
  },
  {
    name: "ing",
  },
  {
    name: "jinglebells",
  },
  {
    name: "keep",
  },
  {
    name: "keepcalm",
  },
  {
    name: "king",
  },
  {
    name: "legend",
  },
  {
    name: "life",
  },
  {
    name: "linus",
  },
  {
    name: "logs",
  },
  {
    name: "look",
  },
  {
    name: "looking",
  },
  {
    name: "maybe",
  },
  {
    name: "me",
  },
  {
    name: "mornin",
  },
  {
    name: "no",
  },
  {
    name: "nugget",
  },
  {
    name: "madison",
  },
  {
    name: "off",
  },
  {
    name: "off-with",
  },
  {
    name: "outside",
  },
  {
    name: "particular",
  },
  {
    name: "pink",
  },
  {
    name: "problem",
  },
  {
    name: "programmer",
  },
  {
    name: "pulp",
  },
  {
    name: "question",
  },
  {
    name: "ratsarse",
  },
  {
    name: "retard",
  },
  {
    name: "ridiculous",
  },
  {
    name: "rockstar",
  },
  {
    name: "rtfm",
  },
  {
    name: "sake",
  },
  {
    name: "shakespeare",
  },
  {
    name: "shit",
  },
  {
    name: "shutup",
  },
  {
    name: "single",
  },
  {
    name: "thanks",
  },
  {
    name: "that",
  },
  {
    name: "think",
  },
  {
    name: "thinking",
  },
  {
    name: "this",
  },
  {
    name: "thumbs",
  },
  {
    name: "too",
  },
  {
    name: "tucker",
  },
  {
    name: "waste",
  },
  {
    name: "what",
  },
  {
    name: "xmas",
  },
  {
    name: "yoda",
  },
  {
    name: "you",
  },
  {
    name: "zayn",
  },
  {
    name: "zero",
  },
];

const TemplateList = () => {
  const html = `
    <div class="template-list__text">Choose </div>
    <select class="template-list__select">
      <option selected disabled>Select this shit</option>
      ${template.map((value) => {
        return `<option class="fuckoff-option" value=${value.name}>${value.name}</option>`;
      })}
    </select>
  `;
  return html;
};

const Input = (props) => {
  const { params } = props;
  let html = "";
  if (params) {
    for (const val in params) {
      html += `
        <label class="template-input__list">
          ${val}
          <input class="template-input__field" type="text" name=${val} />
        </label>
      `;
    }
    html += `
      <label class="template-input__list">
        From
        <input class="template-input__field" type="text" name="from" />
      </label>
      <button class="template-input__button" type="button">Generate</button>
    `;
  } else {
    html = `
      <label class="template-input__list">
        From
        <input class="template-input__field" type="text" name="from" />
      </label>
      <button class="template-input__button" type="button">Generate</button>
    `;
  }
  return html;
};

const Result = () => {
  const html = `
    <div>FUCK YOU</div>
  `;
  return html;
};

const App = () => {
  document.querySelector(".template-list").innerHTML = TemplateList();

  let obj = {};
  let arr = [];

  document
    .querySelector(".template-list__select")
    .addEventListener("change", (e) => {
      const filterList = template.find(
        (value) => value.name === e.target.value
      );

      arr.push(filterList.name);

      document.querySelector(".template-input").innerHTML = Input(filterList);

      document.querySelectorAll(".template-input__field").forEach((node) => {
        node.addEventListener("focusout", (e) => {
          obj = {
            [e.target.name]: e.target.value,
          };
          for (const val in obj) {
            arr.push(obj[val]);
          }
        });
      });

      document
        .querySelector(".template-input__button")
        .addEventListener("click", () => {
          const urlParams = arr.join("/");
          fetchFoaas(urlParams);
          obj = {};
          arr = [];
          document.querySelector(".template-result").innerHTML = Result();
          document.querySelector(".template-result").classList =
            "template-result template-result--show";
          document
            .querySelector(".template-result")
            .scrollIntoView({ behavior: "smooth" });
        });
    });
};

App();

async function fetchFoaas(urlParams) {
  console.log(`https://foaas.com/${urlParams}`);
}
