const candidatos = {
  template: `<div class="d-flex flex-wrap pb-5 candidatos-container">
  <div v-for="candidato in candidatos" class="card" style="width: 18rem;">
  <img :src="candidato.src" class="card-img-top" :alt="candidato.nombre">
  <div class="card-body" :class="candidato.estilo">
    <label :for="candidato.id" class="card-text">{{candidato.nombre}}</label>
    <h4 class="card-text">{{candidato.partido}}</h4>
    <input type="radio" :id="candidato.id" name="candidato" :value="candidato.id" :checked="candidato.checked" />
  </div>
</div>

  `,

  data() {
    return {
      candidatos: [
        {
          id: 1,
          nombre: "Alberto Fernandez",
          partido: "Frente de Todos",
          src: "img/Alberto.jpg",
          estilo: "alberto",
          checked: "true",
        },
        {
          id: 2,
          nombre: "Mauricio Macri",
          partido: "Juntos por el Cambio",
          src: "img/macri.jpg",
          estilo: "mauricio",
        },
        {
          id: 3,
          nombre: "Roberto Lavagna",
          partido: "Consenso Federal",
          src: "img/lavagna.jpg",
          estilo: "roberto",
        },
        {
          id: 4,
          nombre: "Nicolás del Caño",
          partido: "Frente de Izquierda",
          src: "img/nico.jpg",
          estilo: "nicolas",
        },
        {
          id: 5,
          nombre: "Juan José Gomez Centurión",
          partido: "Frente NOS",
          src: "img/centurion.jpg",
          estilo: "juan",
        },
        {
          id: 6,
          nombre: "José Luis Espert",
          partido: "Unite por la Libertad ",
          src: "img/espert.jpg",
          estilo: "jose",
        },
      ],
    };
  },
};

const provincias = {
  template: `<select id="provincia">
    <option v-for="provincia in provincias" :value="provincia.provincia">{{provincia.provincia}}</option>
    </select>
    `,

  data() {
    return {
      provincias: [
        { provincia: "Buenos Aires" },
        { provincia: "Ciudad de Buenos Aires" },
        { provincia: "Catamarca" },
        { provincia: "Chaco" },
        { provincia: "Chubut" },
        { provincia: "Córdoba" },
        { provincia: "Corrientes" },
        { provincia: "Entre Ríos" },
        { provincia: "Formosa" },
        { provincia: "Jujuy" },
        { provincia: "La Pampa" },
        { provincia: "La Rioja" },
        { provincia: "Mendoza" },
        { provincia: "Misiones" },
        { provincia: "Neuquén" },
        { provincia: "Río Negro" },
        { provincia: "Salta" },
        { provincia: "San Juan" },
        { provincia: "San Luis" },
        { provincia: "Santa Cruz" },
        { provincia: "Santa Fe" },
        { provincia: "Santiago del Estero" },
        { provincia: "Tierra del Fuego" },
        { provincia: "Tucumán" },
      ],
    };
  },
};

const personales = {
  template: `
  <p class="saludo">{{saludo}}, {{nombre | capitalizar}} {{apellido | capitalizar}}.<br> Gracias por participar en nuestra encuesta. En esta sección, te preguntaremos por tu voto en las últimas elecciones presidenciales</p>
  `,
  filters: {
    capitalizar(value) {
      return value.replace(/\b\w/g, function (l) {
        return l.toUpperCase();
      });
    },
  },
  props: ["saludo", "nombre", "apellido"],
};

const app = new Vue({
  el: "#app",

  components: {
    provincias,
    personales,
    candidatos,
  },
  methods: {
    eliminarNumerosNombre(event) {
      const sinNumeros = event.target.value.replace(
        /[^a-zA-ZáéíóúÁÉÍÓÚ\s]/g,
        ""
      );
      this.nombre = sinNumeros;
    },
    eliminarNumerosApellido(event) {
      const sinNumeros = event.target.value.replace(
        /[^a-zA-ZáéíóúÁÉÍÓÚ\s]/g,
        ""
      );
      this.apellido = sinNumeros;
    },
    actualizarEdad() {
      if (this.edad < this.edadMinima || this.edad > this.edadMaxima) {
        this.edadValida = false;
      } else {
        this.edadValida = true;
      }
    },
  },

  data() {
    return {
      edad: null,
      edadMinima: 16,
      edadMaxima: 60,
      nombre: "",
      apellido: "",
      terminos: false,
      isChecked: null,
      disabled: true,
      edadValida: true,
    };
  },
});
