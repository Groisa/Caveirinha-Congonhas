import React from 'react';

// import { Container } from './styles';
import styles from './Header.module.css';
import LogoCaveirinha from '../../assets/imgs/cjjf.png';
import Image from 'next/image';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Carrossel from '../Carrossel';
const HomeStructure: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.containerAbout}>
                    <span>
                        <h1>𝓙𝓲𝓾-𝓙𝓲𝓽𝓼𝓾</h1>
                    </span>
                    <div>
                        <div>
                            <p>Inicio</p>
                            <p>Sobre</p>
                            <p>Projetos Sociais</p>
                        </div>
                        <div>
                            <p>Contato</p>
                            <FaInstagram color='#fff' size={25} />
                            <FaFacebook color='#fff' size={25} />
                        </div>
                    </div>
                </div>
                <Image src={LogoCaveirinha} alt='logo caveirinha' className={styles.logo} />

            </div>
            <div className={styles.containerInit}>
                <div>
                    <h2>
                        Nosso objetivo é formar pessoas de caráter, através dos valores de amizade,
                        companheirismo e disciplina que pregamos em nossos treinamentos de Jiu Jitsu.
                    </h2>
                    <h3>
                        Acreditamos que o esporte é uma ferramenta poderosa para desenvolver
                        não apenas habilidades físicas, mas também habilidades sociais e emocionais.
                        Na nossa academia, incentivamos nossos alunos a serem respeitosos, solidários e
                        comprometidos com o sucesso coletivo,
                        formando assim não apenas bons atletas, mas também cidadãos exemplares.</h3>
                </div>
            </div>
            <div className={styles.carroselDiv}>
                <Carrossel />
            </div>
        </div>
    );
}

export default HomeStructure;
