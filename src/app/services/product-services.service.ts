import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: Product[] = [
    {
      name: "Muerte Fría",
      model: "P90",
      price: 30.00,
      condition: "Poco usado",
      availability: 3,
      rarity: "Común",
      color: ["Rojo", "Negro"],
      image: "p90/muertefria.png"
    },
    {
      name: "Cazador Nocturno",
      model: "Cuchillo Bayoneta",
      price: 500.00,
      condition: "Nuevo",
      availability: 0,
      rarity: "Raro",
      color: ["Azul"],
      image: "bayoneta/cazadornocturno.png"
    },
    {
      name: "Hidra",
      model: "Guantes",
      price: 1100.00,
      condition: "Poco usado",
      availability: 1,
      rarity: "Épico",
      color: ["Azul", "Dorado"],
      image: "guantes/hidra.png"
    },
    {
      name: "Agua Viva",
      model: "Glock-18",
      price: 25.00,
      condition: "Bastante usado",
      availability: 0,
      rarity: "Poco común",
      color: ["Rojo", "Azul"],
      image: "glock18/aguaviva.png"
    },
    {
      name: "Onda de Choque",
      model: "Cuchillo Falchion",
      price: 350.00,
      condition: "Nuevo",
      availability: 0,
      rarity: "Raro",
      color: ["Multicolor"],
      image: "falchion/ondadechoque.png"
    },
    {
      name: "Fénix",
      model: "AWP",
      price: 280.00,
      condition: "Nuevo",
      availability: 0,
      rarity: "Raro",
      color: ["Rojo", "Dorado"],
      image: "awp/fenix.png"
    },
    {
      name: "Cibernético",
      model: "M4A1-S",
      price: 85.00,
      condition: "Poco usado",
      availability: 2,
      rarity: "Común",
      color: ["Azul"],
      image: "m4a1s/cibernetico.png"
    },
    {
      name: "Mármol Fade",
      model: "Cuchillo Talón",
      price: 700.00,
      condition: "Nuevo",
      availability: 0,
      rarity: "Raro",
      color: ["Multicolor"],
      image: "talon/marmolfade.png"
    },
    {
      name: "Tejedor de Dragones",
      model: "Guantes",
      price: 1200.00,
      condition: "Poco usado",
      availability: 1,
      rarity: "Épico",
      color: ["Rosa", "Azul"],
      image: "guantes/tejedordedragones.png"
    },
    {
      name: "Vulcan",
      model: "AK-47",
      price: 200.00,
      condition: "Bastante usado",
      availability: 0,
      rarity: "Poco común",
      color: ["Negro", "Blanco"],
      image: "ak47/vulkan.png"
    },
    {
      name: "Caza Nocturna",
      model: "Cuchillo Bowie",
      price: 380.00,
      condition: "Nuevo",
      availability: 0,
      rarity: "Raro",
      color: ["Azul"],
      image: "bowie/cazanocturna.png"
    },
    {
      name: "Puño de Sangre",
      model: "Guantes",
      price: 900.00,
      condition: "Poco usado",
      availability: 1,
      rarity: "Épico",
      color: ["Rojo"],
      image: "guantes/punodesangre.png"
    },
    {
      name: "Fuego Oceánico",
      model: "P2000",
      price: 40.00,
      condition: "Bastante usado",
      availability: 0,
      rarity: "Poco común",
      color: ["Multicolor"],
      image: "m4a1s/fuegooceanico.png"
    },
    {
      name: "Mármol Fade",
      model: "Cuchillo Ursus",
      price: 550.00,
      condition: "Nuevo",
      availability: 0,
      rarity: "Raro",
      color: ["Multicolor"],
      image: "ursus/marmolfade.png"
    },
    {
      name: "Dragón Lore",
      model: "AWP",
      price: 2500.00,
      condition: "Nuevo",
      availability: 0,
      rarity: "Épico",
      color: ["Dorado", "Naranja"],
      image: "awp/dragonlore.png"
    },
    {
      name: "Zancudo",
      model: "M4A4",
      price: 100.00,
      condition: "Poco usado",
      availability: 2,
      rarity: "Común",
      color: ["Naranja", "Negro"],
      image: "m4a4/zancudo.png"
    },
    {
      name: "Onda de Choque",
      model: "Cuchillo Navaja",
      price: 420.00,
      condition: "Nuevo",
      availability: 0,
      rarity: "Raro",
      color: ["Multicolor"],
      image: "navaja/ondadechoque.png"
    },
    {
      name: "Rey del Pantano",
      model: "Guantes",
      price: 850.00,
      condition: "Poco usado",
      availability: 1,
      rarity: "Épico",
      color: ["Blanco"],
      image: "guantes/reydelpantano.png"
    },
    {
      name: "Jaguar",
      model: "AK-47",
      price: 180.00,
      condition: "Bastante usado",
      availability: 0,
      rarity: "Poco común",
      color: ["Naranja", "Negro"],
      image: "ak47/jaguar.png"
    },
    {
      name: "Mármol Fade",
      model: "Cuchillo Shadow Daggers",
      price: 480.00,
      condition: "Nuevo",
      availability: 0,
      rarity: "Raro",
      color: ["Multicolor"],
      image: "shadowdaggers/marmolfade.png"
    },
    {
      name: "Hipnótico",
      model: "Desert Eagle",
      price: 60.00,
      condition: "Poco usado",
      availability: 2,
      rarity: "Común",
      color: ["Multicolor"],
      image: "deserteagle/hipnotico.png"
    },
    {
      name: "Cazador Nocturno",
      model: "Cuchillo Nomad",
      price: 600.00,
      condition: "Nuevo",
      availability: 0,
      rarity: "Raro",
      color: ["Negro"],
      image: "nomad/cazadornocturno.png"
    },
    {
      name: "Espectro Lunar",
      model: "Guantes",
      price: 1300.00,
      condition: "Poco usado",
      availability: 1,
      rarity: "Épico",
      color: ["Verde"],
      image: "guantes/espectrolunar.png"
    },
    {
      name: "Océano",
      model: "AWP",
      price: 220.00,
      condition: "Nuevo",
      availability: 0,
      rarity: "Raro",
      color: ["Blanco", "Azul"],
      image: "awp/oceano.png"
    }
  ];
  constructor() {
    this.getAllProducts();
  }

  getAllProducts() {
    return this.productList;
  }

  getCondition() {
    return [... new Set(this.productList.map(product => product.condition))]
  }

  getColors() {
    return [... new Set(this.productList.flatMap(product => product.color))]
  }

}
