//Question no. 1
let StudentPrototype={
    details(fname,lname,bYear){
        this.fname=fname;
        this.lname=lname;
        this.bYear=bYear;
    }
  }
  
  let dev=Object.create(StudentPrototype);
  dev.details("dev","d",2000);
  dev.gender="Male";
  console.log(dev);
  
  //Question no.2
  let dev1=Object.create(dev);
  console.log(dev1.__proto__);//here the prototype of dev is studentprototype which is an object
  console.log(dev1.__proto__.__proto__);//here it will print prototype of dev1 which is  object
  console.log(dev1.__proto__.__proto__.__proto__);//prototype of object constructor
  console.log(dev1.__proto__.__proto__.__proto__.__proto__);//null
  
  //Question no.3
  let arr1={
    sum:function(arr){
        return arr.reduce((acc,cur)=>acc+=cur,0);
    }
  }
  let arr11=[10,36,21,89];
  let arr12=[7,56,84,90,20];
  console.log(arr1.sum(arr11));
  console.log(arr1.sum(arr12));
  
  //Question no. 4
  function Details(){
    const keys = Object.keys(dev1);
    console.log(keys);
  }
  Details();
