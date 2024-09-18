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
-- Name: species; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.species (
    id integer NOT NULL,
    common_name varchar(255),
    scientific_name varchar(255),
    population_count varchar(255),
    conservation_status_code varchar(255),
    record_creation_timestamp timestamp(0) with time zone NOT NULL, 
);

INSERT INTO species(id, common_name, scientific_name, population_count, conservation_status_code, 
 record_creation_timestamp) 
 VALUES 
    (1, 'Bengal Tiger', 'panthera tigris tigris', 2500, 'EN', '2021-07-10');
    (2, 'Capybara', 'hydrochoerus hydrochaeris', 3560000, 'LC', '2022-08-15'),
    (3, 'Red Panda', 'ailurus fulgens', 5000, 'EN', '2019-07-10'),
    (4, 'Polar Bear', 'ursus maritimus', 25000, 'VU', '2018-10-10'),
    (5, 'Mountain Plover', 'charadrius montanus', 20000, 'NT', '2020-11-10'),
    (6, 'Hawksbill Turtle', 'eretmochelys imbricata', 8000, 'CE', '2020-06-16');

-- Name: Individuals; Type: TABLE; Schema: Public; Owner: -

CREATE TABLE public.individuals (
    id INT NOT NULL,
    nickname VARCHAR(255),
    species VARCHAR(255),
    record_creation_timestamp DATE, 
    is_healthy BOOLEAN NOT NULL
);

INSERT INTO individuals(id, nickname, species, record_creation_timestamp, is_healthy) 
 VALUES 
    (123, 'Benny', 'panthera tigris tigris', '2021-07-10', true),
    (234, 'Camden', 'hydrochoerus hydrochaeris', '2022-08-15', true),
    (345, 'Reggie', 'charadrius montanus', '2020-11-10', true);

-- Name: Sightings; Type: TABLE; Schema: Public; Owner: -

CREATE TABLE public.sightings (
    id INT NOT NULL,
    date_of_sighting DATE NOT NULL,
    individual_seen VARCHAR(255),
    location_of_sighting VARCHAR(255),
    is_healthy BOOLEAN NOT NULL,
    email VARCHAR(255)
);

INSERT INTO sightings(id, date_of_sighting, individual_seen, location_of_sighting, is_healthy, email) 
 VALUES 
    (1234, '2021-07-10', 'Benny', 'India', true, 'adamsmith@gmail.com'),
    (3456, '2020-11-10', 'Reggie', 'Northern Great Plains', false, 'sarahjones@yahoo.com'),
    (3457, '2021-10-25', 'Reggie', 'Northern Great Plains', true, 'sarahjones@yahoo.com'),
    (1235, '2022-05-21', 'Benny', 'India', true, 'adamsmith@gmail.com'),
    (2345, '2022-08-15', 'Camden', 'Columbia', false, 'monicanguyen@gmail.com'),
    (2346, '2023-04-27', 'Camden', 'Venezuela', true, 'monicanguyen@gmail.com');
    
--
-- Name: species_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.species_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: species_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.species_id_seq OWNED BY public.species.id;


--
-- Name: species id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.species ALTER COLUMN id SET DEFAULT nextval('public.species_id_seq'::regclass);


--
-- Data for Name: species; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.species (id, firstname, lastname, is_current) FROM stdin;
\.


--
-- Name: students_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.students_id_seq', 1, false);


--
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

