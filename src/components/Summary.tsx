import { FC, PropsWithChildren } from 'react'

type Props = { title: string, folded?: boolean } & PropsWithChildren

const Summary: FC<Props> = ({ title, folded = false, children }) => {
  console.log(children)

  return (
    <details className="story" open={!folded}>
      <summary>{title}</summary>
      {children}
    </details>
  )
}

export default Summary
