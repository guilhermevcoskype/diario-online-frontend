import { HttpInterceptorFn } from '@angular/common/http';
import { IS_PUBLIC_API } from '../services/auth-service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // 1. Pegue o token (do localStorage ou de um serviço)
  const token = localStorage.getItem('token'); // Use a chave que você definiu no login

  if (req.context.get(IS_PUBLIC_API)) {
    return next(req); // Passa adiante sem fazer nada
  }

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