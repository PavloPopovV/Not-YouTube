const videos = [
  {
    title: "All quiet on the western front",
    duration: 153,
    thumbnail: "images/thumbnails/all_quiet_on_the_western_front.webp",
    avatar: "images/avatars/netflix.jpg",
    studio: "netflix",
    linkId: "hf8EYbVxtCY",
    likes: 214339,
    views: 10559615,
    year: 2023,
    channelId: "@Netflix",
  },
  {
    title: "Army of the dead",
    duration: 183,
    thumbnail: "images/thumbnails/army_of_the_dead.webp",
    avatar: "images/avatars/netflix.jpg",
    studio: "netflix",
    linkId: "tI1JGPhYBS8",
    likes: 228362,
    views: 16987562,
    year: 2021,
    channelId: "@Netflix",
  },
  {
    title: "Black panter",
    duration: 138,
    thumbnail: "images/thumbnails/black_panter.webp",
    avatar: "images/avatars/marvel.jpg",
    studio: "marvel",
    linkId: "xjDjIWPwcPU",
    likes: 560257,
    views: 53852479,
    year: 2018,
    channelId: "@marvel",
  },
  {
    title: "Blonde",
    duration: 129,
    thumbnail: "images/thumbnails/blonde.webp",
    avatar: "images/avatars/netflix.jpg",
    studio: "netflix",
    linkId: "aIsFywuZPoQ",
    likes: 250368,
    views: 10843657,
    year: 2022,
    channelId: "@Netflix",
  },
  {
    title: "Creed III",
    duration: 143,
    thumbnail: "images/thumbnails/creed.webp",
    avatar: "images/avatars/mgm.jpg",
    studio: "metro goldwyn mayer",
    linkId: "AHmCH7iB_IM",
    likes: 196247,
    views: 17865794,
    year: 2023,
    channelId: "@MGMStudios",
  },
  {
    title: "Deadpool",
    duration: 153,
    thumbnail: "images/thumbnails/deadpool.webp",
    avatar: "images/avatars/20_fox.jpg",
    studio: "20th century studio",
    linkId: "Xithigfg7dA",
    likes: 63254,
    views: 13342569,
    year: 2016,
    channelId: "@20thCenturyStudios",
  },
  {
    title: "Doctor strange",
    duration: 122,
    thumbnail: "images/thumbnails/doctor_strange.webp",
    avatar: "images/avatars/marvel.jpg",
    studio: "marvel",
    linkId: "Lt-U_t2pUHI",
    likes: 251478,
    views: 25556677,
    year: 2016,
    channelId: "@marvel",
  },
  {
    title: "Dont look up",
    duration: 165,
    thumbnail: "images/thumbnails/dont_look_up.webp",
    avatar: "images/avatars/netflix.jpg",
    studio: "netflix",
    linkId: "RbIxYm3mKzI",
    likes: 272587,
    views: 16987598,
    year: 2022,
    channelId: "@Netflix",
  },
  {
    title: "Dune",
    duration: 184,
    thumbnail: "images/thumbnails/dune.webp",
    avatar: "images/avatars/wb.jpg",
    studio: "warner brothers",
    linkId: "n9xhJrPXop4",
    likes: 666666,
    views: 41567871,
    year: 2021,
    channelId: "@WarnerBrosPictures",
  },
  {
    title: "ELVIS",
    duration: 195,
    thumbnail: "images/thumbnails/elvis.webp",
    avatar: "images/avatars/wb.jpg",
    studio: "warner brothers",
    linkId: "wBDLRvjHVOY",
    likes: 146874,
    views: 23445687,
    year: 2022,
    channelId: "@WarnerBrosPictures",
  },
  {
    title: "Fantastic Beats",
    duration: 195,
    thumbnail: "images/thumbnails/fantastic_beats.webp",
    avatar: "images/avatars/wb.jpg",
    studio: "warner brothers",
    linkId: "ViuDsy7yb8M",
    likes: 181265,
    views: 19242658,
    year: 2016,
    channelId: "@WarnerBrosPictures",
  },
  {
    title: "Free Guy",
    duration: 182,
    thumbnail: "images/thumbnails/free_guy.webp",
    avatar: "images/avatars/20_fox.jpg",
    studio: "20th century studio",
    linkId: "X2m-08cOAbc",
    likes: 415236,
    views: 24570879,
    year: 2020,
    channelId: "@20thCenturyStudios",
  },
  {
    title: "Glass onion",
    duration: 163,
    thumbnail: "images/thumbnails/glass_onion.webp",
    avatar: "images/avatars/netflix.jpg",
    studio: "netflix",
    linkId: "gj5ibYSz8C0",
    likes: 94231,
    views: 14346872,
    year: 2022,
    channelId: "@netflix",
  },
  {
    title: "Hypnotic",
    duration: 149,
    thumbnail: "images/thumbnails/hypnotic.webp",
    avatar: "images/avatars/wb.jpg",
    studio: "warner brothers",
    linkId: "nnCZ4dfrxpo",
    likes: 16211,
    views: 1177987,
    year: 2023,
    channelId: "@WarnerBrosPictures",
  },
  {
    title: "Kingsman: The Secret Service",
    duration: 167,
    thumbnail: "images/thumbnails/kingsman_the_secret_service.webp",
    avatar: "images/avatars/20_fox.jpg",
    studio: "20th century studio",
    linkId: "kl8F-8tR8to",
    likes: 70258,
    views: 20756847,
    year: 2014,
    channelId: "@20thCenturyStudios",
  },
  {
    title: "Logan",
    duration: 107,
    thumbnail: "images/thumbnails/logan.webp",
    avatar: "images/avatars/20_fox.jpg",
    studio: "20th century studio",
    linkId: "Div0iP65aZo",
    likes: 335687,
    views: 35874123,
    year: 2017,
    channelId: "@20thCenturyStudios",
  },
  {
    title: "Reacher",
    duration: 136,
    thumbnail: "images/thumbnails/reacher.webp",
    avatar: "images/avatars/amazon.jpg",
    studio: "Prime video",
    linkId: "GSycMV-_Csw",
    likes: 40658,
    views: 7687514,
    year: 2022,
    channelId: "@PrimeVideo",
  },
  {
    title: "Samaritan",
    duration: 165,
    thumbnail: "images/thumbnails/samaritan.webp",
    avatar: "images/avatars/amazon.jpg",
    studio: "Prime video",
    linkId: "9FKnTxSC16E",
    likes: 88957,
    views: 13654781,
    year: 2022,
    channelId: "@PrimeVideo",
  },

  {
    title: "The tomorrow war",
    duration: 177,
    thumbnail: "images/thumbnails/the_tomorrow_war.webp",
    avatar: "images/avatars/amazon.jpg",
    studio: "Prime video",
    linkId: "QPistcpGB8o",
    likes: 56123,
    views: 12454381,
    year: 2021,
    channelId: "@PrimeVideo",
  },

  {
    title: "The Batman",
    duration: 159,
    thumbnail: "images/thumbnails/batman.webp",
    avatar: "images/avatars/wb.jpg",
    studio: "warner brothers",
    linkId: "mqqft2x_Aa4",
    likes: 1321567,
    views: 58748632,
    year: 2022,
    channelId: "@WarnerBrosPictures",
  },
  {
    title: "The Flash",
    duration: 176,
    thumbnail: "images/thumbnails/flash.webp",
    avatar: "images/avatars/wb.jpg",
    studio: "warner brothers",
    linkId: "hebWYacbdvc",
    likes: 254879,
    views: 16556987,
    year: 2023,
    channelId: "@WarnerBrosPictures",
  },
];

