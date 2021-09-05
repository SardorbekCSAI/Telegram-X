window.addEventListener("DOMContentLoaded", () => {
    //   Telegram users
    let DATA = {
      users: [
        {
          id: 1,
          first_name: "Ulug'bek",
          last_name: "G'ozixonov",
          number:+998993895654,
          avatar: "image/about_image1.png",
          bio: "A L H A M D U L I L L A H",
          user_name: "@bek0120",
          groups_common: 4,
          shared_links: 15,
          shared_photos: 20,
          shared_voice: 47,
          activity: "online",
          messages: [
            {
              id: 1,
              is_from_me: false,
              text: "Salom mening ismim Ulug'bek G'ozixonov",
              time: new Date(),
            },
            {
              id: 2,
              is_from_me: true,
              text: "Men Senior Java dasturchiman",
              time: new Date(),
            },
          ],
        },
  
        //   *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
  
        {
          id: 2,
          first_name: "Dostonbek",
          last_name: "_DEV_",
          number:+998992282178,
          avatar: "image/about_image1.png",
          bio: "Blog: UlugbekBeknazarov",
          user_name: "@BeknazarovU_08_50",
          groups_common: 4,
          shared_links: 25,
          shared_photos: 19,
          shared_voice: 50,
          activity: "online",
          messages: [
            {
              id: 1,
              is_from_me: false,
              text: "Assalomu Alaykum Men Beknazarov Sarvarbekman",
              time: new Date(),
            },
            {
              id: 2,
              is_from_me: true,
              text: "EPAM systemda senier JS ingener bo'lib ishlayman...",
              time: new Date(),
            },
          ],
        },
      
        //   *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
      ],
      me: {
        id: 3,
        first_name: "Yorqulov",
        last_name: "Sardorbek",
        avatar: "about_image2.jpg",
        bio: "Holis niyat, amal, sabr va bir narsaga erishish..",
        user_name: "@UCCS7",
      },
    };

    
    window.localStorage.setItem("messages", JSON.stringify(DATA))
    console.log(DATA.users[0].user_name)


// function add name
let membersElement = document.querySelector(".members")

function addMembers(){
  let j = 0
  while(j < DATA.users.length){
    let newDivElementPerson = document.createElement("div")
    newDivElementPerson.className = "person"
    newDivElementPerson.setAttribute("id", `${DATA.users[j].id}`)
    
    let newDivElementPerImg = document.createElement("div")
    newDivElementPerImg.className = "per-img"
    
    let newImgElement = document.createElement("img")
    newImgElement.src = `${DATA.users[j].avatar}`
    
    newDivElementPerImg.appendChild(newImgElement)
    newDivElementPerson.appendChild(newDivElementPerImg)
    
    // 2-divga o'tamiz
    let newDivElementInfoUser = document.createElement("div")
    newDivElementInfoUser.className = "info-user"
    
    let newPElementFirst = document.createElement("p")
    let newPElementSecond = document.createElement("p")
    newPElementFirst.textContent = `${DATA.users[j].first_name} ${DATA.users[j].last_name}`
    newPElementFirst.className = "full-name"
    newPElementSecond.textContent = `05:32`
    newPElementSecond.className = "hours"
    newDivElementInfoUser.appendChild(newPElementFirst)
    newDivElementInfoUser.appendChild(newPElementSecond)
    
    let spanElement = document.createElement("span")
    let pElement = document.createElement("p")
    
    let idLength = `${DATA.users[j].messages.length}`
    console.log(idLength)
    pElement.textContent = `${DATA.users[j].messages[0].text}`
    let i = DATA.users[j].messages.length
    let messagesForEach = DATA.users[j].messages
    //  messagesForEach.forEach((el) =>  {
    //   console.log(el.is_from_me)
    //   if(el.is_from_me === false){
    //   pElement.style.color="black"
    //   } else {
    //   pElement.style.color="gray"
    //   }
    // })
    spanElement.appendChild(pElement)
    newDivElementInfoUser.appendChild(spanElement)
    newDivElementPerson.appendChild(newDivElementInfoUser)
    
    membersElement.appendChild(newDivElementPerson)
    j++
  }
  

}
addMembers()



// linear searching system
let searchInput = document.querySelector(".searching")
let taskElements = document.querySelectorAll(".full-name")

  searchInput.addEventListener("keyup", function(e){
    let query = e.target.value.toLowerCase();
  
    taskElements.forEach(function(p) {
      p.textContent = p.textContent.toLowerCase()
      if(p.textContent.indexOf(query) != -1){
        p.parentElement.parentElement.style.display = "flex"
      } else {
        p.parentElement.parentElement.style.display = "none"
      }
      p.style.textTransform = "capitalize"
    })
  })

  //  put data members
let membersFullName = document.querySelector(".first-name")
let membersHours = document.querySelector(".hour-tag")
let personElement = document.querySelectorAll(".person")
let contact1 = document.querySelector(".contact1")
let activity = document.querySelector(".activity")
let mobileNum = document.querySelector(".mobile-num")
let username = document.querySelector(".username")
let userImg = document.querySelector("#user-img")
let k = 0

    personElement.forEach((el) => {
      el.addEventListener("click", () => {
        while(k < DATA.users.length){
          userImg.src = `${DATA.users[k].avatar}`
          mobileNum.textContent = `${DATA.users[k].number}`
          username.textContent =  `${DATA.users[k].user_name}`
          activity.textContent = `${DATA.users[k].activity}`
          if(activity.textContent === 'online'){
            activity.style.color = "green"
          }
         
          k++
      }
        membersFullName.textContent = `${el.children[1].children[0].textContent}`
        membersFullName.style.textTransform = "capitalize"
        membersHours.textContent = `${el.children[1].children[1].textContent}`
        contact1.textContent = `${el.children[1].children[0].textContent}`
        contact1.style.textTransform = "capitalize"
        // username.textContent = `${contactUsers}`
        // console.log(contactUsers)
        // messageSelector = `${DATA.users.messages[0].text}`
      })
    })


    


// x-mark for clearing input
let xM = document.querySelector("#x-m")
  
  xM.addEventListener("click", function(e){
  searchInput.value =""
  let taskElements = document.querySelectorAll(".full-name")
  taskElements.forEach(function(p) {
    p.parentElement.parentElement.style.display = "flex"
  })
  })


// Live chat send massage
let liveChat = document.querySelector(".live-chat")
let sendMass = document.querySelector(".sendMass")
let textMass = document.querySelector(".textMass")
let message
let currentChildId



personElement.forEach(function(element) {
  
  element.addEventListener("click", ()=> {
    liveChat.innerHTML = "" // chatni tozalash uchun

    let id = element.getAttribute("id") 
    id -= 0
    currentChildId = id
    console.log(id)

    console.log(DATA.users[id-1].messages)
    let messagesCollection = DATA.users[id-1].messages
    
  // //  Messages colection elelment 0
  // messagesCollection.forEach(function(remEl) {
  //   remEl.children
  //   remEl = {}
  //   console.log(remEl)
  //   })
  //   // 
  
  
    messagesCollection.forEach(function(messagesElement) {

    message = document.createElement("li")
    message.textContent = messagesElement.text
      if(messagesElement.is_from_me == true){
        message.className = "from_me"
      } else {
        message.className = "to_me"
      }
      liveChat.appendChild(message)

    console.log(liveChat.innerHTML)

    })

  

  })

})

// send message

sendMass.addEventListener("click", ()=> {
  if(textMass.value.length > 0){
    DATA.users[currentChildId - 1].messages.push({
      id:  DATA.users[currentChildId - 1].messages.length,
      is_from_me: true,
      text: textMass.value,
      time: new Date(),
    });
    // 
  message = document.createElement("li")

  message.textContent = textMass.value
      message.className = "from_me"
      liveChat.appendChild(message)
      // 
    window.localStorage.setItem(`${DATA.users[currentChildId - 1].messages.length}`,`${textMass.value}`)
    textMass.value=""
  }
  

})
// 

  // a - tag - active
  let aTag = document.querySelectorAll("a");
  function tagActive() {
    aTag.forEach(function (link) {
      link.addEventListener("click", function (e) {
        aTag.forEach(function (el) {
          el.classList.remove("btn-active");
        });
        link.className = "btn-active";
      });
    });
  }

  tagActive();

  // Loader
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.style.opacity = "0.6";

    setTimeout(() => {
      loader.style.opacity = "0.4";
    }, 100);

    setTimeout(() => {
      loader.style.opacity = "0.2";
    }, 150);

    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.display = "none";
    }, 200);
  }, 2000);
  //


  // display-change btns
  let messageContainer = document.querySelector(".message-container")
  let infoChats = document.querySelector(".info-chats")
  let btnChanger = document.querySelector(".check-info-chats")
  let xMark = document.querySelector("#x-mark")

  

  function changeDipslay(){
    btnChanger.addEventListener("click", function(e){
      infoChats.classList.toggle("disp-none")
      messageContainer.classList.toggle("message-container-change")
      btnChanger.src = "image/checkbox_unchecked_focus.png"
    })
   
    xMark.addEventListener("click", function(e){
      btnChanger.src = "image/checkbox_unchecked_disabled.png"
      infoChats.classList.toggle("disp-none")
      messageContainer.classList.toggle("message-container-change")
    })
  }


  
  changeDipslay()

  window.localStorage.setItem(`Users`,`${DATA}`)
 


  // vertual keyboard

  let capslock = false;
