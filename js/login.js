
document.getElementById('login-buttton').addEventListener('click', function(){

    const userEmailField = document.getElementById('user-email');

    
    const email = userEmailField.value;
    console.log(email);
    
    const userPasswordField = document.getElementById('user-password');
    
    const password = userPasswordField.value;
    console.log(password);

    if(email =='admin@gmail.com' && password == 123456){
            window.location.href = "./banking.html";   
    }
    
})