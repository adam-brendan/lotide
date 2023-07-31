const eqObjects = (obj1, obj2) => {
    for (key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }
    for (key in obj2) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }
    return true
};



const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject)); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false