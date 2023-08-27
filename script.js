const btnCalEl = document.querySelector('#btnCal');
const dobInput = document.querySelector('#dobInput');
const outputLi = document.querySelectorAll('li');
const spanEl = document.querySelectorAll('span');



const calculateAge = ()=>{
    const dobInputValue = dobInput.value;
    if(dobInputValue =="")
    {
        alert('Please Enter All Values');
    }
    else{
    const currentDate = new Date();
    const dobDate = new Date(dobInputValue);
    
    let age = currentDate.getFullYear() - dobDate.getFullYear();
    let month = currentDate.getMonth() - dobDate.getMonth();
    const day = currentDate.getDate() - dobDate.getDate();

    if(month<0){
        age --;
        month=12+month;
    }
    else if (month===0 & currentDate.getDate()<dobDate.getDate())
    {
        age --;
    }
    spanEl[0].textContent = `${age}`;
    spanEl[1].innerText =`${age>1?"Years":"Year"}`;
    spanEl[2].textContent = `${month}`;
    spanEl[3].innerText = `${month>1?"Months":"Month"}`;
    spanEl[4].textContent = `${day}`;
    spanEl[5].innerText = `${day>1?"Days":"Day"}`;

        const totalMonth = month + 12 * age;
        outputLi[3].textContent= `${totalMonth} ${totalMonth>1?"Months":"Month"} ${day} ${day>1?"Days":"Day"}`;

        const totalDays = Math.floor(age*365.24 + month*30.42 + day);
        outputLi[5].textContent= `${totalDays} ${totalDays>1?"Days":"Day"}`;

        const weeks = Math.floor(totalDays/7);
        const remainDays = Math.floor(totalDays%7);
        
        outputLi[4].textContent= `${weeks} ${weeks>1?"Weeks":"Week"} ${remainDays} ${remainDays>1?"Days":"Day"}`;

        const hours = totalDays*24
        outputLi[6].textContent= `${hours} ${hours>1?"Hours":"hour"}`;

        const min = hours*60
        outputLi[7].textContent= `${min} ${min>1?"Minutes":"Minute"}`;

        const sec = min*60;
        outputLi[8].textContent= `${sec} ${sec>1?"Seconds":"Second"}`;

        
    }
}


btnCalEl.addEventListener('click', calculateAge);