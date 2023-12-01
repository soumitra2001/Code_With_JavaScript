const buttons=document.querySelectorAll(".button");
const body=document.querySelector('body');
// console.log(body);

buttons.forEach(function(button){
    // console.log(button);

    button.addEventListener('click',function(e){
        // console.log(e);
        const color = e.target.id;
        switch(color){
            case 'gray':
                body.style.backgroundColor=color;
                break;
            case 'black':
                body.style.backgroundColor=color;
                body.style.color='white';
                button.style.border="solid white 1px";
                break;
            case 'blue':
                body.style.backgroundColor=color;
                break;
            case 'yellow':
                body.style.backgroundColor=color;
                break;
        }
    });
});