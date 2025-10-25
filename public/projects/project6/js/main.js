function get_products() {
  for (let i = 0; i < products.length; i++) {
    product_container.innerHTML += `<div class="product-box">
                <div class="top">
                  <img
                    src="${products[i].image}"
                    alt=""
                  />
                </div>
                <div class="bottom flex">
                  <div class="price">
                    <div class="number margin-right-pr-box">
                      <span>${products[i].price}</span>
                    </div>
                    <div class="currency margin-right-pr-box">
                      <button type="button" id="gel" value="₾">₾</button>
                      <button type="button" id="usd" value="$">$</button>
                    </div>
                    <span class="margin-right-pr-box color_lite" id="symbol">₾</span>
                    <span class="margin-right-pr-box color_lite" id="area">${products[i].area_price}</span>
                  </div>
                  <div class="title">
                    <p>${products[i].title}</p>
                  </div>
                  <div class="location flex">
                    <span class="material-symbols-outlined"> location_on </span
                    ><span class="text"
                      >${products[i].adress}</span
                    >
                  </div>
                  <div class="parameters flex">
                    <div class="pr-box flex">
                      <img src="./images/sartuli.svg" alt="" />
                      <span>${products[i].stage}</span>
                    </div>
                    <div class="pr-box flex">
                      <img src="./images/doors.svg" alt="" />
                      <span>${products[i].doors}</span>
                    </div>
                    <div class="pr-box flex">
                      <img src="./images/bed.svg" alt="" />
                      <span>${products[i].bed}</span>
                    </div>
                    <div class="pr-box flex">
                      <img src="./images/area.svg" alt="" />
                      <span>${products[i].area}</span>
                    </div>
                  </div>
                  <div class="location-time flex">
                    <div class="city">${products[i].location}</div>
                    <div class="time flex">
                      <span class="material-symbols-outlined"> schedule </span
                      ><span>${products[i].time}</span>
                    </div>
                  </div>
                </div>
              </div>`;
  }
}

function price_filter() {
  let min = parseInt(document.querySelector("#dan").value);
  let max = parseInt(document.querySelector("#mde").value);
  product_container.innerHTML = "";
  if (min >= 0 || max >= 0) {
    products = products.filter((a) => a.price_num >= min && a.price_num <= max);
    get_products();
  } else {
    get_products();
  }
}

// function searchProducts(inputed) {
//   inputed = document.querySelector("#inputed").value.toLowerCase();
//   bytitleproduct = products.filter((g) =>
//     g.title.toLowerCase().includes(inputed)
//   );
//   output(bytitleproduct);
// }

function sendMessage() {
  let message = document.querySelector("#chat_message").value;
  document.querySelector(
    "#chat-content"
  ).innerHTML += `<p><b>მე:</b> <i>${message}</i></p>`;
  document.querySelector("#chat_message").value = "";
}

function openchat() {
  if (document.querySelector("#chatting").innerHTML == "") {
    document.querySelector(
      "#chatting"
    ).innerHTML = `<div class="chat-windows" id="chatWindow">
          <div class="chat-content" id="chat-content"></div>
          <form action="">
            <textarea
              name="chat"
              id="chat_message"
              placeholder="შეიყვანე ტექსტი"
              required
            ></textarea>
            <button type="button" id="send" onclick="sendMessage()">
              გაგზავნა
            </button>
          </form>
        </div>`;
  } else {
    document.querySelector("#chatting").innerHTML = "";
  }
}

function area_filter() {
  let min = parseInt(document.querySelector("#area_input_dan").value);
  let max = parseInt(document.querySelector("#area_input_mde").value);
  product_container.innerHTML = "";

  products = products.filter((a) => a.area_num >= min && a.area_num <= max);
  get_products();
  banner.innerHTML = "";
}

