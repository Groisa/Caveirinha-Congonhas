import React, { useEffect, useState } from 'react';

// import { Container } from './styles';
import styles from './Header.module.css';
import LogoCaveirinha from '../../assets/imgs/cjjf.png';
import Projeto from '../../assets/imgs/projeto.png';
import Projeto1 from '../../assets/imgs/projeto1.png';
import Projeto2 from '../../assets/imgs/projeto2.png';
import Projeto3 from '../../assets/imgs/projeto3.png';
import Projeto4 from '../../assets/imgs/projeto4.png';
import Image from 'next/image';
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import Carrossel from '../Carrossel';
const HomeStructure: React.FC = () => {
    const [width, setWidth] = useState<number>(0)
    useEffect(() => {
        if (typeof window !== undefined) {
            setWidth(window.screen.width)
        }
    }, [])
    const handleMensagem = () => {
        const phone = "5531971801542"
        const mensagem = "Olá, quero saber mais das aulas de Jiu Jitsu"
        const link = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(mensagem)}`;
        window.open(link)
    }
    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <div className={styles.containerAbout}>
                    <span>
                        <h1>𝓙𝓲𝓾 - 𝓙𝓲𝓽𝓼𝓾</h1>
                    </span>
                    <div>
                        <div>
                            <p>Inicio</p>
                            <p>Sobre</p>
                            <p>Projetos Sociais</p>
                        </div>
                        <div>
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
            <div className={styles.iframe}>
                <h2>Nosso Projeto Social</h2>
                <iframe
                    width="auto"
                    height="auto"
                    src="https://www.youtube.com/embed/TlL5L4CgI_U"
                    allow="autoplay"
                />
                <div className={styles.containerText}>
                    <div className={styles.containerInformation}>
                        {
                            width < 767 && (
                                <Image src={Projeto} alt='logo caveirinha' className={styles.image} />
                            )
                        }
                        <p>
                            Os projetos sociais são uma iniciativa que
                            tem ganhado cada vez mais espaço em nossa sociedade, especialmente quando se trata de crianças.
                            Por meio desses projetos,
                            muitas crianças têm a oportunidade de encontrar novas perspectivas e transformar suas vidas.
                        </p>
                        {
                            width > 767 && (
                                <Image src={Projeto} alt='logo caveirinha' className={styles.image} />
                            )
                        }

                    </div>
                    <br />
                    <div className={styles.containerInformation}>
                        <Image src={Projeto1} alt='logo caveirinha' className={styles.image} />
                        <p>
                            Ao entrar em um projeto social, as crianças são expostas a um ambiente
                            diferente do que estão acostumadas. Elas têm a chance de aprender novas habilidades,
                            fazer novos amigos e participar de atividades que vão além do que é oferecido em sua rotina diária.
                        </p>
                    </div>
                    <div className={styles.containerInformation}>
                        {
                            width < 767 && (
                                <Image src={Projeto2} alt='logo caveirinha' className={styles.image} />
                            )
                        }
                        <p>
                            Essas atividades podem ser esportivas, artísticas ou de caráter educacional, mas todas têm algo em
                            comum: elas ajudam a desenvolver a autoestima e a autoconfiança das crianças. Ao se engajar
                            em atividades que gostam, as crianças se sentem motivadas a explorar novos talentos e habilidades,
                            o que pode abrir portas para futuras oportunidades.
                        </p>
                        {
                            width > 767 && (
                                <Image src={Projeto2} alt='logo caveirinha' className={styles.image} />
                            )
                        }
                    </div>
                    <br />
                    <div className={styles.containerInformation}>
                        <Image src={Projeto3} alt='logo caveirinha' className={styles.image} />
                        <p>
                            Os projetos sociais também oferecem um
                            ambiente seguro e acolhedor para as crianças. Muitas vezes, essas crianças vivem em ambientes desfavoráveis,
                            com poucas oportunidades e acesso limitado a recursos. Ao entrar em um projeto social, elas se
                            sentem acolhidas e apoiadas,
                            o que pode fazer toda a diferença em sua autoestima e bem-estar emocional.
                        </p>
                    </div>
                    <br />
                    <div className={styles.containerInformation}>
                        {
                            width < 767 && (
                                <Image src={Projeto4} alt='logo caveirinha' className={styles.image} />
                            )
                        }
                        <p>
                            Além disso, esses projetos oferecem a chance de
                            criar laços fortes com outros jovens que
                            compartilham seus interesses. Essas amizades são fundamentais para o desenvolvimento
                            social e emocional das crianças, especialmente quando muitas delas vêm de famílias
                            desestruturadas.
                            <br />
                            <br />
                            Por fim, os projetos sociais também podem oferecer oportunidades educacionais e profissionais.
                            Ao se engajar em atividades que estimulam o aprendizado e o desenvolvimento de habilidades, as
                            crianças podem encontrar um caminho para o sucesso acadêmico e profissional.
                        </p>
                        {
                            width > 767 && (
                                <Image src={Projeto4} alt='logo caveirinha' className={styles.image} />
                            )
                        }
                    </div>
                </div>
            </div>
            <div className={styles.containerWhatss} title='Chamar no WhatsApp' onClick={() => handleMensagem()}>
                <FaWhatsapp size={width >767 ? 50 : 30 } color="#fff" />
            </div>
        </div >
    );
}

export default HomeStructure;
