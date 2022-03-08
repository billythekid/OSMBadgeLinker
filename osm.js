MutationObserver = window.MutationObserver;

const linkBaseUrl = "https://www.glasgowscoutshop.com/";

// looks like the website has changed recently and can be URL hacked by a double underscore and the entry ID
let badgeUrls = [
  {
    name: "chief scout's bronze",
    url: "__1023"
  },
  {
    name: "adventure",
    url: "__4028"
  },
  {
    name: "outdoors",
    url: "__3889"
  },
  {
    name: "personal",
    url: "__3951"
  },
  {
    name: "skills",
    url: "__3949"
  },
  {
    name: "teamwork",
    url: "__4021"
  },
  {
    name: "world",
    url: "__4000"
  },
  {
    name: "animal friend",
    url: "__4020"
  },
  {
    name: "book reader",
    url: "__4590"
  },
  {
    name: "builder",
    url: "__4584"
  },
  {
    name: "camp craft",
    url: "__3735"
  },
  {
    name: "collector",
    url: "__3912"
  },
  {
    name: "communicator",
    url: "__1013"
  },
  {
    name: "cook",
    url: "__4040"
  },
  {
    name: "creative",
    url: "__4036"
  },
  {
    name: "cyclist",
    url: "__3852"
  },
  {
    name: "disability awareness",
    url: "__1030"
  },
  {
    name: "experiment",
    url: "__4039"
  },
  {
    name: "explore",
    url: "__4030"
  },
  {
    name: "faith",
    url: "__3950"
  },
  {
    name: "gardener",
    url: "__4038"
  },
  {
    name: "global issues",
    url: "__3748"
  },
  {
    name: "health and fitness",
    url: "__3997"
  },
  {
    name: "hobbies",
    url: "__3853"
  },
  {
    name: "international",
    url: "__4019"
  },
  {
    name: "photographer",
    url: "__4016"
  },
  {
    name: "safety",
    url: "__3999"
  },
  {
    name: "space",
    url: "__4022"
  },
  {
    name: "sports",
    url: "__4017"
  },
  {
    name: "air activities lvl 1",
    url: "__3946"
  },
  {
    name: "community impact lvl 1",
    url: "__3833"
  },
  {
    name: "digital citizen lvl 1",
    url: "__3841"
  },
  {
    name: "digital maker lvl 1",
    url: "__3823"
  },
  {
    name: "emergency aid lvl 1",
    url: "__920"
  },
  {
    name: "emergency aid lvl 2",
    url: "__922"
  },
  {
    name: "hikes lvl 1",
    url: "__948"
  },
  {
    name: "hikes lvl 2",
    url: "__3847"
  },
  {
    name: "hikes lvl 5",
    url: "__3920"
  },
  {
    name: "hikes lvl 10",
    url: "__3709"
  },
  {
    name: "hikes lvl 15",
    url: "__3739"
  },
  {
    name: "musician lvl 1",
    url: "__3983"
  },
  {
    name: "nautical skills lvl 1",
    url: "__1022"
  },
  {
    name: "navigator lvl 1",
    url: "__3888"
  },
  {
    name: "nights away lvl 1",
    url: "__4045"
  },
  {
    name: "nights away lvl 2",
    url: "__4001"
  },
  {
    name: "nights away lvl 3",
    url: "__3848"
  },
  {
    name: "nights away lvl 4",
    url: "__3922"
  },
  {
    name: "nights away lvl 5",
    url: "__4032"
  },
  {
    name: "nights away lvl 10",
    url: "__4044"
  },
  {
    name: "paddle sports lvl 1",
    url: "__3734"
  },
  {
    name: "sailing lvl 1",
    url: "__3968"
  },
  {
    name: "snowsports lvl 1",
    url: "__4586"
  },
  {
    name: "swimmer lvl 1",
    url: "__4037"
  },
  {
    name: "swimmer lvl 2",
    url: "__4048"
  },
  {
    name: "swimmer lvl 3",
    url: "__3872"
  },
  {
    name: "time on the water lvl 1",
    url: "__4018"
  },
  {
    name: "membership",
    url: "__956"
  },
  {
    name: "moving on",
    url: "__4002"
  },
  {
    name: "joining in lvl 1",
    url: "__939"
  },
  {
    name: "joining in lvl 2",
    url: "__938"
  },
  {
    name: "joining in lvl 3",
    url: "__4003"
  },
];

function findBadgeByKeywords(badgeName) {
  let response = [];
  badgeUrls.forEach((badge) => {
    if (badge.name === badgeName) {
      response.push(badge);
    }
  });
  return response;
}

let observer = new MutationObserver(function (mutations) {
  // fired when a mutation occurs

  mutations.forEach((mutation) => {

    let stockRequiredRows = Array.from(mutation.target.querySelectorAll('[col-id="buy"]')).filter(cell => cell.innerText !== '0');
    if (stockRequiredRows.length > 0) {
      if (stockRequiredRows) {
        stockRequiredRows.forEach((cell) => {
          let badgeNameCell = cell.parentNode.querySelector('[col-id="name"]');
          let badgeName = badgeNameCell.innerText.toLowerCase();
          let badges = findBadgeByKeywords(badgeName);
          if (cell.querySelector('.buy-now-link') === null) {
            badges.forEach((badge) => {
              let linkUrl = linkBaseUrl + badge.url;
              cell.insertAdjacentHTML("beforeend", "<a target='_blank' href='" + linkUrl + "' class='buy-now-link'>Buy Now!</a>");
            });
          }
        });

      }
    }

  });

});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, {
  subtree: true,
  attributes: true
  //...
});