function deal_type(a) {
  let buyng = document.querySelector("#buy").value;
  let qira = document.querySelector("#qira").value;
  product_container.innerHTML = "";
  if (a == "ქირავდება") {
    products = products.filter((q) => q.deal_type == qira);
    get_products();
  } else {
    products = products.filter((q) => q.deal_type == buyng);
    get_products();
  }
}

function building_type(a) {
  let personal = document.querySelector("#personal").value;
  let apartament = document.querySelector("#apartament").value;
  product_container.innerHTML = "";
  if (a == "კერძო") {
    products = products.filter((q) => q.building_type == personal);
    get_products();
  } else {
    products = products.filter((q) => q.building_type == apartament);
    get_products();
  }
}

function sort_low_to_high() {
  product_container.innerHTML = "";
  products = products.sort((a, b) => a.price_num - b.price_num);
  get_products();
}

function sort_high_to_low() {
  product_container.innerHTML = "";
  products = products.sort((a, b) => b.price_num - a.price_num);
  get_products();
}

function show_filter() {
  let banner = document.querySelector("#for_types");
  if (banner.innerHTML == "") {
    banner.innerHTML += `<div class="type_filter">
              <div class="type_boxes">
                <div class="types_box">
                  <p>გარიგების ტიპი</p>
                  <div class="types flex">
                    <button
                      type="button"
                      id="buy"
                      value="იყიდება"
                      onclick="deal_type('იყიდება')"
                    >
                      იყიდება
                    </button>
                    <button
                      type="button"
                      id="qira"
                      value="ქირავდება"
                      onclick="deal_type('ქირავდება')"
                    >
                      ქირავდება
                    </button>
                  </div>
                </div>
                <div class="types_box">
                  <p>ქონების ტიპი</p>
                  <div class="types flex">
                    <button
                      type="button"
                      id="personal"
                      value="კერძო"
                      onclick="building_type('კერძო')"
                    >
                      კერძო სახლი
                    </button>
                    <button
                      type="button"
                      id="apartament"
                      value="ბინა"
                      onclick="building_type('ბინა')"
                    >
                      ბინა
                    </button>
                  </div>
                </div>
                <div class="types_box">
                  <p>ფართობი</p>
                  <div class="types flex">
                    <div class="area_filter">
                      <input
                        type="text"
                        maxlength="6"
                        id="area_input_dan"
                        placeholder="დან"
                      />
                      <span>/ მ²</span>
                      <span>-</span>
                      <input
                        type="text"
                        maxlength="6"
                        id="area_input_mde"
                        placeholder="მდე"
                      />
                      <span>/ მ²</span>
                      <button type="button" onclick="area_filter()">
                        გაფილტრე
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="buttons flex">
                <button type="button" onclick="close_filter()">დახურვა</button>
              </div>
            </div>`;
  } else {
    banner.innerHTML = "";
  }
}

function close_filter() {
  let banner = document.querySelector("#for_types");
  banner.innerHTML = "";
}

function search() {
  let location = document.querySelector("#input-1").value;
  let title_input = document.querySelector("#input-2").value;
  if (location == "") {
    product_container.innerHTML = "";
    products = products.filter((q) => q.title.includes(title_input));
    get_products();
  } else if (title_input == "") {
    product_container.innerHTML = "";
    products = products.filter((q) => q.location == location);
    get_products();
  } else if (location == "" && title_input == "") {
    product_container.innerHTML = product_container.innerHTML;
  } else {
    product_container.innerHTML = "";
    products = products.filter(
      (q) => q.location == location && q.title.includes(title_input)
    );
    get_products();
  }
}

