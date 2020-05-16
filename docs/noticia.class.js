class Noticia {
    // 2) "constructor" están en el interior de las clases y se configuran: qué propiedades configuran al objeto y qué valor toma esa propiedad.
                constructor(t, a, c, i) {
                    this.titulo = t
                    this.autor = a
                    this.cuerpo = c
                    this.imagen = i
            }

  /*          AgregarImagen() {
                 console.log(this)
                    this.foto = this.nombre.replace(/ /g, "-")
                    this.foto = this.foto.toLowerCase()
            }	

            AgregarFuente () {
                this.fuente = this.nombre.replace(/ /g, "-")
                this.fuente = this.fuente.toLowerCase()
                this.fuente = `https://source.unsplash.com/200x200/?${this.fuente}`
                       }
*/
            Mostrar() {
console.log("El que ejecuto este metodo es:")
console.log(this)	 
            
                let ficha = document.createElement("article")
                    ficha.classList.add("row", "noticia")

 /*                   ficha.innerHTML = `
                            <div class="card h-100">
                                <a href="#">
                                    <img class="card-img-top img-fluid" src="${this.imagen}"  alt="${this.nombre}">
                                </a>
                                <div class="card-body">
                                    <h4 class="card-title"><a href="#">${this.nombre}</a> <span class="badge badge-pill badge-success float-right">$${this.precio.toFixed(2)}</span></h4>
                                    <p class="card-text">${this.stock} unid.</p>
                                    <button class="btn btn-primary float-right">Comprar</button>
                                </div>
                            </div> `

                  document.querySelector("#productos-destacados").appendChild(ficha)		
*/                   
                    ficha.innerHTML =  `
                            <div class="col-12 col-md-3 col-lg-4 noticia-img">
                                <img src="${this.imagen}" class="img-fluid">
                            </div>
                            <div class="col-12 col-md-9 col-lg-8 noticia-txt">
                                <h3>${this.titulo}</h3>
                                <p>por ${this.autor}</p>
                                <p>${this.cuerpo}</p>
                            </div>`

                    document.querySelector(".posicion").appendChild(ficha)
                }	

               
        }		
