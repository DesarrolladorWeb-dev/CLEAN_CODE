(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
    
    interface HtmlElementProps {
        id: string;
        type: HtmlType;
    }
    class HtmlElement {
        public id : string ; 
        public type  : HtmlType = 'select';
        constructor({
            id,
            type
        }: HtmlElementProps) {
            this.id = id; 
            this.type = type;
        }
    }

    interface InputAttributesProps{
        value: string,
        placeholder: string,

    }
    class InputAttributes  {
        public placeholder : string ;
        public value: string;
        constructor({
            value,
            placeholder,
            
        }:InputAttributesProps) {
            this.value = value
            this.placeholder = placeholder ; 

        }
    }
    interface EventsProps {
        id: string ;
    }
    class Events {
        public id : string
        constructor( {id}: EventsProps) {
            this.id = id
        }

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    interface InputEventsProps {
        id: string;
        type : HtmlType;
        value : string ; 
        placeholder : string;
        
    }

    class InputEvents{
        public htmlElement :HtmlElement ; 
        public inputAttributes  : InputAttributes;
        public events : Events; 
        constructor ({
            id, type,value,placeholder
        }: InputEventsProps){
            this.htmlElement = new HtmlElement({id,type})
            this.inputAttributes = new InputAttributes({value ,placeholder })
            this.events =  new Events({id})
        }
    }


    //? Idea para la nueva clase InputElement

    const nameField = new InputEvents({
        value : 'Fernando',
        placeholder : 'Enter first name',
        id : 'txtName',
        type:'input'
    });

    console.log({ nameField });

})()