
let grid = 16;
function createGrid(grid){
    let divHeight = 400/grid;
    const divContainer = document.createElement('div');
    divContainer.classList.add('container');
    for(let i=0; i<grid; i++){
        const divColum = document.createElement('div');
        divColum.classList.add('column');
        for(let j=0; j<grid ; j++){
            const divRow = document.createElement('div');
            divRow.classList.add('row');
            divRow.style.height = `${divHeight}px`;
            divRow.addEventListener("mouseover", () => {
                /*divRow.style.backgroundColor="black";*/
                divRow.style.backgroundColor=`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
                
            });
            divColum.appendChild(divRow);
        }
        
        divColum.style.height = `${divHeight}px`;
        divContainer.appendChild(divColum);
    }
    const btn = document.createElement ('button');
    btn.innerText = "Change Grid";
    btn.addEventListener('click', (grid)=>{
        do{
            grid = parseInt(prompt("new gird: "));  
        }
        while(grid>100);
        document.body.innerHTML = '';
        createGrid(grid); 
    })
    divContainer.appendChild(btn);
    document.body.appendChild(divContainer);

}
createGrid(grid);


document.body.innerHTML = '';
createGrid(grid);
