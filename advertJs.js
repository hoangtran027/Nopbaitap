const navContent = document.querySelector(".navbar_content");
var navLists = navContent.getElementsByTagName("li");
const contentLists = document.querySelectorAll(".contentList");

for (let i = 0; i < navLists.length; i++) {
    navLists[i].addEventListener("click",function (e) {
        contentLists[0].classList.remove("show");
        hideContent();
        contentLists[i].classList.remove('hide');
    })
    
}

hideContent();
function hideContent() {
    contentLists.forEach(element => {
        element.classList.add("hide");
    });
}


// list Users

var users = [
    {
        id: 1,
        firstName: "Hoang",
        lastName : "Tran",
        email: "HoangTran@gmail.com",
    },
    {
        id: 2,
        firstName: "Tu",
        lastName : "Nguyen Thanh",
        email: "Thanhtunguyen@gmail.com",
    },
    {
        id: 3,
        firstName: "Tuan",
        lastName : "Nguyen Minh",
        email: "Nguyenminhtuan@gmail.com",
    },
    {
        id: 4,
        firstName: "Thuan",
        lastName : "Tran Ngoc",
        email: "Nngocthuantran@gmail.com",
    },
]

// show data 
function usersDisplay(users) {
    var userShow = document.querySelector(".tableDisplay");
    var tableDisplay = users.map(function (user,index) {
        return `
        <tr>
            <th scope="row">${user.id}</th>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
            <td>
                <button type="button" class="btn btn-danger" onclick="editItem(${users[index].id})">edit</button>
                <button type="button" class="btn btn-primary" onclick="deleteItem(${users[index].id})">Delete</button>
            </td>
        </tr>
        `
    })
    userShow.innerHTML = tableDisplay.join("");
}

usersDisplay(users)

// add button
var btnAdd = document.getElementById("btnAdd");
var btnUpdate = document.getElementById("btnUpdate");
var firstNameUser = document.getElementById("firstName");
var lastNameUser = document.getElementById("lastName");
var emailUser = document.getElementById("email");
var idValue = document.getElementById("idValue");

btnAdd.addEventListener("click", function () {
    item = {
        id: idValue.value,
        firstName: firstNameUser.value,
        lastName: lastNameUser.value,
        email: emailUser.value,
    };
    let index = users.findIndex((c) => c.id == item.id);
    if (index >= 0) {
        users.splice(index,1,item);
    }
    else{
        users.push(item);
    }

    usersDisplay(users);
    idValue.value = "";
    firstNameUser.value = "";
    lastNameUser.value = "";
    emailUser.value = "";
    btnAdd.innerText = "add";
})

// button delete
function deleteItem(x) {
    for (let index = 0; index < users.length; index++) {
        if (users[index].id == x) {
            users.splice(index,1);
            usersDisplay(users)
        }
    }
}


// button edit
function editItem(x) {
    btnAdd.innerText = "update"
    for (let index = 0; index < users.length; index++) {
        if (users[index].id == x) {
            idValue.value = users[index].id;
            firstNameUser.value = users[index].firstName;
            lastNameUser.value = users[index].lastName;
            emailUser.value = users[index].email;
        }
    }
}

// change page
var changPage = document.getElementById("changPage");
var changePageModal = document.querySelector(".changePageModal");
changPage.addEventListener("click",function (e) {
    e.preventDefault()
    changPage.classList.add("hide");
    changePageModal.style.display = "block";
    setTimeout(function() {
        window.location.href = "tempt.html"; // Thay thế bằng đường dẫn của trang trung gian
      }, 5000);
})

// audio
var audio = document.getElementById("audio");
var audioListIcon = document.querySelector(".audioIcon");
var audioIcons = audioListIcon.getElementsByTagName("i");
var source = document.getElementById("source");

const songs = [
    './img/video1.mp3',
    './img/video2.mp3',
    './img/video3.mp3',
    './img/video4.mp3',
    './img/video5.mp3',
    './img/video6.mp3',
]
var currentSongs = 0;

audio.src = songs[currentSongs];

for (let i = 0; i < audioIcons.length; i++) {
    // random
    if ( i == 0) {
        audioIcons[i].addEventListener("click", function (params) {
            var randomNumber = Math.floor(Math.random() * songs.length);
            audio.src = songs[randomNumber];
            audioIcons[2].classList.add("hide");
            audioIcons[3].classList.add("show");
            audio.play();
        })
    }
    // prev
    else if (i==1) {
        audioIcons[i].addEventListener("click", function (params) {
            audioIcons[i].addEventListener("click", function (e) {
                currentSongs --;
                if (currentSongs < songs.length) {
                    audio.src = songs[currentSongs];
                    if (currentSongs == 0) {
                        currentSongs = songs.length -1 ;
                    }
                    audioIcons[2].classList.add("hide");
                    audioIcons[3].classList.add("show");
                    audio.play();
                }
            })
        })
    }
    // play
    else if (i==2) {
        audioIcons[i].addEventListener("click", function (e) {
            audio.play();
            audioIcons[2].style.display = "none";
            audioIcons[3].style.display = "block";
        })
    }
    // pause
    else if (i==3) {
        audioIcons[i].addEventListener("click", function (e) {
            audio.pause();
            audioIcons[2].style.display = "block";
            audioIcons[3].style.display = "none";
        })
    }
    // next 
    else if (i==4) {
        audioIcons[i].addEventListener("click", function (e) {
            currentSongs ++;
            if (currentSongs > 0) {
                audio.src = songs[currentSongs];
                if (currentSongs == songs.length - 1) {
                    currentSongs = 0;
                }
                audioIcons[2].classList.add("hide");
                audioIcons[3].classList.add("show");
                audio.play();
            }
        })
    }
    // repeat
    else {
        audioIcons[i].addEventListener("click", function (params) {
        })
    }
}




