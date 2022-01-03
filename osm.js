MutationObserver = window.MutationObserver;

const linkBaseUrl = "https://www.glasgowscoutshop.com/";


let badgeUrls = [
  {
    name: "chief scout's bronze",
    url: "1023/products/beaver-chief-scouts-bronze-award-badge.aspx"
  },
  {
    name: "adventure",
    url: "4028/products/beaver-my-adventure-challenge-award-badge.aspx"
  },
  {
    name: "outdoors",
    url: "3889/products/beaver-my-outdoor-challenge-award-badge.aspx"
  },
  {
    name: "personal",
    url: "3951/products/beaver-personal-challenge-award-badge.aspx"
  },
  {
    name: "skills",
    url: "3949/products/beaver-my-skills-challenge-award-badge.aspx"
  },
  {
    name: "teamwork",
    url: "4021/products/beaver-my-teamwork-challenge-award-badge.aspx"
  },
  {
    name: "world",
    url: "4000/products/beaver-my-world-challenge-award-badge.aspx"
  },
  {
    name: "animal friend",
    url: "4020/products/beaver-scout-animal-friend-pets-at-home.aspx"
  },
  {
    name: "book reader",
    url: "4590/products/beaver-book-reader-badge.aspx"
  },
  {
    name: "builder",
    url: "4584/products/beaver-builder-badge.aspx"
  },
  {
    name: "camp craft",
    url: "3735/products/beaver-scout-camp-craft-badge.aspx"
  },
  {
    name: "collector",
    url: "3912/products/beaver-scout-collector-badge.aspx"
  },
  {
    name: "communicator",
    url: "1013/products/beaver-scout-communicator-badge.aspx"
  },
  {
    name: "cook",
    url: "4040/products/beaver-scout-cook-badge.aspx"
  },
  {
    name: "creative",
    url: "4036/products/beaver-scout-creative.aspx"
  },
  {
    name: "cyclist",
    url: "3852/products/beaver-scout-cyclist-badge.aspx"
  },
  {
    name: "disability awareness",
    url: "1030/products/beaver-scout-disability-awareness-badge.aspx"
  },
  {
    name: "experiment",
    url: "4039/products/beaver-scout-experiment.aspx"
  },
  {
    name: "explore",
    url: "4030/products/beaver-scout-explore.aspx"
  },
  {
    name: "faith",
    url: "3950/products/beaver-scout-faith.aspx"
  },
  {
    name: "gardener",
    url: "4038/products/beaver-scout-gardener.aspx"
  },
  {
    name: "global issues",
    url: "3748/products/beaver-scout-global-issues-badge.aspx"
  },
  {
    name: "health and fitness",
    url: "3997/products/beaver-scout-health-and-fitness-badge.aspx"
  },
  {
    name: "hobbies",
    url: "3853/products/beaver-scout-hobbies-badge.aspx"
  },
  {
    name: "international",
    url: "4019/products/beaver-scout-international-badge.aspx"
  },
  {
    name: "photographer",
    url: "4016/products/beaver-scout-photographer-badge.aspx"
  },
  {
    name: "safety",
    url: "3999/products/beaver-scout-safety-badge.aspx"
  },
  {
    name: "space",
    url: "4022/products/beaver-scout-space-badge.aspx"
  },
  {
    name: "sports",
    url: "4017/products/beaver-scout-sports-badge.aspx"
  },
  {
    name: "air activities lvl 1",
    url: "3946/products/air-activities-stage-1-badge--heathrow.aspx"
  },
  {
    name: "community impact lvl 1",
    url: "3833/products/community-impact-stage-1-badge.aspx"
  },
  {
    name: "digital citizen lvl 1",
    url: "3841/products/digital-citizen-stage-1-badge.aspx"
  },
  {
    name: "digital maker lvl 1",
    url: "3823/products/digital-maker-stage-1-badge.aspx"
  },
  {
    name: "emergency aid lvl 1",
    url: "920/products/activity-emergency-aid-stage-1.aspx"
  },
  {
    name: "emergency aid lvl 2",
    url: "922/products/activity-emergency-aid-stage-2.aspx"
  },
  {
    name: "hikes lvl 1",
    url: "948/products/hikes-away-badge-1-stage-go-outdoors.aspx"
  },
  {
    name: "hikes lvl 2",
    url: "3847/products/hikes-away-2-badge-stage-go-outdoors.aspx"
  },
  {
    name: "hikes lvl 5",
    url: "3920/products/hikes-away-badge-5-stage-go-outdoors.aspx"
  },
  {
    name: "hikes lvl 10",
    url: "3709/products/hikes-away-badge-10-stage-go-outdoors.aspx"
  },
  {
    name: "hikes lvl 15",
    url: "3739/products/hikes-away-15-badge-stage-go-outdoors.aspx"
  },
  {
    name: "musician lvl 1",
    url: "3983/products/activity-musician-stage-1.aspx"
  },
  {
    name: "nautical skills lvl 1",
    url: "1022/products/nautical-skills-stage-1-badge.aspx"
  },
  {
    name: "navigator lvl 1",
    url: "3888/products/navigator-stage-1-badge.aspx"
  },
  {
    name: "nights away lvl 1",
    url: "4045/products/activity-nights-away-badge-stage-1-go-outdoors.aspx"
  },
  {
    name: "nights away lvl 2",
    url: "4001/products/activity-nights-away-stage-2-badge-go-outdoors.aspx"
  },
  {
    name: "nights away lvl 3",
    url: "3848/products/activity-nights-away-stage-3-badge-go-outdoors.aspx"
  },
  {
    name: "nights away lvl 4",
    url: "3922/products/activity-nights-away-stage-4-badge-go-outdoors.aspx"
  },
  {
    name: "nights away lvl 5",
    url: "4032/products/activity-nights-away-badge-stage-5-go-outdoors.aspx"
  },
  {
    name: "nights away lvl 10",
    url: "4044/products/activity-nights-away-badge-stage-10-go-outdoors.aspx"
  },
  {
    name: "paddle sports lvl 1",
    url: "3734/products/paddle-sports-stage-1-badge.aspx"
  },
  {
    name: "sailing lvl 1",
    url: "3968/products/sailing-stage-1-badge.aspx"
  },
  {
    name: "snowsports lvl 1",
    url: "4586/products/snowsports-stage-1-badge.aspx"
  },
  {
    name: "swimmer lvl 1",
    url: "4037/products/activity-swimmer-stage-1--sta.aspx"
  },
  {
    name: "swimmer lvl 2",
    url: "4048/products/activity-swimmer-stage-2--sta.aspx"
  },
  {
    name: "swimmer lvl 3",
    url: "3872/products/activity-swimmer-stage-3--sta.aspx"
  },
  {
    name: "time on the water lvl 1",
    url: "4018/products/time-on-water-stage-1-badge--royal-navy.aspx"
  },
  {
    name: "membership",
    url: "956/products/world-membership-badge.aspx"
  },
  {
    name: "moving on",
    url: "4002/products/beaver-moving-on-award.aspx"
  },
  {
    name: "joining in lvl 1",
    url: "939/products/joining-in-award-badge-1.aspx"
  },
  {
    name: "joining in lvl 2",
    url: "938/products/joining-in-award-badge-2.aspx"
  },
  {
    name: "joining in lvl 3",
    url: "4003/products/joining-in-award-badge-3.aspx"
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

    let stockRequiredRows = mutation.target.querySelectorAll('.dgrid-row-outofstock');
    if (stockRequiredRows) {
      stockRequiredRows.forEach((row) => {
        let badgeElementDesktop = row.querySelector('.field-name');
        let badgeElementMobile = row.querySelector('.summary-wrapper .name');
        let badgeName = badgeElementDesktop.innerText.toLowerCase();
        let badges = findBadgeByKeywords(badgeName);
        if (row.querySelector('.buy-now-link') === null) {
          badges.forEach((badge) => {
            let linkUrl = linkBaseUrl + badge.url;
            badgeElementDesktop.insertAdjacentHTML("beforeend", "<a target='_blank' href='" + linkUrl + "' class='buy-now-link'>Buy Now!</a>");
            badgeElementMobile.insertAdjacentHTML("beforeend", "<a target='_blank' href='" + linkUrl + "' class='buy-now-link'>Buy Now!</a>");
          });
        }
      });

    }


    if (mutation.target.querySelector(".activity-badge-links")) {
      let links = mutation.target.querySelectorAll('.linked-badges li .inner .description');

      if (links) {
        links.forEach((link) => {
          let badgeName = link.querySelector('span.badge').innerText.toLowerCase();
          // let column = link.querySelector('span.column').innerText.toLowerCase();
          let badges = findBadgeByKeywords(badgeName);
          badges.forEach((badge) => {
            let linkUrl = linkBaseUrl + badge.url;
            link.insertAdjacentHTML("beforeend", "<a target='_blank' href='" + linkUrl + "' class='buy-now-link'>Buy Now!</a>");
          });
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


