function handleResize() {
  let catalog = document.querySelectorAll(".catalog-container");

  if (window.innerWidth <= 808) {
    catalog.forEach(function (elemento) {
      elemento.classList.remove("catalog-container");
    });
  } else {
    console.log("no se pudo desarrollar");
  }
}

window.addEventListener("resize", handleResize);

handleResize();

let buttonW = document.getElementsByClassName("button-price");

for (let i = 0; i < buttonW.length; i++) {
  buttonW[i].addEventListener("click", function () {
    let numeroTelefono = "3187523425";
    let enlaceWhatsApp = "https://wa.me/" + numeroTelefono;

    window.location.href = enlaceWhatsApp;
  });
}

repeatImg = () => {
  const firstFather = document.querySelector(".first-body");
  for (let i = 1; i <= 26; i += 2) {
    let img = `img/img${i}.PNG`;
    let imgSecond = `img/img${i + 1}.PNG`;
    console.log(img);
    console.log(imgSecond);
    HTML = `
        <div class="grid-content">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
            <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center">
              <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center boxShadow pb-2">
                <img src="${img}" alt="lavadora" class="image-width">
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
            <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center">
              <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center boxShadow pb-2">
                <img src="${imgSecond}" alt="lavadora" class="image-width">
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
    firstFather.innerHTML += HTML;
  }
};

repeatImg();

repeatImgSecond = () => {
  const firstFather = document.querySelector(".second-body");
  for (let i = 1; i <= 26; i += 2) {
    let img = `img/mn${i}.PNG`;
    let imgSecond = `img/mn${i + 1}.PNG`;
    console.log(img);
    console.log(imgSecond);
    HTML = `
          <div class="grid-content">
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
              <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center">
                <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center boxShadow pb-2">
                  <img src="${img}" alt="lavadora" class="image-width">
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
              <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center">
                <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center boxShadow pb-2">
                  <img src="${imgSecond}" alt="lavadora" class="image-width">
                </div>
              </div>
            </div>
          </div>
        </div>
          `;
    firstFather.innerHTML += HTML;
    if (i == 25) {
        let img = i + 2;
        let imgs = `img/mn${img}.PNG`;
        HTML = `
          <div class="grid-content">
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
              <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center">
                <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center boxShadow pb-2">
                  <img src="${imgs}" alt="lavadora" class="image-width">
                </div
              </div>
            </div>
          `;
    firstFather.innerHTML += HTML;
      }
  }
};

repeatImgSecond();

repeatImgFourth = () => {
    const firstFather = document.querySelector(".fourth-body");
    for (let i = 1; i <= 19; i += 2) {
      let img = `img/te${i}.PNG`;
      let imgSecond = `img/te${i + 1}.PNG`;
      console.log(img);
      console.log(imgSecond);
      HTML = `
          <div class="grid-content">
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
              <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center">
                <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center boxShadow pb-2">
                  <img src="${img}" alt="lavadora" class="image-width">
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
              <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center">
                <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center boxShadow pb-2">
                  <img src="${imgSecond}" alt="lavadora" class="image-width">
                </div>
              </div>
            </div>
          </div>
        </div>
          `;
      firstFather.innerHTML += HTML;
      if (i == 19) {
        let img = i + 2;
        let imgs = `img/te${img}.PNG`;
        HTML = `
          <div class="grid-content">
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
              <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center">
                <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center boxShadow pb-2">
                  <img src="${imgs}" alt="lavadora" class="image-width">
                </div>
              </div>
            </div>
          `;
    firstFather.innerHTML += HTML;
      }
    }
    
  };

repeatImgFourth()

repeatImgFiveth = () => {
    const firstFather = document.querySelector(".fiveth-body");
    for (let i = 1; i <= 26; i += 2) {
      let img = `img/ce${i}.PNG`;
      let imgSecond = `img/ce${i + 1}.PNG`;
      console.log(img);
      console.log(imgSecond);
      HTML = `
            <div class="grid-content">
            <div class="row">
              <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center">
                  <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center boxShadow pb-2">
                    <img src="${img}" alt="lavadora" class="image-width">
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center">
                  <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center boxShadow pb-2">
                    <img src="${imgSecond}" alt="lavadora" class="image-width">
                  </div>
                </div>
              </div>
            </div>
          </div>
            `;
      firstFather.innerHTML += HTML;
      if (i == 25) {
          let img = i + 2;
          let imgs = `img/ce${img}.PNG`;
          HTML = `
            <div class="grid-content">
            <div class="row">
              <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center">
                  <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center boxShadow pb-2">
                    <img src="${imgs}" alt="lavadora" class="image-width">
                  </div>
                </div>
              </div>
            `;
      firstFather.innerHTML += HTML;
        }
    }
  };
  
  repeatImgFiveth();

repeatImgSixth = () => {
    const firstFather = document.querySelector(".sixth-body");
    for (let i = 1; i <= 19; i += 2) {
      let img = `img/pin${i}.PNG`;
      let imgSecond = `img/pin${i + 1}.PNG`;
      console.log(img);
      console.log(imgSecond);
      HTML = `
          <div class="grid-content">
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
              <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center">
                <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center boxShadow pb-2">
                  <img src="${img}" alt="lavadora" class="image-width">
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
              <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center">
                <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center boxShadow pb-2"> 
                  <img src="${imgSecond}" alt="lavadora" class="image-width">
                </div>
              </div>
            </div>
          </div>
        </div>
          `;
      firstFather.innerHTML += HTML;
      if (i == 19) {
        let img = i + 2;
        let imgs = `img/pin${img}.PNG`;
        HTML = `
          <div class="grid-content">
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
              <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center">
                <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center boxShadow pb-2">
                  <img src="${imgs}" alt="lavadora" class="image-width">
                </div>
              </div>
            </div>
          `;
    firstFather.innerHTML += HTML;
      }
    }
  };

repeatImgSixth();

repeatImgSeventh = () => {
    const firstFather = document.querySelector(".seventh-body");
    for (let i = 1; i <= 19; i += 2) {
      let img = `img/mub${i}.PNG`;
      let imgSecond = `img/mub${i + 1}.PNG`;
      console.log(img);
      console.log(imgSecond);
      HTML = `
          <div class="grid-content">
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
              <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center">
                <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center boxShadow pb-2">
                  <img src="${img}" alt="lavadora" class="image-width">
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
              <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center">
                <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center boxShadow pb-2">
                  <img src="${imgSecond}" alt="lavadora" class="image-width">
                </div>
              </div>
            </div>
          </div>
        </div>
          `;
      firstFather.innerHTML += HTML;
    }
  };

repeatImgSeventh();

repeatImgEigth = () => {
  const firstFather = document.querySelector(".eigth-body");
  for (let i = 1; i <= 24; i += 2) {
    let img = `img/co${i}.PNG`;
    let imgSecond = `img/co${i + 1}.PNG`;
    console.log(img);
    console.log(imgSecond);
    HTML = `
        <div class="grid-content">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
            <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center">
              <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center boxShadow pb-2">
                <img src="${img}" alt="lavadora" class="image-width">
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
            <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center">
              <div class="w-100 bg-transparent d-flex justify-content-center aling-items-center boxShadow pb-2">
                <img src="${imgSecond}" alt="lavadora" class="image-width">
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
    firstFather.innerHTML += HTML;
  }
};

repeatImgEigth();
  