function calculateTotalPrice(){
    var pr=document.getElementById("price").value;
    var qnty=document.getElementById("qty").value;
    document.getElementById("totalprice").innerHTML=(parseInt(pr)*parseInt(qnty));
    return false;
}