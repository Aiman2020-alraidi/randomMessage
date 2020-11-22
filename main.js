"use strict";
const reviews = [
  {
    id: 1,
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    name: "anna johnson",
    job: "web designer",
    message:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 2,
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    name: "peter jones",
    job: "intern",
    message:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 3,
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    name: "bill anderson",
    job: "the boss",
    message:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  {
    id: 4,
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    name: "Sanaa",
    job: "the boss",
    message:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const image = document.querySelector(".images");
let author = document.querySelector("#author");
const reviewsJob = document.querySelector(".reviews--job");
const reviewsMessage = document.querySelector(".reviews--message");
const prevBtn = document.querySelector(".prev-btn");
const afterBtn = document.querySelector(".after-btn");
const surpriseBtn = document.querySelector(".surprise--me");
const sideNumber = document.querySelector(".side--number");
let count = 0;
window.addEventListener("DOMContentLoaded", function () {
  const showAll = (person) => {
    const items = reviews[person];
    sideNumber.innerHTML = items.id;
    author.innerHTML = items.name;
    reviewsJob.innerHTML = items.job;
    reviewsMessage.innerHTML = items.message;
    image.src = items.img;
  };
  showAll(count); //make first element appear when loading

  // random reviews
  surpriseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showAll(makeRandom());
  });

  const makeRandom = () => {
    return Math.floor(Math.random() * reviews.length);
  };

  //   afterBtn
  afterBtn.addEventListener("click", (e) => {
    count++;
    if (count > reviews.length - 1) {
      count = 0;
    }
    showAll(count);
  });

  //   afterBtn
  prevBtn.addEventListener("click", (e) => {
    count--;
    if (count < 0) {
      count = reviews.length - 1;
    }
    showAll(count);
  });
});
