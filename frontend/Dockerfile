# Dockerfile para Frontend do Whaticket
FROM node:18-alpine as build

# Definir diretório de trabalho
WORKDIR /app

# Copiar package.json
COPY package*.json ./

# Instalar dependências
RUN npm install --legacy-peer-deps

# Copiar código
COPY . .

# Build da aplicação com OpenSSL legacy provider
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build

# Estágio de produção
FROM nginx:alpine

# Copiar build para nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copiar configuração do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor porta
EXPOSE 80

# Iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