let products = [
  {
    image:
      "https://api-statements.tnet.ge/uploads/202510/20251021/statements/AVm3SEe68f7b3cc06324.webp",
    price: "416,165",
    price_num: 416165,
    title: "იყიდება 5 ოთახიანი კერძო სახლი ბორჯომში",
    building_type: "კერძო",
    deal_type: "იყიდება",
    adress: "სადგერი, საქართველო",
    stage: "1",
    bed: "5",
    doors: "5",
    area: "107 მ²",
    area_num: 107,
    location: "ბორჯომი",
    time: "21 მარ 17:29",
    time_num: "202522031729",
    get area_price() {
      return (this.price_num / this.area_num).toFixed(0) + " / მ²";
    },
  },
  {
    image:
      "https://api-statements.tnet.ge/uploads/202409/20240907/statements/g1xQqlP66dbd93b5aefd_thumb.webp",
    price: "50",
    price_num: 50,
    title: "ქირავდება დღიურად 2 ოთახიანი ბინა საბურთალოზე",
    building_type: "ბინა",
    deal_type: "ქირავდება",
    adress: "პეკინის ქუჩა",
    stage: "13",
    bed: "2",
    doors: "3",
    area: "41 მ²",
    area_num: 41,
    location: "საბურთალო",
    time: "25 მარ 11:29",
    time_num: "202525031729",
    get area_price() {
      return (this.price_num / this.area_num).toFixed(0) + " / მ²";
    },
  },
  {
    image:
      "https://api-statements.tnet.ge/uploads/202409/20240907/statements/9viDK9266dbd93b4bbbc_thumb.webp",
    price: "91,552",
    price_num: 91525,
    title: "იყიდება 1 ოთახიანი ბინა ბორჯომის მუნიციპალიტეტში",
    building_type: "ბინა",
    deal_type: "იყიდება",
    adress: "ლიკანის ქუჩები ლიკანი",
    stage: "4",
    bed: "1",
    doors: "1",
    area: "35 მ²",
    area_num: 35,
    location: "ლიკანი",
    time: "1 იან 17:25",
    time_num: "202301011725",
    get area_price() {
      return (this.price_num / this.area_num).toFixed(0) + " / მ²";
    },
  },
  {
    image:
      "https://api-statements.tnet.ge/uploads/202510/20251021/statements/AVm3SEe68f7b3cc06324.webp",
    price: "85,000",
    price_num: 85000,
    title: "იყიდება 3 ოთახიანი ბინა ქუთაისში",
    building_type: "ბინა",
    deal_type: "იყიდება",
    adress: "ი.აბაშიძის N10",
    stage: "2",
    bed: "2",
    doors: "1",
    area: "42 მ²",
    area_num: 42,
    location: "ქუთაისი",
    time: "24 თებ 13:25",
    time_num: "202502241325",
    get area_price() {
      return (this.price_num / this.area_num).toFixed(0) + " / მ²";
    },
  },
  {
    image:
      "https://api-statements.tnet.ge/uploads/202503/20250311/statements/6rxWhnQ67cf505fc5d77_thumb.webp",
    price: "125,000",
    price_num: 125000,
    title: "იყიდება 2 ოთახიანი ბინა თბილისში",
    building_type: "ბინა",
    deal_type: "იყიდება",
    adress: "2 სულხან ცინცაძის ქუჩა, თბილისი",
    stage: "15",
    bed: "2",
    doors: "1",
    area: "85 მ²",
    area_num: 85,
    location: "თბილისი",
    time: "12 მარ 13:25",
    time_num: "202503121325",
    get area_price() {
      return (this.price_num / this.area_num).toFixed(0) + " / მ²";
    },
  },
  {
    image:
      "https://api-statements.tnet.ge/uploads/202410/20241016/statements/Hg9fm4U670fd470c52b7_thumb.webp",
    price: "385,365",
    price_num: 385365,
    title: "იყიდება 4 ოთახიანი ბინა თბილისში",
    building_type: "ბინა",
    deal_type: "იყიდება",
    adress: "13 ვაჟა-ფშაველას ქუჩა, მე-4 შესახვევი, თბილისი",
    stage: "3",
    bed: "4",
    doors: "6",
    area: "128 მ²",
    area_num: 128,
    location: "თბილისი",
    time: "12 მარ 13:25",
    time_num: "202503121325",
    get area_price() {
      return (this.price_num / this.area_num).toFixed(0) + " / მ²";
    },
  },
  {
    image:
      "https://api-statements.tnet.ge/uploads/202409/20240919/statements/ft8WHmL66eb349045e3a_thumb.webp",
    price: "135,758",
    price_num: 135758,
    title: "იყიდება სტუდიოს ტიპის ბინა თბილისში",
    building_type: "ბინა",
    deal_type: "იყიდება",
    adress: "13 ი.ჭავჭავაძის გამზ. თბილისი",
    stage: "18",
    bed: "1",
    doors: "1",
    area: "35 მ²",
    area_num: 35,
    location: "თბილისი",
    time: "12 მარ 13:25",
    time_num: "202503121325",
    get area_price() {
      return (this.price_num / this.area_num).toFixed(0) + " / მ²";
    },
  },
  {
    image:
      "https://api-statements.tnet.ge/uploads/202502/20250221/statements/R4rjsn467b8216e60a00_thumb.webp",
    price: "60,000",
    price_num: 60000,
    title: "იყიდება 1 ოთახიანი ბინა ზესტაფონში",
    building_type: "ბინა",
    deal_type: "იყიდება",
    adress: "ათონელის ქუჩა, N2, ზესტაფონი",
    stage: "4",
    bed: "1",
    doors: "2",
    area: "40 მ²",
    area_num: 40,
    location: "ზესტაფონი",
    time: "20 მარ 12:09",
    time_num: "202503201209",
    get area_price() {
      return (this.price_num / this.area_num).toFixed(0) + " / მ²";
    },
  },
  {
    image:
      "https://api-statements.tnet.ge/uploads/202503/20250318/statements/fLvo09w67d9cf757659b_thumb.webp",
    price: "80",
    price_num: 80,
    title: "ქირავდება დღიურად 2 ოთახიანი ბინა ქუთაისში",
    building_type: "ბინა",
    deal_type: "ქირავდება",
    adress: "David Agmashenebeli Ave",
    stage: "4",
    bed: "2",
    doors: "3",
    area: "40 მ²",
    area_num: 40,
    location: "ქუთაისი",
    time: "10 მარ 12:09",
    time_num: "202503101209",
    get area_price() {
      return (this.price_num / this.area_num).toFixed(0) + " / მ²";
    },
  },
  {
    image:
      "https://api-statements.tnet.ge/uploads/202408/20240805/statements/xzvRL4466b0c40ca79b1.webp",
    price: "199,714",
    price_num: 199714,
    title: "იყიდება 4 ოთახიანი ბინა ქუთაისში",
    building_type: "ბინა",
    deal_type: "იყიდება",
    adress: "Meskhi Street I Shes.",
    stage: "4",
    bed: "4",
    doors: "4",
    area: "112 მ²",
    area_num: 112,
    location: "ქუთაისი",
    time: "13 მარ 12:09",
    time_num: "202503131209",
    get area_price() {
      return (this.price_num / this.area_num).toFixed(0) + " / მ²";
    },
  },
  {
    image:
      "https://api-statements.tnet.ge/uploads/202503/20250304/statements/WoitVQn67c6cc1e85b42.webp",
    price: "2,496",
    price_num: 2496,
    title: "ქირავდება 3 ოთახიანი ბინა ქუთაისში",
    building_type: "ბინა",
    deal_type: "ქირავდება",
    adress: "ქუთაისი, საქართველო",
    stage: "6",
    bed: "2",
    doors: "3",
    area: "92 მ²",
    area_num: 92,
    location: "ქუთაისი",
    time: "28 მარ 12:09",
    time_num: "202503281209",
    get area_price() {
      return (this.price_num / this.area_num).toFixed(0) + " / მ²";
    },
  },
  {
    image:
      "https://api-statements.tnet.ge/uploads/202502/20250216/statements/CL3VXUm67b1f7df1b359.webp",
    price: "771,116",
    price_num: 771116,
    title: "იყიდება 7 ოთახიანი კერძო სახლი მცხეთაში",
    building_type: "კერძო",
    deal_type: "იყიდება",
    adress: "წეროვანი",
    stage: "0",
    bed: "5",
    doors: "7",
    area: "374 მ²",
    area_num: 374,
    location: "მცხეთა",
    time: "24 მარ 12:09",
    time_num: "202503241209",
    get area_price() {
      return (this.price_num / this.area_num).toFixed(0) + " / მ²";
    },
  },
  // {
  //   image:
  //     "https://api-statements.tnet.ge/uploads/202502/20250221/statements/R4rjsn467b8216e60a00_thumb.webp",
  //   price: "60,000",
  //   price_num: 60000,
  //   title: "იყიდება 1 ოთახიანი ბინა ზესტაფონში",
  //   building_type: "ბინა",
  //   deal_type: "იყიდება",
  //   adress: "ათონელის ქუჩა, N2, ზესტაფონი",
  //   stage: "4",
  //   bed: "1",
  //   doors: "2",
  //   area: "40 მ²",
  //   area_num: 40,
  //   location: "ზესტაფონი",
  //   time: "20 მარ 12:09",
  //   time_num: "202503201209",
  //   get area_price() {
  //     return (this.price_num / this.area_num).toFixed(2) + " / მ²";
  //   },
  // },
  // {
  //   image:
  //     "https://api-statements.tnet.ge/uploads/202502/20250221/statements/R4rjsn467b8216e60a00_thumb.webp",
  //   price: "60,000",
  //   price_num: 60000,
  //   title: "იყიდება 1 ოთახიანი ბინა ზესტაფონში",
  //   building_type: "ბინა",
  //   deal_type: "იყიდება",
  //   adress: "ათონელის ქუჩა, N2, ზესტაფონი",
  //   stage: "4",
  //   bed: "1",
  //   doors: "2",
  //   area: "40 მ²",
  //   area_num: 40,
  //   location: "ზესტაფონი",
  //   time: "20 მარ 12:09",
  //   time_num: "202503201209",
  //   get area_price() {
  //     return (this.price_num / this.area_num).toFixed(2) + " / მ²";
  //   },
  // },
  // {
  //   image:
  //     "https://api-statements.tnet.ge/uploads/202502/20250221/statements/R4rjsn467b8216e60a00_thumb.webp",
  //   price: "60,000",
  //   price_num: 60000,
  //   title: "იყიდება 1 ოთახიანი ბინა ზესტაფონში",
  //   building_type: "ბინა",
  //   deal_type: "იყიდება",
  //   adress: "ათონელის ქუჩა, N2, ზესტაფონი",
  //   stage: "4",
  //   bed: "1",
  //   doors: "2",
  //   area: "40 მ²",
  //   area_num: 40,
  //   location: "ზესტაფონი",
  //   time: "20 მარ 12:09",
  //   time_num: "202503201209",
  //   get area_price() {
  //     return (this.price_num / this.area_num).toFixed(2) + " / მ²";
  //   },
  // },
  // {
  //   image:
  //     "https://api-statements.tnet.ge/uploads/202502/20250221/statements/R4rjsn467b8216e60a00_thumb.webp",
  //   price: "60,000",
  //   price_num: 60000,
  //   title: "იყიდება 1 ოთახიანი ბინა ზესტაფონში",
  //   building_type: "ბინა",
  //   deal_type: "იყიდება",
  //   adress: "ათონელის ქუჩა, N2, ზესტაფონი",
  //   stage: "4",
  //   bed: "1",
  //   doors: "2",
  //   area: "40 მ²",
  //   area_num: 40,
  //   location: "ზესტაფონი",
  //   time: "20 მარ 12:09",
  //   time_num: "202503201209",
  //   get area_price() {
  //     return (this.price_num / this.area_num).toFixed(2) + " / მ²";
  //   },
  // },
  // {
  //   image:
  //     "https://api-statements.tnet.ge/uploads/202502/20250221/statements/R4rjsn467b8216e60a00_thumb.webp",
  //   price: "60,000",
  //   price_num: 60000,
  //   title: "იყიდება 1 ოთახიანი ბინა ზესტაფონში",
  //   building_type: "ბინა",
  //   deal_type: "იყიდება",
  //   adress: "ათონელის ქუჩა, N2, ზესტაფონი",
  //   stage: "4",
  //   bed: "1",
  //   doors: "2",
  //   area: "40 მ²",
  //   area_num: 40,
  //   location: "ზესტაფონი",
  //   time: "20 მარ 12:09",
  //   time_num: "202503201209",
  //   get area_price() {
  //     return (this.price_num / this.area_num).toFixed(2) + " / მ²";
  //   },
  // },
  // {
  //   image:
  //     "https://api-statements.tnet.ge/uploads/202502/20250221/statements/R4rjsn467b8216e60a00_thumb.webp",
  //   price: "60,000",
  //   price_num: 60000,
  //   title: "იყიდება 1 ოთახიანი ბინა ზესტაფონში",
  //   building_type: "ბინა",
  //   deal_type: "იყიდება",
  //   adress: "ათონელის ქუჩა, N2, ზესტაფონი",
  //   stage: "4",
  //   bed: "1",
  //   doors: "2",
  //   area: "40 მ²",
  //   area_num: 40,
  //   location: "ზესტაფონი",
  //   time: "20 მარ 12:09",
  //   time_num: "202503201209",
  //   get area_price() {
  //     return (this.price_num / this.area_num).toFixed(2) + " / მ²";
  //   },
  // },
  // {
  //   image:
  //     "https://api-statements.tnet.ge/uploads/202502/20250221/statements/R4rjsn467b8216e60a00_thumb.webp",
  //   price: "60,000",
  //   price_num: 60000,
  //   title: "იყიდება 1 ოთახიანი ბინა ზესტაფონში",
  //   building_type: "ბინა",
  //   deal_type: "იყიდება",
  //   adress: "ათონელის ქუჩა, N2, ზესტაფონი",
  //   stage: "4",
  //   bed: "1",
  //   doors: "2",
  //   area: "40 მ²",
  //   area_num: 40,
  //   location: "ზესტაფონი",
  //   time: "20 მარ 12:09",
  //   time_num: "202503201209",
  //   get area_price() {
  //     return (this.price_num / this.area_num).toFixed(2) + " / მ²";
  //   },
  // },
  // {
  //   image:
  //     "https://api-statements.tnet.ge/uploads/202502/20250221/statements/R4rjsn467b8216e60a00_thumb.webp",
  //   price: "60,000",
  //   price_num: 60000,
  //   title: "იყიდება 1 ოთახიანი ბინა ზესტაფონში",
  //   building_type: "ბინა",
  //   deal_type: "იყიდება",
  //   adress: "ათონელის ქუჩა, N2, ზესტაფონი",
  //   stage: "4",
  //   bed: "1",
  //   doors: "2",
  //   area: "40 მ²",
  //   area_num: 40,
  //   location: "ზესტაფონი",
  //   time: "20 მარ 12:09",
  //   time_num: "202503201209",
  //   get area_price() {
  //     return (this.price_num / this.area_num).toFixed(2) + " / მ²";
  //   },
  // },
  // {
  //   image:
  //     "https://api-statements.tnet.ge/uploads/202502/20250221/statements/R4rjsn467b8216e60a00_thumb.webp",
  //   price: "60,000",
  //   price_num: 60000,
  //   title: "იყიდება 1 ოთახიანი ბინა ზესტაფონში",
  //   building_type: "ბინა",
  //   deal_type: "იყიდება",
  //   adress: "ათონელის ქუჩა, N2, ზესტაფონი",
  //   stage: "4",
  //   bed: "1",
  //   doors: "2",
  //   area: "40 მ²",
  //   area_num: 40,
  //   location: "ზესტაფონი",
  //   time: "20 მარ 12:09",
  //   time_num: "202503201209",
  //   get area_price() {
  //     return (this.price_num / this.area_num).toFixed(2) + " / მ²";
  //   },
  // },
  // {
  //   image:
  //     "https://api-statements.tnet.ge/uploads/202502/20250221/statements/R4rjsn467b8216e60a00_thumb.webp",
  //   price: "60,000",
  //   price_num: 60000,
  //   title: "იყიდება 1 ოთახიანი ბინა ზესტაფონში",
  //   building_type: "ბინა",
  //   deal_type: "იყიდება",
  //   adress: "ათონელის ქუჩა, N2, ზესტაფონი",
  //   stage: "4",
  //   bed: "1",
  //   doors: "2",
  //   area: "40 მ²",
  //   area_num: 40,
  //   location: "ზესტაფონი",
  //   time: "20 მარ 12:09",
  //   time_num: "202503201209",
  //   get area_price() {
  //     return (this.price_num / this.area_num).toFixed(2) + " / მ²";
  //   },
  // },
  // {
  //   image:
  //     "https://api-statements.tnet.ge/uploads/202502/20250221/statements/R4rjsn467b8216e60a00_thumb.webp",
  //   price: "60,000",
  //   price_num: 60000,
  //   title: "იყიდება 1 ოთახიანი ბინა ზესტაფონში",
  //   building_type: "ბინა",
  //   deal_type: "იყიდება",
  //   adress: "ათონელის ქუჩა, N2, ზესტაფონი",
  //   stage: "4",
  //   bed: "1",
  //   doors: "2",
  //   area: "40 მ²",
  //   area_num: 40,
  //   location: "ზესტაფონი",
  //   time: "20 მარ 12:09",
  //   time_num: "202503201209",
  //   get area_price() {
  //     return (this.price_num / this.area_num).toFixed(2) + " / მ²";
  //   },
  // },
];

