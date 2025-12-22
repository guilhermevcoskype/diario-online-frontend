# 🌐 Diário Online - Frontend

Esta é a interface web do projeto Diário Online, uma plataforma para catalogação de mídias (jogos) com sistema de avaliações personalizadas.

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-50.2%25-3178C6?style=flat-square&logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-30.4%25-CC6699?style=flat-square&logo=sass&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-19.4%25-E34F26?style=flat-square&logo=html5&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-19-DD0031?style=flat-square&logo=angular&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker&logoColor=white)

</div>

---

## 🏗️ O Projeto
O objetivo deste frontend é oferecer uma experiência fluida para que o usuário gerencie sua biblioteca de jogos. A aplicação consome uma API externa de mídias e se comunica com um backend próprio para persistir notas e comentários dos usuários.

### 🔗 Repositórios Relacionados
* 🔙 [Backend (API)](https://github.com/seu-usuario/diario-online-backend)
* 🏗️ [Infraestrutura (Docker/Compose)](https://github.com/seu-usuario/diario-online-infra)

---

## 🛠️ Tecnologias e Decisões Técnicas
* **Angular 19**: Uso de *Signals* para gerenciamento de estado reativo e *Standalone Components*.
* **SCSS** - Estilização avançada
* **Nginx**: Servidor web configurado para gerenciar o roteamento do SPA e servir arquivos estáticos.
* **Docker**: Conteinerização para garantir que o ambiente de execução seja consistente.
* **Integração de API**: Consumo reativo de dados de mídias externas.

---

## 📊 Status das Funcionalidades

| Funcionalidade | Status | Descrição |
| :--- | :---: | :--- |
| **Autenticação** | ✅ | Login e Cadastro de usuários funcional. |
| **Pesquisa de Mídias** | ✅ | Busca por nome integrada à API externa. |
| **Detalhes da Mídia** | ✅ | Visualização de info vinda da API. |
| **Avaliação/Comentário** | ✅ | Interface pronta, aguardando integração backend. |
| **Dashboard** | ✅ | Listagem de mídias salvas. |

---

## 🖼️ Preview (WIP)

<img width="1914" height="989" alt="image" src="https://github.com/user-attachments/assets/ee6405aa-f994-43c8-b940-e586bfef1b99" />
<img width="1912" height="984" alt="image" src="https://github.com/user-attachments/assets/e4391b34-e533-4587-ae0e-3bace7483d5f" />
<img width="1917" height="987" alt="image" src="https://github.com/user-attachments/assets/3c88494b-afab-4fe3-a73d-7cadea1a21c8" />
<img width="1917" height="986" alt="image" src="https://github.com/user-attachments/assets/f6bc6152-d549-4f96-a523-436046b747bf" />





---

## 🚀 Como rodar localmente

### 1. Com Docker (Recomendado)
```bash
# Clone o repositório
git clone [https://github.com/guilhermevcoskype/diario-online-frontend.git](https://github.com/guilhermevcoskype/diario-online-frontend.git)

# Acesse a pasta
cd diario-online-frontend

# Build e execução via Docker
docker build -t diario-frontend .
docker run -p 80:80 diario-frontend
```

---

### 2. Sem Docker

- **Node.js** 18.x ou superior
- **npm** 9.x ou superior
- **Angular CLI** 19.x

1. **Clone o repositório**
```bash
git clone https://github.com/guilhermevcoskype/diario-online-frontend.git
cd diario-online-frontend
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto**
```bash
ng serve
```

A aplicação estará disponível em `http://localhost:4200`

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
│   │   └── interceptor/     # HTTP interceptors
│   │
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

## 🐳 Docker

### Dockerfile
O projeto inclui um Dockerfile multi-stage otimizado:
- Stage 1: Build da aplicação Angular
- Stage 2: Servir com Nginx

### nginx.conf
Configuração customizada do Nginx para:
- Servir arquivos estáticos
- Roteamento SPA (Single Page Application)

---

## 🔒 Segurança

- Proteção contra XSS
- Guards de autenticação em rotas protegidas
- HTTP interceptor para gerenciar tokens JWT
- Validação de formulário

---

## 🎯 Padrões de Código

- **Componentes**: Estrutura modular e reutilizável
- **Services**: Injeção de dependências
- **Observables**: Gerenciamento com `async` pipe
- **SCSS**: Metodologia BEM para nomenclatura de classes
- **TypeScript**: Tipagem forte e interfaces bem definidas

---

### 👨‍💻 Autor

**Guilherme Oliveira**

- GitHub: [guilhermevcoskype](https://github.com/guilhermevcoskype)
- LinkedIn: [guilherme-vale-oliveira-dev](https://www.linkedin.com/in/guilherme-vale-oliveira-dev/)
- Email: [guilhermevcoskype@gmail](guilhermevcoskype@gmail.com)

---

<div align="center">

Desenvolvido com ❤️ usando Angular

</div>
