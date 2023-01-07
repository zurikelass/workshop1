
const firstChild = {
    name: "Ann",
    age:28
}
const secondChild ={
    name:"levan",
    age:21
}

let dif = firstChild.age - secondChild.age;

let result= `${firstChild.name} ${secondChild.name} -ზე ${dif} წლით უფროსია` ;

console.log(result, "res")




//* task 2


const arr  = ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den'];
let middle = arr[(arr.length - 1 )/2]
console.log(middle, `log`)

//* 3


const student ={ 
   firstName: 'David',
   lastName: 'Lee',
   age: 25,
   subjects : ['Math', 'Chemistry', 'Biology', 'Geometry', 'Geography',] ,
   roomMate: {
        age: 26,
        Name: 'zach'

   }
}
   const subjectsArr = student.subjects;
   for(let i=0; i < student.subjects.length; i++){
    console.log(subjectsArr[i])
   }
   const fullName = student.firstName + ' ' + student.lastName ;
   student["fullname"]=fullName;
   console.log(fullName)

   let studentResult= `${student.firstName} ${student.lastName} age is ${student.age} and his roommate is ${student.roomMate.Name}` ;
    console.log(studentResult)

    //* 4


    const testArr = [ "Banana", "Orange", "Apple", "Mango",2,12]
    let pIndex=0 ;
    while(typeof testArr[pIndex] == 'string') {
        console.log(testArr[pIndex]);
        pIndex++;

    }



 //* 5
   
   const rr = [ 12,23,43,11,9,2,121,90]
   for (let i=0; i<rr.length; i++){

   if( rr[i]>31 && rr[i]%2==0){
    console.log(rr[i])
   }
   
   }

