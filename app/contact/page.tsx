
import Navbar from '@/components/Navbar' 
import { Footer } from '@/components/Footer'

export default function Contact() { 
    return ( 
        <div className="bg-white text-gray-900">
        <Navbar />
            <form className="flex flex-col gap-6">
                <input placeholder="Name" className="border p-4 rounded-lg" />
                <input placeholder="Email" className="border p-4 rounded-lg" />
                <textarea placeholder="Message" className="border p-4 rounded-lg" />
                <button className="bg-blue-600 text-white p-4 rounded-lg">
                    Submit
                </button>
            </form>

        <Footer />
        </div>
    ) 
}



