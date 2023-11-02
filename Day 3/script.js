let mark;

function AfterClick(choice){
    for(let i=0; i <=4; i+=1){
        if(document.getElementById(`mark${i+1}`) == undefined){
            document.getElementById(`A_mark${i+1}`).id = `mark${i+1}`;
            continue;
        }
    }
    document.getElementById(`mark${choice+1}`).id = `A_mark${choice+1}`;
    document.querySelector(".submit").setAttribute("id", "submitCheck")
    mark = choice+1;
}
document.getElementById(`mark${1}`).onclick = function(){AfterClick(0);}
document.getElementById(`mark${2}`).onclick = function(){AfterClick(1);}
document.getElementById(`mark${3}`).onclick = function(){AfterClick(2);}
document.getElementById(`mark${4}`).onclick = function(){AfterClick(3);}
document.getElementById(`mark${5}`).onclick = function(){AfterClick(4);}
const zmienna = document.querySelector(".submit");
zmienna.addEventListener("click", () =>{
    if(document.getElementById("submitCheck") != undefined){
        document.querySelector(".main").setAttribute("id", "remove")
        document.querySelector(".main_S").setAttribute("id", null)
        document.getElementById("mark_S").innerHTML = `You selected ${mark} out of 5`;
    }
}
)