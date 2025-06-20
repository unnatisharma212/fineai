import { supabase } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

const handleSignOut = async () => {
  await supabase.auth.signOut();
  router.push('/');
}; 