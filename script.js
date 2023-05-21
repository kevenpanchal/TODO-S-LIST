document.querySelector(' #leftpart button').addEventListener("click",function() {
    if(document.querySelector('#leftpart  input').value.length == 0 ){
        alert("Please Enter A Value ");

    }
    else{
       //GETTING THE TASK TO THE DISPLAY AND DELETE BUTTON
        document.getElementById('leftitems').innerHTML += "<div class='items'> <span>"+document.querySelector('#leftpart  input').value +"</span><button class='delete'>Delete</button><button class='save' hidden='hidden'>Save</button><button class='edit'>Edit</button> </div>";
        document.querySelector('#leftpart  input').value ="";
        

        //DELETE BUTTON
        var content = document.querySelectorAll('.delete');
        for(let i = 0;i<content.length;i++){
            content[i].onclick = function(){
                this.parentNode.remove();

            }

        }
        // EDITING THE TASK LIST
        var editcontent = document.querySelectorAll('.edit');
        for(let i = 0;i<content.length;i++){
            editcontent[i].onclick = function(){
                this.previousElementSibling.previousElementSibling.previousElementSibling.contentEditable=true;
                this.previousElementSibling.removeAttribute('hidden');
                this.setAttribute("hidden","hidden");

            }

        }
        //SAVING THE EDITED TASK LIST
        var savecontent = document.querySelectorAll('.save');
        for(let i = 0;i<content.length;i++){
            savecontent[i].onclick = function(){
                this.previousElementSibling.previousElementSibling.contentEditable=false;
                document.getElementsByClassName('items')[i].lastElementChild.removeAttribute("hidden");
                this.setAttribute("hidden","hidden");

            }

        }
    }

    //NAVIGATING THE TODO LIST
    for(let i = 0;i<content.length;i++){
    document.querySelectorAll('.items span')[i].addEventListener("click",function() {

        document.getElementById('heading1').textContent = this.textContent;
        document.getElementById('tasknumber').textContent = "Task No :"+(i+1);
        document.getElementById('rightitems').innerHTML="";
    

        
document.querySelector(' #rightpart button').addEventListener("click",function() {
    if(document.querySelector('#rightpart  input').value.length == 0 ){
        alert("Please Enter A Value ");

    }
    else{
       //GETTING THE TODOLIST TO THE DISPLAY
        document.getElementById('rightitems').innerHTML += "<div class='ritems'> <span>"+document.querySelector('#rightpart  input').value +"</span><button class='rdelete'>Delete</button><button class='rsave' hidden='hidden'>Save</button><button class='redit'>Edit</button> </div>";
        document.querySelector('#rightpart  input').value ="";
        var rcontent = document.querySelectorAll('.rdelete');
        for(let i = 0;i<rcontent.length;i++){
            rcontent[i].onclick = function(){
                this.parentNode.remove();

            }

        }
        // EDITING THE TASK LIST
        var reditcontent = document.querySelectorAll('.redit');
        for(let i = 0;i<rcontent.length;i++){
            reditcontent[i].onclick = function(){
                this.previousElementSibling.previousElementSibling.previousElementSibling.contentEditable=true;
                this.previousElementSibling.removeAttribute('hidden');
                this.setAttribute("hidden","hidden");

            }

        }
        //SAVING THE EDITED TASK LIST
        var rsavecontent = document.querySelectorAll('.rsave');
        for(let i = 0;i<rcontent.length;i++){
            rsavecontent[i].onclick = function(){
                this.previousElementSibling.previousElementSibling.contentEditable=false;
                document.getElementsByClassName('ritems')[i].lastElementChild.removeAttribute("hidden");
                this.setAttribute("hidden","hidden");

            }

        }
    }

});
  





    });
}



});

