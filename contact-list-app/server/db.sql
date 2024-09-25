--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: contacts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.contacts (
    id INT NOT NULL,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    name VARCHAR(255),
    email VARCHAR(255), 
    phone_number VARCHAR(20),
    notes VARCHAR(255)
);

INSERT INTO public.contacts(id, name, email, phone_number, notes)
VALUES 
    (1, 'Finn', 'finn_the_human@gmail.com', '265-789-1234', 'The Human'),
    (2, 'Jake', 'jake_the_dog@gmail.com', '265-456-7865', 'The Dog'),
    (3, 'BMO', 'bmo@gmail.com', '256-154-1235', 'A Computer?'),
    (4, 'Princess Bubblegum', 'the_princess-bubblegum@yahoo.com', '456-123-7894', 'A Princess'),
    (5, 'Lumpy Space Princess', 'the_lumpy_space_princess@hotmail.com', '456-782-1258', 'A Princess'),
    (6, 'Flame Princess', 'the_flame_princess@yahoo.com', '456-129-6587', 'A Princess'),
    (7, 'Marceline', 'the_vampire_queen', '756-354-9587', 'The Vampire Queen')


-- Name: personal_details; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.personal_details (
    id INT NOT NULL,
    location VARCHAR(255),
    significant_other VARCHAR(255),
    pets VARCHAR(255), 
    notes VARCHAR(255),
    image_url VARCHAR(255)
);

INSERT INTO public.personal_details(id, location, notes)
VALUES 
    (1, 'Land of Ooo', 'Best Friends with Jake'),
    (2, 'Land of Ooo', 'Best Friends with Finn'),
    (3, 'Land of Ooo', 'Rescued by Finn and Jake from pirates in the Evil Forest'),
    (4, 'Candy Kingdom', 'Ruler of the Candy Kingdom'),
    (5, 'Evil Forest', 'Leader of the Pirates'),
    (6, 'Fire Kingdom', 'Ruler of the Fire Kingdom'),
    (7, 'Land of Ooo', 'Half-human and half-demon vampire')

-- Name: work_details; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.work_details (
    id INT NOT NULL,
    occupation VARCHAR(255),
    phone_number VARCHAR(20),
    location VARCHAR(255),
    link VARCHAR(255)
);

INSERT INTO public.work_details(id, occupation, location)
VALUES 
    (1, 'Hero Champion', 'Candy Kingdom'),
    (2, 'Hero', 'Candy Kingdom'),
    (3, 'Video Game Console', 'Jake and Finns House'),
    (4, 'Scientist, Inventor, Ruler', 'Candy Kingdom'),
    (5, 'Leader of Pirates', 'Evil Forest'),
    (6, 'Ruler', 'Fire Kingdom'),
    (7, 'Musician', 'Land of Ooo')


--
-- Name: contacts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
-- ** creates sequences for each table ID
--

CREATE SEQUENCE public.contacts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: contacts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.contacts_id_seq OWNED BY public.contacts.id;


--
-- Name: contacts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contacts ALTER COLUMN id SET DEFAULT nextval('public.contacts_id_seq'::regclass);


--
-- Name: contacts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.contacts_id_seq', 1, false);


--
-- Name: contacts contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

