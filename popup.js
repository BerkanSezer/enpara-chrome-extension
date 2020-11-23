document.addEventListener('DOMContentLoaded', async () => {
    const htmlData = await httpGet();
    const exchangeArr = htmlData.split('<div class="enpara-gold-exchange-rates__table-item">').slice(1);
    exchangeArr[3] = exchangeArr[3].split('<div class')[0];
    const domIds = ['#usd', '#eur', '#gold']
    domIds.forEach((node, index) => {
        document.querySelector(node).innerHTML = exchangeArr[index].split('</div>')[0].trim();
    })
})

//GET Request to API 
async function httpGet() {
    const url = 'https://www.qnbfinansbank.enpara.com/hesaplar/doviz-ve-altin-kurlari';
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}