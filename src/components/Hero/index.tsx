import React from 'react';

import {useTrail, animated} from 'react-spring';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

import HeroMain from './img/hero_main.svg';

import GithubIcon from '@site/static/icons/github.svg';
import JuejinIcon from '@site/static/icons/juejin.svg';
import RssIcon from '@site/static/icons/rss.svg';
import QqIcon from '@site/static/icons/qq.svg';
import WxIcon from '@site/static/icons/wx.svg';
import CsdnIcon from '@site/static/icons/csdn.svg';
import CloudMusicIcon from '@site/static/icons/cloud-music.svg';
import ZhihuIcon from '@site/static/icons/zhihu.svg';
import TwitterIcon from '@site/static/icons/twitter.svg';
import Button from '../Button';

import styles from './styles.module.css';
  // 手动添加mate标签
  const addMeta = (name, content) => {
    const meta = document.createElement('meta');
    meta.content = content;
    meta.name = name;
    document.getElementsByTagName('head')[0].appendChild(meta);
  };
 
  addMeta(
      'referrer',
      'no-referrer',
    );
function Hero() {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();

  // animation
  const animatedTexts = useTrail(5, {
    from: {opacity: 0, transform: 'translateY(3em)'},
    to: {opacity: 1, transform: 'translateY(0)'},
    config: {
      mass: 3,
      friction: 45,
      tension: 460,
    },
  });

  return (
    <animated.div className={styles.hero}>
      <div className={styles.bloghome__intro}>
        <animated.div style={animatedTexts[0]} className={styles.hero_text}>
          <Translate id="homepage.hero.greet">你好! 我是</Translate>
          <span className={styles.intro__name}>
            <Translate id="homepage.hero.name">Faith&Passion</Translate>
          </span>
        </animated.div>
        <animated.p style={animatedTexts[1]}>
          <Translate id="homepage.hero.text">
            {`长期写作最大的好处之一就是，写着写着，你的自我会变得越来越清晰。 你最终会明白自己是一个什么样的人，以及自己热爱的又是什么东西。——`}
          </Translate>
          {/* <br /> */}
          <Translate
            id="homepage.hero.need"
            values={{
              note: (
                <Link to="https://zlearning.netlify.app/me/why.html">
                  <Translate id="hompage.hero.text.note">《为什么要写博客》</Translate>
                </Link>
              ),
            }}>
            {`{note}`}
          </Translate>
        </animated.p>
        <SocialLinks animatedProps={animatedTexts[4]} />
        {
          <animated.div style={animatedTexts[2]}>
            <Button isLink href={'./about'}>
              <Translate id="hompage.hero.text.introduce">自我介绍</Translate>
            </Button>
          </animated.div>
        }
      </div>
      <HeroMainImage />
    </animated.div>
  );
}

export function SocialLinks({animatedProps, ...props}) {
  const {siteConfig} = useDocusaurusContext();
  const {themeConfig} = siteConfig;
  const socials = themeConfig.socials as {
    github: string;
    twitter: string;
    juejin: string;
    csdn: string;
    qq: string;
    wx: string;
    cloudmusic: string;
    zhihu: string;
    wechat: string;
  };

  return (
    <animated.div className={styles.social__links} style={animatedProps}>
      <a href={socials.github} target="_blank">
        <GithubIcon />
      </a>
      <a href={socials.juejin} target="_blank">
        <JuejinIcon />
      </a>
      <a href='https://jiapy.blog.csdn.net/' target='_blank'>
        <CsdnIcon />
      </a>
      <a href={socials.wechat} target='_blank'>
        <WxIcon />
      </a>

    </animated.div>
  );
}

function HeroMainImage() {
  return (
    <div className={styles.bloghome__image}>
      <HeroMain />
    </div>
  );
}

export default Hero;
