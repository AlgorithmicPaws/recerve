from sqlalchemy import Table, Column, Integer, String, ForeignKey, Enum, Time, Date
from database import Base

# Tabla de Usuarios
class Usuario(Base):
    __tablename__ = 'Usuario'
    
    id = Column(Integer, primary_key=True)
    nombre = Column(String(100), nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    contraseña = Column(String(255), nullable=False)
    tipo = Column(Enum("cliente", "administrador"), nullable=False)

# Tabla de Clientes
class Cliente(Base):
    __tablename__ = 'Cliente'
    
    id = Column(Integer, ForeignKey("Usuario.id"), primary_key=True)

# Tabla de Administradores
class Administrador(Base):
    __tablename__ = 'Administrador'
    
    id = Column(Integer, ForeignKey("Usuario.id"), primary_key=True)

# Tabla de Restaurantes
class Restaurante(Base):
    __tablename__ = 'Restaurante'
    
    id = Column(Integer, primary_key=True)
    nombre = Column(String(100), nullable=False)
    direccion = Column(String(255), nullable=False)

# Tabla de Mesas
class Mesa(Base):
    __tablename__ = 'Mesa'
    
    id = Column(Integer, primary_key=True)
    restaurante_id = Column(Integer, ForeignKey("Restaurante.id"), nullable=False)
    capacidad = Column(Integer, nullable=False)
    estado = Column(Enum("Disponible", "Reservada"), default="Disponible")

# Tabla de Horarios
class Horario(Base):
    __tablename__ = 'Horario'
    
    id = Column(Integer, primary_key=True)
    restaurante_id = Column(Integer, ForeignKey("Restaurante.id"), nullable=False)
    dia = Column(String(10), nullable=False)
    hora_inicio = Column(Time, nullable=False)
    hora_fin = Column(Time, nullable=False)

# Tabla de Reservas
class Reserva(Base):
    __tablename__ = 'Reserva'
    
    id = Column(Integer, primary_key=True)
    cliente_id = Column(Integer, ForeignKey("Cliente.id"), nullable=False)
    restaurante_id = Column(Integer, ForeignKey("Restaurante.id"), nullable=False)
    mesa_id = Column(Integer, ForeignKey("Mesa.id"), nullable=False)
    horario_id = Column(Integer, ForeignKey("Horario.id"), nullable=False)
    fecha_reserva = Column(Date, nullable=False)
    estado = Column(Enum("Confirmada", "Cancelada"), default="Confirmada")