let shift = false;
let isLowerCased = false;

let keyboard = {
  first_line: [
    {
      symbol: "`",
      shift: "~",
    },
    {
      symbol: "1",
      shift: "!",
    },
    {
      symbol: "2",
      shift: "@",
    },
    {
      symbol: "3",
      shift: "#",
    },
    {
      symbol: "4",
      shift: "$",
    },
    {
      symbol: "5",
      shift: "%",
    },
    {
      symbol: "6",
      shift: "^",
    },
    {
      symbol: "7",
      shift: "&",
    },
    {
      symbol: "8",
      shift: "*",
    },
    {
      symbol: "9",
      shift: "(",
    },
    {
      symbol: "0",
      shift: ")",
    },
    {
      symbol: "-",
      shift: "_",
    },
    {
      symbol: "=",
      shift: "+",
    },
  ],
  second_line: [
    {
      symbol: "q",
      shift: "Q",
      isLetter: true,
    },
    {
      symbol: "w",
      shift: "W",
      isLetter: true,
    },
    {
      symbol: "e",
      shift: "E",
      isLetter: true,
    },
    {
      symbol: "r",
      shift: "R",
      isLetter: true,
    },
    {
      symbol: "t",
      shift: "T",
      isLetter: true,
    },
    {
      symbol: "y",
      shift: "Y",
      isLetter: true,
    },
    {
      symbol: "u",
      shift: "U",
      isLetter: true,
    },
    {
      symbol: "i",
      shift: "I",
      isLetter: true,
    },
    {
      symbol: "o",
      shift: "O",
      isLetter: true,
    },
    {
      symbol: "p",
      shift: "P",
      isLetter: true,
    },
    {
      symbol: "[",
      shift: "{",
    },
    {
      symbol: "]",
      shift: "}",
    },
    {
      symbol: "\\",
      shift: "|",
    },
  ],
  third_line: [
    {
      symbol: "a",
      shift: "A",
      isLetter: true,
    },
    {
      symbol: "s",
      shift: "S",
      isLetter: true,
    },
    {
      symbol: "d",
      shift: "D",
      isLetter: true,
    },
    {
      symbol: "f",
      shift: "F",
      isLetter: true,
    },
    {
      symbol: "g",
      shift: "G",
      isLetter: true,
    },
    {
      symbol: "h",
      shift: "H",
      isLetter: true,
    },
    {
      symbol: "j",
      shift: "J",
      isLetter: true,
    },
    {
      symbol: "k",
      shift: "K",
      isLetter: true,
    },
    {
      symbol: "l",
      shift: "L",
      isLetter: true,
    },
    {
      symbol: ";",
      shift: ":",
    },
    {
      symbol: "'",
      shift: '"',
    },
  ],
  forth_line: [
    {
      symbol: "z",
      shift: "Z",
      isLetter: true,
    },
    {
      symbol: "x",
      shift: "X",
      isLetter: true,
    },
    {
      symbol: "c",
      shift: "C",
      isLetter: true,
    },
    {
      symbol: "v",
      shift: "V",
      isLetter: true,
    },
    {
      symbol: "b",
      shift: "B",
      isLetter: true,
    },
    {
      symbol: "n",
      shift: "N",
      isLetter: true,
    },
    {
      symbol: "m",
      shift: "M",
      isLetter: true,
    },
    {
      symbol: ",",
      shift: "<",
    },
    {
      symbol: ".",
      shift: ">",
    },
    {
      symbol: "/",
      shift: "?",
    },
  ],
};

