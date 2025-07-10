import { categories } from "../utils/bookCategory"

export default function Filter({handleCategory, selectedCategory}) {

    return (
        <div className="p-4">
        <h2 className="font-bold text-[20px]">Filter By Categories</h2>
         <div className="w-[160px] m-4 border">
            <select 
            className="px-3 w-[160px] py-2"
            value={selectedCategory || ""}
            onChange={e => handleCategory(e.target.value)}
            >
                <option value="">All Categories</option>
                {categories.map((cat, idx) => {
                    return <option className="w-[200px]" key={idx} value={cat.category}>{cat.category}</option>
                })}
            </select>
         </div>
        </div>
        
    )
}