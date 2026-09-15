$('#signinBtn').on('click', function () {

});


console.log('in signin dot js');

const signinBtn = document.querySelector('#signinBtn');
const pwdBx = document.querySelector('#pwd-box');
const hardCodePwd = 'lasanga';



signinBtn.addEventListener('click', function () {

    const helloBox = document.querySelector('#hello-box');
    const userPwd = pwdBx.value;


    console.log('pwd value:', pwdBx.value);
    console.log('use pwd ', userPwd);
    console.log(hardCodePwd);


    if(userPwd == hardCodePwd) { 
    console.log('signed in');
    sessionStorage.setItem('signedIn', 'true');
    window.location.href = 'private.html';
    }


    else {
        console.log('NOT signed in');
        document.querySelector('#message').textContent = 'Nope try again';
        pwdBx.value = ' ';
    }

})