let keyboardru = {
  first_line: [
    {
      symbol: "ё",
      shift: "Ё",
    },
    {
      symbol: "1",
      shift: "!",
    },
    {
      symbol: "2",
      shift: '"',
    },
    {
      symbol: "3",
      shift: "№",
    },
    {
      symbol: "4",
      shift: ";",
    },
    {
      symbol: "5",
      shift: "%",
    },
    {
      symbol: "6",
      shift: ":",
    },
    {
      symbol: "7",
      shift: "?",
    },
    {
      symbol: "8",
      shift: "*",
    },
    {
      symbol: "9",
      shift: "(",
    },
    {
      symbol: "0",
      shift: ")",
    },
    {
      symbol: "-",
      shift: "_",
    },
    {
      symbol: "=",
      shift: "+",
    },
  ],
  second_line: [
    {
      symbol: "й",
      shift: "Й",
      isLetter: true,
    },
    {
      symbol: "ц",
      shift: "Ц",
      isLetter: true,
    },
    {
      symbol: "у",
      shift: "У",
      isLetter: true,
    },
    {
      symbol: "к",
      shift: "К",
      isLetter: true,
    },
    {
      symbol: "е",
      shift: "Е",
      isLetter: true,
    },
    {
      symbol: "н",
      shift: "Н",
      isLetter: true,
    },
    {
      symbol: "г",
      shift: "Г",
      isLetter: true,
    },
    {
      symbol: "ш",
      shift: "Ш",
      isLetter: true,
    },
    {
      symbol: "щ",
      shift: "Щ",
      isLetter: true,
    },
    {
      symbol: "з",
      shift: "З",
      isLetter: true,
    },
    {
      symbol: "х",
      shift: "Х",
    },
    {
      symbol: "ъ",
      shift: "Ъ",
    },
    {
      symbol: "\\",
      shift: "/",
    },
  ],
  third_line: [
    {
      symbol: "ф",
      shift: "Ф",
      isLetter: true,
    },
    {
      symbol: "ы",
      shift: "Ы",
      isLetter: true,
    },
    {
      symbol: "в",
      shift: "В",
      isLetter: true,
    },
    {
      symbol: "а",
      shift: "А",
      isLetter: true,
    },
    {
      symbol: "п",
      shift: "П",
      isLetter: true,
    },
    {
      symbol: "р",
      shift: "Р",
      isLetter: true,
    },
    {
      symbol: "о",
      shift: "О",
      isLetter: true,
    },
    {
      symbol: "л",
      shift: "Л",
      isLetter: true,
    },
    {
      symbol: "д",
      shift: "Д",
      isLetter: true,
    },
    {
      symbol: "ж",
      shift: "Ж",
    },
    {
      symbol: "э",
      shift: "Э",
    },
  ],
  forth_line: [
    {
      symbol: "я",
      shift: "Я",
      isLetter: true,
    },
    {
      symbol: "ч",
      shift: "ч",
      isLetter: true,
    },
    {
      symbol: "с",
      shift: "С",
      isLetter: true,
    },
    {
      symbol: "м",
      shift: "М",
      isLetter: true,
    },
    {
      symbol: "и",
      shift: "И",
      isLetter: true,
    },
    {
      symbol: "т",
      shift: "Т",
      isLetter: true,
    },
    {
      symbol: "ь",
      shift: "Ь",
      isLetter: true,
    },
    {
      symbol: "б",
      shift: "Б",
    },
    {
      symbol: "ю",
      shift: "Ю",
    },
    {
      symbol: ".",
      shift: ",",
    },
  ],
};

