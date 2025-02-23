function login(){
    const loginName = "chetan";
    const loginpassaword = "123";
    const name=document.getElementById("email").value;
    const passawrod=document.getElementById("password").value;

    if(loginName===name && passawrod===loginpassaword){
        window.location.href="home.html";
    }
    else{
        alert("invalid input");
    }
}
 