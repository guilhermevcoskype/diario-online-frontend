# 🌐 Diário Online - Frontend

Frontend da aplicação Diário Online, desenvolvido com Angular para gerenciamento de mídias (games, filmes e séries).

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-50.2%25-3178C6?style=flat-square&logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-30.4%25-CC6699?style=flat-square&logo=sass&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-19.4%25-E34F26?style=flat-square&logo=html5&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-19-DD0031?style=flat-square&logo=angular&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker&logoColor=white)

</div>

---

## 🎯 Sobre

Interface moderna e responsiva para catalogar e gerenciar sua coleção pessoal de mídias digitais, incluindo funcionalidades de rede social para compartilhar suas experiências.

---

## 🛠️ Stack Tecnológica

- **Angular 19** - Framework frontend
- **TypeScript 5.x** - Linguagem principal
- **SCSS** - Estilização avançada
- **RxJS** - Programação reativa
- **Nginx** - Servidor web para produção
- **Docker** - Containerização

---

## 📂 Estrutura do Projeto

```
diario-online-frontend/
├── src/
│   ├── app/                  # Aplicação Angular
│   │   ├── components/       # Componentes da aplicação
│   │   ├── services/         # Serviços e lógica de negócio
│   │   ├── models/           # Interfaces e tipos TypeScript
│   │   ├── guards/           # Guards de rota (autenticação)
│   │   └── interceptors/     # HTTP interceptors
│   │
│   ├── assets/               # Recursos estáticos
│   ├── styles/               # Estilos globais SCSS
│   └── environments/         # Configurações por ambiente
│
├── public/                   # Arquivos públicos
├── .vscode/                  # Configurações do VS Code
├── dockerfile                # Container Docker
├── nginx.conf                # Configuração do Nginx
├── angular.json              # Configuração do Angular CLI
├── tsconfig.json             # Configuração TypeScript
└── package.json              # Dependências do projeto
```

---

## 🚀 Começando

### Pré-requisitos

- **Node.js** 18.x ou superior
- **npm** 9.x ou superior
- **Angular CLI** 19.x

```bash
# Instalar Angular CLI globalmente
npm install -g @angular/cli@19
```

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/guilhermevcoskype/diario-online-frontend.git
cd diario-online-frontend
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure o ambiente**

Edite `src/environments/environment.ts` com a URL do backend:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080'
};
```

4. **Execute o projeto**
```bash
ng serve
```

A aplicação estará disponível em `http://localhost:4200`

### Executar com Docker

```bash
# Build da imagem
docker build -t diario-online-frontend .

# Executar container
docker run -p 80:80 diario-online-frontend
```

Acesse em `http://localhost`

---

## 🏗️ Build

### Desenvolvimento
```bash
ng serve --open
```

### Produção
```bash
ng build --configuration production
```

Os arquivos otimizados estarão em `dist/`

### Build com Análise
```bash
ng build --stats-json
npx webpack-bundle-analyzer dist/diario-online-frontend/browser/stats.json
```

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

Relatório gerado em `coverage/index.html`

### Linting
```bash
ng lint
```

---

## 📦 Scripts Disponíveis

```json
{
  "start": "ng serve",
  "build": "ng build",
  "watch": "ng build --watch --configuration development",
  "test": "ng test",
  "lint": "ng lint"
}
```

---

## 🎨 Funcionalidades Principais

- ✅ Autenticação de usuários (JWT)
- 📝 CRUD completo de mídias
- 🎮 Categorização por tipo (Games, Filmes, Séries)
- ⭐ Sistema de avaliações
- 🔍 Busca e filtros avançados
- 👥 Funcionalidades de rede social
- 📊 Dashboard com estatísticas
- 📱 Interface totalmente responsiva
- 🌙 Suporte a tema escuro/claro

---

## 🔧 Configuração de Ambiente

### Development (environment.ts)
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080'
};
```

### Production (environment.prod.ts)
```typescript
export const environment = {
  production: true,
  apiUrl: '/api'
};
```

---

## 📱 Responsividade

Breakpoints configurados:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

---

## 🐳 Docker

### Dockerfile
O projeto inclui um Dockerfile multi-stage otimizado:
- Stage 1: Build da aplicação Angular
- Stage 2: Servir com Nginx

### nginx.conf
Configuração customizada do Nginx para:
- Servir arquivos estáticos
- Roteamento SPA (Single Page Application)
- Compressão gzip
- Cache de assets

---

## 🔒 Segurança

- Proteção contra XSS
- Sanitização de inputs
- Guards de autenticação em rotas protegidas
- HTTP interceptors para gerenciar tokens JWT
- Validação de formulários

---

## 🎯 Padrões de Código

- **Componentes**: Estrutura modular e reutilizável
- **Services**: Injeção de dependências
- **Observables**: Gerenciamento com `async` pipe
- **SCSS**: Metodologia BEM para nomenclatura de classes
- **TypeScript**: Tipagem forte e interfaces bem definidas

---

## 🔍 Troubleshooting

### Erro: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Porta 4200 ocupada
```bash
ng serve --port 4300
```

### Erro de CORS
Certifique-se que o backend está configurado para aceitar requisições de `http://localhost:4200`

### Build falha por memória
```bash
node --max_old_space_size=8192 ./node_modules/@angular/cli/bin/ng build
```

---

## 📚 Recursos e Documentação

- [Angular Documentation](https://angular.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [RxJS Documentation](https://rxjs.dev)
- [SCSS Documentation](https://sass-lang.com/documentation)

---

## 🔗 Repositórios Relacionados

- [📦 Repositório Infra (Docker Compose)](https://github.com/guilhermevcoskype/diario-online-infra)
- [🧠 Backend (Spring Boot)](https://github.com/guilhermevcoskype/diario-online-backend)

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

---

## 👨‍💻 Autor

**Guilherme Oliveira**

- GitHub: [@guilhermevcoskype](https://github.com/guilhermevcoskype)
- LinkedIn: [[LinkedIn](https://www.linkedin.com/in/guilherme-vale-oliveira-dev/)]
- Email: [[Seu Email](guilhermevcoskype@gmail.com)]

---

<div align="center">

⭐ **Se este projeto foi útil, considere dar uma estrela!** ⭐

Desenvolvido com ❤️ usando Angular

</div>