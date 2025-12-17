import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // 1. Pegue o token (do localStorage ou de um serviço)
  const token = localStorage.getItem('token'); // Use a chave que você definiu no login

  // 2. Se o token existir, adicione-o ao cabeçalho
  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    // Envia a requisição modificada
    return next(authReq);
  }

  // 3. Se não houver token, envia a requisição original sem alterações
  return next(req);
};