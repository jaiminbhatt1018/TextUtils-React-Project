/*(function(num) {
    let str_arr=num.toString().split('');
    str_arr.reverse();
    if(num<0){
        num=-1*parseInt(str_arr.join(''));    
    }
    else  num=parseInt(str_arr.join(''));
    console.log(num);

})(-15);
*/
/*(function(size) {
    for(let i=1;i<=size;i++){
        if(i%3==0 && i%5==0){
            console.log("fizzbuzz");
        }
        else if(i%3==0){
            console.log("fizz");        
        }
        else if(i%5==0){
            console.log("buzz");
        }
        else{
            console.log(i);
        }
    }

})(15);
*/
/*function chunked_arr(arr,n) {
    let chunked=[];
    for(let i=0;i<=arr.length;i+=n){
    chunked.push(arr.slice(i,n+i));
    }
    for (const val of chunked) {
        console.log(val);    
    }
    

}
chunked_arr([1,2,3,4,5,6,7],2);

(function(arr){
let rev=[];
for (const element of arr) {
    rev.unshift(element);
}
console.log(rev);
})

([1,2,3,4,5]);

/*
(function(arr){
    let intCount=0;
    let floaCount=0;
    let charCount=0;

    for (const element of arr) {
        if (parseInt(element)) {
            intCount++;
        }
        else if(parseFloat(element)){
            floaCount++
        }
        else if(String(element))
        {
            charCount++;
        }
    }
    console.log(`total int in array ${intCount} ,total float = ${floaCount}, total char =${charCount}.`);
})([1,2,'f',4,'t']);
let str="jaimin <h1> bhatt <h1> here <p>";
let count=0;
let arr=(str.split(' '));
for (let ele of arr) {
    if(ele=="<h1>"){
    count++;
    }
  
}
console.log(count);

let obj={
    name:'jaimn',
    age:19,
    hobby:['cricket','coding']
}
console.log(obj['hobby']);
let element=document.getElementsByClassName('c');
console.log(element[0].getElementsByClassName('child'));//.getElementsByClassName('child'));

Array.from(element).forEach(ele => {
    ele.style.font='bold';
});
real();

let fn=function name() {
    console.log("this is test");
}
fn();
function real() {
    console.log("hello");
}

function real(params) {
    console.log(" jaimin");
}

function real(params) {
    console.log("bhatt");
}
*/
/*function isUnique(str) {
    let obj={};
    for (const ele of str) {
        (!obj[ele]?obj[ele]=1:obj[ele]++);
    }
    for (const ele in obj) {
        if(obj[ele]>1){
            return false;
        } 
    }
     return true;
    }
console.log(isUnique("jaim"));*/

/*function createobj(str) {
    let obj={};
   for (let ele of str) {
       (!obj[ele]?obj[ele]=1:obj[ele]++);
   } 
   return obj;
}
function ispermutation(str1,str2) {
    if(str1==str2){
        return true;
    }
    else
    {
        if(str1.length!==str2.length){
            return false;
        }
        else{
            let obj1=createobj(str1);
            let obj2=createobj(str2);
            for (let i in obj1) {
                if (obj1[i]!==obj2[i]) {
                    return false;
                }
            }
        }
          
    }   
    return true;
}
console.log(ispermutation("jai","bhatt"));*/
/*replace white spaces with %20
function replaceWhiteSpaces(str,len) {
    let Newstr="";
    for (let i = 0; i < len; i++) {
              
            if(str[i]==" "){
                Newstr+="%20";
            } 
            else{
               Newstr+=str[i]; 
            }
    }
    return Newstr;
}
console.log(replaceWhiteSpaces("i am jaimin ",12));
*/
function createobj(str) {
    let obj={};
   for (let ele of str) {
       (!obj[ele]?obj[ele]=1:obj[ele]++);
   } 
   return obj;
}
function ispermutation(str1) {
    let str="";
    for (let i = 0; i < str1.length; i++) {
              
            if(str1[i]==" "){
                str+="";
            } 
            else{
               str+=str1[i]; 
            }
    }
    let obj1=createobj(str);
    let counter=0;
    if(str.length%2==1){
        for (let ele in obj1) {
                  if (obj1[ele]%2==1 || obj1[ele]==1) {
                      counter++;
                      if(counter>1){return false}
                  }
              }      
    }
       else if(str.length%2==0){
        for (let ele in obj1) {
            if (obj1[ele]%2==1) {
                return false;
            }
        }
        }
        return true;
}
console.log(ispermutation("tact coa"));
 /*   else
    {
        if(str1.length!==str2.length){
            return false;
        }
        else{
            let obj1=createobj(str1);
            let obj2=createobj(str2);
            for (let i in obj1) {
                if (obj1[i]!==obj2[i]) {
                    return false;
                }
            }
        }
          
    }   
    return true;
}*/