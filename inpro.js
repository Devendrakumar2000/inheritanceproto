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
  let dev1=Object.create(ravi);
  console.log(ravi.__proto__);//here the prototype of ravi is dev1
  console.log(ravi.__proto__.__proto__);//here it will print prototype of jar which is studentprototype
  console.log(ravi.__proto__.__proto__.__proto__);//here it prints prototype of PersonPrototype which is object prototype
  console.log(ravi.__proto__.__proto__.__proto__.__proto__);//here it prints null 
  
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
  function funDetails(){
    const keys = Object.keys(dev);
    console.log(keys);
  }
  funDetails();