import React from 'react';
import MenuLateral from './Menu.jsx';
import Header from './Header.jsx';
import '../Style/Principal.css';
import PrincipalBienvenida from '../Img/Principal.png'
import { FaUsers, FaHandshake, FaRegNewspaper } from 'react-icons/fa';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const datosSimulados = [
  { nombre: 'Lunes', usuarios: 4, prestamos: 2 },
  { nombre: 'Martes', usuarios: 10, prestamos: 5 },
  { nombre: 'Miércoles', usuarios: 8, prestamos: 15 },
  { nombre: 'Jueves', usuarios: 15, prestamos: 10 },
  { nombre: 'Viernes', usuarios: 20, prestamos: 12 },
  { nombre: 'Sábado', usuarios: 5, prestamos: 4 },
  { nombre: 'Domingo', usuarios: 2, prestamos: 1 },
];


function Principal() {
  return (
    <div className="Layout_Admin">
      <MenuLateral />

      <div className="Contenedor_Derecho">
        <Header />
        
        <div className="Zona_De_Trabajo">
          
          <div className="Banner_Bienvenida">
            <div className="Texto_Banner">
              <h1>Bienvenido, Administrador SENA </h1>
              <p>Desde este aplicativo puedes:</p>
              <p className="Subtexto">Admitir usuarios, aprobar y liberar Carnés, publicar contenido y administrar material de préstamo junto a sus solicitudes.</p>
            </div>
            <div className="Imagen_Banner">
           
              <img src={PrincipalBienvenida} alt="Ilustración" />
            </div>
          </div>


          <div className="Seccion_Cards">
            <div className="Card_Estadistica">
              <div className="Icono_Circulo verde"><FaUsers /></div>
              <div className="Info_Card">
                <span>Total de usuarios</span>
                <strong>26</strong>
              </div>
            </div>

            <div className="Card_Estadistica">
              <div className="Icono_Circulo"><FaHandshake /></div>
              <div className="Info_Card">
                <span>Préstamos activos</span>
                <strong>12</strong>
              </div>
            </div>

            <div className="Card_Estadistica">
              <div className="Icono_Circulo"><FaRegNewspaper /></div>
              <div className="Info_Card">
                <span>Nuevas noticias</span>
                <strong>4</strong>
              </div>
            </div>
          </div>

 
          <div className="Contenedor_Grafico">
            <div className="Header_Grafico">
              <h3>Actividad de la Semana</h3>
              <span>Reporte de nuevos usuarios y préstamos realizados</span>
            </div>

            <div className="Area_Grafico" style={{ width: '100%', height: 350 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={datosSimulados} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>

                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  
                  <XAxis dataKey="nombre" axisLine={false} tickLine={false} tick={{fill: '#888', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#888', fontSize: 12}} />
                  
                  <Tooltip contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />

                  <Area 
                    type="monotone" 
                    dataKey="usuarios" 
                    stroke="#69b47a" 
                    fillOpacity={0.3} 
                    fill="#69b47a" 
                    strokeWidth={3} 
                  />

                  <Area 
                    type="monotone" 
                    dataKey="prestamos" 
                    stroke="#05924e" 
                    fillOpacity={0.1} 
                    fill="#05924e" 
                    strokeWidth={3} 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Principal;