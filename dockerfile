# Estágio 1: Build
FROM node:22-alpine AS build
WORKDIR /app

# Copia arquivos de dependências
COPY package*.json ./
RUN npm install

# Copia o código e gera o build de produção
COPY . .
RUN npm run build -- --configuration production

# Estágio 2: Servir com Nginx
FROM nginx:alpine

# Remove config padrão do nginx (boa prática)
RUN rm /etc/nginx/conf.d/default.conf

# Copia os arquivos do Angular
COPY --from=build /app/dist/diario-online-frontend/browser /usr/share/nginx/html

# Configuração customizada do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
