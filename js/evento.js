let form1 = document.getElementById('myForm');

form1.addEventListener('submit', function(e) {
  let form1 = document.getElementById('myForm');
let inputs = document.getElementsByClassName('inputT');
  
[].forEach.call(inputs, function(item) {
   if(item.value.length === 0) {
     item.style.border = '1px solid red';
   }else {
     item.style.border = '1px solid green';
   }
}); 
  
  
let inputsBlank =  [].filter.call(inputs, function(item) {
     return item.value.length === 0;
  })

  let len = inputsBlank.length; 

 if(len !== 0) {
   e.preventDefault();
}
 else if (len === 0) {
   form1.submit();
   
   const boton = document.getElementById('boton')
   boton.addEventListener('click', () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Los datos han sido enviados',
        showConfirmButton: true,
        timer: 3000,
      })
    });
} 

})