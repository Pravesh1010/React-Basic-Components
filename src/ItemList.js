import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";


function ItemList({ items, handleClick, handleDelete }) {
    return (
        <ul> 
          {items.map((item) => (
            <li className="item" key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleClick(item.id)}
            />
            <label>{item.item}</label>
            <DeleteRoundedIcon onClick={() => handleDelete(item.id)} />
          </li>
          ))}
        </ul> 
        
    )
}

export default ItemList