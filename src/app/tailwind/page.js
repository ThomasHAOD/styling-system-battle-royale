import React from 'react';

const Page = () => {
  const navigation = ['Home', 'Marketplace', 'Features', 'Team', 'Contact'];

  const navItems = navigation.map((item) => (
    <a href='/' key={item}>
      {item}
    </a>
  ));

  const users = [
    {
      name: 'Alice',
      role: '10x Dev',
      profileImg:
        'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png',
    },
    {
      name: 'Bob',
      role: 'Analyst Extrordinaire',
      profileImg:
        'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png',
    },
    {
      name: 'Charlie',
      role: 'UX Whizkid',
      profileImg:
        'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png',
    },
  ];

  const userComponents = users.map(({ name, role, profileImg }) => {
    return (
      <div key={name}>
        <img className='h-12' src={profileImg} />
        <h3>{name}</h3>
        <p>{role}</p>
        <div>
          <button>Add Friend</button>
          <button>Message</button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <nav>
        <div>{navItems}</div>
        <img
          className='h-8'
          src='https://app.jobvite.com/logo/3522_ANDLOGORGBONWHITE_1493728768591_Company.png'
        />
      </nav>
      <section>
        <h2>We invest in the world&apos;s potential</h2>
        <p>
          Here at AND we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
      </section>
      <div>{userComponents}</div>
    </div>
  );
};

export default Page;
