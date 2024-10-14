class Marklist{

    static passMarks = 35;


    static aboutSchool = ()=>{
        console.log("Tenth is the last standard to complete schooling");
    }

    constructor(){
      
        this.engMarks = 0;
        this.telMarks = 0;
        this.hinMarks = 0;
        this.sciMarks = 0;
        this.mathMarks = 0;
        this.socMarks = 0;
    } 

    calculateResult = ()=>{
        
        if (this.engMarks>= Marklist.passMarks &&
            this.telMarks>= Marklist.passMarks &&
            this.hinMarks>= Marklist.passMarks &&
            this.sciMarks>= Marklist.passMarks &&
            this.mathMarks>= Marklist.passMarks &&
            this.socMarks>= Marklist.passMarks)
            
            {
             console.log("Student has passed in tenth");
            
        }
        else{
            console.log("Student has failed in tenth");
        }
    }

    
}
export default Marklist;