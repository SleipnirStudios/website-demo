const accomodation = {

    name: "Villa Kuusamo",

    addres: "Talvijärventie 13A",

    latitude: 66.1725,
    longitude: 29.1277,

    information: {

        arrival: {
            title: "Saapuminen",
            content: `

            <div class="arrival-section">

                <div class="arrival-item">
                    <span class="arrival-icon">⚲</span>

                    <div>
                        <strong>Osoite:</strong>
                        <p>Talvijärventie 13A</p>
                    </div>

                </div>

                <div class="arrival-item">
                    <span class="arrival-icon">⏲</span>

                    <div>
                        <strong>Sisäänkirjautuminen</strong>
                        <p>Klo 15.00 alkaen.</p>
                    </div>
                    
                </div>

                <div class="arrival-item">
                    <span class="arrival-icon">ꄗ</span>
                    
                    <div>
                        <strong>Avain</strong>
                        <p>
                            Avain löytyy ulko-oven vieressä olevasta
                            avainlokerosta.
                        </p>
                    
                    </div>
                </div>

                <div class="arrival-item">
                    <span class="arrival-icon">✇</span>
                    
                    <div>
                        <strong>Pysäköinti</strong>
                        <p>
                            Pysäköinti on mahdollista majoituksen pihassa.
                        </p>
                    
                    </div>

                </div>

                <a
                    href="https://www.google.com/maps/search/?api=1&query=66.1725, 29.1277"
                    target="_blank"
                    class="direction-button"
                >
                    ⚲ Avaa reittiohjeet
                </a>

            </div>
            `
        },

        contacts: {
            title: "Yhteystiedot",
            content: `
                <p><strong>Puhelin:</strong> +358 123 567 890</p>
                <p><strong>Sähköposti:</strong> maijameikäläinen@gmail.com</p>
            `
        },

        wifi: {
            title: "Wifi",
            content: `
                <p><strong>Verkko:</strong> Guest</p>
                <p><strong>Salasana:</strong> Vieras123</p>
            `
        },
    
        checkin: {
            title: "Sisäänkirjautuminen",
            content: `
                <p>Sisäänkirjautuminen alkaa klo 15.00.</p>
                <p>
                    Avain löytyy ulko-oven vieressä olevasta
                    avainlokerosta.
                </p>
                <p>
                    Avainlokeron koodi:
                    <strong>1234</strong>
                </p>
            `
        },
    
        rules: {
            title: "Säännöt",
            content: `
                <ul>
                    <li>Tupakointi sisätiloissa on kielletty.</li>
                    <li>Hiljaisuus klo 23.00–07.00.</li>
                    <li>Lemmikit vain erikseen sovittaessa.</li>
                </ul>
            `
        },
    
        parking: {
            title: "Pysäköinti",
            content: `
                <p>
                    Pysäköinti on mahdollista majoituksen pihassa.
                </p>
            `
        },

        sauna: {
            title: "Sauna",
            content: `
                <p>
                    Sauna sijaitsee rakennuksen yhteydessä.
                </p>
                <p>
                    Sauna on käytettävissä klo 16.00–22.00.
                </p>
            `
        }
    }
};