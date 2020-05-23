#Preparamos el sistema
FROM ubuntu:18.04
LABEL Descripcion="Api pandora-box" Author="Miguel Angel Castro Edreira"

RUN apt-get update -y

RUN apt-get install --yes curl

#Instalamos el componente NODEJS
RUN apt-get install --yes nodejs
RUN apt-get install --yes build-essential

#Creamos el espacio de trabajo
RUN cd ./home && mkdir app
WORKDIR /home/app

#Copiamos el codigo al espacio de trabajo
COPY . .

#Mostramos el puerto
EXPOSE  3000

#Arrancamos aplicacion
CMD ["node", "index.js"]

##La api funciona. Falta la base de datos