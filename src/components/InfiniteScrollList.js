import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './Loader';

const InfiniteScrollList = () => {
  const [data, setData] = useState([]); 
  const [page, setPage] = useState(1); 
  const [loading, setLoading] = useState(false); 
  const [hasMore, setHasMore] = useState(true); 

  const fetchData = async () => {
    if (!hasMore) return;

    setLoading(true);
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
      const newData = response.data;

      setData((prev) => [...prev, ...newData]);
      if (newData.length === 0) setHasMore(false); 
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 50 && hasMore) {
      setPage((prev) => prev + 1); 
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore]);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
      {loading && <Loader />}
      {!hasMore && <p style={{ textAlign: 'center' }}>No more data to load</p>}
    </div>
  );
};

export default InfiniteScrollList;
