'use client';

import { useEffect } from 'react';
import { api } from '@/trpc/react';

export function Track({ postId }: { postId: string }) {
  const postView = api.post.view.useMutation();

  useEffect(() => {
    postView.mutate({ id: postId });
  }, [postId]);

  return null;
}
