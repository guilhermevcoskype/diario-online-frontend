# 🌐 Diário Online - Frontend

Frontend da aplicação Diário Online, desenvolvido com Angular 20.

## 🛠️ Tecnologias

- **Angular 20**
- **TypeScript 5.x**
- **RxJS** - Programação reativa
- **Angular Material** / **Bootstrap** - Componentes UI
- **Nginx** - Servidor web (produção)

---

## 📂 Estrutura do Projeto

```
src/
├── app/
│   ├── core/                 # Serviços singleton, guards, interceptors
│   │   ├── guards/           # Route guards (auth)
│   │   ├── interceptors/     # HTTP interceptors (JWT, error)
│   │   └── services/         # Serviços core (auth, API)
│   │
│   ├── shared/               # Componentes, pipes, directives compartilhados
│   │   ├── components/       # Componentes reutilizáveis
│   │   ├── models/           # Interfaces e modelos
│   │   └── pipes/            # Pipes customizados
│   │
│   ├── features/             # Módulos de funcionalidades
│   │   ├── auth/             # Login, registro
│   │   ├── dashboard/        # Dashboard principal
│   │   ├── medias/           # CRUD de mídias
│   │   └── profile/          # Perfil do usuário
│   │
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
│
├── assets/                   # Imagens, ícones, fonts
├── environments/             # Configurações de ambiente
│   ├── environment.ts        # Desenvolvimento
│   └── environment.prod.ts   # Produção
│
└── styles.css               # Estilos globais
```

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ e npm 9+
- Angular CLI 20+

### Instalação

1. **Clone o repositório** (se ainda não fez)
```bash
git clone https://github.com/seu-usuario/diario-online.git
cd diario-online/diario-online-frontend
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto**
```bash
ng serve
```

Ou com configuração customizada:
```bash
ng serve --port 4200 --open
```

4. **Acesse no navegador**
```
http://localhost:4200
```

### Executar com Docker

```bash
docker build -t diario-online-frontend .
docker run -p 80:80 diario-online-frontend
```

---

## ⚙️ Configuração

### Ambientes (environments/)

**environment.ts** (Desenvolvimento)
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api',
  version: '1.0.0'
};
```

**environment.prod.ts** (Produção)
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.diarioonline.com/api',
  version: '1.0.0'
};
```

---

## 📦 Principais Dependências

```json
{
  "@angular/core": "^20.0.0",
  "@angular/material": "^20.0.0",
  "rxjs": "^7.8.0",
  "chart.js": "^4.0.0",
  "ngx-charts": "^20.0.0"
}
```

---

## 🧩 Módulos Principais

### Core Module
Serviços singleton e configurações globais:
- `AuthService` - Gerenciamento de autenticação
- `HttpClient` - Comunicação com API
- `AuthGuard` - Proteção de rotas
- `JwtInterceptor` - Adiciona token JWT às requisições

### Shared Module
Componentes reutilizáveis:
- `NavbarComponent`
- `FooterComponent`
- `LoadingSpinnerComponent`
- `ConfirmDialogComponent`

### Feature Modules
- **AuthModule** - Login e registro
- **DashboardModule** - Página inicial com estatísticas
- **MediasModule** - Listagem, cadastro e edição de mídias
- **ProfileModule** - Gerenciamento de perfil

---

## 🧪 Testes

### Testes Unitários
```bash
ng test
```

### Testes com Cobertura
```bash
ng test --code-coverage
```

Relatório em: `coverage/index.html`

### Testes E2E (se configurado)
```bash
ng e2e
```

---

## 🏗️ Build para Produção

### Build Otimizado
```bash
ng build --configuration production
```

Arquivos gerados em: `dist/diario-online-frontend/`

### Build com Análise de Bundle
```bash
ng build --stats-json
npx webpack-bundle-analyzer dist/diario-online-frontend/stats.json
```

---

## 🎨 Padrões de Código

### Componentes
- Use `OnPush` change detection quando possível
- Unsubscribe de observables no `ngOnDestroy`
- Prefira `async` pipe para gerenciar subscriptions

### Services
- Um serviço por arquivo
- Injeção de dependências via constructor
- Use `BehaviorSubject` para estado compartilhado

### Nomenclatura
- Componentes: `media-list.component.ts`
- Services: `media.service.ts`
- Models: `media.model.ts`
- Guards: `auth.guard.ts`

---

## 📱 Responsividade

A aplicação é totalmente responsiva:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Breakpoints configurados em `styles.css`:
```css
/* Mobile First */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
```

---

## 🔍 Troubleshooting

### Erro: "Cannot find module @angular/..."
```bash
rm -rf node_modules package-lock.json
npm install
```

### Porta 4200 já em uso
```bash
ng serve --port 4300
```

### Build falha por falta de memória
```bash
node --max_old_space_size=8192 node_modules/@angular/cli/bin/ng build
```

### Erro de CORS
Verifique se o backend está configurado para aceitar requisições de `http://localhost:4200`

---

## 🎯 Scripts Disponíveis

```json
{
  "start": "ng serve",
  "build": "ng build",
  "test": "ng test",
  "lint": "ng lint",
  "format": "prettier --write \"src/**/*.{ts,html,css}\""
}
```

---

## 📚 Recursos Úteis

- [Angular Documentation](https://angular.dev)
- [Angular Material](https://material.angular.io)
- [RxJS Documentation](https://rxjs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 🔗 Links

- [📘 README Principal](../README.md)
- [🧠 Backend](../diario-online-backend/README.md)
- [🐳 Docker Compose](../docker-compose.yml)