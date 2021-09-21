window.addEventListener("load", function () {



fetch("https://jpc-api.herokuapp.com/projects")
  .then(projs => {
    return projs.json();
  }) // Convert data to json
  .then(data => {
    const dynProjectData = data
      .map(project =>{
        return`
        <div class="col-md-6 portfolio-item filter-app">
          <div class="portfolio-wrap">
            <div class="portfolio-info row">
              <div class="col-lg-4 col-md-12">
                <img src="https://source.unsplash.com/random/800x800" class="img-fluid port-img" alt="">
              </div>

              <div class="col-lg-8 col-md-12">
                <h4 class="mt-2">${project.title}</h4>
                <p class="mb-2 secon-t"><strong><i class="far fa-calendar pr-2"></i> </strong>4 Months | 2021</p>
                <p class="mb-2 secon-t"><strong><i class="fas fa-shapes pr-2"></i></strong> MERN Stack, AI-ChatBot, Google Map-API, HTML-Email</p>
              </div>

              </div class="col-12">
                <div class="port-desc mt-3 p-2">
                  <p>${project.desc}</p>
                </div>
                <div class="port-links d-flex justify-content-center">
                  <a href="${project.code.link}"><i class="pr-2 fab fa-github"></i>${project.code.text}</a>
                  <span class="port-divr"></span>
                  <a href="${project.demo.link}"><i class="pr-2 fas fa-globe"></i>${project.demo.text}</a>
                </div>

              </div>
            </div>
        </div>
        `;
      }).join("");
      document.querySelector("#dynamicProjectsContainer").insertAdjacentHTML("afterbegin", dynProjectData);
    //   document.append.body(dynProjectData);
  })
  .catch(e => {
    // catch any errors
    alert("API error: " + e);
  });
});