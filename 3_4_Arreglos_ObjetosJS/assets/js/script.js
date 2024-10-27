let propiedadesVenta = [
  {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    costo: '5.000',
    baños: 4,       
    smoke:false,
    pets:false
  },
  {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,   
    costo: '1.200',
    baños: 1,
    smoke:true,
    pets:true
  },
  {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    costo: '4.500',    
    baños: 3,    
    smoke:false,
    pets:true
  },
  {
    nombre: 'Departamento de lujo con amplio balcon',
    src: 'https://dynamic-media.tacdn.com/media/vr-splice-j/06/3d/30/91.jpg?w=800&h=-1',
    descripcion: 'Este deparamento amoblado ofrece una experiencia inolvidable',
    ubicacion: '369 Blue drive, Strawberry City, FL 335638',
    habitaciones: 2,
    costo: '2.500',    
    baños: 2,    
    smoke:true,
    pets:true
  } 
];

// Funcion que permite cargar el arreglo de objetos(propiedades en Venta) en la etiqueta section id #Propiedades del html.
function mostrarPropiedadVenta  (propiedadesVenta)  {  
  let htmlPropiedadVenta=``; 
  if (propiedadesVenta.length > 0) {    
    for (var i=0; (i<3);(i++))  {                
        htmlPropiedadVenta += `<div id=${i} class="d-flex flex-wrap gap-3">
                <div class="card-propiedad">
                  <img src="${propiedadesVenta[i].src}" class="card-img-top" alt="Foto de la Propiedad">
                  <div class="card-body">
                    <h5 class="card-title">${propiedadesVenta[i].nombre}</h5>
                    <p class="card-text">${propiedadesVenta[i].descripcion}</p>
                    <p class="card-address">${propiedadesVenta[i].ubicacion}</p>
                    <p class="card-rooms">
                      <div><i class="fas fa-bed"></i> Habitaciones: ${propiedadesVenta[i].habitaciones}</div>
                      <div><i class="fas fa-bath"></i> Baños: ${propiedadesVenta[i].baños}</div>
                    </p>
                    <p class="card-price">$ ${propiedadesVenta[i].costo}</p>
                    <p class="txt-smoke">`;
                      if (propiedadesVenta[i].smoke===true) {
                          htmlPropiedadVenta += `<span class="smoke-yes"><i class="fas fa-smoking"></i> Permitido fumar</span>`;
                          }
                        else {
                          htmlPropiedadVenta += `<span class="smoke-no"><i class="fas fa-smoking-ban"></i> No esta permitido fumar</span>`; 
                        htmlPropiedadVenta += `</p>`;
                        }
                      if (propiedadesVenta[i].pets===true) {
                        htmlPropiedadVenta += `<p class="txt-pets">`;
                        htmlPropiedadVenta += `<span class="petsAllowed"><i class="fa-solid fa-paw"></i> Mascotas permitidas</span>`;
                      } else {
                          htmlPropiedadVenta += `<span class="petsNotAllowed"><i class="fa fa-window-close" aria-hidden="true"></i> No estan permitidas las mascotas</span>`;
                      }                   
                      htmlPropiedadVenta += `</p>`;                 
                      htmlPropiedadVenta += `</div>`;
                      htmlPropiedadVenta += `</div>`;
                      htmlPropiedadVenta += `</div>`;   
        }        
      } 
      return htmlPropiedadVenta;                                      
    }     

  let propiedadesAlquiler = [
  {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    costo: '2.000',
    baños: 2,       
    smoke:false,
    pets:true
  },
  {
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '56 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: 3,   
    costo: '2.500',
    baños: 3,
    smoke:true,
    pets:true
  },
  {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    costo: '2.200',    
    baños: 2,    
    smoke:false,
    pets:false
  },
  {
    nombre: 'Departamento economico centrico',
    src: 'https://img.mitula.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzQ5MmVhY2Q1LWNhYTQtNDA4Zi05MDE0LTc3ZWQwOWE4MWFhOS8xODBjNDQxYi02MmJkLTRhNTktYjM0Yy02MjNlYjEzZWJkYzcucG5nIiwiYnJhbmQiOiJNSVRVTEEiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjY1MiwiaGVpZ2h0Ijo0ODksImZpdCI6ImNvdmVyIn19fQ==',
    descripcion: 'Lindo departamento amoblado con gran vista a la ciudad, muy bien iluminado',
    ubicacion: 'Calle Lima frente al parque Enrique de la Piedra, FL 335638',
    habitaciones: 3,
    costo: '1.500',    
    baños: 2,    
    smoke:true,
    pets:true
  } 
];

