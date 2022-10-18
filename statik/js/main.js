

//html indexxfdeki id number olan i js sayesinde cagirdik
const numberInput = document.getElementById('number')
const textInput = document.getElementById('msg')
const button = document.getElementById('button')

//sonra butoan bir tane event veririy send komutunu calistir
button.addEventListener('click',send)
//fetch data yi ckeip 
function send(){
    const number =numberInput.value
    const text =textInput.value


    fetch('/',{
        method:'post',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({number:number,text:text,})

    })
    .then(function(res){
        console.log(res)
    })
    .catch((err)=>console.log(err))

}