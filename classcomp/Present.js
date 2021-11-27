

function List({children, ...props}) 
{
    return <ul>{children}</ul>
}

function ListItem({children, onClick, ...props}) 
{
    return(
        <li onClick={onClick}>
            {children}
        </li>
    ) 
}

export {ListItem, List}