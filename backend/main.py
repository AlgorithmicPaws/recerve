from fastapi import FastAPI, HTTPException, Depends, status
from pydantic import BaseModel
from typing import Annotated
import models
from database import engine, SessionLocal
from sqlalchemy.orm import Session

app = FastAPI()
models.Base.metadata.create_all(bind=engine)


class UsuarioBase(BaseModel):
    nombre: str
    email: str

class UsuarioCreate(UsuarioBase):
    contraseña: str
    tipo: str

class UsuarioInDB(UsuarioBase):
    id: int
    tipo: str

class ReservaCreate(BaseModel):
    cliente_id: int
    restaurante_id: int
    mesa_id: int
    horario_id: int
    fecha_reserva: str

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

@app.post("/usuarios/", status_code=status.HTTP_201_CREATED)
async def create_user(usuario: UsuarioCreate, db: db_dependency):
    db_user = models.Usuario(**usuario.dict())
    db.add(db_user)
    db.commit()
