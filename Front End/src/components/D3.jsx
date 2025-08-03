import React, { useState } from 'react';

export default function D3() {
  const [searchTerm, setSearchTerm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    // 模拟搜索动作，实际项目中可替换为 API 调用
    console.log('Search:', searchTerm);
  };

  return (
    <div>
      <label>History of bids</label>
      <table>
        <tbody>
          <tr>
            <td>No bid at all</td>
          </tr>
        </tbody>
      </table>
      <h3>Find your items</h3>
      <form onSubmit={onSubmit}>
        <div className="search">
          <label>Find your item</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button type="submit">search</button>
      </form>
    </div>
  );
}