var pedido = prompt("Quieres un helado?","Si").toLowerCase();
var helado = 1.90;

if (pedido == "si") {
    var extra = prompt("Quieres topping?","Si").toLowerCase();
    if (extra =="si") {
        var topping = prompt("Elige un topping para tu Helado, tenemos de: Oreo, Kitkat, Brownie, Lacasitos","Brownie").toLowerCase();
        if (topping ==="oreo") {
            alert(`El topping de ${topping} cuesta 1€ más, en total el helado son ${helado + 1}€`);
        }
        else if (topping === "kitkat"){
            alert(`El topping de ${topping} cuesta 1.50€ más, en total el helado son ${helado + 1.5}€ `);
        }
        else if (topping === "brownie"){
            alert(`El topping de ${topping} cuesta 0.75€ más, en total el helado son ${helado + 0.75}€`);
        }
        else if (topping === "lacasitos"){
            alert(`El topping de ${topping} cuesta 0.95€ más, en total el helado son ${helado + 0.75}€`);
        }
        else {
            alert("No tenemos ese topping");
        }

    }
    else {
    alert('El helado sin topping cuesta 1.90€');
}}
else if (pedido == "no") {
    alert("Si no quieres helado, no entiendo que haces en una heladería");
}
else {
    alert("No te he entendido, ¿Quieres o no quieres helado?");
};


