import React, { FC, useRef, useState } from 'react';
import style from './Home.module.scss';
import sprite from '../../assets/sprite.svg';
import Title from '../../components/UI/Title/Title';
import colors from '../../styles/vars.module.scss';
import Button from '../../components/UI/Button/Button';
import Footer from '../../components/Footer/Footer';

const Home: FC = () => {
  const [isAnim, setIsAnim] = useState<boolean>(false);
  const roomRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const scrollToRoom = () => {
    setIsAnim(true);
    const roomPos = roomRef.current.getBoundingClientRect().top + pageYOffset;
    window.scrollTo({
      top: roomPos,
      behavior: 'smooth',
    });
    setTimeout(() => {
      setIsAnim(false);
    }, 400);
  };
  return (
    <div className={style.home}>
      <div className={style.sidebar}>
        <div className={style.sidebar__links}>Home</div>
        <div className={style.sidebar__links}>Room</div>
        <div className={style.sidebar__links}>How to use</div>
        <div className={style.sidebar__links}>About</div>
      </div>
      <section className={`${style.welcome} ${style.section}`}>
        <div className={style.welcome__title_wrapper}>
          <div className={style.welcome__title}>Sobbi</div>
          <div className={style.welcome__subtitle}>
            Look at the interview differently with
          </div>
        </div>
        <div className={style.welcome__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <svg
          onClick={() => {
            scrollToRoom();
          }}
          className={
            isAnim
              ? `${style.welcome__arrow} ${style.welcome__arrow_active}`
              : style.welcome__arrow
          }
        >
          <use href={`${sprite}#arrow`} />
        </svg>
      </section>
      <section ref={roomRef} className={`${style.room} ${style.section}`}>
        <div className={style.room__wrapper}>
          <Title color={colors.wheat}>Room</Title>
          <div className={style.room__buttons}>
            <div className={style.room__button_wrapper}>
              <Button>Create</Button>
            </div>
            <div className={style.room__button_wrapper}>
              <Button>Enter</Button>
            </div>
          </div>
        </div>
      </section>
      <section className={`${style.instruction} ${style.section}`}>
        <div className={style.instruction__wrapper}>
          <Title color={colors.white}>How to use</Title>
          <p className={style.instruction__article}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className={style.instruction__article}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className={style.instruction__article}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className={style.instruction__article}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </section>
      <section className={`${style.about} ${style.section}`}>
        <div className={style.about__wrapper}>
          <Title color={colors.wheat}>About</Title>
          <div className={style.about__text}>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;