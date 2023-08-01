
class AuthService {
    private registeredUsers: { [username: string]: string } = {};
  
      //Funcion para registrar a un usuario nuevo
    async register(username: string, password: string): Promise<boolean> {
      if (this.registeredUsers[username]) {
        return false; // El nombre de usuario ya está en uso
      }
  
      this.registeredUsers[username] = password;
      return true; // Registro exitoso
    }
    //Funcion para iniciar sesion 

    async login(username: string, password: string): Promise<boolean> {
      const storedPassword = this.registeredUsers[username];
  
      if (storedPassword === password) {
        return true; // Inicio de sesión exitoso
      }
  
      return false; // Credenciales incorrectas
    }
  }
  
  export default AuthService;
  