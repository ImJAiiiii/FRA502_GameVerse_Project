import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MarkdownIt from 'markdown-it';
import '../styles/GuidePreviewPage.css';

const mdParser = new MarkdownIt();

const GuidePreviewPage = () => {
  const location = useLocation();
  const [content, setContent] = useState('');

  useEffect(() => {
    // ดึงจาก sessionStorage
    const data = sessionStorage.getItem('guideFormData');
    if (data) {
      const parsed = JSON.parse(data);
      setContent(parsed.content || '');
    } else if (location.state?.content) {
      // กรณีที่ navigate มาก็รับ content
      setContent(location.state.content);
    }
  }, [location.state]);

  return (
    <div className="guide-preview-page">
      <div className="guide-container">
        <div
          className="guide-markdown"
          dangerouslySetInnerHTML={{ __html: mdParser.render(content) }}
        />
      </div>
    </div>
  );
};

export default GuidePreviewPage;
