function getApi(){
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            var result = this.responseText;
            var J = JSON.parse(result);
            var myText= '';
            for(i=0; i<J.length; i++){
            var content =  ` <div class="col-md-4 text-center mb-5">
                                <img src="${J[i].url}">
                                <h5>${J[i].title}</h5>
                                <h6>${J[i].id}</h6>
                            </div>
                            `;
                            myText = myText + content;
            }
            document.querySelector(".content").innerHTML = myText;
        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos");
    xhttp.send();
}
getApi();