console.log("hello");


// pattern printing
let string ="";

for (let i =0;i<=3;i++)
{
   for (let j=1;j<=i;j++)
   {
     string += "*";
   }
     string += "\n";  
}
console.log(string);

// pattern square printing
 let string1 = "";
 for (let a = 1;a <= 3; a++)
 {
   for (let b = 1; b <=3; b++)
   {
     string1 += "*";
   }
     string1 += "\n";
 }
  console.log(string1);

  //row printing
  let string2 ="";
  for(let c=0; c<=3; c++)
  {
    for(let d=1; d<= c; d++)
    {
      string2 += c;
    }
      string2 += "\n";
  }
     console.log(string2);

//column printing 
let string3 ="";
 for(let e=0;e<=3;e++)
  {
    for(let f=1;f<=e;f++)   
    {
       string3 += "*";
    }
     string3 += "\n";
  }
   console.log(string3);

  
   const user = [
      {id: 1, uname: "sarada"},
      {id: 2, uname: "george"},
      {id: 3, uname: "jolene"}
   ];

   const userNames = user.map(
         (user) => user.uname);
console.log(userNames);
    const userid = user.map((user) => user.id);
    console.log(userid);



    //Factory Function

function createCircle(radius) {
  return {
       radius,
       draw() {
         console.log('draw');
       },
  };
};
const miCircle = createCircle(7);
console.log(miCircle);

function createSquare(side) {
  return {
        side,
        square() {
           console.log("side");
        },
  };
}

const newSquare = createSquare(90);
console.log(newSquare);



//constructor function
 function treatNew (radiuss) {
   this.radiuss = radiuss;
   this.draww = function() {
     console.log("draww");
   }
 }
 const sarada = new treatNew(9);
 console.log(sarada); 


 function newLife(salary) {
   this.salary = salary;
   this.line = function() {
     console.log("salary");   
   }
 }

const level = new newLife(90);
console.log(level);


class Person {

  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }

}

const otto = new Person('Otto');

otto.introduce();



class prLanguage {
   
  constructor(language)
  {
    this.language = language;
  }

  calling()
  {
    console.log(`hello , i will be lived in america and my name is ${this.language}`);
  }
}

const newthing = new prLanguage('sarada');
console.log(newthing);
newthing.calling();


//delete property in objects

const proLanguage = 
{  filename:"the first project",
   filesecond:"the second Project",
   cars:
  {
    cName: "saradaa",
    cLast: "Muvvala",
    cDOB : '05-08'}

  };
  for (let key in proLanguage) {
    console.log(key,key[proLanguage]);
  }
   console.log(proLanguage);
 // delete proLanguage.cars.cDOB;
  console.log(proLanguage);


  //Enumerating Properties of an Object
    const circus = {
      monkey:8,
      play() {
        console.log("play with monkeys");
      },
      donkey:9
    };

    for (let key in circus)
    {
      console.log(key,circus[key]);
    }
    console.log(circus);
    if( 'donkey' in circus)
    {
      console.log("yes");
    }
//cloning an object
const studentProfile = {
  ...circus,
  std_name : "yash",
  std_lname : "don't know",
  std_id : 67,
  std_gender : 'male'
};
const another = Object.assign({color:"maroon"},studentProfile);
console.log(another);
const err = Object.assign({imagination:"high"},studentProfile);
console.log(err);

const hearme = {...studentProfile};
console.log(hearme);

const readme = {...studentProfile,proLanguage};
console.log(readme);
console.log(studentProfile);

const message = "   hai this is j\'avascript\n world   ";
const other = new String("hello");
console.log(typeof(message));
console.log(typeof(other));
//string length
console.log(message.length);
//index
console.log(message[1]);
//includes
console.log(message.includes("Hai"));
console.log(message.includes("this"));
//startWith
console.log(message.startsWith("hai"));
//endsWith
console.log(message.endsWith('d'));
//indexof
console.log(message.indexOf('this'));
//toUpperCase
console.log(message.toUpperCase());
//toLowerCase()
console.log(message.toLowerCase());
//replace
console.log(message.replace("this","sarada"));
console.log(message);
//To remove the whitespaces in our sentece we use trim
console.log(message.trim());
console.log(message.trimEnd());
console.log(message.trimRight());
console.log(message.trimStart());
//single quote
console.log(message);
//split to divide as array items
console.log(message.split(' '));
//template literals
let javascript ="dynamic";
const langu = `this is the best scripting ${javascript} language ${7 + 9}`;
console.log(langu);

const sdate = new Date().getUTCMilliseconds();
console.log(sdate);
// const ddate = new Date().setFullYear(2019);
// console.log(now);

//excercise to show the stree,city,zipcode

//string concatination

const str1 = "elon musk";
const str2 =`George`;
const fullName = str1.concat( str2);
console.log(fullName);

const strg = `spread operatro is used for the clone object`;
const strg1 = ` This will be utilized the for the less code`;
const strgm = strg.concat(strg1);
console.log(strgm);
//how to freeze an object
const lecturer = Object.freeze({
  lName:`swami`,
  lAge:45,
  lEyecolor:`brown`
});
 lecturer.lEyecolor = `black`;
 lecturer.lAge = 78;
 console.log(lecturer);


 //excercise to show the stree,city,zipcode

const showvalues = {
  street:`georgestreet`,
  city : `pink city`,
  zipcode:567455
};
function showAddress(showvalues) {
for (let key in showvalues)
{
  console.log(key,showvalues[key]);
}
}
showAddress(showvalues);
//console.log(showvalues);
//initialize factory function
function createAddress(street,city,zipcode)
{
  return {
    street,
    city,
    zipcode
  };
}
const address1 = createAddress(`gates`,`newyor`,678678);
console.log(address1);

//constructor function
function NewAddress(street1,city1,zipcode1)
{
  this.street1 = street1,
  this.city1 = city1,
  this.zipcode1 = zipcode1
}
const NewAdd1 = new NewAddress(`tinn`,`belgium`,67878);
console.log(NewAdd1);
const NewAdd2 = new NewAddress(`tinn`,`belgium`,67878);
console.log(NewAdd2);
const NewAdd3 = NewAdd1;
//areequal function
function areEqual(NewAdd1,NewAdd2) 
{
  return NewAdd1.street1 === NewAdd2.street1 && NewAdd1.city1 === NewAdd2.city1 && NewAdd1.zipcode1 === NewAdd2.zipcode1;
}
console.log(areEqual(NewAdd1,NewAdd2));
//aresome
function areSame(NewAdd1,NewAdd2)
 {
  return NewAdd1 === NewAdd2;
}
console.log(areSame(NewAdd1,NewAdd3));
console.log(areSame(NewAdd1,NewAdd2));


//blog function
let post = { 
  title:'a',
  body:'b',
  author:'c',
  views:34,
  comments: [
    {authr:'q',body:'c'},
    {author:'c',body:'d'},
  ],
  isLive:true,
};
console.log(post);

//using constructor function 
function Post(title,body,author)
{
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = true;
}

let NewPost = new Post('a','b','c');/*shift alt down arrow for copy the element */
console.log(NewPost);

let remove = [5,4,3,3,1,0];
remove.length = 0;
console.log(remove);

// let anoter = remove;
// remove = [];
// console.log(remove);

