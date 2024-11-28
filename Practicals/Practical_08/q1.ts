// import PromptSync = require("prompt-sync");;
// const prompt = PromptSync();

function printOutput(month:string,year:number,days:number){
    console.log(`The days in month ${month} of year : ${year} are : ${days}`);
}

function getDay(year:number = new Date().getFullYear() , month:number){
    switch(month){
        case 1:
            printOutput('January',year,31);
            console.log(year);
            break;
        case 2 : 
            if(year % 4 == 0){
                printOutput('February',year,29);
            }
            else{
                printOutput('February',year,28);
            }
            break;
        case 3 :
            printOutput('March',year,31);
            break;
        case 4 :
            printOutput('April',year,30);
            break;
        case 5 : 
            printOutput('May',year,31);
            break;
        case 6 :
            printOutput('June',year,30);
            break;
        case 7 : 
            printOutput('July',year,31);
            break;
        case 8 :
            printOutput('August',year,31);
            break;
        case 9 : 
            printOutput('September',year,30);
            break;
        case 10 : 
            printOutput('October',year,31);
            break;
        case 11 :
            printOutput('November',year,30);
            break;
        case 12 :
            printOutput('December',year,31);
            break;
    }
}


getDay(2019,3);
getDay(undefined,3);