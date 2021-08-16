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
}


  const userStorage = new UserStorage();
  const id = prompt('enter ur id');
  const password = prompt('enter ur password');

  userStorage.loginUser(id,password)
  .then(userStorage.getRoles)
  .then(user => alert(`Hello ${user.name},  you hava a ${user.role} role` ) )
  .catch(console.log);
