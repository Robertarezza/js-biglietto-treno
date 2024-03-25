# Prezzo biglietto del treno

## Testo della consegna
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. 

Svolgimento

1. Raccolta dati
    - [x] Chiedere il numero di chilometri che percorrerà.
    - [x] Chiedere l'età del passeggero
    - [x] creazione variabile prezzo biglietto 
    - [x] creazione variabile sconto del 20%
    - [x] creazione variabile sconto del 40%

2. Esecuzione logica:
    - [x] calcolo dei km da percorre * il prezzo unitario 
   

    >Se l'età è < di 18 anni all'ora applichiamo lo sconto del 20%,(prezzo tot in base ai km - var sconto 20%)
    se l'età > di 65 anni allora applichiamo uno sconto del 40% (prezzo tot in base - var sconto 40%)
    altrimenti 
    prezzo pieno (prezzo tot in base ai km)

3. output
 - [x] Stampa prezzo finale con massimo due decimali.