const showBtn = document.querySelector(".js_show");
const searchByName = document.querySelector(".js_search");
const cardsVideo = document.querySelector(".video-filters");
const videoList = document.querySelector(".video-list");
const searchBtn = document.querySelector(".js_search");
const messageBox = document.querySelector(".message-box");
const messageClose = document.querySelector(".message-box__close");
const messageContent = document.querySelector(".message-box__body");
const studioList = document.querySelector(".studio-list");

const btnActive = document.querySelectorAll(".filter-btn");
const allCardsBtn = document.querySelector('button[data-filter="all"]');
const maxViewsBtn = document.querySelector('button[data-filter="most-views"]');
const minViewsBtn = document.querySelector('button[data-filter="least-views"]');
const maxLikedBtn = document.querySelector('button[data-filter="most-liked"]');
const minLikedBtn = document.querySelector('button[data-filter="least-liked"]');
const longestBtn = document.querySelector('button[data-filter="longest"]');
const shortestBtn = document.querySelector('button[data-filter="shortest"]');
const newestBtn = document.querySelector('button[data-filter="newest"]');
const oldestBtn = document.querySelector('button[data-filter="oldest"]');
const studioBtn = document.querySelector('button[data-filter="show-studio"]');

const showPage = function () {
  cardsVideo.classList.remove("hide");
  searchByName.classList.remove("hide");
  showBtn.classList.add("hide");
  makeCard(videoList, videos);
  showPopup();
};

