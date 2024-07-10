(() => {

    // Aplicando el principio de responsabilidad unica
    // Priorizal la composicion frente a la herencia - minimizar el uso de la herencia

    type Gender = 'M'|'F' ; 

    interface PersonProps {
        name        : string ;
        gender      : Gender ;
        birthdate   : Date ; 
    }

    class Person {
        public birthdate : Date ;
        public gender : Gender ; 
        public name : string ; 

        constructor({ name , gender , birthdate} : PersonProps ){
            this.name = name ; 
            this.gender = gender ; 
            this.birthdate = birthdate;
        }

    }

    interface UserProps {
        email   :string;
        role    :string;
    }

    class User{
        public email      : string ;
        public role       : string ;
        public lastAccess : Date; 
        constructor({
            email,
            role,
        } : UserProps){
            this.lastAccess =new Date()
            this.email = email ;
            this.role = role;
        }
        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        lastOpenFolder : string;
        workingDirectory : string;
    }

    class Settings  {
        public workingDirectory :string;
        public  lastOpenFolder : string;

        constructor({
            workingDirectory  ,
            lastOpenFolder  ,

       } : SettingsProps ){
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }
    interface UserSettingsProps {
        workingDirectory : string;
        lastOpenFolder : string;
        email:string;
        role:string;
        name : string;
        gender : Gender;
        birthdate : Date;
    }

    // Aqui sera la Composicion de las otras clases
    // PRINCIPIO DE RESPONSABILIDAD UNICA
    class UserSettings {
        public person : Person;
        public user : User;
        public settings : Settings;
        constructor({
            name,gender, birthdate,
            email, role,
            lastOpenFolder, workingDirectory
        }:UserSettingsProps){

            this.person = new Person({name, gender , birthdate});
            this.user = new User({email, role});
            this.settings = new Settings({lastOpenFolder, workingDirectory})
        }

    }

    const userSettings = new UserSettings({
        workingDirectory : '/usr/home',
        lastOpenFolder : '/home',
        email : 'fernando@gmail.com',
        role :'Admin',
        name : 'Fernando',
        gender : 'M',
        birthdate : new Date('1985-10-21')
    });
    
    console.log({userSettings})
    userSettings.user.checkCredentials() //ejecutamos los metodos de esta manera

})();