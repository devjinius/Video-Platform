import React from 'react';
import Link from 'next/link';

export default () => (
  <div>
    Hello, from Next.js!<br/>
    <Link href="mypage">
      <a>링크입니다.</a>
    </Link>
  </div>
);