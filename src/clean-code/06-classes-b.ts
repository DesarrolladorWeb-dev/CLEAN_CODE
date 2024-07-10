(() => {

    // No aplicando el principio de responsabilidad unica

    type Gender = 'M'|'F' ; 

    interface PersonProps {
        name        : string ;
        gender      : Gender ;
        birthdate   : Date ; 
    }

    class Persona {
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
        birthdate : Date;
        email   :string;
        gender  :Gender;
        name    :string;
        role    :string;
    }

    class User extends Persona {
        public email: string ;
        public role: string ;
        public lastAccess : Date; 
        constructor({
            birthdate  ,
            email,
            gender,
            name,
            role,
        } : UserProps){
            super({name, gender , birthdate})
            this.lastAccess =new Date()
            this.email = email ;
            this.role = role;
        }
        checkCredentials() {
            return true;
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

    class UserSettings extends User {
        public workingDirectory :string;
        public  lastOpenFolder : string;

        constructor({
            workingDirectory  ,
            lastOpenFolder  ,
            email,
            role,
            name  ,
            gender  ,
            birthdate  ,
       } : UserSettingsProps ){
            super({email, role,name , gender , birthdate} );
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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
    
    //  , areCredentialsValid : userSettings.checkCredentials  -- > para ver si tiene acceso
    console.log({userSettings})

})();