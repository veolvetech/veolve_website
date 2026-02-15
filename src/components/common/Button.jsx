export default function Button({ children, variant = 'primary' }) {
  return (
    <button className={variant === 'primary' ? 'btn-primary' : 'btn-secondary'}>
      {children}
    </button>
  )
}
