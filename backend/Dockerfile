# Dockerfile para Backend do Whaticket
FROM node:18-alpine

# Instalar dependências necessárias
RUN apk add --no-cache \
    ffmpeg \
    wget \
    fontconfig \
    chromium \
    chromium-chromedriver

# Definir diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o resto do código
COPY . .

# Compilar TypeScript
RUN npm run build

# Expor porta
EXPOSE 8090

# Comando para iniciar
CMD ["npm", "start"]
