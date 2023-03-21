var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.responseType = 'json';

xhr.send();

xhr.onload = function () {
    var responseObj = xhr.response;
    for (var i = 0; i < responseObj.length; i++)
    {
        console.log("Country name : ", responseObj[i].name.common);
        console.log("Region : ", responseObj[i].region);
        console.log("Sub Region : ",responseObj[i].subregion);
        console.log("Population : ",responseObj[i].population);
    }
}
