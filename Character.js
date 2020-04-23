class Character{
    constructor(row, column){
        this.row= row;
        this.column= column;
        this.img = new Image();
        this.img.src = 'images/character-down.png';
    }

    moveDown(){
        if(this.row < 9) this.row++;
        this.img.src = 'images/character-down.png';
        this.img.onload = () =>{
            drawEverything();
        }
    }

    moveUp(){
        if(this.row > 0) this.row--;
        this.img.src = 'images/character-up.png';
        this.img.onload = () =>{
            drawEverything();
        }
    }

    moveLeft(){
        if(this.column > 0) this.column--;
        this.img.src = 'images/character-left.png';
        this.img.onload = () =>{
            drawEverything();
        }
    }

    moveRight(){
        if(this.column < 9) this.column++;
        this.img.src = 'images/character-right.png';
        this.img.onload = () =>{
            drawEverything();
        }
        
    }



}