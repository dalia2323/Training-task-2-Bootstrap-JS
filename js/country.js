let countriesDetail = [];
let countryDetail = document.getElementById('countryDetail');

/////////////////////////
const url = "https://restcountries.com/v3.1/all";
fetch(url)
  .then(response => response.json())
  .then(data => {
    countriesDetail = data.slice(0, 8);
    displayCountriesDetail(5); // Display details for the 6th country (index 5)
  })
  .catch((error) => {
    console.error("Error:", error);
  });

///////////////////
function displayCountriesDetail(countryIndex) {
  if (countriesDetail.length === 0 || countryIndex < 0 || countryIndex >= countriesDetail.length) {
    // Handle invalid index or empty data
    return;
  }

  let result = ''; // Initialize the result variable

  result += `
    <div class="row">
      <div class="col-md-6 col-sm-12 ps-lg-5">
          <a type="button" href="index.html"
              class="btn btn-dark-blue mt-lg-2 rounded-2 btn-sm w-width d-block text-light">
              <i class="fa-solid fa-arrow-left pe-2"></i>
              Back</a>
          <img src='${countriesDetail[countryIndex].flags.svg}' class="img-fluid w-img mt-5 ">
      </div>
      <div class="col-md-6 col-sm-12 ">
          <div class="row mt-5">
              <div class="col-md-6 col-sm-12  pt-lg-5 ">
                  <h2 class="mt-3 mb-4">${countriesDetail[countryIndex].name.common}</h2>
                  <div class="fw-lighter fs-6 detail">
                      <ul class="list-unstyled">
                          <li><b>Native Name</b>: ${
                            countriesDetail[countryIndex].name.native
                              ? countriesDetail[countryIndex].name.native.common
                              : 'N/A'
                          }</li>
                          <li><b>Population</b>: ${countriesDetail[countryIndex].population || 'N/A'}</li>
                          <li><b>Region</b>: ${countriesDetail[countryIndex].region || 'N/A'}</li>
                          <li><b>Sub Region</b>: ${countriesDetail[countryIndex].subregion || 'N/A'}</li>
                          <li><b>Capital</b>: ${
                            countriesDetail[countryIndex].capital
                              ? countriesDetail[countryIndex].capital[0]
                              : 'N/A'
                          }</li>
                      </ul>
                  </div>
              </div>
              <div class="col-md-6 col-sm-12 mt-20 fw-lighter">
                  <ul class="list-unstyled">
                      <li><b>Top Level Domain</b>: ${
                        countriesDetail[countryIndex].tld
                          ? countriesDetail[countryIndex].tld[0]
                          : 'N/A'
                      }</li>
                      <li><b>Currencies</b>: ${
                        countriesDetail[countryIndex].currencies
                          ? countriesDetail[countryIndex].currencies.XPF[0]
                          : 'N/A'
                      }</li>
                      <li><b>Languages</b>: ${
                        countriesDetail[countryIndex].languages
                          ? countriesDetail[countryIndex].languages[0]
                          : 'N/A'
                      } </li>
                  </ul>
              </div>
          </div>
          <div class="row  pt-lg-4">
              <div class="col-md-12 col-sm-12 fw-lighter detail">
                  <div class=" d-flex country-border bg-very-dark-blue">
                      <div class="d-inline-block"><b>Border Countries:</b></div>
                      <span class=" d-inline-block w-width ms-2 bg-dark-blue shadow-lg">France </span>
                      <span class=" d-inline-block w-width ms-2 bg-dark-blue shadow-lg">Belgium</span>
                      <span class=" d-inline-block w-width ms-2 bg-dark-blue shadow-lg">Netherlands</span>
                  </div>
              </div>
          </div>
      </div>
    </div>`;

  countryDetail.innerHTML = result;
}
