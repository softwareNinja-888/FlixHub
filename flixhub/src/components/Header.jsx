import { Category } from './Category'

import logo from '/logo.webp'
import cast from '/cast.webp'
import user from '/user.webp' 
import { useNavigate } from 'react-router'

export function Header({mainMenu = true}){
    const navigate = useNavigate()
    function Home(){
        navigate('/')
    }
    return (
        <div className="flex flex-col gap-10 py-7 px-3 mb-20">
            <div className="">
                <div className="flex justify-between ">
                    <div className="flex justify-center items-center gap-2" onClick={Home}>
                        <div className="text-3xl text-white font-poppins">FlixHub</div>
                        <img src={logo} alt="" className="w-5 h-6" />
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <img src={cast} alt="" className="w-5 h-6" />
                        <img src={user} alt="" className="w-5 h-6" />
                    </div>
                </div>
            </div>
            {mainMenu && (
                <div className="flex gap-3 justify-center items-center">
                    <Category name="Movies" />
                    <Category name="Series" />
                    <Category name="Latest" />
                </div>
            )}
        </div>
    )
}