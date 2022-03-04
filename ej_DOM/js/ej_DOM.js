function aniadirProducto()
        {
            var objeto_lista=document.createElement("li");
            var compra=document.getElementById("compra");
            objeto_lista.innerHTML=compra.value;
            var lista=document.getElementsByTagName("ul")[0];
            lista.appendChild(objeto_lista);
        }