import { useState } from "react"
import { Star } from "lucide-react"

const Product = ({ title, tags, src, description, price, rating }) => {
    const [showDetails, setShowDetails] = useState(false)

    return (
        <div className="bg-gradient-to-tr from-white via-gray-50 to-white rounded-lg shadow-md overflow-hidden w-full max-w-xs transition-transform hover:scale-[1.02] hover:shadow-lg">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={src || "/placeholder.svg"}
                    alt={title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg?height=200&width=300"
                    }}
                />
                {tags && tags.length > 0 && (
                    <div className="absolute top-2 left-2">
                        <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">{tags[0]}</span>
                    </div>
                )}
            </div>

            <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 truncate">{title}</h3>

                <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={16}
                            className={`${i < Math.round(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({rating})</span>
                </div>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>

                <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">${price}</span>
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer px-3 py-1.5 rounded-md text-sm font-medium transition"
                        onClick={() => setShowDetails((prev) => !prev)}
                    >
                        {showDetails ? "Hide" : "Add Node"}
                    </button>
                </div>

                {/* Toggled Info */}
                {showDetails && (
                    <div className="mt-3 bg-blue-50 text-blue-800 text-sm px-3 py-2 rounded shadow-inner">
                        <p><strong>Title:</strong> {title}</p>
                        <p><strong>Price:</strong> ${price}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Product
