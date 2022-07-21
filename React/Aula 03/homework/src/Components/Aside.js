export const Aside = ({url, user}) => {

  return (
    <aside className='aside'>
        <img src={url} alt="" />
        <p>{user}</p>
    </aside>
  )
}