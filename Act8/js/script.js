const app = new Vue({
    el: '#main',
    data:{
        productos:[
            {nombre:'Proteina Muscletech', cantidad:5, preciounitario:869, total:0}
        ],
        nuevoPro:'',
        nuevaCantidad:0,
        nuevoPrecio:0.0,
        total:0,
        subtotal:0,
        iva:0,
        prototales:0,
    },
    methods: {
        agregar:function(){
            this.productos.push({
                nombre:this.nuevoPro, cantidad:this.nuevaCantidad, preciounitario:this.nuevoPrecio
            })
            this.nuevoPro='';
            this.nuevaCantidad=0;
            this.nuevoPrecio=0.0;
        },
        montoPro(i){
            this.productos[i].total=this.productos[i].cantidad* this.productos[i].preciounitario;
            return this.productos[i].total;
        }

   },
    computed:{
        SumarProductos(){
            this.prototales=0;
            for(producto of this.productos){
                this.prototales+=producto.cantidad;
            }
            return this.prototales;
        },
        calculoSubtotal(){
            this.subtotal=0;
            for(producto of this.productos){
                this.subtotal += producto.total;
            }
            return this.subtotal;
        },
        calculoIva(){
            this.iva=0;
            this.iva = this.subtotal*0.16;
            return this.iva.toFixed(2);
        },
        calculoTotal(){
            return (this.subtotal +this.iva).toFixed(2);
        }
    }
})