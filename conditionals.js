const age = 35;

let whichSchool = "";

if (age < 13) {
    whichSchool = "Elementary School";

} else if (age >= 13 && age <= 18) {
    whichSchool = "Secondary School";

} else {
    whichSchool = "Lighthouse Labs";

}

return whichSchool;