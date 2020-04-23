class Treasure{
    constructor(row, column){
        this.row = row;
        this.column = column;
        this.img = new Image();
        this.img.src = 'images/treasure.png';
    }
    setRandomPosition(){
        this.row = Math.floor(Math.random() * 10);
        this.column = Math.floor(Math.random() * 10);

    }
}