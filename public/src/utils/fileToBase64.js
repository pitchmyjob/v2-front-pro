
const getBase64 = function (file) {
   //var file = document.querySelector('#files > input[type="file"]').files[0];
   var reader = new FileReader();
   reader.readAsDataURL(file);
   return reader.result;
   reader.onload = function () {
     return reader.result;
   };
   reader.onerror = function (error) {
     return false;
   };
}

 module.exports = getBase64