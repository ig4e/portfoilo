import { RedirectType } from 'next/navigation';
import { redirect } from '@/lib/navigation';

function Posts() {
  redirect('/blog', RedirectType.replace);
}

export default Posts;
