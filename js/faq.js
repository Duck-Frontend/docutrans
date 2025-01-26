const btnReset = document.querySelector("btn-reset")
const btnSubmit = document.querySelector('btn-submit')


const form = document.forms['form-faq']


form.addEventListener("submit", (e)=>{
   e.preventDefault()
   const obj = {
    name : form.name.value,
    tel: form.tel.value,
    email: form.email.value,
    description: form.description.value,
    weight: form.weight.value,
    volume: form.volume.value,
    price: form.price.value,
    method: form.method.value,
    type: form.type.value,
    cod: form.cod.value,
    addInfo: form.add_info.value,
    checkbox: form.checkbox.value,

    country: form.country.value,
    city: form.city.value,
    codcity: form.codcity.value,

    country_one: form.country_one.value,
    city_one: form.city_one.value,
    codcity_one: form.codcity_one.value,
   

   }
   console.log(obj);
   form.reset()
   
})