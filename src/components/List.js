import template from '../data';

const List = () => {
  const html = `
    <div class="template-list__text">Fuck Off Template </div>
    <select class="template-list__select">
      <option selected disabled>Select this shit</option>
      ${template.map((value) => {
        return `<option value="${value.name}">${value.name}</option>`;
      })}
    </select>
  `;
  return html;
};

export default List;
