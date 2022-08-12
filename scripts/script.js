const container = document.querySelector('.canvas');
let holder = [];
const cols = 10;
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');
const btn4 = document.createElement('button');
const Brushsizedisplay = document.createElement('div');
let randomBrushSize =4;
let goCrazy = 0;

Brushsizedisplay.innerHTML ="Brush Size: " + `${31-randomBrushSize}`;
document.body.append(Brushsizedisplay);
Brushsizedisplay.style.marginLeft = '700px';
Brushsizedisplay.style.fontWeight = '700';
Brushsizedisplay.style.fontSize ='20px';


btn1.addEventListener('click',()=>{ clearRow();})
btn1.textContent = 'Clear';
document.body.prepend(btn1);
btn2.style.margin= '10px';
//btn1.style.marginLeft = '800px';




btn2.textContent = 'Clear & Change Brush Size';
document.body.prepend(btn2);
btn2.addEventListener('click',function(){ReGenerateRows();Brushsizedisplay.innerHTML ="Brush Size: " + `${30-randomBrushSize}`;})
btn2.style.margin= '10px';

btn3.textContent = 'Go Crazy!';
document.body.prepend(btn3);
btn3.addEventListener('click',function(){goCrazy = 1;})
btn3.style.margin= '10px';

btn4.textContent = 'Red Brush';
document.body.prepend(btn4);
btn4.addEventListener('click',function(){goCrazy = 0;})
btn4.style.marginLeft = '570px';



function ReGenerateRows(){
    clearRow();
    holder.forEach((blocks)=>{
       container.removeChild (blocks);

    })
    randomBrushSize= r= Math.max(Math.floor(Math.random() * 30),1)
    
    console.log(randomBrushSize);
    genertateBlocks(randomBrushSize); 
}

function clearRow(){
    holder.forEach((blocks)=>{
        blocks.style.backgroundColor='white';
        })

}



function choosecolor()
{
    if (goCrazy==0)
    {
       // console.log('hi');
        return 'red';}
    else{
        
        let color = '#'+(Math.random().toString(16).substr(-6));
       // console.log(color);
        return color;
    }
}


genertateBlocks(cols);

function genertateBlocks(col){
    holder = [];
    for(i=0;i<col*col;i++){
        const blocks = document.createElement('div');
        container.appendChild(blocks);
        blocks.classList.add("cube");
        //blocks.innerHTML = `${i+1}`;
        holder.push(blocks);
        blocks.style.backgroundColor='white';
        blocks.addEventListener('mousemove',function(){blocks.style.backgroundColor=choosecolor();});
    }
    container.style.gridTemplateColumns = 'repeat('+col+',1fr)';
}