let all_items = products;

function get_all_products() {
  let all_product_container = document.getElementById("products");
  product_container = all_product_container;
  all_product_container.innerHTML = "";
  for (let i = 0; i < all_items.length; i++) {
    product_container.innerHTML += `<div class="product-box">
            <div class="top">
              <img
                src="${all_items[i].image}"
                alt=""
              />
            </div>
            <div class="bottom flex">
              <div class="price">
                <div class="number margin-right-pr-box">
                  <span>${all_items[i].price}</span>
                </div>
                <div class="currency margin-right-pr-box">
                  <button type="button" id="gel" value="₾">₾</button>
                  <button type="button" id="usd" value="$">$</button>
                </div>
                <span class="margin-right-pr-box color_lite" id="symbol">₾</span>
                <span class="margin-right-pr-box color_lite" id="area">${all_items[i].area_price}</span>
              </div>
              <div class="title">
                <p>${all_items[i].title}</p>
              </div>
              <div class="location flex">
                <span class="material-symbols-outlined"> location_on </span
                ><span class="text"
                  >${all_items[i].adress}</span
                >
              </div>
              <div class="parameters flex">
                <div class="pr-box flex">
                  <img src="./images/sartuli.svg" alt="" />
                  <span>${all_items[i].stage}</span>
                </div>
                <div class="pr-box flex">
                  <img src="./images/doors.svg" alt="" />
                  <span>${all_items[i].doors}</span>
                </div>
                <div class="pr-box flex">
                  <img src="./images/bed.svg" alt="" />
                  <span>${all_items[i].bed}</span>
                </div>
                <div class="pr-box flex">
                  <img src="./images/area.svg" alt="" />
                  <span>${all_items[i].area}</span>
                </div>
              </div>
              <div class="location-time flex">
                <div class="city">${all_items[i].location}</div>
                <div class="time flex">
                  <span class="material-symbols-outlined"> schedule </span
                  ><span>${all_items[i].time}</span>
                </div>
              </div>
            </div>
          </div>`;
  }
  products = all_items;
}

