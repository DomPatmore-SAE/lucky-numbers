window.onload = ()=>{

    const myButton = document.getElementById('button')
    myButton.onmouseover = displayNumbers()

    function displayNumbers(){
        //this will find the element with the id 'luckynumbers' and print the list of numbers within
        document.getElementById('button').innerText =generateLuckyNumbers()
    }

    const generateLuckyNumbers = ()=>{
        //this returns a list of 6 numbers between 1 and 50
        let numbers = []
        for (let index = 0; index < numbers.length; index++) {
            numbers.push(Math.ceil(Math.random() * 1000))
        }
        return number
    }

    
}