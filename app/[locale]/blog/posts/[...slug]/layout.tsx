import React, { type ReactNode } from 'react';
import { setPostId } from '@/server/context';
import type { PostPageProps } from './page';

async function layout(props: PostPageProps & { children: ReactNode }) {
  const params = await props.params;

  const {
    children
  } = props;

  setPostId(params.slug[0]);
  return <div>{children}</div>;
}

export default layout;
