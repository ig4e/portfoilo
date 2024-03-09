import React, { type ReactNode } from 'react';
import { setPostId } from '@/server/context';
import type { PostPageProps } from './page';

function layout({ children, params }: PostPageProps & { children: ReactNode }) {
  setPostId(params.slug[0]);
  return <div>{children}</div>;
}

export default layout;
