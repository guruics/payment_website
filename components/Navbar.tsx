
export default function Navbar() { return ( 

  <div className="hidden md:flex gap-8 text-gray-700 font-medium items-center">
    <a href="/" className="hover:text-blue-600">
      Home 
    </a>
    <a href="/platform" className="hover:text-blue-600">
      Platform
    </a>
    <a href="/solutions" className="hover:text-blue-600">
      Solutions
    </a>
    <a href="/developers" className="hover:text-blue-600">
      Developers
    </a>
 
    <a href="/contact" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
      Contact
    </a>
  </div>
  )
}