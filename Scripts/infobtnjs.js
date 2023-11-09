var buttonAndContentIDs = [
  { buttonID: "moreInfoBtn", contentID: "moreInfo" },
  { buttonID: "moreInfoBtn0", contentID: "moreInfo0" },
  { buttonID: "moreInfoBtn1", contentID: "moreInfo1" },
  { buttonID: "moreInfoBtn2", contentID: "moreInfo2" },
  { buttonID: "moreInfoBtn3", contentID: "moreInfo3" },
  { buttonID: "moreInfoBtn4", contentID: "moreInfo4" },
  { buttonID: "moreInfoBtn5", contentID: "moreInfo5" },
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
