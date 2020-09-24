function validate() {
    function validation(){
        if(input.value.search(pattern)===-1){
            input.setAttribute('class','error');
        } else {
            input.removeAttribute('class');
        }
    }


    let input = document.getElementsByTagName('input')[0];
    let pattern = /[a-z]+@[a-z]+.[a-z]+/gm;
    input.addEventListener('change',validation);
}