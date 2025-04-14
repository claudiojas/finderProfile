import bollBlue from '../assets/boll_blue.svg'
import retanBgIll from '../assets/retan_bg_ilustration.svg'
import bollBluelft from '../assets/boll_blue_lft.svg'


export function Bg () {
    return(
       <>
         <img src={bollBlue} alt="" className={`absolute right-0 top-0 -z-10`}/>
         <img src={retanBgIll} alt="" className={`absolute left-60 top-20 -z-10`}/>
         <img src={bollBluelft} alt="" className={`absolute left-0 bottom-0 -z-10`}/>
       </>
    )
}