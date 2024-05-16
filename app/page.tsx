import type { FC } from 'react'
import React from 'react'
import { redirect } from 'next/navigation'
import type { IMainProps } from '@/app/components'
import Main from '@/app/components'

const App: FC<IMainProps> = ({
  params,
}: any) => {
  return (
    <Main params={params} />
  )
}

export default React.memo(App)

export function Home() {
  redirect('/login')
  return null
}
