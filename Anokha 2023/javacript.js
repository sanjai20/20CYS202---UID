function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="sanjai"&&password=="san@34$1")
    {
        alert("login successfully");
        return false; 
    }
    else
    {
        alert("login failed");
    }
}