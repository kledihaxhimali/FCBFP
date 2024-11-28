$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: false,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 5,
            nav: false
        }
    }
});

$(function() {
    $("#gif1").hover(
        function() {
            $(this).attr("src", "ads/audi-ad.gif");
        },
        function() {
            $(this).attr("src", "ads/audi-frame.gif");
        }
    );
});
$(function() {
    $("#gif2").hover(
        function() {
            $(this).attr("src", "ads/bayern-giff.gif");
        },
        function() {
            $(this).attr("src", "ads/frame-bayern-giff.gif");
        }
    );
});
$(function() {
    $("#gif3").hover(
        function() {
            $(this).attr("src", "ads/audi-ad.gif");
        },
        function() {
            $(this).attr("src", "ads/audi-frame.gif");
        }
    );
});


let showcases = [
    {
      title: "Back At The Top",
      image: "homepage/photo1.jpg"
    },
    {
      title: "Oliver Khan",
      image: "homepage/photo2.jpg"
    },
    {
      title: "Davies",
      image: "homepage/photo3.jpg"
    },
    {
      title: "Training",
      image: "homepage/photo4.jpg"
    },
  ]
  
  const showcase = document.querySelector(".showcase");
  
  showcases.forEach(item => {
    showcase.insertAdjacentHTML("afterbegin", `
                   <div class="showcase__item">
            <h2>${item.title}</h2>
            <img src="${item.image}" alt="${item.title}">
          </div>`);
  })