--
-- Estructura de tabla para la tabla `tbCandidatos`
--

CREATE TABLE IF NOT EXISTS `tbCandidatos` (
  `candID` int(11) NOT NULL,
  `candNombre` varchar(100) NOT NULL,
  `candLista` varchar(100) NOT NULL,
  `candImagen` varchar(200) NOT NULL,
  `candTwitter` varchar(50) NOT NULL,
  `carID` int(11) NOT NULL,
  `ciuID` int(11) NOT NULL DEFAULT '0',
  `partID` int(11) NOT NULL,
  `candPASO` tinyint(1) NOT NULL DEFAULT '0',
  `candBallotage` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`candID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbCargos`
--

CREATE TABLE IF NOT EXISTS `tbCargos` (
  `carID` int(11) NOT NULL,
  `carNombre` varchar(100) NOT NULL,
  PRIMARY KEY (`carID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tbCargos`
--

INSERT INTO `tbCargos` (`carID`, `carNombre`) VALUES
(0, 'Cargo de ejemplo');

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
(7, 'Transporte', 'Transporte', '#9B26AF', 'transporte.png', 12),
(6, 'Economía', 'Economía', '#4BAE4F', 'economia.png', 6),
(5, 'Agricultura, Ganadería y Pesca', 'Agricultura', '#009587', 'agricultura.png', 7),
(4, 'Justicia y Derechos Humanos', 'D. Humanos', '#FD3030', 'justicia.png', 1),
(3, 'Seguridad', 'Seguridad', '#FFEB3B', 'seguridad.png', 4),
(2, 'Desarrollo Social', 'D. Social', '#FF5722', 'desarrolloSocial.png', 2),
(1, 'Educación', 'Educación', '#5F7C8A', 'educacion.png', 14),
(0, 'Salud', 'Salud', '#E91E63', 'salud.png', 0),
(8, 'Política Exterior', 'P. Exterior', '#2196F3', 'politicaExterior.png', 9),
(9, 'Administración Pública', 'Adm. Pública', '#FF9800', 'administracionPublica.png', 3),
(10, 'Medio Ambiente', 'M. Ambiente', '#CCDB38', 'medioAmbiente.png', 5),
(11, 'Obras Públicas', 'Obras Públicas', '#785447', 'obrasPublicas.png', 13),
(12, 'Trabajo e Industria', 'Trabajo', '#00BBD3', 'trabajo.png', 8),
(13, 'Ciencia y Tecnología', 'Cs. y Tecnología', '#3F51B5', 'ciencia.png', 10),
(14, 'Cultura', 'Cultura', '#6639B6', 'cultura.png', 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbCiudades`
--

CREATE TABLE IF NOT EXISTS `tbCiudades` (
  `ciuID` int(11) NOT NULL,
  `ciuNombre` varchar(100) NOT NULL,
  `ciuFacebook` varchar(50) NOT NULL DEFAULT 'PartidoDeLaRed',
  `ciuTwitter` varchar(50) NOT NULL DEFAULT 'PartidodelaRed',
  PRIMARY KEY (`ciuID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tbCiudades`
--

INSERT INTO `tbCiudades` (`ciuID`, `ciuNombre`, `ciuFacebook`, `ciuTwitter`) VALUES
(0, 'Ciudad de Ejemplo', 'PartidoDeLaRed', 'PartidodelaRed');

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
(0, 'Lugar de Ejemplo', 'PartidoDeLaRed', 'PartidodelaRed');

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
  `propTitulo` text CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `propTexto` text CHARACTER SET utf8 COLLATE utf8_spanish_ci,
  `propFuente` text CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `catID` int(11) NOT NULL,
  `partID` int(11) NOT NULL,
  `candID` int(11) NOT NULL,
  PRIMARY KEY (`propID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbPropuestasCategorias`
--

CREATE TABLE IF NOT EXISTS `tbPropuestasCategorias` (
  `propID` int(11) NOT NULL,
  `catID` int(11) NOT NULL
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
