export function getLocalUser(){
  const userStr = localStorage.getItem("loggedInUser");

  if(!userStr){
    return null;
  }

  return JSON.parse(userStr);
}

export function getJWT(){
  const jwt = localStorage.getItem("jwt");

  if(!jwt){
    return null;
  }

  return JSON.parse(jwt);
}

export function shouldRegister(){
  const register = localStorage.getItem("shouldRegister");

  if(!register){
    return false;
  }

  return true;
}
