document.addEventListener('DOMContentLoaded', ()=>{
    const grid1 = document.querySelector('.past')
    const grid2 = document.querySelector('.present')
    const grid3 = document.querySelector('.future')
    const width = 4
    const pastSquares = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]
    const presentSquares = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]
    const futureSquares = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]

    function createBoard(time){
        let color = true
        const tabuleiro = document.createElement('div')
        for (let i = 0; i < width*width; i++){
            const square = document.createElement('div')

            if(time == 'past'){
                if(i == 0){
                    square.classList.add("p1");
                }else if(i == 15){
                    square.classList.add("p2");
                }else{
                    square.classList.add("tile");
                }
                grid1.appendChild(square)
                pastSquares[i] = (square)
            }else if(time == 'present'){
                if(i == 0){
                    square.classList.add("p1");
                }else if(i == 15){
                    square.classList.add("p2");
                }
                grid2.appendChild(square)
                presentSquares[i] = (square)
            }else{
                if(i == 0){
                    square.classList.add("p1");
                }else if(i == 15){
                    square.classList.add("p2");
                }
                grid3.appendChild(square)
                futureSquares[i] = (square)
            }
            square.setAttribute('id', i+' ' + time)
        }
    }
    createBoard('past')
    createBoard('present')
    createBoard('future')

    pastSquares.forEach(square => square.addEventListener('click', clickedPast))
    presentSquares.forEach(square => square.addEventListener('click', clickedPresent))
    futureSquares.forEach(square => square.addEventListener('click', clickedFuture))

    isSelected = false
    var pos1 = 0
    let pos2 = 15


    function clickedPast(){
        id = this.id.split(' ')
        console.log(id[0], pos1)
        if(isSelected){
            if(id[0] +1 == pos1||id[0] -1 == pos1||id[0] +4 == pos1||id[0] -4 == pos1){
                for(i=0;i<15;i++){
                    pastSquares[i].classList.remove("p1");
                    pastSquares[i].classList.add("tile");
                }
                this.classList.add('p1')
                this.classList.remove('tile')
                pos1 = id[0]
                isSelected = false  
                console.log(isSelected)
            }
            
        }else{
            if(id[0] == pos1){
                isSelected = true
                console.log(isSelected)
            }

        }


    }
    function clickedPresent(){}
    function clickedFuture(){}


})