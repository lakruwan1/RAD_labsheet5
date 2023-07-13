class Student{
    setData(index_no, name, dob, address, contact_no, email_address){
        this.index_no = index_no;
        this.name = name;
        this.dob = dob;
        this.address = address;
        this.contact_no = contact_no;
        this.email_address = email_address;
    }

    getData(){
        console.log("\n\nDetails of student:")
        console.log(`  Index Number: ${this.index_no}\n  Name: ${this.name}\n  Date of Birth: ${this.dob}\n  Adress: ${this.address}\n  Contact Number: ${this.contact_no}\n  Email Adress: ${this.email_address}`)
    }

    setGroup(){
        let rem = this.index_no % 4;
        switch(rem) {
            case 0:
                this.group_no = 1;
                break;
            case 1:
                this.group_no = 2;
                break;
            case 2:
                this.group_no = 3;
                break;
            case 3:
                this.group_no = 4;
                break;

        }
    }

    showGroup(){
        console.log(`\nGroup number of ${this.index_no} student is ${this.group_no}\n\n`)
    }

}

let kamal = new Student();
kamal.setData(235, "Lakruwan Kamal", "2001.10.08", "405/15 Delgoda", 774193256, "kadnfe@gmail.com");
kamal.getData();
kamal.setGroup();
kamal.showGroup();