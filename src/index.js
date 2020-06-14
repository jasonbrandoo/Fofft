import './style/index.scss';
import template from './data';
import List from './components/List';
import Input from './components/Input';
import Result from './components/Result';

const App = () => {
  let obj = {}; // Object for handle api field
  let arr = []; // Array for make new URL

  // Render list of option
  document.querySelector('.template-list').innerHTML = List();

  // Handle option event
  document.querySelector('.template-list__select').addEventListener('change', (eventList) => {
    const filterList = template.find((value) => value.name === eventList.target.value);

    arr = [];
    arr.push(filterList.url.split('/')[1]);

    // Render input from selected option
    document.querySelector('.template-input').innerHTML = Input(filterList);

    // Handle input event
    document.querySelectorAll('.template-input__field').forEach((node) => {
      node.addEventListener('focusout', (eventInput) => {
        obj = {
          [eventInput.target.name]: eventInput.target.value,
        };
        Object.keys(obj).forEach((val) => {
          arr.push(obj[val]);
        });
      });
    });

    // Handle click event from inputed data
    document.querySelector('.template-input__button').addEventListener('click', async () => {
      if (Object.keys(obj).length === 0) {
        alert('Please input all field');
      } else {
        document.querySelector('.template-result').classList =
          'template-result template-result--show';

        // Scroll to bottom page
        document.querySelector('.template-result').scrollIntoView({ behavior: 'smooth' });

        const urlParams = arr.join('/');

        // Render result with null value
        document.querySelector('.template-result').innerHTML = Result(null);

        const message = await fetchFoaas(urlParams);

        // Render result with data from api
        document.querySelector('.template-result').innerHTML = Result(message);

        // Reset Object and Array
        obj = {};
        arr = [];
      }
    });
  });
};

// Init
App();

async function fetchFoaas(urlParams) {
  const res = await fetch(`https://foaas.com/${urlParams}`, {
    headers: {
      Accept: 'application/json',
    },
  });
  const json = await res.json();
  return json;
}
