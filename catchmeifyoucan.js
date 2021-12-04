function sum(x, y){
  try {
    if(typeof(x) !== 'number') {
      throw 'The first argument is not a number';
    }
    if(typeof(y) !== 'number') {
      throw 'The first argument is not a number';
    }
    return x + y;
  } catch (error) {
    console.log(error);
  }
}

var user = {username: "sam", password: "123abc"};
function login(username, password){
  try {
    if(username !== user.username) {
      throw 'Cannot find user: ' + username;
    }
    if(password !== user.password) {
      throw 'The password is incorrect';
    }
    console.log('login successful!');
  } catch (error) {
    console.log(error);
  }
}