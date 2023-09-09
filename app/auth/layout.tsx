import { headers, cookies } from 'next/headers'
import SupabaseListener from '../components/supabase-listener'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '@/database.types'

import React from 'react'

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <>
      <SupabaseListener accessToken={session?.access_token} />
      {children}
    </>
  )
}

export default AuthLayout