let openBtn = document.querySelector(".virtual-keyboard");
let closeBtn = document.querySelector(".toggle-keyboard");
let onofKeyboard = document.querySelector(".on-of-keyboard");
let container = document.querySelector(".container-fluid");
let containerNextJs = document.querySelector(".container");

openBtn.addEventListener("click", function (e) {
  container.classList.toggle("open");
  onofKeyboard.classList.toggle("display-block")
  containerNextJs.classList.toggle("display-none")
});
closeBtn.addEventListener("click", function (e) {
    container.classList.toggle("open");
    onofKeyboard.classList.toggle("display-block")
    containerNextJs.classList.toggle("display-none")
  });

let firstLineElement = document.querySelector(".first-line");
let secondLineElement = document.querySelector(".second-line");
let thirdLineElement = document.querySelector(".third-line");
let forthLineElement = document.querySelector(".forth-line");

let shiftBtn;
let keyBank = keyboard;
let russian = document.querySelector(".russian");
let englsh = document.querySelector(".englsh");

russian.addEventListener("click", function (e) {
  keyboard = "";
  keyboard = keyboardru;
  init();
  keyClick();
});

englsh.addEventListener("click", function (e) {
  keyboard = "";
  keyboard = keyBank;
  init();
  keyClick();
});
init();
function init() {
  // First Line

  firstLineElement.innerHTML = "";
  secondLineElement.innerHTML = "";
  thirdLineElement.innerHTML = "";
  forthLineElement.innerHTML = "";

  keyboard.first_line.forEach(function (element) {
    if (capslock) {
      firstLineElement.innerHTML += `<span class="button button-style">${
        element.isLetter ? element.shift : element.symbol
      }</span>`;
    } else {
      firstLineElement.innerHTML += `<span class="button button-style">${
        shift ? element.shift : element.symbol
      }</span>`;
    }
  });

  firstLineElement.innerHTML += `<span class="button-style backspace" style="font-size: 15px;line-height: 48px">Backspace</span>`;

  // Second Line
  secondLineElement.innerHTML += `<span class="button-style tab">Tab</span>`;
  keyboard.second_line.forEach(function (element) {
    if (capslock) {
      secondLineElement.innerHTML += `<span class="button button-style">${
        element.isLetter ? element.shift : element.symbol
      }</span>`;
    } else {
      secondLineElement.innerHTML += `<span class="button button-style">${
        shift ? element.shift : element.symbol
      }</span>`;
    }
  });

  // Third Line
  thirdLineElement.innerHTML += `<span class="capsLock button-style" style="font-size: 15px; text-align: left; padding-left: 10px;">CapsLK
	                <span class="light"></span></span>`;
  keyboard.third_line.forEach(function (element) {
    if (capslock) {
      thirdLineElement.innerHTML += `<span class="button button-style">${
        element.isLetter ? element.shift : element.symbol
      }</span>`;
    } else {
      thirdLineElement.innerHTML += `<span class="button button-style">${
        shift ? element.shift : element.symbol
      }</span>`;
    }
  });
  thirdLineElement.innerHTML += `<span class="button-style enter">Enter</span>`;

  // Forth Line
  forthLineElement.innerHTML += `<span class="button-style shift">Shift</span>`;
  keyboard.forth_line.forEach(function (element) {
    if (capslock) {
      forthLineElement.innerHTML += `<span class="button button-style">${
        element.isLetter ? element.shift : element.symbol
      }</span>`;
    } else {
      forthLineElement.innerHTML += `<span class="button button-style">${
        shift ? element.shift : element.symbol
      }</span>`;
    }
  });
  forthLineElement.innerHTML += `<span class="button-style shift">Shift</span>`;

  shiftBtn = document.querySelectorAll(".shift");
}

