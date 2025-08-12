function onclikk() {
  var a = document.getElementById("search").value.toLowerCase();
  if (a === "study") {
    window.open("./se_study.html");
  } else if (a === "story") {
    window.open("./se_stories.html");
  } else if (a === "news") {
    window.open("./se_news.html");
  } else if (a === "car") {
    window.open("./se_cars.html");
  } else {
    alert("Not found that artical ");
  }
}
