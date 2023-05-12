document.querySelector('#btn').onclick = function(){
    if(document.querySelector('#text_input_btn input').value == ""){
        alert("Please Enter the task !!!")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div id="innertasks">
                <input type="checkbox" name="text" id="input_check">
                <span id = "taskname">
                    ${document.querySelector('#text_input_btn input').value}
                </span>
                <button class="delete">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>  
            `;
        document.querySelector('#text_input_btn input').value = ""
        var current_tasks = document.querySelectorAll('.delete');
        for(let i=0;i<current_tasks.length;i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }    
    }

}

