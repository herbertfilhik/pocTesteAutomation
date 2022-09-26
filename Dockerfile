FROM cypress/base:10
COPY . .
RUN npm install
RUN npm install --save-dev cypress@4.12.1
RUN npm i faker -D
RUN npm i cpf-cnpj-validator -S
RUN npx cypress run