import './css/styles.css';
import Notiflix from 'notiflix';
import { debounce } from 'lodash';
import { fetchCountries } from './fetchCountries.js';

const searchBox = document.querySelector("#search-box");
const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");

const DEBOUNCE_DELAY = 300;

// function showAtLeastTwo() {

// }

function searchAndShowCountries(event) {
    const inputedValue = event.target.value.trim();
    countryList.innerHTML = "";
    countryInfo.innerHTML = "";
    if (inputedValue.length !== 0) {
        fetchCountries(inputedValue)
        .then(data => console.log(data))
    }
};

searchBox.addEventListener('input', debounce(searchAndShowCountries, DEBOUNCE_DELAY))