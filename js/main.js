let countries=[];
let container=document.getElementById('container');
let search=document.querySelector(".search");
console.log(search.value)
console.log(container)
let category=document.querySelector('.category')
console.log(category)
////////////////////
search.addEventListener('keyup', displayCountries);
category.addEventListener('change',displayCountries);
///////////////////
const url="https://restcountries.com/v3.1/all";
    fetch(url)
.then(response=>response.json()
      )
      .then( data=>{
        countries=data.slice(0,8);
        displayCountries(); 
      })
      .catch((error) =>{
        console.error("Error:", error);
      });
/////////////////////
function displayCountries() {
    let result = '';
    let searchValue = search.value.toLowerCase(); 
    let categoryValue = category.value.toLowerCase(); 
    console.log(categoryValue)
    countries.forEach(country => {
      if ((!searchValue || country.name.common.toLowerCase().includes(searchValue)) &&
          (categoryValue=='no filter' ||categoryValue=='filter by region' || country.region.toLowerCase().includes(categoryValue))) {
        result += `
          <div class="col-lg-3 col-md-4 col-sm-6 mt-sm-2 mb-3 rounded-1">
            <a href="country/${country.name.common.toLowerCase()}.html">
              <div class="card  w-width shadow-sm">
                <img src='${country.flags.svg}' class="card-img-top" alt="...">
                <div class="card-body">
                  <h6 class="card-title">${country.name.common}</h6>
                  <p class="card-text"><b>Population</b>: ${country.population}</p>
                  <p class="card-text"><b>Region</b>: ${country.region}</p>
                  <p class="card-text"><b>Capital</b>: ${country.capital[0]}</p>
                </div>
                </a>
              </div>
           
          </div>`;
      }
    });
  
    container.innerHTML = result;
  }
  
////////////////////////
function toggleDarkMode() {
    const body = document.body;
    const container = document.getElementById('container');
    body.classList.toggle("dark-mode");
    container.classList.toggle("dark-mode");
}

const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", toggleDarkMode);

