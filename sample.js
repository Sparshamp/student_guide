// const greeting="Hello, World";
// const pi=3.14;
// const isActive=true;

// //exporting literals
// module.exports.greeting=greeting;
// module.exports.pi=pi;
// module.exports.isActive=isActive;

//export objects
const myObject={
    name: 'John Doe',
    age:30,
    greet(){
        return 'Hello, my name is ${this.name} and I am ${this.age}';
    }
};

//Export the object
module.exports=myObject;


