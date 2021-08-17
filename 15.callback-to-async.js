// 5. Callback Hell example
class UserStorage {
    loginUser( id, password ) {
            return new Promise( (resulve, reject) => {
                setTimeout( ()=> {
                    if( (id === 'lee' && password === 'dream') || (id === 'young' && password === 'accademy') ) {
                        resulve(id);
                    }else{
                        reject( new Error('not found'));
                    }
               }, 2000)
            })
    }

    getRoles( user ) {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                if( user === 'lee') {
                    resolve( { name : 'lee' , role : 'admin'})
                } else {
                    reject( new Error('no access'));
                }
            }, 1000)
        }) 
    }

    // async getUserWithRole( user, password ) {
    //     const id = await this.loginUser(user, password);
    //     const role = await this.getRoles(id);
    //     return role;
    // }

}

async function getUserInfo() {

    const userStorage = new UserStorage();
    const id = prompt('enter ur id');
    const password = prompt('enter ur password');

    try {
      const userId = await userStorage.loginUser(id, password);
      const userInfo = await userStorage.getRoles(userId);
      return userInfo;
    } catch (error) {
      return error;
    }
  }
  
  getUserInfo().then(console.log);


// async function userStorage() {
    
//     try{
//          const user = await userStorage.loginUser(id,password);
//          const auth = await userStorage.getRoles( user );
    
//          alert(`Hello ${auth.name},  you hava a ${auth.role} role` );
    
//     }catch(err) {
//         console.error(err);
//     };
// }

// userStorage();


