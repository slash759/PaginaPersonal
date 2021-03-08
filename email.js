function sendMail(params)
{
    var tempParams ={
        from_name: document.getElementById("fromName").value,
        to_name: document.getElementById("toName").value,
        message: document.getElementById("floatingTextarea").value,
    };
    
    emailjs.send('service_h4khlem','template_3dhu4n9',tempParams)
    .then(function(res){
        console.log("sucess", res.status);
    })
}