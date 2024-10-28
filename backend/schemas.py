# schemas.py
from pydantic import BaseModel
from typing import Optional

# Esquema para UsuarioBase
class UsuarioBase(BaseModel):
    nombre: str
    email: str

class UsuarioCreate(UsuarioBase):
    contraseña: str
    tipo: str

class UsuarioInDB(UsuarioBase):
    id: int
    tipo: str

# Esquema para Restaurante
class RestauranteCreate(BaseModel):
    nombre: str
    direccion: str

# Esquema para Mesa
class MesaCreate(BaseModel):
    restaurante_id: int
    capacidad: int
    estado: Optional[str] = "Disponible"

# Esquema para Horario
class HorarioCreate(BaseModel):
    restaurante_id: int
    dia: str
    hora_inicio: str
    hora_fin: str

# Esquema para Reserva
class ReservaCreate(BaseModel):
    cliente_id: int
    restaurante_id: int
    mesa_id: int
    horario_id: int
    fecha_reserva: str
