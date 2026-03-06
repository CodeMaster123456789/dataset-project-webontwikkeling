import * as readline from "readline-sync";
import users from "./Json/users.json" with { type: "json" };

interface Role {
    id: number;
    name: string;
    canEdit: boolean;
    canDelete: boolean;
}

interface User {
    id: number;
    name: string;
    description: string;
    age: number;
    isActive: boolean;
    birthDate: string;
    profileImage: string;
    status: string;
    hobbies: string[];
    role: Role; // ← FIX
}

const UserList: User[] = users;

let optie : number = 0;

while (optie != 3) {
    console.log("Welcome to the JSON data viewer!")
    console.log("");
    console.log("1. View all data");
    console.log("2. Filter by ID");
    console.log("3. Exit");
    console.log("");
    optie = readline.questionInt("Please enter your choice: ");

    switch (optie) 
    {
        case 1:
            let i : number = 1;
            function ShowUsers(user: User) {
                console.log(`Gebruiker: ${i++}`)
                console.log(`- id: ${user.id}`);
                console.log(`- name: ${user.name}`);
                console.log(`- discription: ${user.description}`);
                console.log(`- age: ${user.age}`);
                console.log(`- isActive: ${user.isActive}`);
                console.log(`- birthDate: ${user.birthDate}`);
                console.log(`- profileImage: ${user.profileImage}`);
                console.log(`- status: ${user.status}`);
                console.log(`- hobbies: ${user.hobbies}`);
                console.log(`- role: {
    - id: ${user.role.id},
    - name: ${user.role.name},
    - canEdit: ${user.role.canEdit},
    - canDelete: ${user.role.canDelete}
}`);
                console.log("");
            }
            UserList.forEach((user) => ShowUsers(user));
            break;
        case 2:
            function GetUserById() {
                return UserList.map(el => `naam: ${el.name.substring(0,el.name.indexOf(" "))}, id: ${el.id}`);
            }
            console.log(GetUserById());
            let idGebruiker = readline.questionInt("Geef een id van de gebruiker: ");
            let gebruikerInfo = UserList.filter(el => el.id === idGebruiker);
            if (gebruikerInfo == null) {
                console.log("Deze gebruiker bestaat niet.");
            }
            else {
                console.log(gebruikerInfo);
            }
            break;
        case 3:
            break;
        default:
            console.log("Deze optie bestaat niet")
            let keuze = readline.question("Druk op Enter om verder te gaan.")
            console.log(keuze);
            console.clear();
            break;
    }
}