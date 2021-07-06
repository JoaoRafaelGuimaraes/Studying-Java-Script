let img = document.createElement("img")
img.setAttribute('id','photo')

function Create_Character(){

   let age = document.querySelector('input#txtAge').value
   let sex = document.getElementsByName('radSex')
   let res = document.querySelector("div#res")
   let gender = ''

   if (sex[0].checked){
      gender = "Masc"
      //
      if (age>=0 && age<5) {
         img.setAttribute('src','Male_Baby.jpg')
         document.body.style.background = "#5bba76"
      }else if (age<=12) {
         img.setAttribute('src','Male_Child.jpg')
         document.body.style.background = "#d6c545"
      }else if (age<=20){
         img.setAttribute('src', 'Male_Teen.jpg')
         document.body.style.background = "#82740a"
      }else if (age<=55){
         img.setAttribute('src', 'Male_Adult.jpg')
         document.body.style.background = "#ff7dda"
      }else if (age>55 && age<=120){
         img.setAttribute('src', 'Male_Elder.jpg')
         document.body.style.background = "#636363"
      }else{
         window.alert("Insira uma idade entre 0 e 120!")
      }
   }
   else{
      gender = "Fem"
      //
      if (age>=0 && age<5) {
         img.setAttribute('src','Female_Baby.jpg')
         document.body.style.background = "#4a3f3c"
      }else if (age<=12) {
         img.setAttribute('src','Female_Child.jpg')
         document.body.style.background = "#e93cf3"
      }else if (age<=20){
         img.setAttribute('src', 'Female_Teen.jpg')
         document.body.style.background = "#c1adc9"
      }else if (age<=55){
         img.setAttribute('src', 'Female_Adult.jpg')
         document.body.style.background = "#f39d30"
      }else if (age>55 && age<=120){
         img.setAttribute('src', 'Female_Elder.jpg')
         document.body.style.background = "#420132"
      }else{
         window.alert("Insira uma idade entre 0 e 120!")
      }
      
   }

   
   res.appendChild(img)
   res.style.textAlign = 'center'
}