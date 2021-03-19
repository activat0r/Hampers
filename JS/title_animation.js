    const title = document.getElementById("titleName")
    const titleSplit = title.textContent.split("");
    title.innerHTML="";

    for(let i=0; i<titleSplit.length; i ++){
        title.innerHTML += "<span class='initial-title'>"+titleSplit[i]+"</span>";
    }

    let char = 0;
    let timer = setInterval(onTick,50);


    function onTick(){
        const spanClass = title.querySelectorAll('span')[char];
        spanClass.classList.add("title-animation");
        char++;
        console.log(char)
        if(char === titleSplit.length){
            removeTimer();
            return
        }
    }

    function removeTimer(){
        clearInterval(timer);
        timer = null;
    }


