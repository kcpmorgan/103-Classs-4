let array = [];

    function add(){
        let num = parseInt(document.getElementById('number').value);
        array.push(num);
        console.log(array);
    }

    function avg(){
        let result=0;

        //Avg operation
        for(let i=0; i<array.length; i++){
            //result = result + array[i];
            result += array[i];
        }

        result = result/array.length;

        alert(`The average is :` + result);

        return result;
    }

    function init(){

    }

    window.onload = init;