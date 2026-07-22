import React from 'react';
import Footer from './Footer';
import Nav from './Nav';

const About = () => {
  return (
    <div className='page-container'>
        <Nav/>
        <div className='about-section'>
      <h1 className='about-title'>About FaithShelf</h1>
      <p className="about-intro">
        Discover timeless Christian books that encourage faith,
        deepen biblical understanding, and inspire spiritual growth.
    </p>
     <div className="about-card">
      <h3>Welcome to FaithShelf</h3>
      <p>FaithShelf is a digital library dedicated to helping readers discover timeless Christian books that inspire faith, encourage spiritual growth, and deepen the understanding of God's Word. Our collection brings together classic Christian literature, devotionals, Bible study resources, and books on prayer and Christian living all in one place.</p>
      <p>Whether you are beginning your journey of faith or have been walking with Christ for many years, FaithShelf aims to make it easier to explore books that have strengthened believers across generations.</p>
      </div>
      <div className="about-card">
      <h3>Our Mission</h3>
      <p>Our mission is to make discovering Christian literature simple and enjoyable. We believe that books have the power to encourage, teach, and inspire believers to grow closer to God through biblical truth and practical wisdom.</p>
      <p>FaithShelf exists to connect readers with resources that have stood the test of time and continue to impact lives around the world.</p>
      </div>
      <div className="about-card">
      <h3>What You'll Find</h3>
      <p>At FaithShelf, you can explore books in several categories, including:</p>
      <ul><li>Bible Study</li>
      <li>Prayer</li>
      <li>Devotionals</li>
      <li>Christian Classics</li>
      <li>Influential Christian Authors</li>
      </ul>
      <p>Each book includes a brief overview, information about its author, and where readers can learn more or access the work when legally available.</p>
      </div>
      <div className="about-card">
      <h3>Why FaithShelf?</h3>
      <p>Finding meaningful Christian books can sometimes be overwhelming. FaithShelf organizes trusted classics into a clean and easy-to-browse library, helping readers spend less time searching and more time reading.</p>
      <p>Our goal is to create a welcoming space where anyone can discover books that encourage spiritual growth, deepen biblical understanding, and strengthen their faith.</p>
      </div>
      <div className="about-card">
      <h3>A Note to Visitors</h3>
      <p>FaithShelf is designed to showcase Christian literature and connect readers with valuable resources. We respect the intellectual property rights of authors and publishers and encourage readers to access books through authorized and legally available sources.</p>
      </div>
      <div className="about-card">
      <h3>Closing</h3>
      <p><i>"Your word is a lamp to my feet and a light to my path."</i><strong> — Psalm 119:105</strong></p>
      <p>May every page you read lead you closer to the truth of God's Word and inspire you to live a life that honors Him.</p>
      </div>
    </div>
    <Footer/>
    </div>
    
  );
}

export default About;
