-- TABLA USUARIOS
-- public.usuarios definition

-- Drop table

-- DROP TABLE public.usuarios;

CREATE TABLE public.usuarios (
	"usuarioId" int4 NOT NULL GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE),
	nombre varchar NULL,
	email varchar NULL,
	"password" varchar NULL,
	perfil int4 NOT NULL DEFAULT 2,
	telefono int4 NULL,
	CONSTRAINT pk_usuarios PRIMARY KEY ("usuarioId")
);



-- TABLA VENTAS 
-- public.ventas definition

-- Drop table

-- DROP TABLE public.ventas;

CREATE TABLE public.ventas (
	id serial4 NOT NULL,
	userid int4 NOT NULL,
	category varchar NULL,
	description varchar NULL,
	brand varchar NULL,
	"size" varchar NULL,
	color varchar NULL,
	sex varchar NULL,
	img1 varchar NULL,
	img2 varchar NULL,
	img3 varchar NULL,
	img4 varchar NULL,
	"valid" bool NULL DEFAULT false
);


-- public.ventas foreign keys

ALTER TABLE public.ventas ADD CONSTRAINT ventas_fk FOREIGN KEY (userid) REFERENCES public.usuarios("usuarioId");