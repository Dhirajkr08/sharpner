let name=prompt('');
let Mobile='';
let email='';
let time='';
console.log('Name:');
console.log('Mobile No:');
console.log('Email id:');
console.log('Time to Call:')
function onsignup(event){
    event.preventDefault();
    console.log(event.target.name);
    console.log(event.target.Email);
    console.log(event.target.phone);
}