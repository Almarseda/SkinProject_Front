import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: Product[] = [
    {
      nombre: "Mármol Fade",
      modelo: "Cuchillo Karambit",
      precio: 450.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Multicolor",
      imagen: "https://ejemplo.com/karambit-marmol-fade.jpg"
    },
    {
      nombre: "Espectro",
      modelo: "Guantes",
      precio: 800.00,
      estado: "Poco usado",
      disponibilidad: 1,
      rareza: "Épico",
      color: "Morado y Negro",
      imagen: "https://ejemplo.com/guantes-espectro.jpg"
    },
    {
      nombre: "Fuego Elemental",
      modelo: "AK-47",
      precio: 120.00,
      estado: "Bastante usado",
      disponibilidad: 0,
      rareza: "Poco común",
      color: "Rojo y Naranja",
      imagen: "https://ejemplo.com/ak47-fuego-elemental.jpg"
    },
    {
      nombre: "Relámpago",
      modelo: "AWP",
      precio: 300.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Amarillo y Azul",
      imagen: "https://ejemplo.com/awp-relampago.jpg"
    },
    {
      nombre: "Rey Neón",
      modelo: "M4A4",
      precio: 90.00,
      estado: "Poco usado",
      disponibilidad: 2,
      rareza: "Común",
      color: "Rosa y Azul",
      imagen: "https://ejemplo.com/m4a4-rey-neon.jpg"
    },
    {
      nombre: "Onda de Choque",
      modelo: "Cuchillo Mariposa",
      precio: 600.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Azul y Blanco",
      imagen: "https://ejemplo.com/mariposa-onda-choque.jpg"
    },
    {
      nombre: "Dragón Lunar",
      modelo: "Guantes",
      precio: 950.00,
      estado: "Poco usado",
      disponibilidad: 1,
      rareza: "Épico",
      color: "Rojo y Dorado",
      imagen: "https://ejemplo.com/guantes-dragon-lunar.jpg"
    },
    {
      nombre: "Caimán",
      modelo: "USP-S",
      precio: 50.00,
      estado: "Bastante usado",
      disponibilidad: 0,
      rareza: "Poco común",
      color: "Verde y Marrón",
      imagen: "https://ejemplo.com/usps-caiman.jpg"
    },
    {
      nombre: "Llama Cósmica",
      modelo: "Desert Eagle",
      precio: 70.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Morado y Rosa",
      imagen: "https://ejemplo.com/deagle-llama-cosmica.jpg"
    },
    {
      nombre: "Tigre",
      modelo: "Cuchillo Navaja",
      precio: 400.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Naranja y Negro",
      imagen: "https://ejemplo.com/navaja-tigre.jpg"
    },
    {
      nombre: "Muerte Fría",
      modelo: "P90",
      precio: 30.00,
      estado: "Poco usado",
      disponibilidad: 3,
      rareza: "Común",
      color: "Azul y Blanco",
      imagen: "https://ejemplo.com/p90-muerte-fria.jpg"
    },
    {
      nombre: "Cazador Nocturno",
      modelo: "Cuchillo Bayoneta",
      precio: 500.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Negro y Verde",
      imagen: "https://ejemplo.com/bayoneta-cazador-nocturno.jpg"
    },
    {
      nombre: "Hidra",
      modelo: "Guantes",
      precio: 1100.00,
      estado: "Poco usado",
      disponibilidad: 1,
      rareza: "Épico",
      color: "Verde y Negro",
      imagen: "https://ejemplo.com/guantes-hidra.jpg"
    },
    {
      nombre: "Agua Viva",
      modelo: "Glock-18",
      precio: 25.00,
      estado: "Bastante usado",
      disponibilidad: 0,
      rareza: "Poco común",
      color: "Rosa y Morado",
      imagen: "https://ejemplo.com/glock-agua-viva.jpg"
    },
    {
      nombre: "Onda de Choque",
      modelo: "Cuchillo Falchion",
      precio: 350.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Azul y Blanco",
      imagen: "https://ejemplo.com/falchion-onda-choque.jpg"
    },
    {
      nombre: "Fénix",
      modelo: "AWP",
      precio: 280.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Rojo y Naranja",
      imagen: "https://ejemplo.com/awp-fenix.jpg"
    },
    {
      nombre: "Cibernético",
      modelo: "M4A1-S",
      precio: 85.00,
      estado: "Poco usado",
      disponibilidad: 2,
      rareza: "Común",
      color: "Verde y Negro",
      imagen: "https://ejemplo.com/m4a1s-cibernetico.jpg"
    },
    {
      nombre: "Mármol Fade",
      modelo: "Cuchillo Talón",
      precio: 700.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Multicolor",
      imagen: "https://ejemplo.com/talon-marmol-fade.jpg"
    },
    {
      nombre: "Tejedor de Dragones",
      modelo: "Guantes",
      precio: 1200.00,
      estado: "Poco usado",
      disponibilidad: 1,
      rareza: "Épico",
      color: "Rojo y Negro",
      imagen: "https://ejemplo.com/guantes-tejedor-dragones.jpg"
    },
    {
      nombre: "Vulcan",
      modelo: "AK-47",
      precio: 200.00,
      estado: "Bastante usado",
      disponibilidad: 0,
      rareza: "Poco común",
      color: "Azul y Blanco",
      imagen: "https://ejemplo.com/ak47-vulcan.jpg"
    },
    {
      nombre: "Caza Nocturna",
      modelo: "Cuchillo Bowie",
      precio: 380.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Negro y Verde",
      imagen: "https://ejemplo.com/bowie-caza-nocturna.jpg"
    },
    {
      nombre: "Puño de Sangre",
      modelo: "Guantes",
      precio: 900.00,
      estado: "Poco usado",
      disponibilidad: 1,
      rareza: "Épico",
      color: "Rojo y Negro",
      imagen: "https://ejemplo.com/guantes-puno-sangre.jpg"
    },
    {
      nombre: "Fuego Oceánico",
      modelo: "P2000",
      precio: 40.00,
      estado: "Bastante usado",
      disponibilidad: 0,
      rareza: "Poco común",
      color: "Azul y Naranja",
      imagen: "https://ejemplo.com/p2000-fuego-oceanico.jpg"
    },
    {
      nombre: "Mármol Fade",
      modelo: "Cuchillo Ursus",
      precio: 550.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Multicolor",
      imagen: "https://ejemplo.com/ursus-marmol-fade.jpg"
    },
    {
      nombre: "Dragón Lore",
      modelo: "AWP",
      precio: 2500.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Épico",
      color: "Dorado y Negro",
      imagen: "https://ejemplo.com/awp-dragon-lore.jpg"
    },
    {
      nombre: "Zancudo",
      modelo: "M4A4",
      precio: 100.00,
      estado: "Poco usado",
      disponibilidad: 2,
      rareza: "Común",
      color: "Verde y Negro",
      imagen: "https://ejemplo.com/m4a4-zancudo.jpg"
    },
    {
      nombre: "Onda de Choque",
      modelo: "Cuchillo Navaja",
      precio: 420.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Azul y Blanco",
      imagen: "https://ejemplo.com/navaja-onda-choque.jpg"
    },
    {
      nombre: "Rey del Pantano",
      modelo: "Guantes",
      precio: 850.00,
      estado: "Poco usado",
      disponibilidad: 1,
      rareza: "Épico",
      color: "Verde y Marrón",
      imagen: "https://ejemplo.com/guantes-rey-pantano.jpg"
    },
    {
      nombre: "Jaguar",
      modelo: "AK-47",
      precio: 180.00,
      estado: "Bastante usado",
      disponibilidad: 0,
      rareza: "Poco común",
      color: "Naranja y Negro",
      imagen: "https://ejemplo.com/ak47-jaguar.jpg"
    },
    {
      nombre: "Mármol Fade",
      modelo: "Cuchillo Shadow Daggers",
      precio: 480.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Multicolor",
      imagen: "https://ejemplo.com/shadow-daggers-marmol-fade.jpg"
    },
    {
      nombre: "Hipnotico",
      modelo: "Desert Eagle",
      precio: 60.00,
      estado: "Poco usado",
      disponibilidad: 2,
      rareza: "Común",
      color: "Azul y Morado",
      imagen: "https://ejemplo.com/deagle-hipnotico.jpg"
    },
    {
      nombre: "Cazador Nocturno",
      modelo: "Cuchillo Nomad",
      precio: 600.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Negro y Verde",
      imagen: "https://ejemplo.com/nomad-cazador-nocturno.jpg"
    },
    {
      nombre: "Espectro Lunar",
      modelo: "Guantes",
      precio: 1300.00,
      estado: "Poco usado",
      disponibilidad: 1,
      rareza: "Épico",
      color: "Azul y Plateado",
      imagen: "https://ejemplo.com/guantes-espectro-lunar.jpg"
    },
    {
      nombre: "Océano",
      modelo: "AWP",
      precio: 220.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Azul y Blanco",
      imagen: "https://ejemplo.com/awp-oceano.jpg"
    },
    {
      nombre: "Imán",
      modelo: "M4A1-S",
      precio: 75.00,
      estado: "Poco usado",
      disponibilidad: 2,
      rareza: "Común",
      color: "Negro y Azul",
      imagen: "https://ejemplo.com/m4a1s-iman.jpg"
    },
    {
      nombre: "Mármol Fade",
      modelo: "Cuchillo Skeleton",
      precio: 650.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Multicolor",
      imagen: "https://ejemplo.com/skeleton-marmol-fade.jpg"
    },
    {
      nombre: "Dragón de Hielo",
      modelo: "Guantes",
      precio: 1400.00,
      estado: "Poco usado",
      disponibilidad: 1,
      rareza: "Épico",
      color: "Azul y Blanco",
      imagen: "https://ejemplo.com/guantes-dragon-hielo.jpg"
    },
    {
      nombre: "Punto de Mira",
      modelo: "AK-47",
      precio: 150.00,
      estado: "Bastante usado",
      disponibilidad: 0,
      rareza: "Poco común",
      color: "Rojo y Negro",
      imagen: "https://ejemplo.com/ak47-punto-mira.jpg"
    },
    {
      nombre: "Onda de Choque",
      modelo: "Cuchillo Survival",
      precio: 400.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Azul y Blanco",
      imagen: "https://ejemplo.com/survival-onda-choque.jpg"
    },
    {
      nombre: "Rey del Pantano",
      modelo: "M4A4",
      precio: 120.00,
      estado: "Poco usado",
      disponibilidad: 1,
      rareza: "Común",
      color: "Verde y Marrón",
      imagen: "https://ejemplo.com/m4a4-rey-pantano.jpg"
    }
  ]


  constructor() {
    this.getAllProducts();
  }
  getAllProducts() {
    return this.productList;
  }

}
