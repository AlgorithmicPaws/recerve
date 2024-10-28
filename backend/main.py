from fastapi import FastAPI, HTTPException, Depends, status
from pydantic import BaseModel
from typing import Annotated
import models
import schemas
from database import engine, SessionLocal
from sqlalchemy.orm import Session

app = FastAPI()
models.Base.metadata.create_all(bind=engine)

# Dependencia para obtener la sesión de la base de datos
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

# Endpoint para crear un usuario
@app.post("/usuarios/", status_code=status.HTTP_201_CREATED)
async def create_user(usuario: schemas.UsuarioCreate, db: db_dependency):
    db_user = models.Usuario(**usuario.dict(exclude={"tipo"}))
    db_user.tipo = usuario.tipo
    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    # Insertar en Cliente o Administrador según el tipo
    if usuario.tipo == "cliente":
        db_cliente = models.Cliente(id=db_user.id)
        db.add(db_cliente)
    elif usuario.tipo == "administrador":
        db_administrador = models.Administrador(id=db_user.id)
        db.add(db_administrador)

    db.commit()
    return db_user

# Endpoint para crear un restaurante
@app.post("/restaurantes/", status_code=status.HTTP_201_CREATED)
async def create_restaurante(restaurante: schemas.RestauranteCreate, db: db_dependency):
    db_restaurante = models.Restaurante(**restaurante.dict())
    db.add(db_restaurante)
    db.commit()
    db.refresh(db_restaurante)
    return db_restaurante

@app.post("/mesas/", status_code=status.HTTP_201_CREATED)
async def create_mesa(mesa: schemas.MesaCreate, db: db_dependency):
    db_mesa = models.Mesa(**mesa.dict())
    db.add(db_mesa)
    db.commit()
    db.refresh(db_mesa)
    return db_mesa

@app.post("/horarios/", status_code=status.HTTP_201_CREATED)
async def create_horario(horario: schemas.HorarioCreate, db: db_dependency):
    db_horario = models.Horario(
        restaurante_id=horario.restaurante_id,
        dia=horario.dia,
        hora_inicio=horario.hora_inicio,
        hora_fin=horario.hora_fin
    )
    db.add(db_horario)
    db.commit()
    db.refresh(db_horario)
    return db_horario

@app.post("/reservas/", status_code=status.HTTP_201_CREATED)
async def create_reserva(reserva: schemas.ReservaCreate, db: db_dependency):
    db_reserva = models.Reserva(**reserva.dict())
    db.add(db_reserva)
    db.commit()
    db.refresh(db_reserva)
    return db_reserva

