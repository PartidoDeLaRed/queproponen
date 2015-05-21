-- phpMyAdmin SQL Dump
-- version 4.0.8
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 20-05-2015 a las 19:36:42
-- Versión del servidor: 5.1.73
-- Versión de PHP: 5.2.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `pz000328_queproponen`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbCandidatos`
--

CREATE TABLE IF NOT EXISTS `tbCandidatos` (
  `candID` int(11) NOT NULL,
  `candNombre` varchar(100) NOT NULL,
  `candLista` varchar(100) NOT NULL,
  `candImagen` varchar(200) NOT NULL,
  `candTwitter` varchar(50) NOT NULL,
  `partID` int(11) NOT NULL,
  `candPASO` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`candID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbCategorias`
--

CREATE TABLE IF NOT EXISTS `tbCategorias` (
  `catID` int(11) NOT NULL,
  `catNombre` varchar(50) NOT NULL,
  `catAbreviatura` varchar(20) NOT NULL,
  `catColor` varchar(10) NOT NULL,
  `catImagen` varchar(200) NOT NULL,
  `catOrden` int(11) NOT NULL,
  PRIMARY KEY (`catID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tbCategorias`
--

INSERT INTO `tbCategorias` (`catID`, `catNombre`, `catAbreviatura`, `catColor`, `catImagen`, `catOrden`) VALUES
(7, 'Transporte', 'Transporte', '#BC92E7', 'transporte.png', 10),
(6, 'Economía', 'Economía', '#90E5BA', 'economia.png', 7),
(5, 'Planeamiento Urbano', 'P. Urbano', '#D8AD83', 'planeamientoUrbano.png', 4),
(4, 'Derechos Humanos', 'D. Humanos', '#443868', 'derechosHumanos.png', 11),
(3, 'Seguridad', 'Seguridad', '#F6F6A1', 'seguridad.png', 5),
(2, 'Sociedad', 'Sociedad', '#FF7F88', 'sociedad.png', 2),
(1, 'Educación', 'Educación', '#7FAAFF', 'educacion.png', 9),
(0, 'Salud', 'Salud', '#FF7FD4', 'salud.png', 0),
(8, 'Internacional', 'Inter.', '#55D4FF', 'internacional.png', 8),
(9, 'Institucional', 'Institu.', '#FFAA7F', 'institucional.png', 3),
(10, 'Medio Ambiente', 'M. Ambiente', '#97EC97', 'medioAmbiente.png', 6),
(11, 'Vivienda', 'Vivienda', '#EE446F', 'vivienda.png', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbDatos`
--

CREATE TABLE IF NOT EXISTS `tbDatos` (
  `datID` int(11) NOT NULL,
  `datCiudad` varchar(100) DEFAULT NULL,
  `datFacebook` varchar(100) DEFAULT NULL,
  `datTwitter` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`datID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tbDatos`
--

INSERT INTO `tbDatos` (`datID`, `datCiudad`, `datFacebook`, `datTwitter`) VALUES
(0, 'Ciudad', 'PartidoDeLaRed', 'PartidodelaRed');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbPartidos`
--

CREATE TABLE IF NOT EXISTS `tbPartidos` (
  `partID` int(11) NOT NULL,
  `partNombre` varchar(100) NOT NULL,
  `partImagen` varchar(200) NOT NULL,
  `partColor` varchar(10) NOT NULL,
  PRIMARY KEY (`partID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbPropuestas`
--

CREATE TABLE IF NOT EXISTS `tbPropuestas` (
  `propID` int(11) NOT NULL,
  `propTitulo` varchar(200) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `propTexto` text CHARACTER SET utf8 COLLATE utf8_spanish_ci,
  `propFuente` text CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `catID` int(11) NOT NULL,
  `partID` int(11) NOT NULL,
  `candID` int(11) NOT NULL,
  PRIMARY KEY (`propID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbUsuarios`
--

CREATE TABLE IF NOT EXISTS `tbUsuarios` (
  `usrID` int(11) NOT NULL,
  `usrName` varchar(100) NOT NULL,
  `usrUser` varchar(50) NOT NULL,
  `usrPass` varchar(50) NOT NULL,
  `usrMail` varchar(100) NOT NULL,
  `usrSistema` tinyint(1) NOT NULL DEFAULT '0',
  `hash` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`usrID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COMMENT='Usuario del sistema';

--
-- Volcado de datos para la tabla `tbUsuarios`
--

INSERT INTO `tbUsuarios` (`usrID`, `usrName`, `usrUser`, `usrPass`, `usrMail`, `usrSistema`, `hash`) VALUES
(0, 'Administrador', 'admin', '1234', '-', 1, NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
