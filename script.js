document.addEventListener('DOMContentLoaded', ()=>{
    const grid1 = document.querySelector('.past')
    const grid2 = document.querySelector('.present')
    const grid3 = document.querySelector('.future')
    const width = 4
    const pastSquares = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    const presentSquares = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    const futureSquares = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

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
    let player


    function clickedPast(){

        id = this.id.split(' ')
        if(isSelected){
            if(this.classList.contains('movable')){
                for(i=0;i<15;i++){

                    pastSquares[i].classList.remove("movable")
                    if(pastSquares[i].classList.contains('p1') || pastSquares[i].classList.contains('p2')){
                        if(pastSquares[i].classList.contains('last')){
                            pastSquares[i].classList.remove('last');
                            pastSquares[i].classList.remove(player);
                        }
                    }else{
                        pastSquares[i].classList.add("tile")
                    }

                }
                

                this.classList.add(player)
                this.classList.remove('tile')

            }
            isSelected = false  
            for(i=0;i<15;i++){
                pastSquares[i].classList.remove("movable")
            }
        }else{
            
            this.classList.add('last')
            if(this.classList.contains("p1")){
                player = 'p1'
            }else if(this.classList.contains("p2")){
                player = 'p2'
            }
            isSelected = true
            let a = 1
            if(a == 1){
                    try {
                        pastSquares[parseInt(id[0])+1].classList.add('movable')
                    } catch (error) {}
                    try {
                        pastSquares[parseInt(id[0])-1].classList.add('movable')
                    } catch (error) {}
        
                    try {
                        pastSquares[parseInt(id[0])+4].classList.add('movable')
                    } catch (error) {}
        
                    try {
                        pastSquares[parseInt(id[0])-4].classList.add('movable')
                    } catch (error) {}
                }else if(id[0] == pos2){
                    try {
                        pastSquares[parseInt(id[0])+1].classList.add('movable')
                    } catch (error) {}
                    try {
                        pastSquares[parseInt(id[0])-1].classList.add('movable')
                    } catch (error) {}

                    try {
                        pastSquares[parseInt(id[0])+4].classList.add('movable')
                    } catch (error) {}

                    try {
                        pastSquares[parseInt(id[0])-4].classList.add('movable')
                    } catch (error) {}
            }
        }
        console.log(player)
    }
    function clickedPresent(){}
    function clickedFuture(){}


})