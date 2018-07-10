function register(){
	const emailValue = email.value;
	const passwordValue = password.value;
	firebase.auth().createEserWidthEmailAndPassword(emailValue, passwordValue)	
}		.then(()=>{
	console.log("usuario Registrado");
})
		.catch(function(error) {
	  	let errorCode = error.code;
  		let errorMessage = error.message;
  		console.log(errorCode);
  		console.log(errorMessage);
});
