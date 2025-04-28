import React from 'react';
import GuideCard from '../components/GuideCard';
import QABoard from '../components/QABoard';
import '../styles/Community.css';
import '../styles/Home.css';

const Community = () => {
  const guides = [
    {
      title: 'R.E.P.O Cheat Sheet Guides',
      image: 'https://th.bing.com/th/id/OIP.Kov0aEK8JB9oIhz5lZ9ddQHaLH?rs=1&pid=ImgDetMain', // เปลี่ยนเป็นรูปจริงได้
      description: 'This guide includes cheat sheets for four key aspects of R.E.P.O. It is designed to help both new and experienced players. All information is current as of April 15, 2025.',
      rating: 4,
      votes: 108,
    },
    {
      title: 'InZOI Completed Guide + Heal Zoe + Money Cheat',
      image: 'https://assets-prd.ignimgs.com/2024/08/19/inzoi-1724077347474.jpg',
      description: '',
      rating: 5,
      votes: 45,
    },
    {
        title: 'How to make more than 1 million every week?',
        image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/09/stardew-valley.jpg',
        description: 'In this guide, I will explain how to make a lot of money in Stardew valley! Earning money with ancient fruits. white theme.',
        rating: 5,
        votes: 80,
    }
  ];

  return (
    <div className="community-page">
      <h1 className="section-title">COMMUNITY</h1>
      <h2 className="sub-header">Guides</h2>
      <div className="guides-section">
        {guides.map((guide, index) => (
          <GuideCard key={index} guide={guide} />
        ))}
      </div>

      <h2 className="sub-header">Q&A</h2>
      <QABoard />
    </div>
  );
};

export default Community;
