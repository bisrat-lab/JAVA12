// // var form = document.querySelector("#form");
// // var username = document.querySelector("#username");
// // var email = document.querySelector("#email");
// // var password = document.querySelector("#password");
// // var password2 = document.querySelector("#password2");

// // //2-show input error message 
// // function showError(input , message){
// //     var formControl = input.parentElement;
// //     formControl.className = 'form-control error';
// //     var small = formControl.querySelector('small');
// //     small.innerText = message;
// // }

// // //3-show sucess outline
// // function showSuccess(input){
// //     var formControl = input.parentElement;
// //     formControl.className = 'form-control success';  
// // }

// // //4 Check email is valid
// // function isEmailValid(email){
// //     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// //     return re.test(String(email).toLowerCase());
// // }


// //------>>>>     //easy Way 
//             //1 event on submit button
//             //form.addEventListener('submit', function(e){
//                 //e.preventDefault(); 
//                     //Check teh valu with console 
//                     //console.log(username.value)
//                             // if(username.value === ''){
//                             // showError(username , 'Username is Required');
//                             // } else {
//                             //     showSuccess(username);
//                             // }
//                             // if(email.value === ''){
//                             //     showError(email , 'Email is Required');
//                             // }else if(!isEmailValid(email.value)) {
//                             //     showError(email, 'Email is not valid')
//                             // }
//                             // else {
//                             //     showSuccess(email);
//                             // }
//                             // if(password.value === ''){
//                             //     showError(password , 'Password is Required');
//                             // } else {
//                             //     showSuccess(password);
//                             // }
//                             // if(password2.value === ''){
//                             //     showError(password2 , 'Password 2 is Required');
//                             // } else {
//                             //     showSuccess(password2);
//                             // }

//             //})

// //------>> Hard way and short way 

// var form = document.querySelector("#form");
// var username = document.querySelector("#username");
// var email = document.querySelector("#email");
// var password = document.querySelector("#password");
// var password2 = document.querySelector("#password2");

// //2-show input error message 
// function showError(input , message){
//     var formControl = input.parentElement;
//     formControl.className = 'form-control error';
//     var small = formControl.querySelector('small');
//     small.innerText = message;
// }

// //3-show sucess outline
// function showSuccess(input){
//     var formControl = input.parentElement;
//     formControl.className = 'form-control success';  
// }

//     //4 Check email is valid
//     function checkEmail(input){
//         var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         if(re.test(input.value)){
//             showSuccess(input)
//         }else{
//             showError(input, 'Email is not valid')
//         }
        
//     }
       
//     //Check required fildss
//     function checkRequired(inputArr){
//         inputArr.forEach(function(input){
//             //console.log(input.value);
//             if (input.value.trim() === ''){
//                 showError(input, `${input.id} is required` )
//             }
//             else{
//                 showSuccess(input);
//             }
//         });
//     }
//     // Check input length
//     function checkLength(input, min , max){
//         if (input.value.length < min){
//             showError(input, `${input.id} must be at least ${min} characters` )
//         }
//         else if(input.value.length>max){
//             showError(input, `${input.id} must be at least ${min} characters` )
//         }
//         else{
//             showSuccess(input);
//         }
//     }

//     //check password mach
//     function passworMatch(input1, input2){
//         if(input1.value !== input2.value){
//             showError(input2, 'Password do not Match!')
//         }
//     }
//     //event 
//     form.addEventListener('submit',function(){
//         //e.preventDefault();
//         checkRequired([username,email,password,password2]);
//         checkLength(username , 3 ,15);
//         checkLength(password, 6, 20);
//         checkEmail(email);
//         passworMatch(password ,password2);
//     });

//     //