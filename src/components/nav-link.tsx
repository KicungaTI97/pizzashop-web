import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()

  // Converte props.to para string se for um objeto de localização
  const to = typeof props.to === 'string' ? props.to : props.to.pathname || ''

  // Compara se o pathname começa com o caminho de destino
  const isActive = pathname.startsWith(to)

  return (
    <Link
      data-current={isActive}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
      {...props}
    />
  )
}
