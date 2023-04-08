let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let data = JSON.parse(this.responseText);
        // console.log(data);

        for (let i = 0; i < data.length; i++) {
        // console.log("1st for");
            if (data[i].name.common == "India") {
             // console.log("1st if");
                console.log(`
                    Country name: ${data[i].name.common}
                    Currency name: ${data[i].currencies.INR.name}
                    Capital: ${data[i].capital}
                    Region: ${data[i].region}
                    Language: ${data[i].languages}
                    Population: ${data[i].population}
                    Country Flag: ${data[i].flags.png}
                    `);
            }


        }

    }


}

xhr.open("GET", "https://restcountries.com/v3.1/all#");
xhr.send();
