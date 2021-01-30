// To Do
// [1] Diplsay all reminders
    // if no reminders  = "You have no reminders"
    // else ( print remidners in list )
// [2] Be able to sort reminders and filter by string input
    // ?
// [3] Create a new class reminder
    // push reminder into list(uncomplete)
// [4] UPdate an object of class reminder
// [5] True/false toggle for done -> if don = true then etc
    // Boolean true or false toggle variable 
        // Map to find and push to completedList & notCompletedList
// [6] Exit program - program should be in single function
    // exit
    // else (please enter a valid number)

import readlineSync, { question } from 'readline-sync';


class Reminder {
    message: string;
    tag: string;
    toggleComplete: boolean;

    constructor(msg: string, tag: string) {
        this.message = msg;
        this.tag = tag;
        this.toggleComplete = false;
    }

    reminderCheck() {
        if (this.toggleComplete != true) {
            console.log(`
            Reminder: ${this.message}
            Category: ${this.tag}
            🛑
            `)
        } else {
            console.log(`
            Reminder: ${this.message}
            Tag: ${this.tag}
            ☑️
            `)
        }
    }

    booleanTrigger(isComplete: boolean) {
        if (isComplete == true) {
            this.toggleComplete = false;
        } else if (isComplete == false) {
            this.toggleComplete = true;
        }
    }

    msgEdit(msg: string) {
        this.message = msg;
    }

    tagEdit(tag: string) {
        this.tag = tag;
    }

}


let reminderArray: Reminder[] = [];

class ReminderList {
    message: string;
    tag: string;
    toggleComplete: boolean;

    constructor(msg: string, tag: string) {
        this.message = msg;
        this.tag = tag;
        this.toggleComplete = false;
    }

    private _reminderList: Reminder[] = [];
    
}


function mainMenu () {
    let response: string = "1";
    while (response != "") {
        response = readlineSync.question('Hit the [Enter] key to see main menu: ');
        if (response != "") {
            console.log('Invalid input');
        } else {
            console.log(`
            ------------------------------
            |      Reminders menu:       |
            ------------------------------
            |  [1] Show all reminders 👀  
            |  [2] Search reminders 🔎    
            |  [3] Add reminder ✏️        
            |  [4] Modify reminders ✍️   
            |  [5] Toggle completion ⭕️ 🔴  
            |  [6] Exit 👋                
            ------------------------------
            `);
            runFunc();
        }
    }
} 

// Run main menu select function - switch case to connect and allow user to select from table

function runFunc() {
    let booleanFunc: any = false;
    while (booleanFunc == false ) {
        let response = question('Please select a menu option: ');
        switch (response) {
            case '1':
                showReminders(reminderArray);
                booleanFunc = true;
                break;
            // case '2':
            //     searchReminders();
            //     booleanFunc = true;
            //     break;
            case '3':
                addReminders();
                booleanFunc = true;
                break;
            case '4':
                modReminders(reminderArray);
                booleanFunc = true;
                break;
            // case '5':
            //     toggleComplete();
            //     booleanFunc = true;
            //     break;
            case '6':
                exit();
                booleanFunc = true;
                break;
            default: console.log('Invalid input. Please Try again.');
        }
    }
}


// --------[1]------ 
function showReminders(array: Reminder[]) {
    if (array.length == 0) {
        console.log('You have no reminders.');
        mainMenu();
    } else {
        for (let i = 0; i < array.length; i++) {
            console.log(`   Reminder [${i + 1}]:`)
            array[i].reminderCheck();
        }
    }mainMenu();
}


// --------[2]------ Search through array by tag to find which tag they have input
// function searchReminders () {
//     let msg = question('Please enter a search keyword: ');
//     let reminder = new Reminder (msg, tag);
//     const filtering = arr.filter(msg, any => msg.filter ==  );
//     reminderArray.forEach(element => {
//         console.log(Reminder)
//     });
//     console.log(msg);
//     mainMenu();
    
// }


// --------[3]------ Search through array by tag to find which tag they have input
function addReminders () {

    let msg: string = question('Please enter a reminder message: ');
    let tag: string = question('Please enter a tag message: ');
    let reminder: any = new Reminder (msg, tag);
    let booleanFunc = false;

    while (booleanFunc == false) {
        
        let yesNo: string = question(`Add reminder '${reminder.message}'? y/n: `);
        let yesNoCase: any = yesNo.toLocaleLowerCase();
        if (yesNoCase == 'y') {
            reminderArray.push(reminder);
            console.log(`New reminder added!`);
            booleanFunc = true;
        } else if (yesNoCase == 'n') {
            console.log('Reminder has been deleted.');
            booleanFunc = true;
        }
        else {
            console.log(`Please enter a valid input of either (Y/N): `)
        }
    }
    mainMenu();
}


// --------[4]------ modify

function modReminders(array: Reminder[]) {
    let reminder = new Reminder('', '');

    let booleanFunc = false; 
    while (booleanFunc == false) {
        console.log('Please select your reminder to modify: ');
        showReminders(array);
        let modifyReminders = question('Please select the [number] of the reminder you would like to modify: ')
        let modNum = parseInt(modifyReminders)
        if (modNum <= array.length) {
            reminder = array[modNum - 1];
        } else {
            console.log('Please enter a vaild input.')
        }
    }      

    console.log(typeof (reminder))
    console.log(`
    ------------------------------
    |      Reminders menu:       |
    ------------------------------
    |  [1] Modify Message 
    |  [2] Modify Tag    
    |  [3] Toggle Complete                        
    ------------------------------
    `);


    mainMenu();
}




// --------[5]------ Mark complete

function toggleComplete (array: ReminderList[]) {
    console.log("placeholder");
    mainMenu();
    
}

// --------[6]------ Exit

function exit () {
    console.log("");
    
}

//Call main menu function to readline sync ask question if they want to show menu
mainMenu();