let displayElement = document.querySelector(".display");

function keyClick() {
  let btns = document.querySelectorAll("span.button");

  btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      if (!capslock) {
        displayElement.innerHTML += btn.textContent;
      } else {
        displayElement.innerHTML += btn.textContent;
      }

      capslock = isLowerCased ? true : capslock;

      isLowerCased = false;

      init();
      keyClick();
      commandClick();
    });
  });
}
keyClick();
function commandClick() {
  let backSpaceBtn = document.querySelector(".backspace");
  backSpaceBtn.addEventListener("click", function (e) {
    let value = displayElement.innerHTML.split("");
    let popedValue = value.pop();
    value = value.join("");
    displayElement.innerHTML = value;
  });

  let tabBtn = document.querySelector(".tab");
  tabBtn.addEventListener("click", function (e) {
    displayElement.innerHTML += "<span>&emsp;</span>";
  });

  let enterBtn = document.querySelector(".enter");
  enterBtn.addEventListener("click", function (e) {
    console.log(true);
    displayElement.innerHTML += "<br />";
  });

  let capslockBtn = document.querySelector(".capsLock");
  capslockBtn.addEventListener("click", function (e) {
    capslock = !capslock;
    init();
    keyClick();
    commandClick();
  });

  let spaceBtn = document.querySelector(".space");
  spaceBtn.addEventListener("click", function (e) {
    displayElement.innerHTML += "<span>&nbsp;</span>";
  });
}

commandClick();

document.body.addEventListener("click", function (e) {
  if (e.target.classList.contains("shift")) {
    shift = capslock ? false : !shift;
    isLowerCased = capslock ? true : false;
    capslock = isLowerCased ? false : capslock;
    init();
    keyClick();
    commandClick();
  }
});

// clear
let clearBtn = document.querySelector(".clear-keyboard");

clearBtn.addEventListener("click", function (e) {
  displayElement.innerHTML = "";
});


// Virtual send
let sendMassVK = document.querySelector(".send")
 

sendMassVK.addEventListener("click", ()=>{
console.log(displayElement.textContent)

  if(displayElement.textContent.length > 0){
    DATA.users[currentChildId - 1].messages.push({
      id:  DATA.users[currentChildId - 1].messages.length,
      is_from_me: true,
      text: `${displayElement.textContent}`,
      time: new Date(),
    });
  }
  message = document.createElement("li")

  message.textContent = displayElement.textContent
      message.className = "from_me"
      liveChat.appendChild(message)
      // 
      displayElement.textContent=""
})
// 
});
