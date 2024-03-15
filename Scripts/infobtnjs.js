var buttonAndContentIDs = [
  { buttonID: "moreInfoBtn", contentID: "moreInfo" },
  { buttonID: "moreInfoBtn0", contentID: "moreInfo0" },
  { buttonID: "moreInfoBtn1", contentID: "moreInfo1" },
  { buttonID: "moreInfoBtn2", contentID: "moreInfo2" },
  { buttonID: "moreInfoBtn3", contentID: "moreInfo3" },
  { buttonID: "moreInfoBtn4", contentID: "moreInfo4" },
  { buttonID: "moreInfoBtn5", contentID: "moreInfo5" },
  { buttonID: "moreInfoBtn6", contentID: "moreInfo6" },
  { buttonID: "moreInfoBtn7", contentID: "moreInfo7" },
  { buttonID: "moreInfoBtn8", contentID: "moreInfo8" },
  { buttonID: "moreInfoBtn9", contentID: "moreInfo9" },
  { buttonID: "moreInfoBtn10", contentID: "moreInfo10" },
  { buttonID: "moreInfoBtn11", contentID: "moreInfo11" },
  { buttonID: "moreInfoBtn12", contentID: "moreInfo12" },
  { buttonID: "moreInfoBtn13", contentID: "moreInfo13" },
  { buttonID: "moreInfoBtn14", contentID: "moreInfo14" },
  { buttonID: "moreInfoBtn15", contentID: "moreInfo15" },
  { buttonID: "moreInfoBtn16", contentID: "moreInfo16" },
  { buttonID: "moreInfoBtn17", contentID: "moreInfo17" },
  { buttonID: "moreInfoBtn18", contentID: "moreInfo18" },
  { buttonID: "moreInfoBtn19", contentID: "moreInfo19" },
  { buttonID: "moreInfoBtn20", contentID: "moreInfo20" },
  { buttonID: "moreInfoBtn21", contentID: "moreInfo21" },
  { buttonID: "moreInfoBtn22", contentID: "moreInfo22" },
  { buttonID: "moreInfoBtn23", contentID: "moreInfo23" },
  { buttonID: "moreInfoBtn24", contentID: "moreInfo24" },
  { buttonID: "moreInfoBtn25", contentID: "moreInfo25" },
  { buttonID: "moreInfoBtn26", contentID: "moreInfo26" },
  { buttonID: "moreInfoBtn27", contentID: "moreInfo27" },
  { buttonID: "moreInfoBtn28", contentID: "moreInfo28" },
  { buttonID: "moreInfoBtn29", contentID: "moreInfo29" },
  { buttonID: "moreInfoBtn30", contentID: "moreInfo30" },
];

buttonAndContentIDs.forEach(function (pair) {
  var button = document.getElementById(pair.buttonID);
  var content = document.getElementById(pair.contentID);

  if (button && content) {
    button.addEventListener("click", function () {
      if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        this.innerText = "Hide Information";
      } else {
        content.style.display = "none";
        this.innerText = "More Information";
      }
    });
  }
});
