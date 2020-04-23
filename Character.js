class Character{
    constructor(row, column){
        this.row= row;
        this.column= column;
        this.img = new Image();
        this.img.src = 'images/character-down.png';
    }

    moveDown(){
        this.row++;
        drawEverything();
    }

    moveUp(){
        this.row--;
        drawEverything();
    }

    moveLeft(){
        this.column--;
        drawEverything();
    }

    moveRight(){
        this.column++;
        drawEverything();
    }



}