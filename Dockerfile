FROM cypress/base:10
COPY . .
#RUN curl -fsSLO https://get.docker/builds/Linux/x86_64/docker-17.04.0-ce.tgz \
#  && tar xzvf docker-17.04.0-ce.tgz \
#  && mv docker/docker /usr/local/bin \
#  && rm -r docker docker-17.04.0-ce.tgz
RUN npm install
RUN npm install --save-dev cypress@4.12.1
RUN npm i faker -D
RUN npm i cpf-cnpj-validator -S
# RUN $(npm bin)/cypress run  --spec 'cypress/integration/api/**/*'
# RUN npx cypress run --spec cypress/integration/api/*/** --record --key 0eba27fa-8093-4dd7-9b04-4f41d3862720
RUN npx cypress run