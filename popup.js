document.addEventListener('DOMContentLoaded', async () => {
    const htmlData = await httpGet();
    const regex = /(<div class="enpara-gold-exchange-rates__table-item).*?<\/div>/gm
    const exchangeArr = htmlData.match(regex);
    // const domIds = ['#usd']

    // alert(exchangeArr);
    // exchangeArr.forEach((node, index) => {
        // document.querySelector(node).innerHTML = exchangeArr[index];
        document.querySelector('#table').innerHTML += exchangeArr.join('').replace('Parite', '')
    // })
})

//GET Request to API 
async function httpGet() {
    const url = 'https://www.qnbfinansbank.enpara.com/hesaplar/doviz-ve-altin-kurlari';
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}