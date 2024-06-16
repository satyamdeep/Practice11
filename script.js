//Objective
let para = document.querySelector("#para");
function input(){
    let strings = prompt("Enter a string");
    let count = 0;
    for(let char of strings){
        // console.log(char);
        if(char ==="a"|| char ==="e"|| char ==="i"|| char ==="o"|| char ==="u") {
            count++;
        }       
    }
    console.log(count,"vowels in the string");
    para.innerText = count+ " vowels in the string"
}


    //2 using Fat arrow
    let para1 = document.querySelector("#para1");
    const countVow = ()=>{
        let strings = prompt("Enter a string");
        let count = 0;
       for(let char of strings){
        console.log(char);
        if(char ==="a"|| char ==="e"|| char ==="i"|| char ==="o"|| char ==="u") {
            count++;
        }
       }
       console.log(count,"vowels in the string");
        para1.innerText = count+ " vowels in the string"
    }


