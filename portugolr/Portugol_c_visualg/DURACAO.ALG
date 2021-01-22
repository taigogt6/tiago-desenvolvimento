Algoritmo "duracao"

Var

horas, minutos, segundos:inteiro

Inicio

escreva("Digite a duração em segundos: ")
leia(segundos)
minutos<-(segundos\60)%60

horas<-segundos\3600
segundos<-segundos%60

escreva(horas," : ", minutos, " : ", segundos)


Fimalgoritmo