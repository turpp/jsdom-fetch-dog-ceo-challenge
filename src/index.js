console.log('%c HI', 'color: firebrick')
let breedArray=[]
fetch("https://dog.ceo/api/breeds/image/random/4").then(function(response){
    return response.json()
}).then(function(json){
    // console.log(json)
    // console.log(json.message.length)
    let array = json.message
    let div=document.getElementById('dog-image-container')
    for (const element of array){
        div.innerHTML += `<img src=${element} alt='Dog pic' >`
    }
})

fetch("https://dog.ceo/api/breeds/list/all").then(function(response){
    return response.json()
}).then(function(json){
    for(const key in json.message){
        let ul=document.getElementById('dog-breeds')
        ul.innerHTML += `<li>${key}</li>`
        breedArray.push(key)
    }
})

let ul=document.getElementById('dog-breeds')
document.getElementById('dog-breeds').addEventListener('click',function(e){
    let li=e.target
    li.style.color="green"
})

let dropDown=document.getElementById('breed-dropdown')
dropDown.addEventListener('change',function(e){
    let ul=document.getElementById('dog-breeds')
    ul.innerHTML=''
    switch(dropDown.value){
        case 'a':
            for(const element of breedArray){
                if(element[0]=='a'){
                console.log(element)
                ul.innerHTML+=`<li>${element}</li>`
                }
            }
            break;
        case 'b':
            for(const element of breedArray){
                if(element[0]=='b'){
                console.log(element)
                ul.innerHTML+=`<li>${element}</li>`
                }
            }
            console.log("B breeds only")
            break;
        case 'c':
            for(const element of breedArray){
                if(element[0]=='c'){
                console.log(element)
                ul.innerHTML+=`<li>${element}</li>`
                }
            }
            console.log("C breeds only")
            break;
        case 'd': 
        for(const element of breedArray){
            if(element[0]=='d'){
            console.log(element)
            ul.innerHTML+=`<li>${element}</li>`
            }
        }
            console.log("D breeds only")
    }
})
