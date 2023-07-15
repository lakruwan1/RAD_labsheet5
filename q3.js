class Book{
    constructor(name, price, author, publisher, category){
        this.name = name;
        this.price = price;
        this.author = author;
        this.publisher = publisher;
        this.category = category;
        switch(this.category) {
            case 1:
              this.discountAmount = this.price * 20 / 100;
              break;
            case 2:
              this.discountAmount = this.price * 15 / 100;
              break;
            case 3:
              this.discountAmount = this.price * 15 / 100;
              break;
            case 4:
              this.discountAmount = this.price * 10 / 100;
              break;
        }
    }

    Display(){
        switch(this.category) {
            case 1:
              this.cat_name = "Educational book";
              break;
            case 2:
              this.cat_name = "Novel";
              break;
            case 3:
              this.cat_name = "Short Story";
              break;
            case 4:
              this.cat_name = "Biography";
              break;
        }
        console.log(`Name of book = ${this.name}\nPrice of book = ${this.price}\nAuthor of book = ${this.author}\nPublisher of book = ${this.publisher}\nPrice of book with discount = ${this.price - this.discountAmount}\nCategory of the book is = ${this.cat_name}`)
    }

}

let madolDuuwa = new Book("Madol DDuwa", 250, "Martin luther king", "Sarasavi", 2);
madolDuuwa.Display();