let product_container = document.getElementById("products");
for (let i = 0; i < products.length; i++) {
  product_container.innerHTML += `<div class="product-box">
          <div class="top">
            <img
              src="${products[i].image}"
              alt=""
            />
          </div>
          <div class="bottom flex">
            <div class="price">
              <div class="number margin-right-pr-box">
                <span>${products[i].price}</span>
              </div>
              <div class="currency margin-right-pr-box">
                <button type="button" id="gel" value="₾">₾</button>
                <button type="button" id="usd" value="$">$</button>
              </div>
              <span class="margin-right-pr-box color_lite" id="symbol">₾</span>
              <span class="margin-right-pr-box color_lite" id="area">${products[i].area_price}</span>
            </div>
            <div class="title">
              <p>${products[i].title}</p>
            </div>
            <div class="location flex">
              <span class="material-symbols-outlined"> location_on </span
              ><span class="text"
                >${products[i].adress}</span
              >
            </div>
            <div class="parameters flex">
              <div class="pr-box flex">
                <img src="./images/sartuli.svg" alt="" />
                <span>${products[i].stage}</span>
              </div>
              <div class="pr-box flex">
                <img src="./images/doors.svg" alt="" />
                <span>${products[i].doors}</span>
              </div>
              <div class="pr-box flex">
                <img src="./images/bed.svg" alt="" />
                <span>${products[i].bed}</span>
              </div>
              <div class="pr-box flex">
                <img src="./images/area.svg" alt="" />
                <span>${products[i].area}</span>
              </div>
            </div>
            <div class="location-time flex">
              <div class="city">${products[i].location}</div>
              <div class="time flex">
                <span class="material-symbols-outlined"> schedule </span
                ><span>${products[i].time}</span>
              </div>
            </div>
          </div>
        </div>`;
}

