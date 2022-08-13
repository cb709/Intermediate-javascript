// Get Full Name and Return First name and last name
 function getFistnameandLastname (fullname){
    const fullNameVar = fullname.split(' ');

    if(fullNameVar.length >= 3) {
        let firstName = fullNameVar[0];
        let lastName = fullNameVar.slice(1).join(" ");
        return [firstName,lastName];
    }
    else {
        return fullname.split(' ');
    }
    
 }

 const [firstName, lastName] = getFistnameandLastname("Mr Samir Hafiz")
 console.log(`First Name: ${firstName}\nLast Name: ${lastName}`);
