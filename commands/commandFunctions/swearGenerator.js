function swearGenerator() {

    const family = ["ton père", "ta mère", "ta soeur", "ton frère", "ta tante", "ton oncle", "ta cousine", "ton cousin", "ta grand-mère", "ton grand-père"];

    const fish = ["la truite", "le hareng", "le bar", "le pufferfish", "le poulpe",
        "le saumon", "le thon", "le maquereau", "la dorade", "le sole", "le cabillaud",
        "la raie", "la carpe", "le brochet", "l'anguille", "la sardine", "le flétan", "la morue"];


    const familyRandom = Math.floor(Math.random() * family.length);
    const fishRandom = Math.floor(Math.random() * fish.length);

    return `${family[familyRandom]} ${fish[fishRandom]}`

}

module.exports = {
    swearGenerator: swearGenerator
}