const menu = [
  {
    id: 1,
    title: "rosół",
    category: "zupa",
    price: 15.99,
    img: "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/rosol_0.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "pomidorowa",
    category: "zupa",
    price: 13.99,
    img: "https://d3iamf8ydd24h9.cloudfront.net/pictures/articles/2018/06/74982-v-900x556.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "ogorkowa",
    category: "shakes",
    price: 6.99,
    img: "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/ogorkowa-01.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "kapusniak",
    category: "breakfast",
    price: 20.99,
    img: "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/kapusniak_01_0.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "barszcz czerwony",
    category: "lunch",
    price: 22.99,
    img: "https://www.mniammniam.com/obrazki_mobile/czerwony_barszcz1_mobile.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "barszcz bialy",
    category: "shakes",
    price: 18.99,
    img: "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/barszcz_bialy_01_00.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "zupa grochowa",
    category: "breakfast",
    price: 8.99,
    img: "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/zupa_grochowa_01-1.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "kwasnica",
    category: "lunch",
    price: 12.99,
    img: "https://www.spizarnia.schroniskosmakow.pl/media/magefan_blog/kwa_nica_przepis.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "pierogi",
    category: "shakes",
    price: 16.99,
    img: "https://nowcookthis.com/wp-content/uploads/2020/03/homemade-pierogi-2.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "gołąbki",
    category: "dinner",
    price: 39.99,
    img: "https://cdn.aniagotuje.com/pictures/articles/2020/09/7375865-v-720x866.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];




const sectionCenter = document.querySelector(".section-center");

const container = document.querySelector('.btn-container')


//load items
window.addEventListener("DOMContentLoaded", function (){
  displayMenuItems(menu);
  displayMenuButtons();
  
});
//filter items 



function displayMenuItems(menuItems){

  let displayMenu = menuItems.map(function(item){
    // console.log(item);
    return `<article class="menu-item">
    <img src=${item.img} alt=${item.title} class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
    </article>`;
  });
  displayMenu = displayMenu.join("")
  sectionCenter.innerHTML = displayMenu;
};

function displayMenuButtons() {
  const categories =menu.reduce(function(values,item){
    if(!values.includes(item.category)) {
      values.push(item.category)
    }
    return values;
  },
  ['all']
  );
  const categoryBtns = categories.map(function(category){
    return `<button type="button" class="filter-btn" 
    data-id=${category}>
    ${category}
    </button>`;
  }).join("");
  container.innerHTML = categoryBtns;

  const filterBtns = container.querySelectorAll('.filter-btn');
  //fileter item 
filterBtns.forEach(function(btn){
  btn.addEventListener('click',function(e){
    const catergory = e.currentTarget.dataset.id ;
    const menuCategory = menu.filter(function(menuItem){
      // console.log(menuItem.category);
      if(menuItem.category === catergory){
        
        return menuItem;
      }
    });
    // console.log(menuCategory);
    if (catergory === 'all'){
      displayMenuItems(menu);
    }
    else {
      displayMenuItems(menuCategory);
    }
  })
})


}









// // get parent element
// const sectionCenter = document.querySelector(".section-center");
// const btnContainer = document.querySelector(".btn-container");
// // display all items when page loads
// window.addEventListener("DOMContentLoaded", function () {
//   diplayMenuItems(menu);
//   displayMenuButtons();
// });

// function diplayMenuItems(menuItems) {
//   let displayMenu = menuItems.map(function (item) {
//     // console.log(item);

//     return `<article class="menu-item">
//           <img src=${item.img} alt=${item.title} class="photo" />
//           <div class="item-info">
//             <header>
//               <h4>${item.title}</h4>
//               <h4 class="price">$${item.price}</h4>
//             </header>
//             <p class="item-text">
//               ${item.desc}
//             </p>
//           </div>
//         </article>`;
//   });
//   displayMenu = displayMenu.join("");
//   // console.log(displayMenu);

//   sectionCenter.innerHTML = displayMenu;
// }
// function displayMenuButtons() {
//   const categories = menu.reduce(
//     function (values, item) {
//       if (!values.includes(item.category)) {
//         values.push(item.category);
//       }
//       return values;
//     },
//     ["all"]
//   );
//   const categoryBtns = categories
//     .map(function (category) {
//       return `<button type="button" class="filter-btn" data-id=${category}>
//           ${category}
//         </button>`;
//     })
//     .join("");

//   btnContainer.innerHTML = categoryBtns;
//   const filterBtns = btnContainer.querySelectorAll(".filter-btn");
//   console.log(filterBtns);

//   filterBtns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//       // console.log(e.currentTarget.dataset);
//       const category = e.currentTarget.dataset.id;
//       const menuCategory = menu.filter(function (menuItem) {
//         // console.log(menuItem.category);
//         if (menuItem.category === category) {
//           return menuItem;
//         }
//       });
//       if (category === "all") {
//         diplayMenuItems(menu);
//       } else {
//         diplayMenuItems(menuCategory);
//       }
//     });
//   });
// }