const makeCard = function (parent, videosArr) {
  for (let i = 0; i < videosArr.length; i++) {
    parent.insertAdjacentHTML(
      "beforeend",
      `<article class="film-card">

    <div class="film-card__bg" style="background-image: url(${
      videosArr[i].thumbnail
    })" data-href="${videosArr[i].linkId}">
      <span class="film-card__duration">${checkTime(
        videosArr[i].duration
      )}</span>
      <span class="film-card__date">${videosArr[i].year}</span>
    </div>

    <div class="film-card__details">

      <div class="film-card__title">
        <a class="film-card__avatar" href="https://www.youtube.com/${
          videosArr[i].channelId
        }" target="_blank" title="Перейти на канал ">
          <img class="avatar" src="${videosArr[i].avatar}">
        </a>
        <div class="film-card__name">${videosArr[i].title}</div>
      </div>

      <div class="film-card__footer">
        <a class="film-card__channel" href="https://www.youtube.com/${
          videos[i].channelId
        }" target="_blank" title="Перейти на канал ">${videosArr[i].studio}</a>
        <div class="film-card__views">${checkNumbers(
          videosArr[i].views
        )} переглядів</div>
        <div class="film-card__likes">${checkNumbers(
          videosArr[i].likes
        )} вподобали </div>
      </div>

    </div>

  </article>`
    );
  }
  showPopup();
};

showBtn.addEventListener("click", showPage);



const checkNumbers = function (number) {
  let newNumber = 0;
  if (number >= 1000000) {
    newNumber = Math.floor(number / 100000) / 10;
    newNumber = newNumber.toFixed(1) + " млн";
  } else if (number >= 1000) {
    newNumber = Math.floor(number / 100) / 10;
    newNumber = newNumber.toFixed(1) + " тис";
  } else {
    newNumber = number.toString();
  }

  return newNumber;
};


const checkTime = function (seconds) {
  const checkMinutes = Math.floor(seconds / 60);
  const checkseconds = Math.round(seconds % 60);
  const time = `${checkMinutes}:${checkseconds.toString().padStart(2, "0")}`;
  return time;
};


const serchVideo = function (serchPrompt) {
  const filmCard = document.querySelectorAll(".film-card");
  let count = 0;
  for (let i = 0; i < videos.length; i++) {
    videos[i].title = videos[i].title.toLowerCase();
    if (!serchPrompt) {
      filmCard[i].style.display = "none";
      messageBox.classList.add("show");
    } else if (videos[i].title.includes(serchPrompt)) {
      filmCard[i].style.display = "block";
      count++;
    } else {
      filmCard[i].style.display = "none";
    }
  }
  messageContent.textContent = "Нажаль нічого не знайдено";
  if (count === 0) {
    messageBox.classList.add("show");
  } else {
    messageBox.classList.remove("show");
  }
};

searchBtn.addEventListener("click", () => {
  let serchPrompt = prompt("Ведіть назву фільму англійською мовою");
  serchVideo(serchPrompt);
});

messageClose.addEventListener("click", function () {
  messageBox.classList.remove("show");
});



