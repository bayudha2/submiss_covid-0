const CACHE_KEY = "komentar";


function checkAvail() {
    return typeof(Storage) !== "undefined"
}

function komentarData(data) {
    if (checkAvail()) {
        let komenArray = null;
        if (localStorage.getItem(CACHE_KEY) === null) {
            komenArray = [];
        } else {
            komenArray = JSON.parse(localStorage.getItem(CACHE_KEY));
        }
        komenArray.unshift(data);
        // console.log(komenArray);

        localStorage.setItem(CACHE_KEY, JSON.stringify(komenArray));
    }
}

function ambilKomen() {
    if (checkAvail()) {
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    } else {
        return [];
    }
}

const feedButton = document.querySelector(".feedButton");
feedButton.addEventListener("click", function(event) {
    komen1 = prompt("Bagaimana menurut Anda ?");
    if (komen1 == null || "") {
        alert("Tolong di isi ya kak..");
    } else {
        const komentar = {
                komen: komen1
            }
            // console.log(komentar);
        komentarData(komentar);
        const komenData = ambilKomen();
        let komenNetizen = document.querySelector(".komenNetizen");
        komenNetizen.innerHTML = "";

        // console.log(komenData);
        for (let komen of komenData) {
            let row = document.createElement('tr');
            row.innerHTML = "<td>" + komen.komen + "</td>";
            komenNetizen.appendChild(row);
        }
    }
});

function printKomen() {
    const komenData = ambilKomen();
    let komenNetizen = document.querySelector(".komenNetizen");
    komenNetizen.innerHTML = "";

    // console.log(komenData);
    for (let komen of komenData) {
        let row = document.createElement('tr');
        row.innerHTML = "<td>" + komen.komen + "</td>";
        komenNetizen.appendChild(row);
    }
}

printKomen();


// localStorage.removeItem(CACHE_KEY);