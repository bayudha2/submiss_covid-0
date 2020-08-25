const dataku = {
    nama: 'Alif Prasetyo Bayu Aji',
    panggilan: 'Bayu',
    ttl: 'Jepara, 17 Oktober 1998',
    alamat: 'Desa Sowan Lor, Kecamatan Kedung Kabupater Jepara Jawa Tengah',
    hobby: ['Game', 'Tidur', 'browsing']
};

let cardDetail = document.createElement('p');
cardDetail.setAttribute('class', 'card_detail');
cardDetail.innerHTML = " Nama : " + dataku.nama + " <br>  Panggilan : " + dataku.panggilan + " <br> TTL : " + dataku.ttl + " <br> Alamat : " + dataku.alamat + "<br>Hobbi: " + dataku.hobby[0] + ", " + dataku.hobby[1] + ", " + dataku.hobby[2];


const detailku = document.querySelector(".myName");
detailku.addEventListener('click', function(event) {
    let faicon = document.querySelector('.fa');
    let src = faicon.getAttribute("class");
    // console.log(src)
    if (src == "fa fa-arrow-circle-down") {
        faicon.setAttribute('class', 'fa fa-arrow-circle-right');
        let cardShown1 = document.querySelector('.sectionSide');
        let cardShown2 = document.querySelector('.card_detail');
        cardShown1.removeChild(cardShown2);
    } else {
        detailku.after(cardDetail);
        faicon.setAttribute('class', 'fa fa-arrow-circle-down');
    }


});