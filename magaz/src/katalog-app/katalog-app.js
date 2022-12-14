import './katalog.css'
import KatalogItem from '../katalog-item/katalog-item';



const Katalog = ({data, onShet}) => {
            const elements = data.map(item => {
                return (
                    <KatalogItem {...item} onShet={() => onShet()}/>
                )
            })
            return(
                <div className='grow'>
                    <div  className='content'>
                        <div className='content__lists'>
                        <a href='' ></a><a href='' ></a>
                        </div>
                        {elements}
                    </div>
                </div>
            )
        
}

export default Katalog;