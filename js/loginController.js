class LoginController{
    
    constructor($state){  
        this.state = $state;
        this.user = {'username':'','password':''};
        this.showError = false; // set Error flag
	    this.showSuccess = false; // set Success Flag

        
    }

    //----- Users json
	
	
	
	//------- Authenticate function
	authenticate(){
        const validUsers = [ 
            {'username':'chandler@friends.com', 'password':'1234'},
            {'username':'ross@friends.com', 'password':'1234'},
            {'username':'joey@friends.com', 'password':'1234'},
            {'username':'rechal@friends.com', 'password':'1234'}
        ];
        console.log("entreeee");
		var flag= false;
		
		for(var i in validUsers){ // loop on users array
			if(this.user.username == validUsers[i].username && this.user.password == validUsers[i].password){
				flag = true;
				break;
			}
			else{
				flag = false;
			}				
		}

		//-------- set error or success flags
		if(flag){
			this.showError = false;
			this.showSuccess = true;
		}
		else{
			this.showError = true;
			this.showSuccess = false;
		}


	}
    
}
