const Container = ({children, message}) => {
  return <div className="w-full p-10 flex flex-row">
    <div className="w-1/2">
      {children}
    </div>
    <div className="w-1/2">
      <ul className="text-base leading-loose">
        {message.map(item => <li>{item}</li>)}
      </ul>
    </div>
  </div>
}

export default Container;