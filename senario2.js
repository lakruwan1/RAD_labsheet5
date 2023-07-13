class Student_mark{
    constructor(indexNo, MCQ_marks, Essay_marks){
        this.indexNo = indexNo;
        this.MCQ_marks = MCQ_marks;
        this.Essay_marks = Essay_marks;
        this.total_marks = this.Essay_marks + this.MCQ_marks;

    }

    dispalyTotal(){
        console.log(`Total mark is = ${this.total_marks}\n`)
    }

    passOrFail(){
        if(this.total_marks >= 50){console.log(`This Student is passed\n`)}
        else{console.log(`This Student is failed\n`)}
    }

    displayGrade(){
        if(this.total_marks>=75){console.log(`Grade is A\n`)}
        else if(this.total_marks>=65){console.log(`Grade is B\n`)}
        else if(this.total_marks>=55){console.log(`Grade is C\n`)}
        else if(this.total_marks>=35){console.log(`Grade is D\n`)}
        else {console.log(`Grade is W\n`)}
    }
}

let kamal = new Student_mark(21000842, 23, 45);
kamal.dispalyTotal();
kamal.passOrFail();
kamal.displayGrade();