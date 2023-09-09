//'this' is a keyword that references the object of the current running function

const user = {
  firstName: 'John',
  lastName: 'Doe',
  fullname: function() {
    console.log(this)
    console.log(this.firstName + ' ' + this.lastName)
  }
}

user.fullname(); //'this' refers to user object
//does not work with arrow functions