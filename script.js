document.addEventListener('DOMContentLoaded', ()=>{
    const grid1 = document.querySelector('.past')
    const grid2 = document.querySelector('.present')
    const grid3 = document.querySelector('.future')
    const width = 4
    const pastSquares = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]
    const presentSquares = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]
    const futureSquares = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]

    function createBoard(time){
        let color = true
        const tabuleiro = document.createElement('div')
        for (let i = 0; i < width*width; i++){
            const square = document.createElement('div')

            if(time == 'past'){
                if(pastSquares[i] == 1){
                    square.style.backgroundColor = 'rgba(90, 34, 230)'
                    square.classList.add("p1");
                }else if(pastSquares[i] == 2){
                    square.style.backgroundColor = 'rgba(44, 184, 112)'
                    square.classList.add("p2");
                }
                grid1.appendChild(square)
                pastSquares[i] = (square)
            }else if(time == 'present'){
                if(presentSquares[i] == 1){
                    square.style.backgroundColor = 'rgba(90, 34, 230)'
                    square.classList.add("p1");
                }else if(presentSquares[i] == 2){
                    square.style.backgroundColor = 'rgba(44, 184, 112)'
                    square.classList.add("p2");
                }
                grid2.appendChild(square)
                presentSquares[i] = (square)
            }else{
                if(futureSquares[i] == 1){
                    square.style.backgroundColor = 'rgba(90, 34, 230)'
                    square.classList.add("p1");
                }else if(futureSquares[i] == 2){
                    square.style.backgroundColor = 'rgba(44, 184, 112)'
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

    let isSelected = false
    let last
    let move = false
    let turn = false
    let color
    let player
 
    function clickedPast(){
        let info = this.id.split(' ')

        if(this.classList.contains('p1')||this.classList.contains('p2')){
            if(!isSelected && !move){
                last = info[0]
                if(last == info[0]){
                    isSelected = true
                    console.log("Selecionado")
                    try {
                        if(info[0] == 4 ||info[0] == 8 ||info[0] == 12){
                            throw "Erro2"
                        }else{
                        pastSquares[parseInt(info[0]) - 1].style.backgroundColor = 'rgba(0,0,0)'
                        console.log('left')
                        pastSquares[parseInt(info[0]) - 1].classList.add("left");
                        pastSquares[parseInt(info[0]) - 1].classList.add("movable")
                    }
                    } catch (error) {console.log('cant left', parseInt(info[0]) -1)}
                    try {
                        pastSquares[parseInt(info[0]) - 4].style.backgroundColor = 'rgba(0,0,0)'
                        console.log('up')
                        pastSquares[parseInt(info[0]) - 4].classList.add("up");
                        pastSquares[parseInt(info[0]) - 4].classList.add("movable");
                    } catch (error) {console.log('cant up', parseInt(info[0]) -4)}
                    try {
                        if(info[0] == 3 ||info[0] == 7 ||info[0] == 11){
                            throw "Erro2"
                        }else{
                            pastSquares[parseInt(info[0]) + 1].style.backgroundColor = 'rgba(0,0,0)'
                            console.log('right')
                            pastSquares[parseInt(info[0]) + 1].classList.add("right");
                            pastSquares[parseInt(info[0]) + 1].classList.add("movable");
                        }

                    } catch (error) {console.log('cant right', parseInt(info[0]) +1)}
                    try {
                        pastSquares[parseInt(info[0]) + 4].style.backgroundColor = 'rgba(0,0,0)'
                        console.log('down')
                        pastSquares[parseInt(info[0]) + 4].classList.add("down");
                        pastSquares[parseInt(info[0]) + 4].classList.add("movable");
                    } catch (error) {console.log('cant down', parseInt(info[0]) +4)}
                    move = true

                }
            }else if(isSelected){
                if(last == info[0]){
                    isSelected = false
                    console.log("Desselecionado")
                    try {
                        pastSquares[parseInt(info[0]) - 1].style.backgroundColor = 'rgba(255,255,255,0)'
                        pastSquares[parseInt(info[0]) - 1].classList.remove("movable");
                        pastSquares[parseInt(info[0]) - 1].classList.remove("left");

                    } catch (error) {}
                    try {
                        pastSquares[parseInt(info[0]) - 4].style.backgroundColor = 'rgba(255,255,255,0)'
                        pastSquares[parseInt(info[0]) - 4].classList.remove("movable");
                        pastSquares[parseInt(info[0]) - 4].classList.remove("up");
                    } catch (error) {}
                    try {
                        pastSquares[parseInt(info[0]) + 1].style.backgroundColor = 'rgba(255,255,255,0)'
                        pastSquares[parseInt(info[0]) + 1].classList.remove("movable");
                        pastSquares[parseInt(info[0]) + 1].classList.remove("right");
                    } catch (error) {}
                    try {
                        pastSquares[parseInt(info[0]) + 4].style.backgroundColor = 'rgba(255,255,255,0)'
                        pastSquares[parseInt(info[0]) + 4].classList.remove("movable");
                        pastSquares[parseInt(info[0]) + 4].classList.remove("down");
                    } catch (error) {}
                    move = false
                }
    
            }
        }
        if(move && this.classList.contains('movable')){
            
            try {
                if(pastSquares[parseInt(info[0]) + 3].classList.contains('p2')){

                }else{
                    pastSquares[parseInt(info[0]) + 3].style.backgroundColor = 'rgba(255,255,255,0)'
                    pastSquares[parseInt(info[0]) + 3].classList.remove("movable");
                    pastSquares[parseInt(info[0]) + 3].classList.remove("left");
                }
 

            } catch (error) {}
            try {
                if(pastSquares[parseInt(info[0])].classList.contains('p2')){}
                else{
                    pastSquares[parseInt(info[0])].classList.remove("movable");
                    pastSquares[parseInt(info[0])].classList.remove("up");
                }

            } catch (error) {}
            try {
                pastSquares[parseInt(info[0]) + 5].style.backgroundColor = 'rgba(255,255,255,0)'
                pastSquares[parseInt(info[0]) + 5].classList.remove("movable");
                pastSquares[parseInt(info[0]) + 5].classList.remove("right");
            } catch (error) {}
            try {
                pastSquares[parseInt(info[0]) + 8].style.backgroundColor = 'rgba(255,255,255,0)'
                pastSquares[parseInt(info[0]) + 8].classList.remove("movable");
                pastSquares[parseInt(info[0]) + 8].classList.remove("down");
            } catch (error) {}


            try {
                pastSquares[parseInt(info[0])].style.backgroundColor = 'rgba(255,255,255,0)'
                pastSquares[parseInt(info[0])].classList.remove("movable");
                pastSquares[parseInt(info[0])].classList.remove("left");
            } catch (error) {}
            try {
                pastSquares[parseInt(info[0]) - 3].style.backgroundColor = 'rgba(255,255,255,0)'
                pastSquares[parseInt(info[0]) - 3].classList.remove("movable");
                pastSquares[parseInt(info[0]) - 3].classList.remove("up");
            } catch (error) {}
            try {
                pastSquares[parseInt(info[0]) + 2].style.backgroundColor = 'rgba(255,255,255,0)'
                pastSquares[parseInt(info[0]) + 2].classList.remove("movable");
                pastSquares[parseInt(info[0]) + 2].classList.remove("right");
            } catch (error) {}
            try {
                pastSquares[parseInt(info[0]) + 5].style.backgroundColor = 'rgba(255,255,255,0)'
                pastSquares[parseInt(info[0]) + 5].classList.remove("movable");
                pastSquares[parseInt(info[0]) + 5].classList.remove("down");
            } catch (error) {}



            try {
                pastSquares[parseInt(info[0]) - 2].style.backgroundColor = 'rgba(255,255,255,0)'
                pastSquares[parseInt(info[0]) - 2].classList.remove("movable");
                pastSquares[parseInt(info[0]) - 2].classList.remove("left");
            } catch (error) {}
            try {
                pastSquares[parseInt(info[0]) - 5].style.backgroundColor = 'rgba(255,255,255,0)'
                pastSquares[parseInt(info[0]) - 5].classList.remove("movable");
                pastSquares[parseInt(info[0]) - 5].classList.remove("up");
            } catch (error) {}
            try {
                pastSquares[parseInt(info[0])].style.backgroundColor = 'rgba(255,255,255,0)'
                pastSquares[parseInt(info[0])].classList.remove("movable");
                pastSquares[parseInt(info[0])].classList.remove("right");
            } catch (error) {}
            try {
                pastSquares[parseInt(info[0]) + 3].style.backgroundColor = 'rgba(255,255,255,0)'
                pastSquares[parseInt(info[0]) + 3].classList.remove("movable");
                pastSquares[parseInt(info[0]) + 3].classList.remove("down");
            } catch (error) {}



            try {
                pastSquares[parseInt(info[0]) - 5].style.backgroundColor = 'rgba(255,255,255,0)'
                pastSquares[parseInt(info[0]) - 5].classList.remove("movable");
                pastSquares[parseInt(info[0]) - 5].classList.remove("left");
            } catch (error) {}
            try {
                pastSquares[parseInt(info[0]) - 8].style.backgroundColor = 'rgba(255,255,255,0)'
                pastSquares[parseInt(info[0]) - 8].classList.remove("movable");
                pastSquares[parseInt(info[0]) - 8].classList.remove("up");
            } catch (error) {}
            try {
                pastSquares[parseInt(info[0]) - 3].style.backgroundColor = 'rgba(255,255,255,0)'
                pastSquares[parseInt(info[0]) - 3].classList.remove("movable");
                pastSquares[parseInt(info[0]) - 3].classList.remove("right");
            } catch (error) {}
            try {
                pastSquares[parseInt(info[0])].style.backgroundColor = 'rgba(255,255,255,0)'
                pastSquares[parseInt(info[0])].classList.remove("movable");
                pastSquares[parseInt(info[0])].classList.remove("down");
            } catch (error) {}
            

            if(turn == false){
                color = 'rgba(90, 34, 230)'
                turn = true
                player = 'p1'
            }else {
                color = 'rgba(44, 184, 112)'
                turn = false
                player = 'p2'
            }

            pastSquares[parseInt(info[0])].style.backgroundColor = color
            pastSquares[parseInt(info[0])].classList.add(player);

            

            console.log(turn)

            try{
                pastSquares[parseInt(info[0]) + 4].classList.remove(player);
                pastSquares[parseInt(info[0]) + 4].style.backgroundColor = 'rgba(255,255,255,0)'
            }catch(error){}

            try{
                pastSquares[parseInt(info[0]) + 1].classList.remove(player);
                pastSquares[parseInt(info[0]) + 1].style.backgroundColor = 'rgba(255,255,255,0)'
            }catch(error){}
            try{
                pastSquares[parseInt(info[0]) - 1].classList.remove(player);
                pastSquares[parseInt(info[0]) - 1].style.backgroundColor = 'rgba(255,255,255,0)'
            }catch(error){}
            try{
                pastSquares[parseInt(info[0]) - 4].classList.remove(player);
                pastSquares[parseInt(info[0]) - 4].style.backgroundColor = 'rgba(255,255,255,0)'
            }catch(error){}


            
            console.log('a')
            move = false
            isSelected = false

            
        }

        
    }

    function clickedPresent(){}
    function clickedFuture(){}


})