function activeBtn(event) {
  for (let i = 0; i < btnActive.length; i++) {
    btnActive[i].classList.remove("active");
  }
  event.target.classList.add("active");
}
for (let i = 0; i < btnActive.length; i++) {
  btnActive[i].addEventListener("click", activeBtn);
}


const allCards = function () {
  videoList.innerHTML = "";
  studioList.innerHTML = "";
  makeCard(videoList, videos);
};

allCardsBtn.addEventListener("click", allCards);


const sortByMaxMin = function (arr, operator, property) {
  const arrViews = [...arr];
  const sortedArr = [];
  for (let i = arrViews.length; i > 0; i--) {
    let maxIndex = 0;
    for (let j = 1; j < i; j++) {
      if (
        operator === ">" &&
        arrViews[j][property] > arrViews[maxIndex][property]
      ) {
        maxIndex = j;
      } else if (
        operator === "<" &&
        arrViews[j][property] < arrViews[maxIndex][property]
      ) {
        maxIndex = j;
      }
    }
    sortedArr.push(arrViews[maxIndex]);
    arrViews.splice(maxIndex, 1);
  }
  videoList.innerHTML = "";
  studioList.innerHTML = "";
  makeCard(videoList, sortedArr);
};

maxViewsBtn.addEventListener("click", () => {
  sortByMaxMin(videos, ">", "views");
});
minViewsBtn.addEventListener("click", () => {
  sortByMaxMin(videos, "<", "views");
});

maxLikedBtn.addEventListener("click", () => {
  sortByMaxMin(videos, ">", "likes");
});
minLikedBtn.addEventListener("click", () => {
  sortByMaxMin(videos, "<", "likes");
});

longestBtn.addEventListener("click", () => {
  sortByMaxMin(videos, ">", "duration");
});
shortestBtn.addEventListener("click", () => {
  sortByMaxMin(videos, "<", "duration");
});

newestBtn.addEventListener("click", () => {
  sortByMaxMin(videos, ">", "year");
});
oldestBtn.addEventListener("click", () => {
  sortByMaxMin(videos, "<", "year");
});



const showStudio = function (parent, videos) {
  const filmCard = document.querySelectorAll(".film-card");
  const studioArr = [];
  parent.innerHTML = "";

  for (let i = 0; i < videos.length; i++) {
    filmCard[i].style.display = "none";
    if (!studioArr.includes(videos[i].studio)) {
      studioArr.push(videos[i].studio);
      parent.insertAdjacentHTML(
        "beforeend",
        `<div class="studio-list__item" data-studio="${videos[i].studio}">
          <img class="avatar" src="${videos[i].avatar}" alt="">
        </div>`
      );
    }
  }
  const studioCards = document.querySelectorAll(".studio-list__item");
  for (let i = 0; i < studioCards.length; i++) {
    studioCards[i].addEventListener("click", function () {
      const selectedStudio = this.getAttribute("data-studio");
      for (let j = 0; j < videos.length; j++) {
        if (
          studioArr.includes(videos[j].studio) &&
          videos[j].studio === selectedStudio
        ) {
          filmCard[j].style.display = "block";
        } else {
          filmCard[j].style.display = "none";
        }
      }
    });
  }
};

studioBtn.addEventListener("click", () => {
  videoList.innerHTML = "";
  makeCard(videoList, videos);
  showStudio(studioList, videos);
});



function showPopup() {
  const filmCardBg = document.querySelectorAll(".film-card__bg");
  const popup = document.querySelector(".popup");
  const popupVideo = document.querySelector(".popup__video");
  const popupCloseBtn = document.querySelector(".popup__close");

  for (let i = 0; i < filmCardBg.length; i++) {
    filmCardBg[i].addEventListener("click", function () {
      let videoData = filmCardBg[i].getAttribute("data-href");
      let videoSrc = `https://www.youtube.com/embed/${videoData}`;
      popupVideo.src = videoSrc;
      popup.classList.add("show");
    });
  }
  popupCloseBtn.addEventListener("click", function () {
    popupVideo.src = "";
    popup.classList.remove("show");
  });
}
