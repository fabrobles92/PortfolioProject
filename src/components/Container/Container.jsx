import './Container.css'

const Container = ({children}) => {
    return(
    <div className="container">
        <div className='layout'>
            {children}
        </div>
    </div>
  )    
  }

export default Container