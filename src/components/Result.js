const Result = (props) => {
  let html = '';

  if (props) {
    html += `
      <div class="template-result__message">${props.message}</div>
      <div class="template-result__subtitle">${props.subtitle}</div>
    `;
  } else {
    html += `
      <div class="template-result__loading">FUCKING LOADING</div>
    `;
  }
  return html;
};

export default Result;
