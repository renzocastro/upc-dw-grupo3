import { Injectable } from '@angular/core';
import { EquipoData } from '../shared/equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getEquipo(): EquipoData[] {
    return [
      {
        name: 'Walter White',
        job: 'Director • Psicólogo Psicoterapeuta',
        specialty: 'Jóvenes / Adultos',
        description: 'Ansiedad, estrés, manejo de la ira, procrastinación, TOC, terapia de pareja, manejo de duelo, conflictos interpersonales.',
        photo: 'assets/img/doctors/doctors-1.jpg'
      },
      {
        name: 'Sarah Jhonson',
        job: 'Codirectora • Psicóloga Psicoterapeuta',
        specialty: 'Adolescentes / Jóvenes / Adultos',
        description: 'Ansiedad, depresión, duelo, estrés postraumático, crisis, TOC, trastornos de conducta alimentaria.',
        photo: 'assets/img/doctors/doctors-2.jpg'
      },
      {
        name: 'William Anderson',
        job: 'Codirector • Psicólogo Psicoterapeuta',
        specialty: 'Adolescentes / Jóvenes / Adultos',
        description: 'Ansiedad, depresión, duelo, trastorno de personalidad (límite, evitativo), terapia de pareja y dificultades familiares.',
        photo: 'assets/img/doctors/doctors-3.jpg'
      },
      {
        name: 'Amanda Jepson',
        job: 'Psicóloga Psicoterapeuta',
        specialty: 'Niños / Adolescentes / Adultos',
        description: 'Ansiedad, depresión, separación / divorcio, problemas de conducta, habilidades sociales, orientación vocacional y TDAH.',
        photo: 'assets/img/doctors/doctors-4.jpg'
      },
      {
        name: 'Silvana Solari Soto',
        job: 'Médico Psiquiatra',
        specialty: 'Niños / Adolescentes / Adultos',
        description: 'Atención psiquiátrica.',
        photo: 'assets/img/doctors/doctors-5.jpg'
      },
      {
        name: 'Catalina Pérez Guerrero',
        job: 'Psicóloga psicoterapeuta y especialista en Lenguaje y Aprendizaje',
        specialty: 'Jóvenes / Adultos / Adultos Mayores',
        description: 'Evaluación y terapia de Ansiedad, estrés, depresión, dependencia emocional, duelo, evaluación de problemas de aprendizaje. Ansiedad y depresión.',
        photo: 'assets/img/doctors/doctors-6.jpg'
      }
    ];
  }

  getTestimonios() {
    return [
      {
        name: 'Ericka Castillo',
        message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quibusdam quam facilis sed explicabo eaque nostrum, tenetur architecto, quia ex labore amet id, ipsa laudantium maxime quis iusto quod impedit?',
        photo: 'assets/img/testimonials/testimonials-1.jpg'
      },
      {
        name: 'sit amet',
        message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quibusdam quam facilis sed explicabo eaque nostrum, tenetur architecto, quia ex labore amet id, ipsa laudantium maxime quis iusto quod impedit?',
        photo: 'assets/img/testimonials/testimonials-2.jpg'
      },
      {
        name: 'sit amet',
        message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quibusdam quam facilis sed explicabo eaque nostrum, tenetur architecto, quia ex labore amet id, ipsa laudantium maxime quis iusto quod impedit?',
        photo: 'assets/img/testimonials/testimonials-3.jpg'
      },
      {
        name: 'sit amet',
        message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quibusdam quam facilis sed explicabo eaque nostrum, tenetur architecto, quia ex labore amet id, ipsa laudantium maxime quis iusto quod impedit?',
        photo: 'assets/img/testimonials/testimonials-4.jpg'
      },
      {
        name: 'sit amet',
        message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quibusdam quam facilis sed explicabo eaque nostrum, tenetur architecto, quia ex labore amet id, ipsa laudantium maxime quis iusto quod impedit?',
        photo: 'assets/img/testimonials/testimonials-3.jpg'
      },
      {
        name: 'sit amet',
        message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quibusdam quam facilis sed explicabo eaque nostrum, tenetur architecto, quia ex labore amet id, ipsa laudantium maxime quis iusto quod impedit?',
        photo: 'assets/img/testimonials/testimonials-4.jpg'
      }
    ];
  }
}
