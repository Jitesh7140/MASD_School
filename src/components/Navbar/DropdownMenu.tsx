import { Link } from "react-router-dom"

interface Props {
  items: { title: string; path: string }[]
  close: () => void
}

const DropdownMenu = ({ items, close }: Props) => {
  return (
    <div className="absolute top-full left-0 bg-white shadow-xl w-60 border-t-2 border-yellow-400">
      {items.map((item) => (
        <Link
          key={item.title}
          to={item.path}
          onClick={close}
          className="block px-6 py-3 text-gray-700 hover:text-yellow-500 hover:bg-gray-50 transition-all"
        >
          {item.title}
        </Link>
      ))}
    </div>
  )
}

export default DropdownMenu
