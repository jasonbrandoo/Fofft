const Input = (props) => {
  const { fields } = props;
  let html = '';

  fields.map((value) => {
    html += `
      <label for="${value.name}" class="template-input__list">
        ${value.name}
        </label>
      <input id="${value.name}" class="template-input__field" type="text" name=${value.field} />
    `;
  });

  html += `
    <button class="template-input__button" type="button">
      Generate
    </button>
  `;

  return html;
};

export default Input;
