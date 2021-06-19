/* 
    Create 2 object and try to use call, apply and bind on them
*/
function InitializeDetails(obj) {
    this.name = obj.name;
    this.DOB = obj.DOB;
    this.height = obj.height;
    this.weight = obj.weight;
    this.profession = obj.profession;

    this.getBasicDetails = () => {
        return {
            "Name": this.name,
            "DOB": this.DOB,
            "Height": this.height,
            "Weight": this.weight,
            "Profession": this.profession
        }
    }
}

// Use of call
function ChessPlayer(obj) {
    obj.profession = "ChessPlayer";
    InitializeDetails.call(this, obj);

    this.nextEvent = obj.nextEvent;
    this.eventDate = obj.eventDate;
    this.FIDERating = obj.FIDERating;

    this.getDetails = () => {
        return {
            ...this.getBasicDetails(),
            "Next Event": this.nextEvent,
            "Event Date": this.eventDate,
            "FIDE Rating": this.FIDERating
        }
    }
}

const V_Anand = new ChessPlayer({
    name: "V_Anand",
    DOB: "11 December 1969",
    height: "175 cm",
    weight: "70 Kg",
    nextEvent: "FIDE candidates",
    eventDate: "1 February 2022",
    FIDERating: 2753
});

console.log(V_Anand.getDetails());

// Use of apply
function BuisnessPerson(obj) {
    obj.profession = "Buisness";
    InitializeDetails.apply(this, [obj]);

    this.netWorth = obj.netWorth;
    this.companyName = obj.companyName;

    this.getDetails = () => {
        return {
            ...this.getBasicDetails(),
            "Net Worth": this.netWorth,
            "Company Name": this.companyName
        }
    }
}

const E_Musk = new BuisnessPerson({
    name: "Elon Musk",
    DOB: "28 June 1971",
    height: "182 cm",
    weight: "95 Kg",
    netWorth: "$ 152 Billion",
    companyName: ["Tesla", "SpaceX", "SolarCity", "Boring Company", "Neuralink"]
});

console.log(E_Musk.getDetails());

// use of Bind
const NumberOfCompaniesOwned = function() {
    return this.companyName.length
}

const NumberOfCompaniesMuskOwns = NumberOfCompaniesOwned.bind(E_Musk);
console.log("Number of Companies Musk Owns: " + NumberOfCompaniesMuskOwns());