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
    email VARCHAR(255), 
    phone_number VARCHAR(20),
    notes VARCHAR(255)
);

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

-- Name: work_details; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.work_details (
    id INT NOT NULL,
    occupation VARCHAR(255),
    phone_number VARCHAR(20),
    location VARCHAR(255),
    link VARCHAR(255)
);

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

