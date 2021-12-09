
function person(firstName, lastName, dateofBirth) 
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateofBirth = dateofBirth;
    console.log(firstName,lastName,dateofBirth);    
}

let newUser1 = person('Rishabh','Singh','15011998');
let newUser2 = person('Lalit','Singhania','15011999');


