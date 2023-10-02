
import moment from 'moment';
import logo from '../../../../assets/logo.png'


export default function Header() {


  return (
    <div className='text-center mt-5'>
        <img className='mx-auto' src={logo}/>
        <p> Journalism Without Fear or Favour </p>
        <time> {moment().format("dddd, MMMM D, YYYY")}  </time>
    </div>
  )
}
