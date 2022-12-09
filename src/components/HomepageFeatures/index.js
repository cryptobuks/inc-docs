import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'What Is Incentive (INC)',
    Svg: require('@site/static/img/info.svg').default,
    description: (
      <>
        Learn about the INC Token and the basics of survey protocol. 
        Survey Engine, Forwarder, Relayer and more.
      </>
    ),
    link: '/intro',
  },
  {
    title: 'Create Survey',
    Svg: require('@site/static/img/organization.svg').default,
    description: (
      <>
        Learn how to create a new survey, the parameters to take into account, the component <code>validators</code> and messages, and the order of the options.
      </>
    ),
    link: '/survey/create-survey',
  },
  {
    title: 'Take Survey',
    Svg: require('@site/static/img/people.svg').default,
    description: (
      <>
        Learn how to add a new participation with or without gas, when a coupon is needed to participate and when the reward is received.
      </>
    ),
    link: '/survey/take-survey',
  },
];

function handleClick(link) { // param is the argument you passed to the function
  return function (e) { // e is the event object that returned
    e.preventDefault();
    window.location.href=link;
  };
}

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4 pointer')} onClick={handleClick(link)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
