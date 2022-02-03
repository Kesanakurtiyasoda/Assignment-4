// Assignment-1
var array =  ["edstem", "react", "javascript", "html", "css" ];
var count = 0;
for( var i = 0; i<array.length ; i++){
    for( var j = 0; j<array[i].length;j++){
        if(array[i][j]=="a" || array[i][j]=="e" || array[i][j]=="i" || array[i][j]=="o" || array[i][j]=="u" ){
            count++;
        }
    }
}
console.log(+ count);

//Assignment-2
var string1 = "level";
var length = string1.length;
var string2 = "0";
for (var i = length - 1; i >= 0; i--) {
  string2 += string1[i];
}
if (string1 === string2) {
  console.log("Yes");
} else {
  console.log("No");
}

//Assignmeent-3
var marks = [95,86,66,94,58];
var sum = 0;
var length = marks.length;
for(var i = 0; i<length; i++){
    var sum = sum + marks[i];
}
var avg = sum / marks.length;
console.log(avg);

//assignment 4
var string = ["edstem", "react", "html", "foodie", "coder"];
var string1 = []
for (var i = 0; i < string.length;  i++) {
    if(string[i].length % 2 ===0){
        string1.push(string[i])
    }
  }
  console.log(string1);

  //Assignment-5
var array = [5, 9, 8, 12, 22, 18];
for (i = 0; i < array.length; i++) {
  if (array[i] % 3 === 0) {
    array[i] = "multiple";
  }
}
console.log(array);

//Assignment-6
var array = [];
for (var i = 1; i <= 10; i++) {
  array.push(i);
}
console.log(array);

//Assignment-7
var string1 = "Edstem Technologies Located at Kerala";
var string2 = "";
var result = [];
for (var i = 0; i < string1.length; i++) {
  if (string1[i] == " ") {
    result.push(string2);
    string2 = "";
  } else {
    string2 += string1[i];
  }
}
result.push(string2);
console.log(result);

//Assignment-8
var string = "Edstem";
for (var i = 1; i < string.length; i = i + 2) {
  console.log(string[i]);
}

//Assignment-9
var string ="coding is easy";
var count = 1;
for (var i = 0; i < string.length; i++){
    if(string[i] == ' '){
        count++;
    }
}
console.log(count ++);

//Assignment-10
var arr = ["react", "html", "edstm"]
var str1 = "false";
var str = "edstem";
for(var i=0; i<arr.length; i++) {
    if(str ===arr[i]) {
        str1 = "true"
    }
}
if(str1 ==="true"){
    console.log("true");
}else{
    console.log("false");
}