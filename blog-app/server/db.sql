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
-- Name: posts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.posts (
    id SERIAL PRIMARY KEY,
    author VARCHAR(255) NOT NULL, 
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
-- Name: students_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;

--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);

--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


-- Insert Values into posts table
INSERT INTO public.posts(author, title, content) 
 VALUES 
    ('Mr. Whiskers','Meet the Cat of the Month, Oliver!', 'This months cat of the month is no other than, Oliver, aka known as lil liver! Oliver is 5 years old.'),
    ('Lil Liver','How to Train Your Cat','So you need some help to teach your new fluffy friend how to behave? Well, the first rule you need to know is that you need to grab their attention. So you need to spend a minimum of a million dollars a week to do just that. If you cant buy the most premium fillet of fish, then just give up.'),
    ('Midnight', 'How I tricked my owner into giving me more food', 'Its easy. Dont overthink it. Just be cute, cuddly, extra loving, and more! The extra cuddles can be a pain, but its worth the extra kibbles and food I get when I start meowing at the food bowl for more. If that doesnt work, just meow and follow them everywhere until they give it up!');

--
-- Name: comments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.comments (
    id SERIAL PRIMARY KEY,
    post_id INT NOT NULL, 
    author VARCHAR(255) NOT NULL, 
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES public.posts(id) ON DELETE CASCADE
);
 
--
-- Name: comments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

--
-- Name: comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.comments_id_seq OWNED BY public.comments.id;


--
-- Name: comments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comments ALTER COLUMN id SET DEFAULT nextval('public.comments_id_seq'::regclass);


-- Insert Values into comments table
INSERT INTO public.comments(post_id, author, content) 
 VALUES 
    (1, 'Lil Liver', 'Thank you so much for this recognition! I could not imagine there being a better Cat of the Month than I. Muahaha.'),
    (2, 'Mr. Whiskers', 'Excellent! Almost Brilliant Even! I must share this with my owner!'),
    (3, 'Lil Liver', 'How come this works for you but not for me, AND we share the same owner.. hmm');

--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR (255) NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


--
-- PostgreSQL database dump complete
--

