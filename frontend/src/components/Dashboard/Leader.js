function Leader({name, corrects}) {
    return (
        <div className="quiz hoverable">
            <h3 className='qn'>{name}</h3>
            <div className='qt'>{corrects}</div>
        </div>
    )
}

export default Leader;