import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: Product[] = [
    {
      nombre: "Cuchillo Karambit | Mármol Fade",
      precio: 450.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Multicolor",
      imagen: "https://ejemplo.com/karambit-marmol-fade.jpg"
    },
    {
      nombre: "Guantes | Espectro",
      precio: 800.00,
      estado: "Poco usado",
      disponibilidad: 1,
      rareza: "Épico",
      color: "Morado y Negro",
      imagen: "https://ejemplo.com/guantes-espectro.jpg"
    },
    {
      nombre: "AK-47 | Fuego Elemental",
      precio: 120.00,
      estado: "Bastante usado",
      disponibilidad: 0,
      rareza: "Poco común",
      color: "Rojo y Naranja",
      imagen: "https://ejemplo.com/ak47-fuego-elemental.jpg"
    },
    {
      nombre: "AWP | Relámpago",
      precio: 300.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Amarillo y Azul",
      imagen: "https://ejemplo.com/awp-relampago.jpg"
    },
    {
      nombre: "M4A4 | Rey Neón",
      precio: 90.00,
      estado: "Poco usado",
      disponibilidad: 2,
      rareza: "Común",
      color: "Rosa y Azul",
      imagen: "https://ejemplo.com/m4a4-rey-neon.jpg"
    },
    {
      nombre: "Cuchillo Mariposa | Onda de Choque",
      precio: 600.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Azul y Blanco",
      imagen: "https://ejemplo.com/mariposa-onda-choque.jpg"
    },
    {
      nombre: "Guantes | Dragón Lunar",
      precio: 950.00,
      estado: "Poco usado",
      disponibilidad: 1,
      rareza: "Épico",
      color: "Rojo y Dorado",
      imagen: "https://ejemplo.com/guantes-dragon-lunar.jpg"
    },
    {
      nombre: "USP-S | Caimán",
      precio: 50.00,
      estado: "Bastante usado",
      disponibilidad: 0,
      rareza: "Poco común",
      color: "Verde y Marrón",
      imagen: "https://ejemplo.com/usps-caiman.jpg"
    },
    {
      nombre: "Desert Eagle | Llama Cósmica",
      precio: 70.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Morado y Rosa",
      imagen: "https://ejemplo.com/deagle-llama-cosmica.jpg"
    },
    {
      nombre: "Cuchillo Navaja | Tigre",
      precio: 400.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Naranja y Negro",
      imagen: "https://ejemplo.com/navaja-tigre.jpg"
    },
    {
      nombre: "P90 | Muerte Fría",
      precio: 30.00,
      estado: "Poco usado",
      disponibilidad: 3,
      rareza: "Común",
      color: "Azul y Blanco",
      imagen: "https://ejemplo.com/p90-muerte-fria.jpg"
    },
    {
      nombre: "Cuchillo Bayoneta | Cazador Nocturno",
      precio: 500.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Negro y Verde",
      imagen: "https://ejemplo.com/bayoneta-cazador-nocturno.jpg"
    },
    {
      nombre: "Guantes | Hidra",
      precio: 1100.00,
      estado: "Poco usado",
      disponibilidad: 1,
      rareza: "Épico",
      color: "Verde y Negro",
      imagen: "https://ejemplo.com/guantes-hidra.jpg"
    },
    {
      nombre: "Glock-18 | Agua Viva",
      precio: 25.00,
      estado: "Bastante usado",
      disponibilidad: 0,
      rareza: "Poco común",
      color: "Rosa y Morado",
      imagen: "https://ejemplo.com/glock-agua-viva.jpg"
    },
    {
      nombre: "Cuchillo Falchion | Onda de Choque",
      precio: 350.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Azul y Blanco",
      imagen: "https://ejemplo.com/falchion-onda-choque.jpg"
    },
    {
      nombre: "AWP | Fénix",
      precio: 280.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Rojo y Naranja",
      imagen: "https://ejemplo.com/awp-fenix.jpg"
    },
    {
      nombre: "M4A1-S | Cibernético",
      precio: 85.00,
      estado: "Poco usado",
      disponibilidad: 2,
      rareza: "Común",
      color: "Verde y Negro",
      imagen: "https://ejemplo.com/m4a1s-cibernetico.jpg"
    },
    {
      nombre: "Cuchillo Talón | Mármol Fade",
      precio: 700.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Multicolor",
      imagen: "https://ejemplo.com/talon-marmol-fade.jpg"
    },
    {
      nombre: "Guantes | Tejedor de Dragones",
      precio: 1200.00,
      estado: "Poco usado",
      disponibilidad: 1,
      rareza: "Épico",
      color: "Rojo y Negro",
      imagen: "https://ejemplo.com/guantes-tejedor-dragones.jpg"
    },
    {
      nombre: "AK-47 | Vulcan",
      precio: 200.00,
      estado: "Bastante usado",
      disponibilidad: 0,
      rareza: "Poco común",
      color: "Azul y Blanco",
      imagen: "https://ejemplo.com/ak47-vulcan.jpg"
    },
    {
      nombre: "Cuchillo Bowie | Caza Nocturna",
      precio: 380.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Negro y Verde",
      imagen: "https://ejemplo.com/bowie-caza-nocturna.jpg"
    },
    {
      nombre: "Guantes | Puño de Sangre",
      precio: 900.00,
      estado: "Poco usado",
      disponibilidad: 1,
      rareza: "Épico",
      color: "Rojo y Negro",
      imagen: "https://ejemplo.com/guantes-puno-sangre.jpg"
    },
    {
      nombre: "P2000 | Fuego Oceánico",
      precio: 40.00,
      estado: "Bastante usado",
      disponibilidad: 0,
      rareza: "Poco común",
      color: "Azul y Naranja",
      imagen: "https://ejemplo.com/p2000-fuego-oceanico.jpg"
    },
    {
      nombre: "Cuchillo Ursus | Mármol Fade",
      precio: 550.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Multicolor",
      imagen: "https://ejemplo.com/ursus-marmol-fade.jpg"
    },
    {
      nombre: "AWP | Dragón Lore",
      precio: 2500.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Épico",
      color: "Dorado y Negro",
      imagen: "https://ejemplo.com/awp-dragon-lore.jpg"
    },
    {
      nombre: "M4A4 | Zancudo",
      precio: 100.00,
      estado: "Poco usado",
      disponibilidad: 2,
      rareza: "Común",
      color: "Verde y Negro",
      imagen: "https://ejemplo.com/m4a4-zancudo.jpg"
    },
    {
      nombre: "Cuchillo Navaja | Onda de Choque",
      precio: 420.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Azul y Blanco",
      imagen: "https://ejemplo.com/navaja-onda-choque.jpg"
    },
    {
      nombre: "Guantes | Rey del Pantano",
      precio: 850.00,
      estado: "Poco usado",
      disponibilidad: 1,
      rareza: "Épico",
      color: "Verde y Marrón",
      imagen: "https://ejemplo.com/guantes-rey-pantano.jpg"
    },
    {
      nombre: "AK-47 | Jaguar",
      precio: 180.00,
      estado: "Bastante usado",
      disponibilidad: 0,
      rareza: "Poco común",
      color: "Naranja y Negro",
      imagen: "https://ejemplo.com/ak47-jaguar.jpg"
    },
    {
      nombre: "Cuchillo Shadow Daggers | Mármol Fade",
      precio: 480.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Multicolor",
      imagen: "https://ejemplo.com/shadow-daggers-marmol-fade.jpg"
    },
    {
      nombre: "Desert Eagle | Hipnotico",
      precio: 60.00,
      estado: "Poco usado",
      disponibilidad: 2,
      rareza: "Común",
      color: "Azul y Morado",
      imagen: "https://ejemplo.com/deagle-hipnotico.jpg"
    },
    {
      nombre: "Cuchillo Nomad | Cazador Nocturno",
      precio: 600.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Negro y Verde",
      imagen: "https://ejemplo.com/nomad-cazador-nocturno.jpg"
    },
    {
      nombre: "Guantes | Espectro Lunar",
      precio: 1300.00,
      estado: "Poco usado",
      disponibilidad: 1,
      rareza: "Épico",
      color: "Azul y Plateado",
      imagen: "https://ejemplo.com/guantes-espectro-lunar.jpg"
    },
    {
      nombre: "AWP | Océano",
      precio: 220.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Azul y Blanco",
      imagen: "https://ejemplo.com/awp-oceano.jpg"
    },
    {
      nombre: "M4A1-S | Imán",
      precio: 75.00,
      estado: "Poco usado",
      disponibilidad: 2,
      rareza: "Común",
      color: "Negro y Azul",
      imagen: "https://ejemplo.com/m4a1s-iman.jpg"
    },
    {
      nombre: "Cuchillo Skeleton | Mármol Fade",
      precio: 650.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Multicolor",
      imagen: "https://ejemplo.com/skeleton-marmol-fade.jpg"
    },
    {
      nombre: "Guantes | Dragón de Hielo",
      precio: 1400.00,
      estado: "Poco usado",
      disponibilidad: 1,
      rareza: "Épico",
      color: "Azul y Blanco",
      imagen: "https://ejemplo.com/guantes-dragon-hielo.jpg"
    },
    {
      nombre: "AK-47 | Punto de Mira",
      precio: 150.00,
      estado: "Bastante usado",
      disponibilidad: 0,
      rareza: "Poco común",
      color: "Rojo y Negro",
      imagen: "https://ejemplo.com/ak47-punto-mira.jpg"
    },
    {
      nombre: "Cuchillo Survival | Onda de Choque",
      precio: 400.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Azul y Blanco",
      imagen: "https://ejemplo.com/survival-onda-choque.jpg"
    },
    {
      nombre: "AWP | Cazador",
      precio: 260.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Verde y Marrón",
      imagen: "https://ejemplo.com/awp-cazador.jpg"
    },
    {
      nombre: "M4A4 | Desierto",
      precio: 80.00,
      estado: "Poco usado",
      disponibilidad: 2,
      rareza: "Común",
      color: "Beige y Marrón",
      imagen: "https://ejemplo.com/m4a4-desierto.jpg"
    },
    {
      nombre: "Cuchillo Classic | Mármol Fade",
      precio: 500.00,
      estado: "Nuevo",
      disponibilidad: 0,
      rareza: "Raro",
      color: "Multicolor",
      imagen: "https://ejemplo.com/classic-marmol-fade.jpg"
    }
  ]

  constructor() {
    this.getAllProducts();
  }
  getAllProducts() {
    return this.productList;
  }

}
