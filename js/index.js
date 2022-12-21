var titleName = document.getElementById("inputBook");
var titleUrl = document.getElementById("inputUrl");
var bookmark = {};
var bookmarks = [];
var data = localStorage.getItem("bookmarks");
if (localStorage.getItem("bookmarks")) {
  bookmarks = data ? JSON.parse(data) : [];
}
function add(e) {
  //   if (vaildDataName()) {
  //   e.preventDefault();
  bookmark = {
    Name: titleName.value,
    url: titleUrl.value,
  };
  bookmarks.push(bookmark);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  display();
}
//    else {
//     return false;
//   }
// }
///////
function display() {
  var bookmarksStorage = JSON.parse(localStorage.getItem("bookmarks"));
  bookmarksResults.innerHTML = "";
  ///////////////// input empty
  titleName.value = "";
  titleUrl.value = "";
  /////////////////////////////
  var name;
  var url;
  for (var i = 0; i < bookmarks.length; i++) {
    name = bookmarks[i].Name;
    url = bookmarks[i].url;
    bookmarksResults.innerHTML += `
        <div class="well mb-2 bg-light" id="bookmark-${i}">
            <div class="d-flex justify-content-between p-3">
                <span>${name}</span>
                <div>
                    <a class="btn btn-info" target="_blank" href="${url}">visit</a>
                    <button onclick="deleteBookmark(${i})" class="btn btn-danger" target="_blank" href="#">Delete</button>
                </div>
            </div>
        </div>
        `;
  }
}

function getDatafromLocal() {
  var bookmarksStorage = JSON.parse(localStorage.getItem("bookmarks"));
  var name;
  var url;

  if (bookmarks.length > 0) {
    for (var i = 0; i < bookmarksStorage.length; i++) {
      name = bookmarksStorage[i].Name;
      url = bookmarksStorage[i].url;
      bookmarksResults.innerHTML += `
            <div class="well mb-2" id="bookmark-${i}">
                <div class="d-flex justify-content-between p-3">
                    <span>${name}</span>
                    <div>
                        <a class="btn btn-success" target="_blank" href="${url}">Visit</a>
                        <button onclick="deleteBookmark(${i})" class="btn btn-danger" target="_blank" href="#">Delete</button>
                    </div>
                </div>
            </div>
        `;
    }
  } else {
    bookmarksResults.innerHTML = "no data";
  }
}
getDatafromLocal();

function deleteBookmark(index) {
  bookmarks.splice(index, 1);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  document.getElementById("bookmark-" + index).remove();
}
function vaildDataName() {
  var regx = /^[a-z]{3,9}$/gi;
  if (regx.test(titleName.value) == true) {
    document.getElementById("nameError").classList.remove("d-none");
    return true;
  } else {
    return false;
    document.getElementById("nameError").classList.add("d-none");
  }
}
