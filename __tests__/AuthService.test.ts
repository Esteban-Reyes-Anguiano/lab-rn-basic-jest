import AuthService from '../src/AuthService';


describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
  });

  it('debería registrar un nuevo usuario exitosamente', async () => {
    const resultado = await authService.register('usuario123', 'contraseña123');
    expect(resultado).toBe(true);
  });

  it('no debería registrar un usuario con el mismo nombre de usuario', async () => {
    await authService.register('usuario456', 'contraseña456');
    const resultado = await authService.register('usuario456', 'contraseña789');
    expect(resultado).toBe(false);
  });

  it('debería iniciar sesión con credenciales válidas', async () => {
    await authService.register('usuario789', 'contraseña789');
    const resultado = await authService.login('usuario789', 'contraseña789');
    expect(resultado).toBe(true);
  });

  it('no debería iniciar sesión con credenciales inválidas', async () => {
    await authService.register('usuario101', 'contraseña101');
    const resultado = await authService.login('usuario101', 'contraseña_incorrecta');
    expect(resultado).toBe(false);
  });
});
