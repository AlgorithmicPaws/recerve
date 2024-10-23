-- Creación de la base de datos
CREATE DATABASE IF NOT EXISTS sistema_reservas;
USE sistema_reservas;

-- Tabla de Usuarios (Tabla base para Cliente y Administrador)
CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    contraseña VARCHAR(255) NOT NULL,
    tipo ENUM('cliente', 'administrador') NOT NULL
);

-- Tabla de Clientes (Extiende de Usuario)
CREATE TABLE Cliente (
    id INT PRIMARY KEY,
    FOREIGN KEY (id) REFERENCES Usuario(id)
);

-- Tabla de Administradores (Extiende de Usuario)
CREATE TABLE Administrador (
    id INT PRIMARY KEY,
    FOREIGN KEY (id) REFERENCES Usuario(id)
);

-- Tabla de Restaurantes
CREATE TABLE Restaurante (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    direccion VARCHAR(255) NOT NULL
);

-- Tabla de Mesas
CREATE TABLE Mesa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    restaurante_id INT NOT NULL,
    capacidad INT NOT NULL,
    estado ENUM('Disponible', 'Reservada') DEFAULT 'Disponible',
    FOREIGN KEY (restaurante_id) REFERENCES Restaurante(id)
);

-- Tabla de Horarios Disponibles
CREATE TABLE Horario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    restaurante_id INT NOT NULL,
    dia VARCHAR(10) NOT NULL, -- Ejemplo: Lunes, Martes, etc.
    hora_inicio TIME NOT NULL,
    hora_fin TIME NOT NULL,
    FOREIGN KEY (restaurante_id) REFERENCES Restaurante(id)
);

-- Tabla de Reservas
CREATE TABLE Reserva (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    restaurante_id INT NOT NULL,
    mesa_id INT NOT NULL,
    horario_id INT NOT NULL,
    fecha_reserva DATE NOT NULL,
    estado ENUM('Confirmada', 'Cancelada') DEFAULT 'Confirmada',
    FOREIGN KEY (cliente_id) REFERENCES Cliente(id),
    FOREIGN KEY (restaurante_id) REFERENCES Restaurante(id),
    FOREIGN KEY (mesa_id) REFERENCES Mesa(id),
    FOREIGN KEY (horario_id) REFERENCES Horario(id)
);