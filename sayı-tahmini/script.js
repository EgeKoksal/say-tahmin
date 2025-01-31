const eklenecekSayilar = [2, 4, 6, 8];
const eklenecekSayi = eklenecekSayilar[rastgeleSayi(0, 3)];
let ad = "";
const oyunAlaniEleman = document.querySelector("#oyun-alani");

ekran1Goster();

function ekran1Goster() {
  const adInputElemani = document.createElement("input"); //input oluştur
  adInputElemani.placeholder = "Adın nedir?"; //placeholder ekledik
  oyunAlaniEleman.append(adInputElemani);

  adInputElemani.addEventListener("keypress", (olay) => {
    if( olay.key === "Enter" ) {
        olay.preventDefault() // yanlışlıkla form submit engellemek için
        ad = olay.currentTarget.value

        ekran2Goster()
    }
  })
}

function ekran2Goster() {
    oyunAlaniEleman.innerHTML = "" // Ana div içindeki tüm HTML kodunu temizle..

    const pEleman = document.createElement("p")
    pEleman.textContent = "Aklından bir sayı tut"
    oyunAlaniEleman.append(pEleman)

    const butonEleman = document.createElement("button")
    butonEleman.textContent = "Devam ➡"
    oyunAlaniEleman.append(butonEleman)

    butonEleman.addEventListener("click", (olay)=>{
        ekran3Goster()
    } )
}


function ekran3Goster() {
    oyunAlaniEleman.innerHTML = "" 

    const pEleman = document.createElement("p")
    pEleman.textContent = "Sayıyı 2 ile çarp"
    oyunAlaniEleman.append(pEleman)

    const butonEleman = document.createElement("button")
    butonEleman.textContent = "Devam ➡"
    oyunAlaniEleman.append(butonEleman)

    butonEleman.addEventListener("click", (olay)=>{
        ekran4Goster()
    } )
}

function ekran4Goster() {
    oyunAlaniEleman.innerHTML = "" 

    const pEleman = document.createElement("p")
    pEleman.textContent = `Çıkan sonuca ${eklenecekSayi} ekle.`
    oyunAlaniEleman.append(pEleman)

    const butonEleman = document.createElement("button")
    butonEleman.textContent = "Devam ➡"
    oyunAlaniEleman.append(butonEleman)

    butonEleman.addEventListener("click", (olay)=>{
        ekran5Goster()
    } )
}

function ekran5Goster() {
    oyunAlaniEleman.innerHTML = "" 

    const pEleman = document.createElement("p")
    pEleman.textContent = "Sonucu 2'ye böl"
    oyunAlaniEleman.append(pEleman)

    const butonEleman = document.createElement("button")
    butonEleman.textContent = "Devam ➡"
    oyunAlaniEleman.append(butonEleman)

    butonEleman.addEventListener("click", (olay)=>{
        ekran6Goster()
    } )
}

function ekran6Goster() {
    oyunAlaniEleman.innerHTML = "" 

    const pEleman = document.createElement("p")
    pEleman.textContent = "Sonuçtan ilk başta tuttuğun sayıyı çıkar"
    oyunAlaniEleman.append(pEleman)

    const butonEleman = document.createElement("button")
    butonEleman.textContent = "Devam ➡"
    oyunAlaniEleman.append(butonEleman)

    butonEleman.addEventListener("click", (olay)=>{
        ekran7Goster()
    } )
}

function ekran7Goster() {
    oyunAlaniEleman.innerHTML = "" 

    const pEleman = document.createElement("p")
    pEleman.textContent = `CEVAP: ${eklenecekSayi / 2}`
    oyunAlaniEleman.append(pEleman)

    const butonEleman = document.createElement("button")
    butonEleman.textContent = "OYUNU BİTİR"
    oyunAlaniEleman.append(butonEleman)

    butonEleman.addEventListener("click", (olay)=>{
        ekran8Goster()
    } )
}

function ekran8Goster() {
    oyunAlaniEleman.innerHTML = "" 

    const pEleman = document.createElement("p")
    pEleman.textContent = `olm iyisin he ${ad}`
    oyunAlaniEleman.append(pEleman)

}

//utility function
function rastgeleSayi(min, max) {
  min = Math.ceil(min); //tam sayıya çevirmek için
  max = Math.floor(max); //tam sayıya çevirmek için
  return Math.floor(Math.random() * (max - min + 1) + min);
}