// function output(g) {
//   product_container = document.getElementById("products");
//   for (let i = 0; i < products.length; i++) {
//     product_container.innerHTML += `<div class="product-box">
//           <div class="top">
//             <img
//               src="${products[i].image}"
//               alt=""
//             />
//           </div>
//           <div class="bottom flex">
//             <div class="price">
//               <div class="number margin-right-pr-box">
//                 <span>${products[i].price}</span>
//               </div>
//               <div class="currency margin-right-pr-box">
//                 <button type="button" id="gel" value="₾">₾</button>
//                 <button type="button" id="usd" value="$">$</button>
//               </div>
//               <span class="margin-right-pr-box color_lite" id="symbol">₾</span>
//               <span class="margin-right-pr-box color_lite" id="area">${products[i].area_price}</span>
//             </div>
//             <div class="title">
//               <p>${products[i].title}</p>
//             </div>
//             <div class="location flex">
//               <span class="material-symbols-outlined"> location_on </span
//               ><span class="text"
//                 >${products[i].adress}</span
//               >
//             </div>
//             <div class="parameters flex">
//               <div class="pr-box flex">
//                 <img src="./images/sartuli.svg" alt="" />
//                 <span>${products[i].stage}</span>
//               </div>
//               <div class="pr-box flex">
//                 <img src="./images/doors.svg" alt="" />
//                 <span>${products[i].doors}</span>
//               </div>
//               <div class="pr-box flex">
//                 <img src="./images/bed.svg" alt="" />
//                 <span>${products[i].bed}</span>
//               </div>
//               <div class="pr-box flex">
//                 <img src="./images/area.svg" alt="" />
//                 <span>${products[i].area}</span>
//               </div>
//             </div>
//             <div class="location-time flex">
//               <div class="city">${products[i].location}</div>
//               <div class="time flex">
//                 <span class="material-symbols-outlined"> schedule </span
//                 ><span>${products[i].time}</span>
//               </div>
//             </div>
//           </div>
//         </div>`;
//   }
// }
