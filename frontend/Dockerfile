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

# Argumentos de build para variáveis de ambiente
ARG REACT_APP_BACKEND_URL
ARG REACT_APP_HOURS_CLOSE_TICKETS_AUTO=24
ARG REACT_APP_FACEBOOK_APP_ID

# Definir variáveis de ambiente para o build
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL
ENV REACT_APP_HOURS_CLOSE_TICKETS_AUTO=$REACT_APP_HOURS_CLOSE_TICKETS_AUTO
ENV REACT_APP_FACEBOOK_APP_ID=$REACT_APP_FACEBOOK_APP_ID

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
