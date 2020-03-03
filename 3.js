/**
 ==================
 Password Encryptor
 ==================

 Implementasikan program password Encryptor, yang akan mengamankan password kalian agar tidak mudah ditebak oleh orang-orang.
 Password encryptor akan mengambil input berupa sebuah string password, dan menukar masing-masing karakter di dalam string tersebut dengan
 karakter yang lain dengan aturan:

 1. vokal (a, i, u, e, o) akan diubah menjadi huruf berikutnya
 2. konsonan (huruf selain vokal) atau Huruf Uppercase akan diubah menjadi '<'
 3. angka (0-9) akan diubah menjadi angka disebelahnya, namun jika angka tersebut adalah angka 9, maka ubahlah angka tersebut menjadi 0
 4. karakter-karakter spesial '@', '#', '$', '*' akan dibiarkan saja
 
BATASAN INPUT:
- Untuk karakter-karakter spesial yang ada pada keyboard: hanya akan ada 4 macam yang perlu kalian handle, yaitu:
    -@
    -# 
    -$
    -*

Contoh:
1. Input:  'password21'
   Output: '<b<<<p<<32'

2. Input: '#####'
   Output: '#####'

3. Input: 'holmes@ABCDE'
   Output: '<p<<f<@<<<<<'

3. Input: '9thelegend'
   Output: '0<<f<f<f<<'

Rules:
- Boleh menambahkan variabel jika diperlukan
- Dilarang menggunakan built-in function kecuali untuk konversi Number to String dan sebaliknya [ contoh: Number(), parseInt(), String() ]  dan 
  pengecekan karakter tersebut adalah angka atau karakter [ contoh: isNaN(), isInteger() ]
 
 */

var password = '@#$*qwrtypaeuio1234567890' //silahkan isi dengan testcase/password 


//Tulis program disini
var output = ""
for( var i = 0; i < password.length; i++){
   switch (password[i]){
      case "0":
         output+= "1"
         break;
      case "1":
         output+= "2"
         break;
      case "2":
         output+= "3"
         break;
      case "3":
         output+= "4"
         break;
      case "4":
         output+= "5"
         break;
      case "5":
         output+= "6"
         break;
      case "6":
         output+= "7"
         break;
      case "7":
         output+= "8"
         break;
      case "8":
         output+= "9"
         break;
      case "9":
         output+= "0"
         break;
      case "a":
         output+= "b"
         break;
      case "e":
         output+= "f"
         break;
      case "u":
         output+= "v"
         break;
      case "i":
         output+= "j"
         break;
      case "o":
         output+= "p"
         break;
      default:
         if (password[i] === "@" || password[i] === "#" || password[i] === "$" || password[i] === "*"){
            output+= password[i];
         } else {
            output+="<"
         }
   }
}
console.log(output);