// Funcion que permite cargar el arreglo de objetos(propiedades en Venta) en la etiqueta section id #Propiedades del html.
function mostrarPropiedadVenta  (propiedadesVenta, cantidadReg)  {  
  let htmlPropiedadVenta=``; 
  if (propiedadesVenta.length > 0) {    
    for (var i=0; (i<cantidadReg);(i++))  {                
        htmlPropiedadVenta += `<div id=${i} class="d-flex flex-wrap gap-3">
                <div class="card-propiedad">
                  <img src="${propiedadesVenta[i].src}" class="card-img-top" alt="Foto de la Propiedad">
                  <div class="card-body">
                    <h5 class="card-title">${propiedadesVenta[i].nombre}</h5>
                    <p class="card-text">${propiedadesVenta[i].descripcion}</p>
                    <p class="card-address">${propiedadesVenta[i].ubicacion}</p>
                    <p class="card-rooms">
                      <div><i class="fas fa-bed"></i> Habitaciones: ${propiedadesVenta[i].habitaciones}</div>
                      <div><i class="fas fa-bath"></i> Baños: ${propiedadesVenta[i].baños}</div>
                    </p>
                    <p class="card-price">$ ${propiedadesVenta[i].costo}</p>
                    <p class="txt-smoke">`;
                      if (propiedadesVenta[i].smoke===true) {
                          htmlPropiedadVenta += `<span class="smoke-yes"><i class="fas fa-smoking"></i> Permitido fumar</span>`;
                          }
                        else {
                          htmlPropiedadVenta += `<span class="smoke-no"><i class="fas fa-smoking-ban"></i> No esta permitido fumar</span>`; 
                        htmlPropiedadVenta += `</p>`;
                        }
                      if (propiedadesVenta[i].pets===true) {
                        htmlPropiedadVenta += `<p class="txt-pets">`;
                        htmlPropiedadVenta += `<span class="petsAllowed"><i class="fa-solid fa-paw"></i> Mascotas permitidas</span>`;
                      } else {
                          htmlPropiedadVenta += `<span class="petsNotAllowed"><i class="fa fa-window-close" aria-hidden="true"></i> No estan permitidas las mascotas</span>`;
                      }                   
                      htmlPropiedadVenta += `</p>`;                 
                      htmlPropiedadVenta += `</div>`;
                      htmlPropiedadVenta += `</div>`;
                      htmlPropiedadVenta += `</div>`;   
        }        
      } 
      return htmlPropiedadVenta;                                      
    } 
/* INDEX.HTML */
 const divPropiedadesIndex = document.querySelector('#seccionVenta');
 if (divPropiedadesIndex){
 const htmlDatos=mostrarPropiedadVenta(propiedadesVenta,3);
 divPropiedadesIndex.innerHTML=htmlDatos;  
}

 const divPropiedadesAlquiler= document.querySelector('#seccionAlquiler');
 if (divPropiedadesAlquiler){
 const htmlDatosAlquiler=mostrarPropiedadVenta(propiedadesAlquiler,3);
 divPropiedadesAlquiler.innerHTML=htmlDatosAlquiler;  
}
// Funcion que permite cargar el arreglo de objetos(propiedades en Alquiler) en la etiqueta section id #Propiedades del html.
function mostrarPropiedadAlquiler  (propiedadesAlquiler,cantidadReg)  {  
  let htmlPropiedadAlquiler=``; 
  if (propiedadesAlquiler.length > 0) {    
    for (var i=0; (i<cantidadReg);(i++))  {                
      htmlPropiedadAlquiler += `<div id=${i} class="d-flex flex-wrap gap-3">
                <div class="card-propiedad">
                  <img src="${propiedadesAlquiler[i].src}" class="card-img-top" alt="Foto de la Propiedad">
                  <div class="card-body">
                    <h5 class="card-title">${propiedadesAlquiler[i].nombre}</h5>
                    <p class="card-text">${propiedadesAlquiler[i].descripcion}</p>
                    <p class="card-address">${propiedadesAlquiler[i].ubicacion}</p>
                    <p class="card-rooms">
                      <div><i class="fas fa-bed"></i> Habitaciones: ${propiedadesAlquiler[i].habitaciones}</div>
                      <div><i class="fas fa-bath"></i> Baños: ${propiedadesAlquiler[i].baños}</div>
                    </p>
                    <p class="card-price">$ ${propiedadesAlquiler[i].costo}</p>
                    <p class="txt-smoke">`;
                      if (propiedadesAlquiler[i].smoke===true) {
                        htmlPropiedadAlquiler += `<span class="smoke-yes"><i class="fas fa-smoking"></i> Permitido fumar</span>`;
                          }
                        else {
                          htmlPropiedadAlquiler += `<span class="smoke-no"><i class="fas fa-smoking-ban"></i> No esta permitido fumar</span>`; 
                          htmlPropiedadAlquiler += `</p>`;
                        }
                      if (propiedadesVenta[i].pets===true) {
                        htmlPropiedadAlquiler += `<p class="txt-pets">`;
                        htmlPropiedadAlquiler += `<span class="petsAllowed"><i class="fa-solid fa-paw"></i> Mascotas permitidas</span>`;
                      } else {
                        htmlPropiedadAlquiler += `<span class="petsNotAllowed"><i class="fa fa-window-close" aria-hidden="true"></i> No estan permitidas las mascotas</span>`;
                      }                   
                      htmlPropiedadAlquiler += `</p>`;                 
                      htmlPropiedadAlquiler += `</div>`;
                      htmlPropiedadAlquiler += `</div>`;
                      htmlPropiedadAlquiler += `</div>`;   
        }        
      } 
      return htmlPropiedadAlquiler;                                      
    }     

/* PROPIEDADES_ALQUILER.HTML */
 const divPropiedadesAlquilerDet = document.querySelector('#seccionAlquilerDetalle');
 if (divPropiedadesAlquilerDet){
  const htmlDatosAlquilerDet=mostrarPropiedadAlquiler(propiedadesAlquiler,4);
  divPropiedadesAlquilerDet.innerHTML=htmlDatosAlquilerDet;  
 }

/* PROPIEDADES_VENTA.HTML */
 const divPropiedadesVentaDet = document.querySelector('#seccionVentaDetalle');
 if (divPropiedadesVentaDet){
  const htmlDatosVentaDet=mostrarPropiedadVenta(propiedadesVenta,4);
  divPropiedadesVentaDet.innerHTML=htmlDatosVentaDet;  
}


 

 