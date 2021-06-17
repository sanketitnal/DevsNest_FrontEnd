/*
1. Write a JavaScript program to list the properties of a JavaScript object. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,sclass,rollno
*/
function getProps(obj) {
    return Object.keys(obj);
}

/*
2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
*/
function deleteRoll(obj) {
    console.log(obj);
    if(obj['rollno'] !== undefined) {
        delete obj['rollno'];
    }
    console.log(obj);
}

/*
3. Write a JavaScript program to get the length of a JavaScript object.  Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
*/
function getObjectKeysLength(obj) {
    return Object.keys(obj).length;
}

/*
4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 
*/
function printInfo(obj_array) {
    for(let item of obj_array) {
        console.log(item);
    }
}

/*
5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased 
*/
function Cylinder(radius, height) {
    this.radius = radius;
    this.height = height;
}
Cylinder.prototype.getVolume = function() {
    return 2 * this.radius * this.height * Math.PI;
}

/*
6. Write a JavaScript program to sort an array of JavaScript objects.
Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
{ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
{ title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 
Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" },
[object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, 
[object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]
*/
// Sorting by library ID

let list = [{ title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
            { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
            { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
sorted_list = list.sort((item1, item2) => {
    return item1.libraryID - item2.libraryID;
})

console.log(sorted_list);