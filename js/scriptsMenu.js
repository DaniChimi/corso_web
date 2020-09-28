//###### AGGIUNGI PRODOTTO #####
function totaleSub() {
    var q = document.getElementById('q1').textContent;
    var prezzo = document.getElementById('prezzo1').textContent;
    var totale = document.getElementById('totale1').textContent;
    if (q > 1) {
        console.log("IN : q: " + q + " prezzo: " + prezzo + " Tot: " + totale);
        q--;
        totale =  q * prezzo 
        console.log("OUT : q: " + q + " prezzo: " + prezzo + " Tot: " + totale);
        return document.getElementById("totale1").innerHTML = totale;
    } else {
        return document.getElementById("totale1").innerHTML = 0;
    }


}
function totaleAdd() {
    var q = document.getElementById('q1').textContent;
    var prezzo = document.getElementById('prezzo1').textContent;
    var totale = document.getElementById('totale1').textContent;
    console.log("IN : q: " + q + " prezzo: " + prezzo + " Tot: " + totale);
    q++;
    totale =  q * prezzo 
    console.log("OUT : q: " + q + " prezzo: " + prezzo + " Tot: " + totale);
    return  document.getElementById("totale1").innerHTML = totale;
}

//####### AGGIUNGI - SOTTRAI PER MENU #####
function addUno() {
    var q = document.getElementById('q1').textContent;
    q = isNaN(q) ? 0 : q;
    q++;
    console.log("fatto " + q);
    totaleAdd();
    return  document.getElementById("q1").innerHTML = q;
}

function subUno() {
    var q = document.getElementById('q1').textContent;
    q = isNaN(q) ? 0 : q;
    if (q >= 1){
        q--;
    }
    console.log("fatto " + q);
    totaleSub();
    return  document.getElementById("q1").innerHTML =q;
}


//##### CREAZIONE OGGETTI FOOD ###########

var foodName = ["Pasta", "Insalata"];
var foodPrice = [13, 6];
var foodType = ["Primo Piatto", "Contorno"];

var menu = [];

function food(name, price, type, status){
    this.name = name;
    this.price = price;
    this.type = type;
    this.status = status;
    this.description = function() {
        return "questo pitatto è: " + this.name + " | costa : " + this.price + " euro ed è un " + this.type;
    }
}

menu.push(new food("Pasta", 10.00, "Primo Piatto", 1));
menu.push(new food("Tagliata", 15.00, "Secondo Piatto", 1));
menu.push(new food("Insalata", 3.00, "Contorno", 1));
menu.push(new food("Acqua", 2.5, "Bar", 1));
menu.push(new food("CocaCola", 2.5, "Bar", 1));

console.log(menu);
//####### Aggiungere elemento (CIBO) al array Food da form #######
addFoodForm = document.getElementById("addFoodForm")
addFoodForm.addEventListener('submit', formFoodSubmit);

function formFoodSubmit(event) {
    this.name = document.getElementById('inputFoodName').value;
    this.price = document.getElementById('inputFoodPrice').value;
    menu.push(new food(this.name, this.price, "test", 0));
    console.log(menu);
    event.preventDefault();
}

//###### rimuova elemento (CIBO) dal array FOOD #####
function deleteFood(row){
    this.row = row;
    console.log(menu);
    menu.splice(this.row ,1);
    console.log(menu); 
}

//###### modifica elemento (CIBO) dal array FOOD #####
function modifyFood(row, name, price, type){
    this.row = row;
    this.name = name;
    this.price = price;
    this.type = type;
    menu.splice(row ,0,new food(this.name, this.price, this.type, 0));
    console.log(menu); 
}


//####### CREATE Table Row to Add Food ######
var tabelTr="<tr>";
for (var i = 0; i < menu.length; i++){
    var product = menu[i];
    var n = i+1;
    //console.log(product.name);
    //console.log(product.price);
    //console.log(product.type);
    tabelTr += "<th scope='row'>"+ n +"</th><td>"+ product.name +" </td><td>" + product.price +"</td><td>"+ product.type +"</td><td> <span data-toggle='modal' data-target='#foodModifyModalForm'><button class='btn btn-dark' data-toggle='tooltip' data-placement='top' title='Modifica'><i class='fa fa-pencil'></i></button></span> <button class='btn btn-dark' data-toggle='tooltip' data-placement='top' title='Elimina' onclick='deleteFood("+ i +")'><i class='fa fa-trash' ></i></button></td></tr>";

    //console.log(tabelTr);
}
document.getElementById("tabellaAddFood").innerHTML = tabelTr;







